# Design System

## Principes

- Immersion plein écran.
- Interface minimale, typographique, sans décoration gratuite.
- Contraste fort : texte blanc, fonds photo assombris, blocs projet saturés.
- Les couleurs projet pilotent l'identité de chaque écran.
- Les animations sont fonctionnelles : elles expliquent le passage d'un projet à l'autre et l'ouverture d'une fiche.

## Grille

Référence desktop des maquettes : `1728 x 1117`.

- Page : `100vw x 100svh`.
- Marge externe desktop : `68px`.
- Marge externe tablette : `32px`.
- Marge externe mobile : `20px`.
- Zone identité : haut gauche.
- Zone navigation projets : gauche, alignée autour du centre vertical.
- Zone bloc info home : droite, largeur approximative `474px`, hauteur `654px`.
- Zone bloc info fiche : gauche bas, largeur approximative `474px`, hauteur `654px`.
- Zone texte fiche : droite, largeur maximale autour de `700px`.
- Zone carousel fiche : bas droite, hauteur miniature autour de `118px`.

## Couleurs

### Couleurs Globales

- Blanc texte : `#FFFFFF`.
- Blanc secondaire : `rgba(255, 255, 255, 0.72)`.
- Blanc tertiaire : `rgba(255, 255, 255, 0.42)`.
- Contour blanc : `rgba(255, 255, 255, 0.88)`.
- Voile sombre fort : `rgba(0, 0, 0, 0.48)`.
- Voile sombre léger : `rgba(0, 0, 0, 0.28)`.
- Fond fallback : `#111111`.

### Couleurs Projet

- Conciergio : `#20C934`.
- Hormone Concept : `#2F86E9`.

Les autres projets doivent avoir une couleur unique suffisamment contrastée avec le texte blanc.

## Typographie

### Familles

- Display : `"Helvetica Neue Display", "Helvetica Neue", Arial, sans-serif`.
- UI : `"Space Grotesk", Arial, sans-serif`.

### Styles Desktop

- Identité nom : 24px, 700, line-height 1.05.
- Identité rôle : 18px, 400, uppercase ou petites capitales selon rendu final.
- Titre projet home : 74px, 700, line-height 0.95.
- Titre projet fiche : 54px, 700, line-height 1.
- Description fiche : 32px, 400, line-height 1.08.
- Catégorie : 14px, 700, uppercase, letter-spacing 0.08em.
- Tags : 13px, 700, uppercase.
- Navigation projet : 16px, 700, uppercase.
- Boutons outline : 14px, 500, uppercase.
- Millésime : 124px, 700, line-height 0.8.
- Label millésime : 14px, 700, uppercase, letter-spacing 0.08em.

### Responsive

- Réduire les titres avec `clamp()` sans utiliser `vw` seul.
- Les plus grands textes doivent rester lisibles sans chevauchement.
- Sur mobile, le bloc info doit devenir plus compact et libérer la zone de navigation.

## Composants

### Identité

- Position fixe haut gauche.
- Deux lignes : nom, rôle.
- Blanc avec rôle en opacité réduite.

### Bouton Outline

- Capsule avec contour blanc.
- Hauteur approximative : 30px.
- Padding horizontal : 18px.
- Fond transparent.
- Hover : fond blanc léger ou inversion contrôlée.

### Liste Projet

- Position gauche.
- Liste verticale.
- Projet actif en blanc plein avec préfixe tiret.
- Projets inactifs en blanc atténué.
- La liste peut servir de roulette ou de navigation directe.

### Bloc Info Projet

- Rectangle sans border-radius.
- Couleur de fond dynamique par projet.
- Contenu :
  - catégorie en haut ;
  - titre large ;
  - tags en capsules outline ;
  - label portfolio et millésime en bas droite.
- Sur home, il est placé à droite.
- Sur fiche projet, il est placé à gauche en bas.
- Il sert de surface partagée pour la transition home vers fiche.

### Carousel

- Miniatures horizontales.
- Ratio image stable.
- Espacement régulier.
- Active state visible par opacité, bordure ou léger scale.
- Interaction : clic, clavier, swipe si possible.

## Motion

### Courbes

- Courbe principale : `cubic-bezier(0.22, 1, 0.36, 1)`.
- Courbe magnétique : `cubic-bezier(0.16, 1, 0.3, 1)`.
- Durée changement projet : 850ms à 1100ms.
- Durée textes bloc info : 350ms à 500ms.
- Durée ouverture fiche : 1100ms à 1500ms.

### Scroll Magnétique

- Accumuler l'intention de scroll.
- Déplacer légèrement la pellicule au début.
- Déclencher le snap quand le seuil est dépassé.
- Bloquer les nouveaux changements pendant l'animation.

### Transition Fiche

Étapes :

1. L'utilisateur clique sur le projet actif.
2. Le bloc info passe au premier plan.
3. Le bloc info s'étend en plein écran.
4. Le fond et le contenu fiche se préparent derrière ou pendant l'expansion.
5. Le bloc se réduit vers sa position fiche en bas à gauche.
6. Le titre, la description et le carousel apparaissent avec un léger décalage.

## Accessibilité

- Boutons accessibles au clavier.
- États focus visibles.
- Texte alternatif pour toutes les images projet.
- `aria-current` sur le projet actif.
- Respect de `prefers-reduced-motion`.
- Le contraste texte/fond doit rester lisible sur toutes les images.

## Données Projet

Structure recommandée :

```ts
type Project = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  yearLabel: string;
  color: string;
  navTitle: string;
  heroImage: string;
  detailImage: string;
  gallery: string[];
  description: string;
};
```

## Projets Vus Dans Les Maquettes

- Le Domaine d'Arimont.
- Holora.
- Young, Wild & Pixels.
- El Conciergio / Conciergio.
- Hormone Concept.
- Kozy Sneakers.
- Brenda Company.
- Le Rougail.
