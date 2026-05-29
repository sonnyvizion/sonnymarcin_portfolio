# Portfolio Sonny Marcin

## Objectif

Créer un portfolio interactif à partir des maquettes du dossier `maquette/`.
Le site doit présenter les projets en plein écran avec une navigation fluide, cinématique et sans impression de chargement entre la home et les fiches projet.

## Références Maquettes

- `maquette/HOME 02.png` : home sur le projet "Conciergio", bloc info vert.
- `maquette/HOME 03.png` : home sur le projet "Hormone Concept", bloc info bleu.
- `maquette/Transition.png` : état intermédiaire où le bloc info s'agrandit en plein écran.
- `maquette/Fiche projet.png` : fiche projet avec bloc info à gauche, contenu texte à droite, carousel en bas à droite.

## Direction Artistique

- Portfolio immersif, premium, direct.
- Le projet actif occupe tout l'écran.
- Les images de projet sont traitées en arrière-plan plein écran.
- Un voile sombre améliore la lisibilité du texte blanc.
- Le bloc info est un élément central de l'identité du projet : couleur, titre, tags et millésime.
- Les transitions doivent être visibles, fluides et participer à l'expérience.

## Typographies

- Titrage principal : Helvetica Neue Display.
- Interface, tags, navigation et textes secondaires : Space Grotesk.
- Fallbacks CSS prévus :
  - `Helvetica Neue Display`, `Helvetica Neue`, `Arial`, sans-serif.
  - `Space Grotesk`, `Arial`, sans-serif.

## Comportement Home

La home commence directement sur un projet en plein écran.

Navigation entre projets :

- Par scroll vertical.
- Par roulette/liste de noms de projets à gauche, comme dans la maquette.
- L'effet attendu est magnétique :
  - le scroll commence à déplacer légèrement la pellicule ;
  - après un seuil, l'interface verrouille la transition ;
  - le projet courant monte vers le haut ;
  - le projet suivant arrive depuis le bas.

Transition entre projets :

- Les projets sont empilés verticalement, comme une pellicule.
- Le fond image, le bloc info, les couleurs et les textes changent ensemble.
- Le bloc info change de couleur avec une transition douce.
- Les textes du bloc changent avec un effet propre : fade, léger déplacement vertical ou masque.

## Ouverture Fiche Projet

Au clic sur un projet :

- Le bloc info devient l'élément de transition principal.
- Il s'agrandit jusqu'à remplir toute la page, comme dans `Transition.png`.
- Il se réduit ensuite et se positionne en bas à gauche, comme dans `Fiche projet.png`.
- La transition doit donner l'impression d'une seule surface continue, pas d'un changement de page classique.
- Le fond de la fiche projet peut changer d'image pendant ou juste après cette transition, avec fondu maîtrisé.

## Fiche Projet

Structure attendue :

- Fond image plein écran avec voile sombre.
- Identité Sonny Marcin en haut à gauche.
- Bouton retour en haut à droite.
- Bloc info projet en bas à gauche.
- Titre et description projet à droite.
- Carousel d'images en bas à droite.

Carousel :

- Position fixe dans la zone basse droite.
- Plusieurs miniatures visibles.
- Navigation au clic et possiblement au drag/swipe.
- La miniature active doit être identifiable.

## Exigences Techniques

- Stack validee : Vite + React + GSAP.
- Les fiches projet fonctionnent en full JS, sans URL dediee par projet.
- Les images actuelles sont temporaires et devront etre remplacees par les vraies images projet.
- Les contenus projet actuels sont temporaires.
- Sur mobile, la roulette/liste de projets est supprimee.
- Priorite haute aux transitions fluides et premium.
- Transitions fluides, priorité à la sensation de continuité.
- Prévoir une architecture de données projet claire : titre, slug, catégorie, tags, année, couleur, images, description.
- Prévoir le responsive mobile dès le départ :
  - conserver l'expérience plein écran ;
  - adapter le bloc info et la liste projet ;
  - éviter les textes coupés ou superposés.
- Respecter `prefers-reduced-motion` avec une version simplifiée des animations.
- Optimiser les images pour éviter les chargements visibles.

## Points à Valider Avant Implémentation

- Stack technique souhaitée.
- Source exacte des images finales.
- Liste finale des projets et contenus.
- Comportement mobile de la roulette/liste de projets.
- Niveau d'animation souhaité et librairie d'animation acceptée.
