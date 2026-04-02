import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Bot, ShieldAlert, Clock } from "lucide-react";

const API_URL = "https://api-ciel.onrender.com/api/chat";

const SUGGESTIONS = [
  "C'est quoi la cybersécurité ?",
  "Quels métiers après un Bac CIEL ?",
  "C'est quoi un pare-feu ?",
  "Comment protéger mes mots de passe ?",
  "C'est quoi le CS Cybersécurité ?",
];

// ─── Anti-Spam Configuration ──────────────────────────────────────────────────
const SPAM = {
  WINDOW_MS: 60_000,           // Fenêtre glissante de 60 secondes
  MAX_PER_WINDOW: 3,           // Maximum 3 messages par fenêtre
  MIN_DELAY_MS: 2_500,         // Délai minimum de 2.5s entre deux messages
  BLOCK_DURATION_MS: 90_000,   // Blocage de 90s après dépassement
  DUPLICATE_WINDOW_MS: 15_000, // Pas de doublon dans les 15 dernières secondes
  MAX_LENGTH: 150,
  MIN_LENGTH: 2,
} as const;

const SPAM_KEY = "ciel_spam_state";

// ─── Types ────────────────────────────────────────────────────────────────────
interface SpamState {
  timestamps: number[];
  blockedUntil: number | null;
  lastText: string;
  lastSentAt: number;
}

type SpamViolation =
  | { kind: "blocked"; secondsLeft: number }
  | { kind: "too_fast"; secondsLeft: number }
  | { kind: "duplicate" }
  | { kind: "too_short" }
  | { kind: "too_long" }
  | { kind: "limit"; secondsLeft: number };

type SpamResult = { ok: true } | { ok: false; violation: SpamViolation };

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

// ─── Storage helpers (pure, no side-effects) ──────────────────────────────────
function readState(): SpamState {
  try {
    const raw = localStorage.getItem(SPAM_KEY);
    if (raw) return JSON.parse(raw) as SpamState;
  } catch {}
  return { timestamps: [], blockedUntil: null, lastText: "", lastSentAt: 0 };
}

function writeState(state: SpamState): void {
  try {
    localStorage.setItem(SPAM_KEY, JSON.stringify(state));
  } catch {}
}

// ─── Pure spam check ──────────────────────────────────────────────────────────
function checkSpam(text: string): SpamResult {
  const now = Date.now();
  const s = readState();
  const t = text.trim();

  if (s.blockedUntil && now < s.blockedUntil) {
    return { ok: false, violation: { kind: "blocked", secondsLeft: Math.ceil((s.blockedUntil - now) / 1000) } };
  }
  if (t.length < SPAM.MIN_LENGTH) {
    return { ok: false, violation: { kind: "too_short" } };
  }
  if (t.length > SPAM.MAX_LENGTH) {
    return { ok: false, violation: { kind: "too_long" } };
  }
  if (s.lastSentAt > 0 && now - s.lastSentAt < SPAM.MIN_DELAY_MS) {
    return { ok: false, violation: { kind: "too_fast", secondsLeft: Math.ceil((s.lastSentAt + SPAM.MIN_DELAY_MS - now) / 1000) } };
  }
  if (s.lastText === t && s.lastSentAt > 0 && now - s.lastSentAt < SPAM.DUPLICATE_WINDOW_MS) {
    return { ok: false, violation: { kind: "duplicate" } };
  }

  const windowStart = now - SPAM.WINDOW_MS;
  const windowCount = s.timestamps.filter((ts) => ts > windowStart).length;
  if (windowCount >= SPAM.MAX_PER_WINDOW) {
    const oldest = s.timestamps.filter((ts) => ts > windowStart).sort()[0];
    const secondsLeft = Math.ceil((oldest + SPAM.WINDOW_MS - now) / 1000);
    return { ok: false, violation: { kind: "limit", secondsLeft: Math.max(1, secondsLeft) } };
  }

  return { ok: true };
}

// ─── Record a successful send ─────────────────────────────────────────────────
function recordSend(text: string): void {
  const now = Date.now();
  const s = readState();
  const windowStart = now - SPAM.WINDOW_MS;
  const timestamps = [...s.timestamps.filter((ts) => ts > windowStart), now];
  const hitLimit = timestamps.length >= SPAM.MAX_PER_WINDOW;
  writeState({
    timestamps,
    blockedUntil: hitLimit ? now + SPAM.BLOCK_DURATION_MS : s.blockedUntil,
    lastText: text.trim(),
    lastSentAt: now,
  });
}

