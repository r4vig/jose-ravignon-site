---
name: José Ravignon — site vitrine
description: Un éditeur de code de nuit, un signal ambre, et du français simple pour des clients qui ne codent pas.
colors:
  night: "#1A1C26"
  night-deep: "#13141C"
  night-abyss: "#0E0F15"
  night-line: "#2A2D3B"
  night-raise: "#222532"
  on-night: "#E4E6F0"
  on-night-muted: "#B8BCD0"
  on-night-faint: "#8B90AA"
  amber: "#F5C28B"
  amber-hi: "#F8D3AA"
  amber-ink: "#8A4B10"
  teal: "#8BD5CA"
  teal-ink: "#1F7A6E"
  teal-wash: "#E2F3F0"
  purple: "#C6A0F6"
  pink: "#F28FAD"
  paper: "#FFFFFF"
  paper-soft: "#F3F3F7"
  rule: "#DCDEE6"
  ink: "#1A1C26"
  ink-muted: "#4A4F63"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(44px, 7.6vw, 104px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(32px, 4.6vw, 54px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(21px, 2.2vw, 26px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  sm: "6px"
  md: "10px"
  lg: "12px"
  xl: "16px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "28px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.night}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.amber-hi}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-night}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "52px"
  editor-tab:
    backgroundColor: "{colors.night-abyss}"
    textColor: "{colors.on-night-faint}"
    height: "44px"
    padding: "0 18px"
  editor-tab-active:
    backgroundColor: "{colors.night-deep}"
    textColor: "{colors.on-night}"
  tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "7px 15px"
---

# Design System: José Ravignon — site vitrine

## Overview

**Creative North Star: "L'atelier ouvert"**

