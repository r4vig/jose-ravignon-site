# Site vitrine — José Ravignon

Version web de la plaquette « Développement web & applications sur mesure ».
Site statique : HTML + CSS, sans framework ni étape de build.

## Contenu

```
index.html            la page (toutes les sections)
assets/style.css      les styles
assets/fonts/         polices Manrope et JetBrains Mono (licence SIL OFL 1.1), hébergées localement
favicon.svg           icône d'onglet
```

## Voir le site en local

Ouvrir `index.html` dans le navigateur, ou lancer un petit serveur :

```
npx serve .
```

## Mise en ligne sur Vercel (gratuit)

- Framework : **Other**
- Build command : aucune
- Output directory : la racine du dossier (`.`)

Chaque `git push` sur la branche principale redéploie le site automatiquement
une fois le projet Vercel relié au dépôt GitHub.

## Après la mise en ligne

1. Ajouter dans `<head>` l'adresse définitive du site :
   `<link rel="canonical" href="https://ADRESSE/">` et `<meta property="og:url" content="https://ADRESSE/">`
2. Générer le QR code de la carte de visite vers cette même adresse.
