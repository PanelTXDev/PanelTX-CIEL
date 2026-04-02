# Section CIEL

Site de présentation du Bac Pro CIEL, CS Cyber et BTS CIEL.

## Installation

```bash
npm install
npm run dev
```

## Déploiement sur GitHub Pages

Le site est configuré pour être déployé automatiquement sur GitHub Pages.

### Configuration requise

1. **Activer GitHub Pages** dans les paramètres du repository :
   - Aller dans `Settings` → `Pages`
   - Sélectionner `GitHub Actions` comme source

2. **Le déploiement se fait automatiquement** à chaque push sur la branche `main` ou `master`

### URL du site

Une fois déployé, le site sera accessible à l'adresse :
```
https://paneltxdev.github.io/PanelTX-CIEL/
```

### Fonctionnalités GitHub Pages

- ✅ **CTF intégré** : Accessible via les boutons "🛡️ CTF" ou le menu
- ✅ **Routes SPA** : Navigation correcte avec rafraîchissement de page
- ✅ **Assets optimisés** : Images et fichiers servis depuis le CDN GitHub
- ✅ **SEO friendly** : Métadonnées et structure optimisée

### Développement local

Pour tester la configuration GitHub Pages en local :

```bash
# Build en mode production
npm run build

# Preview du build
npm run preview
```