Le site est l'éditeur de José : on voit un projet s'écrire puis prendre forme, au lieu de lire une liste de services. L'univers est celui d'un éditeur de code de nuit (onglets, numéros de ligne, coloration syntaxique, barre d'état), mais il ne sert jamais de barrière : tout le texte reste en français simple, adressé à des commerçants, artisans et PME qui ne codent pas. Le code est un décor et une preuve de savoir-faire, pas un message.

La page alterne des nappes sombres (hero, contact) et des nappes claires (le reste), avec un seul bandeau ambre pleine largeur pour le principe. Les titres sont très grands et serrés, les contenus aérés, sans cartes empilées : des lignes filetées, une grille de 1 px, un terminal, un graphe de commits.

**Key Characteristics:**
- Nuit bleutée, signal ambre rare, trois couleurs de syntaxe pour le décor.
- Titrage Manrope 800 très serré ; mono réservé au code et aux noms de fonctions.
- Maquettes dessinées en CSS (aucune photo), toujours étiquetées « illustratif ».
- Mouvement rare et utile : l'éditeur réécrit le projet, le reste reste calme.

## Colors

Une palette « thème sombre d'éditeur » : un fond nuit, un ambre qui désigne l'action, et trois teintes de syntaxe qui n'apparaissent que comme décor.

### Primary
- **Ambre braise** (#F5C28B) : le seul signal d'action (boutons principaux, mot-clé du titre, barre d'état, onglet actif). Survol : **Ambre clair** (#F8D3AA).
- **Ambre brûlé** (#8A4B10) : texte sur fond ambre pâle (pastille « projet en cours »).

### Secondary
- **Sarcelle de syntaxe** (#8BD5CA) sur fond sombre, **Sarcelle profonde** (#1F7A6E) sur fond clair : étiquettes de fonctions, coches, numéros d'étapes. **Voile sarcelle** (#E2F3F0) pour les fonds d'icônes.

### Tertiary
- **Violet** (#C6A0F6) et **Rose** (#F28FAD) : uniquement dans le code décoratif et les maquettes (mots-clés, valeurs). Jamais sur du texte de lecture.

### Neutral
- **Nuit** (#1A1C26), **Nuit profonde** (#13141C), **Abysse** (#0E0F15), **Trait nuit** (#2A2D3B) : fonds et filets sombres.
- **Papier** (#FFFFFF) et **Papier doux** (#F3F3F7), filet **#DCDEE6** : nappes claires.
- **Encre** (#1A1C26) et **Encre atténuée** (#4A4F63) pour le texte clair ; **#E4E6F0**, **#B8BCD0** et **#8B90AA** pour le texte sur nuit.

### Named Rules
**The One Signal Rule.** L'ambre désigne l'action et le mot-clé de la page ; rien d'autre n'est ambre à part la barre d'état et le bandeau du principe.
**The Decor Colors Rule.** Violet, rose et sarcelle de syntaxe habillent le code et les maquettes, jamais un paragraphe.

## Typography

**Display / Body Font:** Manrope (system-ui en secours), hébergée localement.
**Label / Mono Font:** JetBrains Mono, hébergée localement.

**Character:** une sans-serif géométrique et chaleureuse, très grasse et serrée en titre, associée à une mono qui ne sert que pour ce qui est du code ou ressemble à du code.

### Hierarchy
- **Display** (800, clamp(44px, 7.6vw, 104px), 0.98, -0.04em) : le titre du hero, une seule fois. Largeur max 13ch.
- **Headline** (800, clamp(32px, 4.6vw, 54px), 1.1, -0.03em) : titres de section, max 16ch.
- **Title** (800, clamp(21px, 2.2vw, 26px), 1.1) : lignes, offres, projets.
- **Body** (400, 17px, 1.6) : paragraphes, mesure max 62ch ; texte d'introduction 18,5px.
- **Label** (JetBrains Mono, 13px) : noms de fonctions, onglets, barre d'état.

### Named Rules
**The Code-Only Mono Rule.** La mono est réservée au code, aux onglets d'éditeur, à la barre d'état et aux noms de fonctions des offres. Les titres et les phrases ne sont jamais en mono.

## Layout

Un conteneur de 1 180 px (gouttières de 28 px). Les sections respirent : 120 px de padding vertical (72 px sur mobile). Le hero pose le titre pleine largeur, puis une grille 5/7 : texte et boutons à gauche, éditeur chevauché par l'aperçu à droite. Les sections « Approche » et « Questions » utilisent un titre collant à gauche (5/12) et le contenu à droite. Les autres sections sont en une colonne avec des grilles de 2 à 3 colonnes.

Sous 900 px, la barre d'onglets disparaît et le bouton devient « Appeler » (lien `tel:`). Sous 960 px, le hero passe en une colonne. Sous 720 px, toutes les grilles passent en une colonne.

### Named Rules
**The Phone First Rule.** Sur mobile, l'action principale est un appel direct, présente dans l'en-tête, sous les boutons du hero et dans le contact.

## Elevation & Depth

Le système est plat par défaut : les nappes se distinguent par la couleur, pas par l'ombre. Deux ombres seulement, toutes deux avec décalage et flou : une ombre profonde pour les fenêtres sur fond sombre (éditeur, aperçu), et une ombre douce pour les maquettes sur fond clair.

### Shadow Vocabulary
- **Fenêtre sombre** (`0 2px 6px rgba(0,0,0,.25), 0 32px 64px -24px rgba(0,0,0,.65)`) : éditeur et aperçu du hero.
- **Fenêtre claire** (`0 1px 2px rgba(14,15,21,.06), 0 12px 32px -12px rgba(14,15,21,.18)`) : maquettes de projets, terminal, survol d'un projet.

### Named Rules
**The No Halo Rule.** Pas de lueur colorée à décalage nul ; l'ombre se lit comme un objet posé, jamais comme un néon.

## Shapes

Des angles doux et cohérents : 6 px pour les petits éléments, 10 px pour les boutons, 12 px pour les fenêtres et encadrés, 16 px pour les grands blocs (offres, tableau, terminal, projets). Les étiquettes sont des pilules. Les offres forment un bloc de 16 px dont les séparations sont des filets de 1 px, pas des cartes séparées.

## Components

### Buttons
- **Shape:** coins doux (10 px), hauteur 52 px (44 px dans l'en-tête).
- **Primary:** fond ambre, texte nuit, flèche qui glisse de 3 px au survol, enfoncement à 97 %.
- **Ghost:** filet #3A3E50, texte clair, fond légèrement éclairci au survol.

### Editor (signature component)
Une fenêtre sombre avec onglets (44 px), numéros de ligne en marge et coloration syntaxique. Dans le hero, les trois onglets réécrivent le code en le « tapant » et fondent l'aperçu correspondant ; la lecture automatique s'arrête au survol ou au focus et respecte `prefers-reduced-motion`.

### Navigation
Un en-tête collant sombre à onglets de fichier : un carré de couleur par onglet, un filet ambre qui se déploie depuis la gauche sur l'onglet de la section en cours. La barre d'état en bas affiche le nom du fichier de la section visible.

### Offers, Rows, Terminal
Les offres sont une grille filetée à deux colonnes ; l'approche est une liste de lignes séparées par des filets ; les métiers sont un terminal sombre (`./commerce`) ; la méthode est un graphe de commits à deux colonnes. Aucun de ces blocs n'est une carte imbriquée.

### Tags and FAQ
Pilules à bordure fine ; la FAQ est une liste d'`<details>` à bouton + / ×, ouverture animée en hauteur.

## Do's and Don'ts

### Do:
- **Do** garder l'ambre pour l'action et le mot-clé (#F5C28B).
- **Do** écrire en français simple ; le code reste décor.
- **Do** tenir 44 px minimum de hauteur pour les cibles tactiles et 4,5:1 de contraste pour le texte.
- **Do** étiqueter les maquettes « illustratif » tant qu'elles ne sont pas de vrais projets.

### Don't:
- **Don't** inventer des clients, des témoignages ou des chiffres.
- **Don't** mettre de la mono dans une phrase de lecture.
- **Don't** empiler des cartes dans des cartes, ni ajouter une lueur colorée.
- **Don't** animer plus d'un moment par section ; tout mouvement doit se couper avec `prefers-reduced-motion`.

## Not canonized (known gaps in the build)
Les étiquettes `sur_mesure()` en mono au-dessus des titres (une vingtaine) sont conservées à la demande du propriétaire mais ne sont pas une règle pour de nouvelles pages : elles ressemblent à des « kickers » et alourdissent la lecture pour un public non technique. Le fond radial ambre discret du hero est un décor d'ambiance, pas un motif du système.
