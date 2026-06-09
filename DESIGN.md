# Design System — Sonny Marcin Portfolio

Référence visuelle pour décliner ce système sur un CV ou tout autre support.

---

## Couleurs

| Rôle | Valeur |
|---|---|
| Fond global | `#111111` |
| Texte principal | `#FFFFFF` |
| Accent loader / CTA | `#DFFF00` (jaune électrique) |
| Texte sur fond jaune | `#111111` |

### Couleurs accent projets (utilisables comme touches de couleur)
| Projet | Couleur |
|---|---|
| Arimont | `#2A5843` (vert forêt) |
| Holora | `#B24774` (rose framboise) |
| Young Wild & Pixels | `#D65A35` (orange brûlé) |
| El Conciergio | `#20C934` (vert électrique) |
| Hormone Concept | `#829DAD` (bleu gris) |
| Kozy Sneakers | `#4E58B8` (bleu indigo) |
| Brenda Company | `#FFFFFF` (blanc) |
| Sonnyvizion | `#7D8478` (kaki) |

---

## Typographies

### Display — Titres, noms, chiffres clés
```
font-family: "Helvetica Neue Display", "Helvetica Neue", Arial, sans-serif;
font-weight: 800;
```
Utilisée pour : nom du projet, millésime, chiffres de loader, titre principal.

### UI — Interface, tags, corps de texte
```
font-family: "Space Grotesk", Arial, sans-serif;
font-weight: 500 / 700 / 800;
```
Utilisée pour : catégories, tags, description, navigation, labels.

### Échelles de taille
| Usage | Taille |
|---|---|
| Mega titre (loader) | `clamp(92px, 11vw, 154px)` |
| Titre projet home | `clamp(52px, 4.28vw, 74px)` |
| Titre section | `clamp(72px, 6vw, 96px)` |
| Titre fiche projet | `36px` (mobile) |
| Nom marque | `24px` |
| Corps description | `16–18px` |
| Tags / labels | `14px` |
| Micro labels | `12–13px` |

### Règles typographiques
- `line-height: 0.96` sur les gros titres (serré, dense)
- `letter-spacing: 0.08em` sur les catégories en uppercase
- Toujours `text-transform: uppercase` sur catégories, tags, labels
- `font-weight: 800` sur tout ce qui est display/identité
- `-webkit-font-smoothing: antialiased` — rendu lisse

---

## Espacements

| Contexte | Valeur |
|---|---|
| Marge extérieure desktop | `68px` |
| Marge extérieure tablette | `32px` |
| Marge extérieure mobile | `20px` |
| Padding bloc projet (card) | `30px 40px 42px` |
| Gap entre tags | `10px` |
| Gap entre éléments d'identité | `4px` |

---

## Composants

### Bloc projet (Project Card)
- Fond : couleur accent du projet
- Texte : blanc (ou noir si fond très clair)
- `border-radius: 0` — aucun arrondi sur les blocs principaux
- Structure verticale : catégorie → titre → tags → année
- Catégorie en uppercase, `letter-spacing: 0.08em`, `font-size: 14px`
- Titre en Display `font-weight: 800`, `line-height: 0.96`
- Tags : pilules avec `border: 1px solid currentColor`, `border-radius: 999px`, `padding: 7px 16px`

### Tags / Pills
```css
border: 1px solid currentColor;
border-radius: 999px;
padding: 7px 16px 0;
font-size: 14px;
font-weight: 700;
text-transform: uppercase;
```

### Bouton CTA / Retour
- Fond couleur accent projet
- Texte `font-weight: 700`, uppercase
- `border-radius: 0` ou très faible
- Bordure `1px solid` en semi-transparent

### Séparateur / ligne
- `width: 18px; height: 1px; background: currentColor` — trait fin horizontal
- Utilisé en décoration avant les hints / liens

---

## Voile sombre (Scrim)
Dégradé appliqué sur les fonds photo pour lisibilité du texte blanc :
```css
linear-gradient(90deg, rgba(0,0,0,0.72), rgba(0,0,0,0.12) 45%, rgba(0,0,0,0.32)),
linear-gradient(0deg, rgba(0,0,0,0.44), transparent 42%)
```
Règle : toujours assombrir côté gauche (texte) plus fortement que côté droit.

---

## Mise en page

### Philosophie
- Plein écran systématique — pas de marges visibles sur le contenu héroïque
- Photo ou vidéo en fond absolu, `object-fit: cover`
- Le bloc d'identité (card projet) est l'ancre visuelle principale
- Texte toujours en blanc sur fond sombre

### Grille desktop
- Bloc projet : à droite, `width: min(474px, 32vw)`, `top: 55px`
- Titre + description : colonne droite, `width: min(710px, 43vw)`, centré verticalement
- Navigation projets : colonne gauche, fixe
- Carousel : bas droite, `width: min(750px, 44vw)`

### Structure d'une fiche / section
```
[Identité haut gauche]                    [Bouton retour haut droite]
                           [Fond plein écran]
[Bloc projet bas gauche]   [Titre + description droite]
                           [Carousel bas droite]
```

---

## Animations & Transitions

| Élément | Courbe | Durée |
|---|---|---|
| Transitions principales | `cubic-bezier(0.22, 1, 0.36, 1)` | `620–720ms` |
| Apparitions UI | `power2.out` | `340ms` |
| Fermetures / sorties | `power3.out` | `420ms` |
| Ouverture projet | `expo.inOut` | `680ms` |
| Hover images | `cubic-bezier(0.22, 1, 0.36, 1)` | `420–520ms` |

### Règles d'animation
- Les éléments sortent vers le bas (`y: 16px`) avec `autoAlpha: 0`
- Stagger entre éléments : `0.035–0.045s`
- Toujours `ease-out` sur les entrées, `ease-in-out` sur les transitions de fond
- Fond image : `scale: 1.015 → 1` au fade-in

---

## Application CV

Pour décliner ce système sur un CV :

**Format recommandé** : A4 fond `#111111`, texte blanc

**Structure suggérée** :
- En-tête : `Sonny Marcin` en Display 800, `Creative Developer` en Space Grotesk uppercase
- Accent couleur : touche `#DFFF00` sur le nom ou un élément clé (initiales, ligne)
- Sections : label uppercase 14px + `letter-spacing: 0.08em` + trait 18px
- Compétences / stacks : pilules `border: 1px solid white`, `border-radius: 999px`
- Expériences : titre projet en Display, catégorie en uppercase au-dessus, tags en pilules
- Millésimes : Display 800, taille généreuse, `line-height: 0.9`

**À éviter** :
- Arrondis sur les blocs principaux (`border-radius: 0`)
- Font-weight inférieur à 500
- Grilles symétriques classiques — préférer l'asymétrie droite/gauche
- Couleurs pastels — rester dans les accents saturés ou neutres
