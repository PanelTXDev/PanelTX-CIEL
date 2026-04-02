import { Network, ServerCog, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Network,
    label: 'Réseaux',
    items: ['Routage & commutation', 'NAT/PAT · ARP · ACL', 'Câblage & Packet Tracer'],
  },
  {
    icon: ServerCog,
    label: 'Systèmes & Services',
    items: ['Serveur web & Windows 2012', 'Administration Linux', 'Pfsense & pare-feu'],
  },
  {
    icon: ShieldCheck,
    label: 'Cybersécurité',
    items: ['Outils d\'analyse & tests', 'Sécurisation des SI', 'Détection des menaces'],
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">

        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-300 uppercase mb-4 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10">
            Bac Pro · CS Cyber · BTS en Alternance
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 tracking-tight">
            Section <span className="text-blue-300">CIEL</span> — Cybersécurité,<br className="hidden sm:block" /> Informatique &amp; Réseaux
          </h1>
          <p className="text-base sm:text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Des formations professionnelles et technologiques modernes, ancrées dans les réalités du terrain.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Découvrir nos formations
            </button>
            <button
              onClick={() => window.open('/public/ctf.html', '_blank')}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              🛡️ CTF
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/25 hover:border-white/50 text-white/90 hover:text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Nous contacter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map(({ icon: Icon, label, items }) => (
            <div
              key={label}
              className="bg-white/5 hover:bg-white/8 border border-white/10 rounded-xl p-5 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-500/20 rounded-lg p-2">
                  <Icon className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="font-semibold text-white">{label}</h3>
              </div>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="text-sm text-blue-100/70 flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
