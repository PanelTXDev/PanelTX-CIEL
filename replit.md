# Section CIEL — Site Vitrine

## Description
Site vitrine de la section CIEL du lycée Jean Moulin à Béziers.
Formations : Bac Pro CIEL, CS Cybersécurité, BTS CIEL en Alternance.

## Stack
- React 18 + TypeScript
- Vite 5
- Tailwind CSS
- Lucide React (icônes)

## Structure
```
src/
  main.tsx              # Point d'entrée React
  index.css             # Styles globaux Tailwind
  App.tsx               # Composant racine
  components/
    Header.tsx          # Barre de navigation
    Hero.tsx            # Section hero (accueil)
    Programs.tsx        # Formations + thématiques abordées
    WhyChooseUs.tsx     # Pourquoi nous choisir
    News.tsx            # Actualités
    Contact.tsx         # Coordonnées du lycée
    Footer.tsx          # Pied de page
    Chatbot.tsx         # Assistant IA flottant (API Netlify)
```

## Démarrage
```bash
npm install
npm run dev     # http://localhost:5000
npm run build   # génère dist/
```

## Chatbot
Utilise l'API : `https://serene-frangipane-78a2c5.netlify.app/.netlify/functions/google`
- Historique de conversation maintenu en mémoire (session)
- Timeout 30s, gestion d'erreurs, bouton Réessayer

## Déploiement
- **GitHub Pages** : push sur `main` → workflow `.github/workflows/deploy.yml`
- **Netlify** : auto-configuré via `netlify.toml`
- **FTP** : uploader le contenu de `dist/`

## Replit
- Dev server sur port 5000 (requis pour le webview)
- Workflow : "Start application" → `npm run dev`