// ─── Readable violation message ───────────────────────────────────────────────
function violationMessage(v: SpamViolation): string {
  switch (v.kind) {
    case "blocked":   return `Accès bloqué. Réessaie dans ${v.secondsLeft}s.`;
    case "too_fast":  return `Attends encore ${v.secondsLeft}s avant d'envoyer.`;
    case "duplicate": return "Tu viens d'envoyer ce message.";
    case "too_short": return `Message trop court (min ${SPAM.MIN_LENGTH} caractères).`;
    case "too_long":  return `Message trop long (max ${SPAM.MAX_LENGTH} caractères).`;
    case "limit":     return `Limite atteinte. Réessaie dans ${v.secondsLeft}s.`;
  }
}

// ─── Hook: Anti-Spam ──────────────────────────────────────────────────────────
function useAntiSpam() {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (countdown <= 0) return;
    const id = setInterval(() =>
      setCountdown((c) => { if (c <= 1) { clearInterval(id); return 0; } return c - 1; }), 1000);
    return () => clearInterval(id);
  }, [countdown]);

  const check = useCallback((text: string): SpamResult => {
    const result = checkSpam(text);
    if (!result.ok) {
      const v = result.violation;
      if (v.kind === "blocked" || v.kind === "too_fast" || v.kind === "limit") {
        setCountdown(v.secondsLeft);
      }
    }
    return result;
  }, []);

  const record = useCallback((text: string) => { recordSend(text); }, []);

  function getStatus() {
    const now = Date.now();
    const s = readState();
    const windowStart = now - SPAM.WINDOW_MS;
    const used = s.timestamps.filter((ts) => ts > windowStart).length;
    const blocked = !!s.blockedUntil && now < s.blockedUntil;
    return { used, remaining: Math.max(0, SPAM.MAX_PER_WINDOW - used), blocked };
  }

  return { check, record, countdown, getStatus };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function cleanResponse(text: string): string {
  return text
    .replace(/\[\d+\]/g, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/#{1,3}\s*/g, "")
    .replace(/\s+/g, " ")
    .replace(/\n\s*\n\s*\n/g, "\n\n")
    .trim();
}

async function askAI(message: string): Promise<string> {
  const maxRetries = 3;
  let lastError: string = "";

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) return "⏳ Trop de requêtes côté serveur. Réessaie dans quelques secondes.";
        if (res.status === 500) return "🔒 Erreur serveur. Contacte l'administrateur.";
        lastError = `Erreur ${res.status} : service indisponible.`;
        continue; // Retry
      }
      if (data.success && data.content) return cleanResponse(data.content);
      return "Je n'ai pas pu générer une réponse. Peux-tu reformuler ?";
    } catch (error) {
      lastError = "🌐 Serveur injoignable. Vérifie que l'API est démarrée.";
      // Wait before retry (exponential backoff)
      if (attempt < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
      }
    }
  }

  // Fallback response after all retries
  return lastError || "Désolé, je rencontre des difficultés techniques. Essaie de me contacter directement via le formulaire de contact du site.";
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: 0,
    isUser: false,
    text: "👋 Bonjour ! Je suis l'assistant de la section CIEL du lycée Jean Moulin Béziers.\n\nPose-moi tes questions sur :\n• La cybersécurité\n• L'informatique et les réseaux\n• Les formations (Bac Pro, BTS, CS)\n• Les débouchés et métiers\n\nComment puis-je t'aider ?",
  }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [violation, setViolation] = useState<SpamViolation | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { check, record, countdown, getStatus } = useAntiSpam();

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 100); }, [open]);
  useEffect(() => {
    if (violation) {
      const id = setTimeout(() => setViolation(null), 4000);
      return () => clearTimeout(id);
    }
  }, [violation]);

  async function send(text: string) {
    const msg = text.trim();
    if (!msg || loading) return;

    const result = check(msg);
    if (!result.ok) {
      setViolation(result.violation);
      inputRef.current?.animate([
        { transform: "translateX(0)" }, { transform: "translateX(-6px)" },
        { transform: "translateX(6px)" }, { transform: "translateX(0)" },
      ], { duration: 300, easing: "ease-in-out" });
      return;
    }

    setViolation(null);
    setMessages((prev) => [...prev, { id: Date.now(), text: msg, isUser: true }]);
    setInput("");
    setLoading(true);
    record(msg);

    const reply = await askAI(msg);
    setMessages((prev) => [...prev, { id: Date.now() + 1, text: reply, isUser: false }]);
    setLoading(false);
  }

  function formatText(text: string) {
    return text.split("\n").map((line, i, arr) => (
      <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
    ));
  }

  const { used, remaining, blocked } = getStatus();
  const charsLeft = SPAM.MAX_LENGTH - input.length;
  const isInputBlocked = blocked || countdown > 0;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[400px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden" style={{ height: "580px" }}>

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <Bot className="h-5 w-5 text-white" />
              <div>
                <p className="text-white text-sm font-semibold">Assistant CIEL</p>
                <p className="text-blue-200 text-xs">Bac Pro · BTS · CS Cybersécurité</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.isUser ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  m.isUser
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm"
                }`}>
                  {m.isUser ? m.text : formatText(m.text)}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white shadow-sm border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    {[0, 0.15, 0.3].map((delay, i) => (
                      <span key={i} className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: `${delay}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {messages.length === 1 && !loading && (
            <div className="px-3 py-2 bg-white border-t border-gray-100 flex flex-wrap gap-1.5 flex-shrink-0">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  disabled={isInputBlocked}
                  className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300 rounded-full transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input area */}
          <div className="px-3 pt-2 pb-3 bg-white border-t border-gray-100 flex-shrink-0 space-y-2">

            {/* Anti-spam status bar */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: SPAM.MAX_PER_WINDOW }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i < used
                        ? blocked ? "w-3 bg-red-400" : "w-3 bg-blue-400"
                        : "w-3 bg-gray-200"
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-400 ml-1">
                  {blocked ? "bloqué" : `${remaining} restant${remaining > 1 ? "s" : ""}`}
                </span>
              </div>
              {input.length > 0 && (
                <span className={`text-xs tabular-nums ${
                  charsLeft < 30 ? (charsLeft < 10 ? "text-red-500 font-semibold" : "text-amber-500") : "text-gray-400"
                }`}>
                  {charsLeft}
                </span>
              )}
            </div>

            {/* Violation banner */}
            {violation && (
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium animate-fade-in ${
                violation.kind === "blocked" || violation.kind === "limit"
                  ? "bg-red-50 border border-red-200 text-red-700"
                  : "bg-amber-50 border border-amber-200 text-amber-700"
              }`}>
                {violation.kind === "blocked" || violation.kind === "limit"
                  ? <ShieldAlert className="h-3.5 w-3.5 flex-shrink-0" />
                  : <Clock className="h-3.5 w-3.5 flex-shrink-0" />
                }
                <span>{violationMessage(violation)}</span>
                {countdown > 0 && (
                  <span className="ml-auto font-mono font-bold">{countdown}s</span>
                )}
              </div>
            )}

            {/* Blocked overlay state */}
            {isInputBlocked && !violation && (
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium bg-red-50 border border-red-200 text-red-700">
                <ShieldAlert className="h-3.5 w-3.5 flex-shrink-0" />
                <span>Accès temporairement restreint.</span>
                {countdown > 0 && <span className="ml-auto font-mono font-bold">{countdown}s</span>}
              </div>
            )}

            {/* Input row */}
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => {
                  if (e.target.value.length <= SPAM.MAX_LENGTH) setInput(e.target.value);
                }}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send(input)}
                disabled={loading || isInputBlocked}
                placeholder={isInputBlocked ? `Patiente ${countdown}s…` : "Pose ta question…"}
                className={`flex-1 text-sm border rounded-full px-4 py-2.5 outline-none transition ${
                  isInputBlocked
                    ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-50 border-gray-200 focus:border-blue-400 focus:bg-white"
                }`}
              />
              <button
                onClick={() => send(input)}
                disabled={loading || !input.trim() || isInputBlocked}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-full p-2.5 transition flex-shrink-0"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all p-3.5 flex items-center gap-2"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        {!open && <span className="text-sm font-medium">Assistant CIEL</span>}
      </button>

      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
      `}</style>
    </div>
  );
}
