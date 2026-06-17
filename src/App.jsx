import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

const projects = [
  {
    slug: "domaine-arimont",
    navTitle: "Le Domaine d'Arimont",
    title: "Arimont",
    category: "Site vitrine",
    caseStudy: {
      problem: "Un domaine ardennais sans présence digitale, avec uniquement des photos de téléphone comme matière visuelle. L'enjeu : créer une expérience en ligne premium en partant de rien.",
      steps: [
        { num: "01", title: "Audit & stratégie", text: "Analyse des assets existants, définition du positionnement, de l'architecture de contenu et de la DA." },
        { num: "02", title: "Réhabilitation IA", text: "Upscaling et retouche IA des photos basse résolution. Génération de séquences vidéo immersives à partir des visuels réhabilités." },
        { num: "03", title: "Design & développement", text: "Conception complète et développement sur Sanity CMS. Back-office sur-mesure pour une gestion autonome par le client." },
      ],
      result: "Site vitrine livré, visuels transformés de photos téléphone en assets premium. Le client gère son contenu en autonomie totale.",
    },
    url: "https://sonnyvizion.github.io/lasourcedarimont/index.html",
    tags: ["Direction artistique", "Développement", "Sanity CMS", "Retouche IA", "Vidéo IA"],
    yearLabel: "26'",
    color: "#2A5843",
    heroVideo: `${import.meta.env.BASE_URL}img/arimont2.mp4`,
    heroImage: "https://picsum.photos/seed/arimont/2200/1400",
    detailImage: `${import.meta.env.BASE_URL}img/raidillon.webp`,
    gallery: [
      { type: "video", src: `${import.meta.env.BASE_URL}img/arimont_projet_01.mp4` },
      { type: "video", src: `${import.meta.env.BASE_URL}img/arimont_projet02.mp4` },
      `${import.meta.env.BASE_URL}img/arimont_projet03.jpg`,
    ],
    description:
      "Conception complète du site vitrine du Domaine d'Arimont, un refuge niché dans les Ardennes belges. J'ai pris en charge la DA, le design et le développement sur Sanity CMS, et réhabilité des photos client basse résolution via IA pour en tirer des visuels premium et des séquences vidéo immersives.",
  },
  {
    slug: "holora",
    navTitle: "Holora",
    title: "Holora",
    category: "Shopify Custom",
    caseStudy: {
      problem: "Lancer une boutique TCG Pokémon et One Piece dans un marché saturé de templates génériques. Créer une identité forte et un store qui se démarque visuellement.",
      steps: [
        { num: "01", title: "Univers & DA", text: "Définition de l'identité visuelle complète : palette, typographie, tone of voice et direction artistique globale." },
        { num: "02", title: "Shopify custom", text: "Développement d'un thème Shopify entièrement sur-mesure, zero template. Chaque section conçue pour la mise en valeur produit." },
        { num: "03", title: "Visuels IA", text: "Génération de l'ensemble des visuels et vidéos du store par IA. Identité cohérente sans shooting physique." },
      ],
      result: "Store opérationnel avec une identité distincte dans le secteur TCG. DA et dev réalisés en solo, de la maquette au go-live.",
    },
    url: "https://holora.net/",
    tags: ["Direction artistique", "Shopify Custom", "Vidéo & Visuels IA"],
    yearLabel: "26'",
    color: "#B24774",
    heroVideo: `${import.meta.env.BASE_URL}img/iphone-holora.mp4`,
    heroImage: "https://picsum.photos/seed/holora/2200/1400",
    detailImage: `${import.meta.env.BASE_URL}img/mockup_holora_bg.webp`,
    gallery: [
      { type: "video", src: `${import.meta.env.BASE_URL}img/holora_project01.mp4` },
      `${import.meta.env.BASE_URL}img/mockup_holora_bg.webp`,
      `${import.meta.env.BASE_URL}img/bannerv3.jpg`,
      "https://picsum.photos/seed/holora-2/640/420",
      "https://picsum.photos/seed/holora-3/640/420",
      "https://picsum.photos/seed/holora-4/640/420",
      "https://picsum.photos/seed/holora-5/640/420",
    ],
    description:
      "Boutique e-commerce Shopify avec thème entièrement custom pour la vente de cartes TCG Pokémon et One Piece. J'ai pris en charge la DA, le design et le développement du store, avec création de visuels et vidéos IA pour habiller l'univers de la marque.",
  },
  {
    slug: "young-wild-pixels",
    navTitle: "Young, Wild & Pixels",
    title: "Young, Wild & Pixels",
    category: "Site vitrine",
    caseStudy: {
      problem: "Concevoir ma propre agence en ligne : un site qui reflète exactement mon positionnement, sans dépendre d'un dev pour les mises à jour, avec un back-office autonome.",
      steps: [
        { num: "01", title: "Direction artistique", text: "Conception de l'identité et de la DA du site en partant de zéro. Le site est lui-même une démonstration du savoir-faire." },
        { num: "02", title: "Développement front", text: "Développement complet, intégration et optimisation des performances. Codé pour être rapide et maintenable." },
        { num: "03", title: "Sanity CMS", text: "Mise en place du back-office Sanity pour une gestion de contenu autonome. Ajout de projets sans toucher au code." },
      ],
      result: "Site vitrine auto-gérable livré. Vitrine directe de mes compétences techniques et créatives — chaque section est une proof of concept.",
    },
    url: "https://youngwildandpixels.com/fr/index.html",
    tags: ["Direction artistique", "Développement", "Sanity CMS"],
    yearLabel: "26'",
    color: "#D65A35",
    heroVideo: `${import.meta.env.BASE_URL}img/ywp_home_1.mp4`,
    heroImage: "https://picsum.photos/seed/ywp/2200/1400",
    detailImage: "https://picsum.photos/seed/ywp-detail/2200/1400",
    gallery: [
      "https://picsum.photos/seed/ywp-1/640/420",
      "https://picsum.photos/seed/ywp-2/640/420",
      "https://picsum.photos/seed/ywp-3/640/420",
      "https://picsum.photos/seed/ywp-4/640/420",
      "https://picsum.photos/seed/ywp-5/640/420",
      "https://picsum.photos/seed/ywp-6/640/420",
    ],
    description:
      "Site vitrine de mon compte auto-entrepreneur, Young Wild & Pixels. J'ai pris en charge la DA et la conception complète, avec un back-office Sanity pour une gestion de contenu autonome et évolutive.",
  },
  {
    slug: "el-conciergio",
    navTitle: "El Conciergio",
    title: "Conciergio",
    category: "Shopify website",
    caseStudy: {
      subtitle: "Product Design Case Study",
      context: "El Conciergio est une solution de conciergerie alimentée par l'intelligence artificielle destinée aux propriétaires Airbnb, gîtes et locations saisonnières. L'objectif du produit est de répondre automatiquement aux demandes récurrentes des voyageurs via WhatsApp afin de réduire la charge opérationnelle des hôtes et d'améliorer l'expérience client. Mon rôle consistait à concevoir une plateforme capable de présenter une technologie complexe de manière simple, rassurante et orientée conversion.",
      problem: "Les propriétaires de locations saisonnières font face à plusieurs difficultés : répondre aux mêmes questions plusieurs fois par jour, gérer les demandes à toute heure, maintenir un niveau de service élevé malgré un volume important de messages, et expliquer rapidement la valeur d'une solution IA parfois perçue comme complexe. Le véritable défi était de démontrer rapidement le bénéfice métier — pas de présenter la technologie.",
      steps: [
        { num: "01", title: "Recherche marché", text: "Analyse des conciergeries traditionnelles et des problématiques des propriétaires de locations courte durée. Points de friction identifiés : disponibilité permanente, répétition des tâches, gestion multilingue." },
        { num: "02", title: "Architecture de l'info", text: "Restructuration du discours autour des bénéfices : gain de temps, amélioration de l'expérience voyageur, disponibilité 24h/24, réduction de la charge mentale — plutôt que la technologie." },
        { num: "03", title: "UX Design", text: "Parcours conçu pour répondre en quelques secondes à : qu'est-ce que le produit, comment fonctionne-t-il, pourquoi est-il utile, comment l'essayer." },
        { num: "04", title: "UI & Développement", text: "Interface moderne et rassurante axée lisibilité, hiérarchie et confiance. Maquettes UI, responsive, intégration, optimisation SEO et cohérence visuelle globale." },
      ],
      result: "Une solution technologique complexe transformée en expérience claire et orientée utilisateur. La plateforme met désormais l'accent sur les bénéfices concrets : disponibilité 24h/24, automatisation des demandes répétitives, amélioration de l'expérience voyageur, simplification de la gestion quotidienne.",
      learnings: "Ce projet a renforcé mes compétences en Product Thinking, UX Strategy, Conversion Design et communication produit. Il a confirmé l'importance de concevoir à partir des besoins utilisateurs plutôt qu'à partir de la technologie elle-même.",
      role: ["Discovery", "Architecture de l'information", "UX Design", "UI Design", "Wireframing", "Prototypage", "Développement", "Intégration web", "Responsive Design", "Optimisation SEO"],
    },
    tags: ["Concept & Design", "IA Génération", "Automatisation n8n", "Bot WhatsApp"],
    yearLabel: "26'",
    color: "#20C934",
    url: "https://elconciergio.com",
    heroVideo: `${import.meta.env.BASE_URL}img/conciergio__home.mp4`,
    heroImage: `${import.meta.env.BASE_URL}img/el-conciergio-home.webp`,
    detailImage: `${import.meta.env.BASE_URL}img/el-conciegrio-pp.webp`,
    gallery: [
      { type: "video", src: `${import.meta.env.BASE_URL}img/conciergio_projet01.mp4` },
      { type: "video", src: `${import.meta.env.BASE_URL}img/conciergio_projet02.mp4` },
      { type: "video", src: `${import.meta.env.BASE_URL}img/conciergio_projet03.mp4` },
      `${import.meta.env.BASE_URL}img/conciergio_projet05.jpg`,
    ],
    description:
      "Conception complète d'El Conciergio, de l'idée au produit final. J'ai défini le concept, designé et développé le site, et généré l'intégralité des visuels et vidéos du site via IA. En parallèle, j'ai mis en place toute l'infrastructure d'automatisation : workflows n8n, paramétrage et entraînement du bot WhatsApp pour gérer les voyageurs en autonomie, 24h/24.",
  },
  {
    slug: "hormone-concept",
    navTitle: "Hormone Concept",
    title: "Hormone Concept",
    category: "Shopify Custom",
    comingSoon: true,
    tags: ["Direction artistique", "Shopify Custom", "App scrapping"],
    yearLabel: "26'",
    color: "#829DAD",
    heroVideo: `${import.meta.env.BASE_URL}img/hromone_home_1.mp4`,
    heroImage: "https://picsum.photos/seed/hormone/2200/1400",
    detailImage: `${import.meta.env.BASE_URL}img/hormone_bg.webp`,
    gallery: [
      { type: "video", src: `${import.meta.env.BASE_URL}img/hormone_projet01.mp4` },
      `${import.meta.env.BASE_URL}img/hormone_01.webp`,
      `${import.meta.env.BASE_URL}img/hormone_02.webp`,
      "https://picsum.photos/seed/hormone-2/640/420",
      "https://picsum.photos/seed/hormone-3/640/420",
      "https://picsum.photos/seed/hormone-4/640/420",
    ],
    description:
      "Boutique de revente sneakers sur Shopify avec un thème custom pensé pour une mise en valeur produit tendue et immédiate. Même infrastructure qu'une app de scrapping dédiée pour automatiser l'ajout de paires au catalogue. Réalisation de street shooting IA.",
  },
  {
    slug: "kozy-sneakers",
    navTitle: "Kozy Sneakers",
    title: "Kozy Sneakers",
    category: "Shopify Custom",
    comingSoon: true,
    tags: ["Direction artistique", "Shopify Custom", "App scrapping"],
    yearLabel: "26'",
    color: "#4E58B8",
    heroVideo: `${import.meta.env.BASE_URL}img/kozy_left.mp4`,
    heroImage: "https://picsum.photos/seed/kozy/2200/1400",
    detailImage: `${import.meta.env.BASE_URL}img/kozy_00000.webp`,
    gallery: [
      { type: "video", src: `${import.meta.env.BASE_URL}img/kozy_mockup.mp4` },
      `${import.meta.env.BASE_URL}img/kozy_01.webp`,
      `${import.meta.env.BASE_URL}img/kozy02.webp`,
      "https://picsum.photos/seed/kozy-1/640/420",
      "https://picsum.photos/seed/kozy-2/640/420",
      "https://picsum.photos/seed/kozy-3/640/420",
      "https://picsum.photos/seed/kozy-4/640/420",
    ],
    description:
      "Thème Shopify entièrement custom pour une boutique de revente de sneakers. J'ai pris en charge la DA, le design et le développement du store, avec une app de scrapping sur-mesure pour alimenter le catalogue en nouvelles paires automatiquement.",
  },
  {
    slug: "brenda-company",
    navTitle: "Brenda Company",
    title: "Brenda Company",
    category: "Corporate website",
    url: "https://brendaprod.webflow.io/",
    tags: ["Direction artistique", "Webflow", "Identité visuelle"],
    yearLabel: "23'",
    color: "#FFFFFF",
    textColor: "#000000",
    heroVideo: `${import.meta.env.BASE_URL}img/brenda_home.mp4`,
    heroImage: "https://picsum.photos/seed/brenda/2200/1400",
    detailImage: `${import.meta.env.BASE_URL}img/home_brenda.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}img/brenda-1.jpg`,
      `${import.meta.env.BASE_URL}img/brenda-2.jpg`,
      `${import.meta.env.BASE_URL}img/brenda-3.jpg`,
      `${import.meta.env.BASE_URL}img/brenda-4.jpg`,
    ],
    description:
      "Direction artistique et développement Webflow pour Brenda, agence logistique audiovisuelle parisienne au service des grandes maisons : Zara, Louis Vuitton, Nike, Lancôme. Un site épuré et confiant, taillé pour un positionnement premium.",
  },
  {
    slug: "sonnyvizion",
    navTitle: "SonnyVizion",
    title: "Sonny\nVizion",
    category: "Creative tool",
    url: "https://sonny-vizion.webflow.io/",
    tags: ["Direction artistique", "Webflow", "Awwwards HM"],
    yearLabel: "23'",
    color: "#7d8478",
    heroVideo: `${import.meta.env.BASE_URL}img/sonnyvizion2.mp4`,
    heroImage: "https://picsum.photos/seed/sonnyvizion/2200/1400",
    detailImage: `${import.meta.env.BASE_URL}img/work-3.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}img/pf02.jpg`,
      `${import.meta.env.BASE_URL}img/pf03.jpg`,
      `${import.meta.env.BASE_URL}img/pf04.jpg`,
      `${import.meta.env.BASE_URL}img/pf05.jpg`,
      `${import.meta.env.BASE_URL}img/pf06.jpg`,
      `${import.meta.env.BASE_URL}img/pf07.jpg`,
    ],
    description:
      "Mon portfolio de 2023, conçu et développé sur Webflow. Un design minimaliste noir et blanc construit autour d'une typographie forte et d'une identité personnelle assumée. Récompensé d'une Honorable Mention Awwwards.",
  },
];

function getDetailCardRect() {
  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  if (isMobile) {
    return {
      left: 20,
      top: window.innerHeight - 300,
      width: Math.min(window.innerWidth - 40, 420),
      height: 300,
    };
  }

  const width = Math.min(474, window.innerWidth * 0.32);
  const height = Math.min(654, window.innerHeight - 136);
  return {
    left: 68,
    top: window.innerHeight - height - 68,
    width,
    height,
  };
}

function getHomeCardRect(cardNode) {
  if (cardNode) {
    return cardNode.getBoundingClientRect();
  }

  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  if (isMobile) {
    return {
      left: 20,
      top: window.innerHeight - 404,
      width: window.innerWidth - 40,
      height: 300,
    };
  }

  const width = Math.min(474, window.innerWidth * 0.32);
  const height = Math.min(654, window.innerHeight - 110);
  return {
    left: window.innerWidth - width - 67,
    top: 55,
    width,
    height,
  };
}

function getContactPanelRect() {
  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  const width = isMobile
    ? Math.min(window.innerWidth - 40, 420)
    : Math.min(474, window.innerWidth - 136);
  const height = isMobile
    ? Math.min(window.innerHeight - 160, 520)
    : Math.min(654, window.innerHeight - 136);

  return {
    left: (window.innerWidth - width) / 2,
    top: (window.innerHeight - height) / 2,
    width,
    height,
  };
}

function getWheelOffset(index, activeIndex, total) {
  const rawOffset = index - activeIndex;
  const half = total / 2;

  if (rawOffset > half) return rawOffset - total;
  if (rawOffset < -half) return rawOffset + total;
  return rawOffset;
}

function wrapProjectIndex(index) {
  return (index + projects.length) % projects.length;
}

function getWheelDirection(index, activeIndex) {
  const offset = getWheelOffset(index, activeIndex, projects.length);
  return offset >= 0 ? 1 : -1;
}

function animateProjectCardContent(cardNode, direction = 1, reduceMotion = false) {
  if (!cardNode) return;

  const q = gsap.utils.selector(cardNode);
  const titleAndDate = q(".card-motion-title, .card-motion-date");
  const labels = q(".card-motion-label");
  const pills = q(".card-motion-pill");
  const hint = q(".card-motion-hint");
  const distance = 22 * direction;
  const duration = reduceMotion ? 0.01 : 0.42;

  gsap.killTweensOf([...titleAndDate, ...labels, ...pills, ...hint]);
  gsap.set([...titleAndDate, ...labels, ...pills], {
    autoAlpha: 0,
    y: distance,
  });
  gsap.set(hint, { autoAlpha: 0, y: 0 });

  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .to(titleAndDate, { autoAlpha: 1, y: 0, duration, stagger: 0.04 }, 0)
    .to(labels, { autoAlpha: 1, y: 0, duration: duration * 0.82 }, 0.16)
    .to(
      pills,
      {
        autoAlpha: 1,
        y: 0,
        duration: duration * 0.9,
        stagger: reduceMotion ? 0 : 0.055,
      },
      0.3,
    )
    .to(
      hint,
      {
        autoAlpha: 1,
        duration: duration * 0.8,
      },
      reduceMotion ? 0 : 1.3,
    );
}

function Identity({ onClick }) {
  return (
    <button
      className="identity"
      onClick={onClick}
      type="button"
      aria-label="Retour accueil Sonny Marcin"
    >
      <strong>Sonny Marcin</strong>
      <span>Creative Developer</span>
    </button>
  );
}

function ProjectCard({
  project,
  className = "",
  forwardedRef,
  hidden = false,
  onClick,
}) {
  return (
    <button
      ref={forwardedRef}
      className={`project-card ${className}`}
      style={{ backgroundColor: project.color, color: project.textColor || undefined }}
      onClick={onClick}
      type="button"
      aria-label={`Voir le projet ${project.navTitle}`}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
    >
      <span className="project-card__wipe" aria-hidden="true" />
      <span className="project-card__content">
        <span className="project-card__category card-motion-label">
          {project.category}
          {project.caseStudy && (
            <span className="project-card__case-study-badge">Étude de cas</span>
          )}
        </span>
        <span className="project-card__title card-motion-title">
          {project.title}
        </span>
        <span className="project-card__tags">
          {project.tags.map((tag) => (
            <span className="card-motion-pill" key={tag}>
              {tag}
            </span>
          ))}
        </span>
        <span
          className="project-card__hint card-motion-hint"
          aria-hidden="true"
        >
          Voir le projet
          <span />
        </span>
        <span className="project-card__year">
          <span className="card-motion-label">Portfolio</span>
          <strong className="card-motion-date">{project.yearLabel}</strong>
        </span>
      </span>
    </button>
  );
}

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SCRAMBLE_TARGET = "PORTFOLIO";

function useScramble(duration = 1400) {
  const [text, setText] = useState(() =>
    Array.from({ length: SCRAMBLE_TARGET.length }, () =>
      SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
    ).join("")
  );

  useEffect(() => {
    const start = Date.now();
    let frame;
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const locked = Math.floor(progress * SCRAMBLE_TARGET.length);
      setText(
        SCRAMBLE_TARGET.split("").map((char, i) =>
          i < locked ? char : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        ).join("")
      );
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration]);

  return text;
}

const getGallerySrc = (item) => (typeof item === "string" ? item : item.src);
const isGalleryVideo = (item) => typeof item === "object" && item.type === "video";

function getCsMedia(project) {
  return getFullGallery(project)
    .filter(item => {
      const src = getGallerySrc(item);
      return !src.includes("picsum");
    })
    .slice(0, 4);
}

function CsMediaItem({ item }) {
  const src = getGallerySrc(item);
  if (isGalleryVideo(item)) {
    return (
      <video
        className="detail-casestudy__img"
        src={src}
        poster={src.replace(/\.mp4$/i, "-poster.jpg")}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }
  return <img src={src} alt="" className="detail-casestudy__img" />;
}

function CarouselThumb({ item, isActive, onActivate, portraitSrcsRef }) {
  const [isPortrait, setIsPortrait] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const src = getGallerySrc(item);
  const thumbVideoRef = useRef(null);

  const handleClick = (event) => {
    onActivate();
    event.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  };

  if (isGalleryVideo(item)) {
    const poster = src.replace(/\.mp4$/i, "-poster.jpg");
    return (
      <button className={`${isActive ? "is-active" : ""} is-video`} onClick={handleClick} type="button" aria-label="Voir la vidéo">
        {posterFailed ? (
          <video
            ref={thumbVideoRef}
            src={src}
            preload="metadata"
            muted
            playsInline
            onLoadedMetadata={() => {
              if (thumbVideoRef.current) thumbVideoRef.current.currentTime = 1;
            }}
          />
        ) : (
          <img src={poster} alt="" onError={() => setPosterFailed(true)} />
        )}
      </button>
    );
  }

  return (
    <button
      className={[isActive ? "is-active" : "", isPortrait ? "is-portrait" : ""].filter(Boolean).join(" ")}
      onClick={handleClick}
      type="button"
    >
      {isPortrait && <img className="carousel-blur-bg" src={src} aria-hidden="true" alt="" />}
      <img
        src={src}
        alt=""
        onLoad={(e) => {
          if (e.target.naturalHeight > e.target.naturalWidth) {
            setIsPortrait(true);
            portraitSrcsRef.current.add(src);
          }
        }}
      />
    </button>
  );
}

function getFullGallery(project) {
  if (!project.heroVideo) return project.gallery;
  const first = project.gallery[0];
  const firstSrc = typeof first === "string" ? first : first?.src;
  if (firstSrc === project.heroVideo) return project.gallery;
  return [{ type: "video", src: project.heroVideo }, ...project.gallery];
}

function App() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [detailProject, setDetailProject] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);
  const [imageFocus, setImageFocus] = useState(false);
  const [focusedVideo, setFocusedVideo] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTransitioning, setContactTransitioning] = useState(false);
  const [detailBg, setDetailBg] = useState(null);
  const [incomingDetailBg, setIncomingDetailBg] = useState(null);
  const [detailBgPortrait, setDetailBgPortrait] = useState(false);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [caseStudyTransitioning, setCaseStudyTransitioning] = useState(false);
  const portraitSrcsRef = useRef(new Set());
  const caseStudyRef = useRef(null);
  const caseStudyCtaRef = useRef(null);
  const caseStudyContentRef = useRef(null);
  const caseStudyBackdropRef = useRef(null);
  const scrambledPortfolio = useScramble(1400);
  const stageRef = useRef(null);
  const slidesRef = useRef([]);
  const videoRefs = useRef([]);
  const videosReadyRef = useRef(false);
  const cardRef = useRef(null);
  const loaderRef = useRef(null);
  const loaderPanelRef = useRef(null);
  const loaderContentRef = useRef(null);
  const loaderDoneRef = useRef(false);
  const contactButtonRef = useRef(null);
  const contactPanelRef = useRef(null);
  const contactContentRef = useRef(null);
  const transitionCardRef = useRef(null);
  const detailRef = useRef(null);
  const contentRef = useRef(null);
  const carouselRef = useRef(null);
  const carouselTrackRef = useRef(null);
  const scrollStateRef = useRef({ lock: false, intent: 0 });
  const reduceMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const activeProject = projects[activeIndex];

  useEffect(() => {
    if (loaderDoneRef.current) return undefined;

    gsap.set(cardRef.current, { autoAlpha: 0 });
    gsap.set(".loader__brand, .loader__center, .loader__progress", {
      autoAlpha: 0,
      y: 18,
    });
    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .to(".loader__brand", {
        autoAlpha: 1,
        y: 0,
        duration: reduceMotion ? 0.01 : 0.46,
      })
      .to(
        ".loader__center",
        {
          autoAlpha: 1,
          y: 0,
          duration: reduceMotion ? 0.01 : 0.58,
        },
        0.16,
      )
      .to(
        ".loader__progress",
        {
          autoAlpha: 1,
          y: 0,
          duration: reduceMotion ? 0.01 : 0.48,
          stagger: 0.08,
        },
        0.36,
      );

    const interval = window.setInterval(() => {
      setLoadProgress((current) => {
        const cap = videosReadyRef.current ? 100 : 95;
        if (current >= 100) {
          window.clearInterval(interval);
          return 100;
        }
        if (current >= cap) return current;
        const increment = current > 90 ? 1 : current > 62 ? 3 : 5;
        return Math.min(cap, current + increment);
      });
    }, 96);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loadProgress < 100 || loaderDoneRef.current) return;

    loaderDoneRef.current = true;
    const targetRect = getHomeCardRect(cardRef.current);

    gsap
      .timeline({
        defaults: {
          duration: reduceMotion ? 0.01 : 0.82,
          ease: "expo.inOut",
        },
        onComplete: () => {
          gsap.set(loaderRef.current, { display: "none" });
          gsap.set(cardRef.current, { autoAlpha: 1 });
          animateProjectCardContent(cardRef.current, 1, reduceMotion);
          setIsLoading(false);
        },
      })
      .to(
        loaderContentRef.current,
        {
          autoAlpha: 0,
          y: -18,
          duration: reduceMotion ? 0.01 : 0.3,
          ease: "power2.out",
        },
        0.12,
      )
      .to(
        loaderPanelRef.current,
        {
          backgroundColor: activeProject.color,
          left: targetRect.left,
          top: targetRect.top,
          width: targetRect.width,
          height: targetRect.height,
        },
        0.34,
      );
  }, [activeProject.color, loadProgress, reduceMotion]);

  const transitionDetailBackground = (nextImage, isPortrait = false) => {
    if (!nextImage || nextImage === detailBg) return;

    setIncomingDetailBg(nextImage);
    requestAnimationFrame(() => {
      gsap.set(".detail-bg-next", { autoAlpha: 0, scale: 1.015 });
      gsap.to(".detail-bg-next", {
        autoAlpha: 1,
        scale: 1,
        duration: reduceMotion ? 0.01 : 0.72,
        ease: "power2.inOut",
        onComplete: () => {
          setDetailBg(nextImage);
          setDetailBgPortrait(isPortrait);
          setIncomingDetailBg(null);
        },
      });
    });
  };

  const goToProject = useCallback(
    (requestedIndex, requestedDirection) => {
      const nextIndex = wrapProjectIndex(requestedIndex);

      if (
        nextIndex === activeIndex ||
        isLoading ||
        scrollStateRef.current.lock ||
        isTransitioning ||
        contactOpen ||
        detailProject
      ) {
        return;
      }

      const direction =
        requestedDirection ?? (requestedIndex > activeIndex ? 1 : -1);
      const currentSlide = slidesRef.current[activeIndex];
      const nextSlide = slidesRef.current[nextIndex];
      const currentImage = currentSlide.querySelector(".slide-media");
      const nextImage = nextSlide.querySelector(".slide-media");
      if (!currentSlide || !nextSlide) return;

      scrollStateRef.current.lock = true;
      gsap.killTweensOf(stageRef.current);
      gsap.set(stageRef.current, { y: 0 });
      const wipeEl = cardRef.current?.querySelector(".project-card__wipe");
      gsap.killTweensOf([
        currentSlide,
        nextSlide,
        currentImage,
        nextImage,
        cardRef.current,
        wipeEl,
      ]);
      if (wipeEl) {
        gsap.set(wipeEl, {
          backgroundColor: projects[nextIndex].color,
          scaleY: 0,
          transformOrigin: "center bottom",
        });
      }
      gsap.set(nextSlide, { yPercent: 100 * direction, autoAlpha: 1, zIndex: 4 });
      gsap.set(currentSlide, { yPercent: 0, autoAlpha: 1, zIndex: 2, scale: 1 });
      gsap.set(currentImage, { yPercent: 0, scale: 1, filter: "brightness(1)" });
      gsap.set(nextImage, { yPercent: -5 * direction, scale: 1.018 });

      const tl = gsap.timeline({
        defaults: {
          ease: "expo.out",
          duration: reduceMotion ? 0.01 : 1.16,
        },
        onComplete: () => {
          gsap.set(currentSlide, {
            autoAlpha: 0,
            zIndex: 1,
            yPercent: 0,
            scale: 1,
          });
          gsap.set(nextSlide, { zIndex: 2, yPercent: 0, scale: 1 });
          gsap.set([currentImage, nextImage], {
            yPercent: 0,
            scale: 1,
            filter: "brightness(1)",
          });
          gsap.set(stageRef.current, { y: 0 });
          setActiveIndex(nextIndex);
          scrollStateRef.current.lock = false;
          scrollStateRef.current.intent = 0;
        },
      });

      tl.to(currentSlide, { yPercent: -100 * direction }, 0)
        .to(
          currentSlide,
          {
            scale: 0.996,
            duration: reduceMotion ? 0.01 : 1.16,
            ease: "expo.out",
          },
          0,
        )
        .to(
          currentImage,
          {
            yPercent: 6 * direction,
            scale: 1.012,
            filter: "brightness(0.9)",
            duration: reduceMotion ? 0.01 : 1.16,
            ease: "expo.out",
          },
          0,
        )
        .to(nextSlide, { yPercent: 0 }, 0)
        .to(
          nextImage,
          {
            yPercent: 0,
            scale: 1,
            duration: reduceMotion ? 0.01 : 1.16,
            ease: "expo.out",
          },
          0,
        )
        .to(
          ".project-card--home .project-card__content",
          {
            y: -20 * direction,
            autoAlpha: 0,
            duration: reduceMotion ? 0.01 : 0.22,
            ease: "power2.out",
          },
          0,
        )
        .to(
          wipeEl,
          {
            scaleY: 1,
            duration: reduceMotion ? 0.01 : 0.44,
            ease: "power3.inOut",
          },
          0.1,
        )
        .call(
          () => {
            setActiveIndex(nextIndex);
            requestAnimationFrame(() => {
              if (wipeEl) gsap.set(wipeEl, { scaleY: 0 });
              gsap.set(".project-card--home .project-card__content", {
                y: 0,
                autoAlpha: 1,
              });
              animateProjectCardContent(
                cardRef.current,
                direction,
                reduceMotion,
              );
            });
          },
          null,
          0.56,
        );
    },
    [
      activeIndex,
      contactOpen,
      detailProject,
      isLoading,
      isTransitioning,
      reduceMotion,
    ],
  );

  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      gsap.set(slide, {
        autoAlpha: index === activeIndex ? 1 : 0,
        yPercent: 0,
        zIndex: index === activeIndex ? 2 : 1,
      });
    });
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex && !detailProject) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex, isLoading, detailProject]);

  useEffect(() => {
    const onWheel = (event) => {
      if (isLoading || detailProject || isTransitioning || contactOpen) return;
      event.preventDefault();
      if (scrollStateRef.current.lock) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      scrollStateRef.current.intent += Math.abs(event.deltaY);

      gsap.to(stageRef.current, {
        y: direction * -18,
        duration: reduceMotion ? 0.01 : 0.28,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      });

      if (scrollStateRef.current.intent > 110) {
        goToProject(activeIndex + direction, direction);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [
    activeIndex,
    contactOpen,
    detailProject,
    goToProject,
    isTransitioning,
    isLoading,
    reduceMotion,
  ]);

  useEffect(() => {
    const touchState = { startY: 0, startX: 0 };

    const onTouchStart = (e) => {
      touchState.startY = e.touches[0].clientY;
      touchState.startX = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
      if (isLoading || detailProject || isTransitioning || contactOpen) return;
      const dy = touchState.startY - e.changedTouches[0].clientY;
      const dx = touchState.startX - e.changedTouches[0].clientX;
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 56) {
        const direction = dy > 0 ? 1 : -1;
        goToProject(activeIndex + direction, direction);
      }
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [activeIndex, isLoading, detailProject, isTransitioning, contactOpen, goToProject]);

  const openProject = useCallback(() => {
    if (
      isLoading ||
      isTransitioning ||
      contactOpen ||
      detailProject ||
      !cardRef.current
    ) {
      return;
    }

    const sourceRect = cardRef.current.getBoundingClientRect();
    const targetRect = getDetailCardRect();
    setIsTransitioning(true);
    setDetailProject(activeProject);
    setActiveThumb(0);
    setImageFocus(false);
    setCaseStudyOpen(false);
    setDetailBg(activeProject.detailImage);
    setIncomingDetailBg(null);

    requestAnimationFrame(() => {
      const transitionCard = transitionCardRef.current;
      gsap.set(transitionCard, {
        display: "flex",
        left: sourceRect.left,
        top: sourceRect.top,
        width: sourceRect.width,
        height: sourceRect.height,
        backgroundColor: activeProject.color,
        color: activeProject.textColor || "#ffffff",
      });
      const transitionContent = transitionCard.querySelector(".project-card__content");
      const homeContent = cardRef.current?.querySelector(".project-card__content");
      const transitionYear = transitionCard.querySelector(".project-card__year");
      const homeYear = cardRef.current?.querySelector(".project-card__year");
      if (transitionContent && homeContent) {
        const homeContentRect = homeContent.getBoundingClientRect();
        const cardStyle = window.getComputedStyle(cardRef.current);
        const padLeft = parseFloat(cardStyle.paddingLeft);
        const padTop = parseFloat(cardStyle.paddingTop);
        gsap.set(transitionContent, {
          position: "absolute",
          left: padLeft,
          top: padTop,
          width: homeContentRect.width,
          height: homeContentRect.height,
          overflow: "visible",
        });
      }
      if (transitionYear && homeYear && homeContent) {
        const homeContentRect = homeContent.getBoundingClientRect();
        const yearRect = homeYear.getBoundingClientRect();
        gsap.set(transitionYear, {
          position: "absolute",
          left: yearRect.left - homeContentRect.left,
          top: yearRect.top - homeContentRect.top,
          marginTop: 0,
          marginLeft: 0,
        });
      }
      gsap.set(detailRef.current, { autoAlpha: 0 });
      gsap.set(".detail-view .identity, .back-button", { autoAlpha: 1 });
      gsap.set(".detail-focus-hide", { autoAlpha: 1 });
      gsap.set(".detail-card-real", { autoAlpha: 0 });
      gsap.set(".detail-scrim", { autoAlpha: 1 });
      gsap.set(".project-card--home .project-card__hint", { autoAlpha: 0 });
      gsap.set([contentRef.current, carouselRef.current], { autoAlpha: 0, y: 28 });
      gsap.set(".home-ui", { autoAlpha: 0 });

      gsap
        .timeline({
          defaults: {
            ease: "expo.inOut",
            duration: reduceMotion ? 0.01 : 0.68,
          },
          onComplete: () => {
            if (transitionContent) gsap.set(transitionContent, { clearProps: "position,left,top,width,height,overflow" });
            if (transitionYear) gsap.set(transitionYear, { clearProps: "position,left,top,marginTop,marginLeft" });
            gsap.set(transitionCard, { display: "none" });
            gsap.set(".detail-card-real", { autoAlpha: 1 });
            setIsTransitioning(false);
          },
        })
        .to(transitionCard, {
          left: 0,
          top: 0,
          width: "100vw",
          height: "100svh",
        })
        .set(detailRef.current, { autoAlpha: 1 })
        .to(transitionCard, {
          left: targetRect.left,
          top: targetRect.top,
          width: targetRect.width,
          height: targetRect.height,
        })
        .to(
          [contentRef.current, carouselRef.current],
          {
            autoAlpha: 1,
            y: 0,
            duration: reduceMotion ? 0.01 : 0.62,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.22",
        );
    });
  }, [isLoading, isTransitioning, contactOpen, detailProject, activeProject, reduceMotion]);

  const closeProject = useCallback(() => {
    if (imageFocus) {
      setImageFocus(false);
      setFocusedVideo(null);
      gsap.killTweensOf(".detail-bg-next");
      setIncomingDetailBg(null);
      setDetailBg(detailProject.detailImage);
      gsap
        .timeline({
          defaults: {
            duration: reduceMotion ? 0.01 : 0.42,
            ease: "power3.out",
          },
        })
        .to(".detail-scrim", { autoAlpha: 1 }, 0)
        .to(".detail-bottom-tv", { autoAlpha: 1 }, 0)
        .to(".detail-focus-hide", { autoAlpha: 1, y: 0, stagger: 0.045 }, 0.04);
      return;
    }

    if (isTransitioning || !detailProject) return;

    const project = detailProject;
    const detailCard = document.querySelector(".detail-card-real");
    const sourceRect = detailCard?.getBoundingClientRect() || getDetailCardRect();
    const targetRect = getHomeCardRect(cardRef.current);
    const transitionCard = transitionCardRef.current;

    setIsTransitioning(true);
    setImageFocus(false);

    gsap.set(transitionCard, {
      display: "flex",
      left: sourceRect.left,
      top: sourceRect.top,
      width: sourceRect.width,
      height: sourceRect.height,
      backgroundColor: project.color,
      color: project.textColor || "#ffffff",
    });
    gsap.set(detailCard, { autoAlpha: 0 });
    gsap.set(cardRef.current, { autoAlpha: 0 });

    gsap
      .timeline({
        defaults: {
          duration: reduceMotion ? 0.01 : 0.68,
          ease: "expo.inOut",
        },
        onComplete: () => {
          setDetailProject(null);
          setCaseStudyOpen(false);
          gsap.set(transitionCard, { display: "none" });
          gsap.set(cardRef.current, { autoAlpha: 1 });
          gsap.to(".project-card--home .project-card__hint", {
            autoAlpha: 1,
            duration: reduceMotion ? 0.01 : 0.36,
            ease: "power2.out",
          });
          gsap.set(detailRef.current, { autoAlpha: 0 });
          setIsTransitioning(false);
        },
      })
      .to(
        [contentRef.current, carouselRef.current],
        {
          autoAlpha: 0,
          y: 18,
          duration: reduceMotion ? 0.01 : 0.28,
          ease: "power2.out",
        },
        0,
      )
      .to(
        ".detail-view .identity, .back-button",
        {
          autoAlpha: 0,
          duration: reduceMotion ? 0.01 : 0.24,
          ease: "power2.out",
        },
        0,
      )
      .to(
        transitionCard,
        {
          left: 0,
          top: 0,
          width: "100vw",
          height: "100svh",
        },
        0.06,
      )
      .set(detailRef.current, { autoAlpha: 0 })
      .set(".home-ui", { autoAlpha: 1 })
      .to(transitionCard, {
        left: targetRect.left,
        top: targetRect.top,
        width: targetRect.width,
        height: targetRect.height,
      });
  }, [isTransitioning, detailProject, imageFocus, reduceMotion, activeProject]);

  const openCaseStudy = useCallback(() => {
    if (!detailProject?.caseStudy || caseStudyOpen || caseStudyTransitioning || !caseStudyCtaRef.current || !caseStudyRef.current) return;

    const sourceRect = caseStudyCtaRef.current.getBoundingClientRect();
    const isMobile = window.matchMedia("(max-width: 760px)").matches;
    const w = isMobile ? Math.min(window.innerWidth - 40, 420) : Math.min(680, window.innerWidth - 136);
    const h = isMobile ? Math.min(window.innerHeight - 80, 560) : Math.min(window.innerHeight - 100, 680);
    const targetRect = {
      left: (window.innerWidth - w) / 2,
      top: (window.innerHeight - h) / 2,
      width: w,
      height: h,
    };

    setCaseStudyOpen(true);
    setCaseStudyTransitioning(true);

    requestAnimationFrame(() => {
      if (!caseStudyRef.current || !caseStudyContentRef.current) return;
      caseStudyRef.current.scrollTop = 0;
      gsap.set(caseStudyRef.current, {
        display: "flex",
        left: sourceRect.left,
        top: sourceRect.top,
        width: sourceRect.width,
        height: sourceRect.height,
        backgroundColor: detailProject.color,
      });
      gsap.set(caseStudyContentRef.current, { autoAlpha: 0, y: 14 });
      gsap.set(caseStudyCtaRef.current, { autoAlpha: 0 });
      gsap.set(caseStudyBackdropRef.current, { display: "block", autoAlpha: 0 });

      gsap.timeline({
        defaults: { duration: reduceMotion ? 0.01 : 0.68, ease: "expo.inOut" },
        onComplete: () => setCaseStudyTransitioning(false),
      })
        .to(caseStudyBackdropRef.current, {
          autoAlpha: 1,
          duration: reduceMotion ? 0.01 : 0.48,
          ease: "power2.out",
        }, 0)
        .to(caseStudyRef.current, {
          left: targetRect.left,
          top: targetRect.top,
          width: targetRect.width,
          height: targetRect.height,
        }, 0)
        .to(caseStudyContentRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: reduceMotion ? 0.01 : 0.42,
          ease: "power3.out",
        }, 0.68);
    });
  }, [detailProject, caseStudyOpen, caseStudyTransitioning, reduceMotion]);

  const closeCaseStudy = useCallback(() => {
    if (!caseStudyOpen || caseStudyTransitioning || !caseStudyCtaRef.current || !caseStudyRef.current) return;

    const targetRect = caseStudyCtaRef.current.getBoundingClientRect();
    setCaseStudyTransitioning(true);

    gsap.killTweensOf([caseStudyRef.current, caseStudyContentRef.current, caseStudyBackdropRef.current]);
    gsap.set(caseStudyCtaRef.current, { autoAlpha: 0 });

    gsap.timeline({
      defaults: { duration: reduceMotion ? 0.01 : 0.64, ease: "expo.inOut" },
      onComplete: () => {
        gsap.set(caseStudyRef.current, { display: "none" });
        gsap.set(caseStudyBackdropRef.current, { display: "none" });
        gsap.set(caseStudyCtaRef.current, { autoAlpha: 1 });
        setCaseStudyOpen(false);
        setCaseStudyTransitioning(false);
      },
    })
      .to(caseStudyContentRef.current, {
        autoAlpha: 0,
        y: 10,
        duration: reduceMotion ? 0.01 : 0.2,
        ease: "power2.out",
      }, 0)
      .to(caseStudyRef.current, {
        left: targetRect.left,
        top: targetRect.top,
        width: targetRect.width,
        height: targetRect.height,
      }, 0.06)
      .to(caseStudyBackdropRef.current, {
        autoAlpha: 0,
        duration: reduceMotion ? 0.01 : 0.38,
        ease: "power2.in",
      }, 0.28);
  }, [caseStudyOpen, caseStudyTransitioning, reduceMotion]);

  useEffect(() => {
    const onKey = (e) => {
      if (isLoading || isTransitioning || contactOpen) return;
      if (detailProject) {
        if (e.key === "Escape") {
          if (caseStudyOpen) closeCaseStudy();
          else closeProject();
        }
        return;
      }
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        goToProject(activeIndex + 1, 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        goToProject(activeIndex - 1, -1);
      } else if (e.key === "Enter" || e.key === " ") {
        openProject();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, isLoading, detailProject, isTransitioning, contactOpen, caseStudyOpen, caseStudyTransitioning, goToProject, openProject, closeProject, closeCaseStudy]);

  const focusGalleryImage = (index) => {
    setActiveThumb(index);
    const item = getFullGallery(detailProject)[index];
    if (isGalleryVideo(item)) {
      setFocusedVideo(getGallerySrc(item));
      setDetailBgPortrait(false);
    } else {
      const src = getGallerySrc(item);
      setFocusedVideo(null);
      transitionDetailBackground(src, portraitSrcsRef.current.has(src));
    }
    if (imageFocus) return;

    setImageFocus(true);
    gsap
      .timeline({
        defaults: {
          duration: reduceMotion ? 0.01 : 0.34,
          ease: "power2.out",
        },
      })
      .to(".detail-focus-hide", { autoAlpha: 0, y: 16, stagger: 0.035 }, 0)
      .to(".detail-scrim", { autoAlpha: 0.36 }, 0.04)
      .to(".detail-bottom-tv", { autoAlpha: 0 }, 0.04);
  };

  const scrollCarousel = (direction) => {
    const track = carouselTrackRef.current;
    if (!track) return;

    const firstItem = track.querySelector("button");
    if (firstItem) {
      const gap = parseFloat(getComputedStyle(track).gap) || 10;
      const itemW = firstItem.offsetWidth + gap;
      const visible = Math.max(1, Math.round(track.clientWidth / itemW));
      track.scrollBy({ left: direction * itemW * visible, behavior: reduceMotion ? "auto" : "smooth" });
    } else {
      track.scrollBy({ left: direction * track.clientWidth * 0.72, behavior: reduceMotion ? "auto" : "smooth" });
    }
  };

  const handleCarouselWheel = (event) => {
    const track = carouselTrackRef.current;
    if (!track) return;

    event.preventDefault();
    track.scrollLeft += event.deltaX + event.deltaY;
  };

  const openContact = () => {
    if (
      contactOpen ||
      contactTransitioning ||
      isLoading ||
      isTransitioning ||
      detailProject ||
      !contactButtonRef.current
    ) {
      return;
    }

    const sourceRect = contactButtonRef.current.getBoundingClientRect();
    const targetRect = getContactPanelRect();

    setContactOpen(true);
    setContactTransitioning(true);

    requestAnimationFrame(() => {
      gsap.killTweensOf([cardRef.current, contactButtonRef.current]);
      gsap.set(contactPanelRef.current, {
        display: "block",
        left: sourceRect.left,
        top: sourceRect.top,
        width: sourceRect.width,
        height: sourceRect.height,
        backgroundColor: "#dfff00",
      });
      gsap.set(contactContentRef.current, { autoAlpha: 0, y: 18 });
      gsap.set(".project-card--home .project-card__content", {
        autoAlpha: 1,
        y: 0,
      });

      gsap
        .timeline({
          defaults: {
            duration: reduceMotion ? 0.01 : 0.72,
            ease: "expo.inOut",
          },
          onComplete: () => setContactTransitioning(false),
        })
        .to(contactButtonRef.current, { autoAlpha: 0, duration: 0.18 }, 0)
        .to(
          cardRef.current,
          {
            autoAlpha: 0,
            y: 22,
            scale: 0.985,
            duration: reduceMotion ? 0.01 : 0.38,
            ease: "power3.out",
          },
          0,
        )
        .to(
          contactPanelRef.current,
          {
            left: targetRect.left,
            top: targetRect.top,
            width: targetRect.width,
            height: targetRect.height,
          },
          0,
        )
        .to(
          contactContentRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: reduceMotion ? 0.01 : 0.42,
            ease: "power3.out",
          },
          0.72,
        );
    });
  };

  const closeContact = () => {
    if (!contactOpen || contactTransitioning || !contactButtonRef.current) return;

    const targetRect = contactButtonRef.current.getBoundingClientRect();
    const cardContent = cardRef.current?.querySelector(".project-card__content");

    setContactTransitioning(true);
    gsap.killTweensOf([
      cardRef.current,
      cardContent,
      contactButtonRef.current,
      contactPanelRef.current,
    ]);
    gsap.set(cardRef.current, { autoAlpha: 0, y: 18, scale: 0.992 });
    gsap.set(cardContent, { autoAlpha: 0, y: 18 });
    gsap.set(contactButtonRef.current, { autoAlpha: 0 });
    gsap.set(contactPanelRef.current, { backgroundColor: "#dfff00" });

    gsap
      .timeline({
        defaults: {
          duration: reduceMotion ? 0.01 : 0.7,
          ease: "expo.inOut",
        },
        onComplete: () => {
          gsap.set(contactPanelRef.current, { display: "none" });
          gsap.set(cardRef.current, { clearProps: "transform" });
          gsap.set(cardContent, { clearProps: "transform" });
          setContactOpen(false);
          setContactTransitioning(false);
        },
      })
      .to(
        contactContentRef.current,
        {
          autoAlpha: 0,
          y: 12,
          duration: reduceMotion ? 0.01 : 0.22,
          ease: "power2.out",
        },
        0,
      )
      .to(
        contactPanelRef.current,
        {
          backgroundColor: activeProject.color,
          left: targetRect.left,
          top: targetRect.top,
          width: targetRect.width,
          height: targetRect.height,
        },
        0.06,
      )
      .to(
        contactButtonRef.current,
        {
          autoAlpha: 1,
          duration: reduceMotion ? 0.01 : 0.16,
          ease: "power2.out",
        },
        0.64,
      )
      .to(
        cardRef.current,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: reduceMotion ? 0.01 : 0.62,
          ease: "power3.out",
        },
        0.38,
      )
      .to(
        cardContent,
        {
          autoAlpha: 1,
          y: 0,
          duration: reduceMotion ? 0.01 : 0.52,
          ease: "power3.out",
        },
        0.5,
      );
  };

  const submitContact = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "Contact portfolio";
    const message = formData.get("message")?.toString().trim() || "";
    const body = [
      `Adresse mail : ${email}`,
      "",
      "Message :",
      message,
    ].join("\n");

    window.location.href = `mailto:sonnymarcin@youngwildandpixels.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    closeContact();
  };

  const visibleProject = detailProject || activeProject;

  return (
    <main className="app">
      <section ref={stageRef} className="home-stage" aria-label="Projets">
        {projects.map((project, index) => (
          <article
            ref={(node) => {
              slidesRef.current[index] = node;
            }}
            className="project-slide"
            key={project.slug}
          >
            {project.heroImage && (
              <img className="slide-media slide-media--fallback" src={project.heroImage} alt="" />
            )}
            {project.heroVideo && (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                  if (el && el.readyState >= 3) videosReadyRef.current = true;
                }}
                className="slide-media slide-media--video"
                src={project.heroVideo}
                muted
                loop
                playsInline
                preload="auto"
                onCanPlayThrough={() => { videosReadyRef.current = true; }}
              />
            )}
            <span className="scrim" />
          </article>
        ))}
        <span className="home-bottom-tv" aria-hidden="true" />
      </section>

      {isLoading && (
        <section ref={loaderRef} className="loader" aria-label="Chargement">
          <div ref={loaderPanelRef} className="loader__panel">
            <div ref={loaderContentRef} className="loader__content">
              <div className="loader__brand">
                <strong>Sonny Marcin</strong>
                <span>Creative Developer</span>
              </div>
              <div className="loader__center">
                <span>2026</span>
                <strong>{scrambledPortfolio}</strong>
              </div>
              <div className="loader__progress">
                <span>Loading</span>
                <strong>{loadProgress}%</strong>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="home-ui">
        <Identity />
        <nav className="project-nav" aria-label="Navigation projets">
          <div className="project-nav__wheel">
            {projects.map((project, index) => {
              const offset = getWheelOffset(index, activeIndex, projects.length);
              const distance = Math.abs(offset);
              const isVisible = distance <= 3;

              return (
                <button
                  aria-current={index === activeIndex ? "true" : undefined}
                  aria-hidden={!isVisible}
                  className={isVisible ? "is-visible" : "is-hidden"}
                  key={project.slug}
                  onClick={() =>
                    goToProject(index, getWheelDirection(index, activeIndex))
                  }
                  style={{
                    "--wheel-offset": offset,
                    "--wheel-distance": distance,
                  }}
                  tabIndex={isVisible ? 0 : -1}
                  type="button"
                >
                  {index === activeIndex ? "- " : ""}
                  {project.navTitle}
                </button>
              );
            })}
          </div>
        </nav>
        <ProjectCard
          className="project-card--home"
          forwardedRef={cardRef}
          hidden={isTransitioning}
          onClick={openProject}
          project={activeProject}
        />
        <button
          ref={contactButtonRef}
          className="contact-button"
          onClick={openContact}
          style={{ backgroundColor: activeProject.color, color: activeProject.textColor || undefined }}
          type="button"
        >
          Contact
        </button>
        <button
          className="project-counter"
          onClick={() => goToProject((activeIndex + 1) % projects.length)}
          type="button"
          aria-label="Projet suivant"
        >
          <span className="project-counter__index">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="project-counter__bar" aria-hidden="true" />
          <span className="project-counter__total">
            {String(projects.length).padStart(2, "0")}
          </span>
        </button>
      </div>

      <button className="open-hit-area" onClick={openProject} type="button">
        <span>Voir {activeProject.navTitle}</span>
      </button>

      <section
        ref={contactPanelRef}
        className="contact-panel"
        aria-hidden={!contactOpen}
      >
        <div ref={contactContentRef} className="contact-panel__content">
          <button
            className="contact-panel__close"
            onClick={closeContact}
            type="button"
            aria-label="Fermer le formulaire de contact"
          >
            <span />
            <span />
          </button>
          <h2>Contact</h2>
          <form className="contact-form" onSubmit={submitContact}>
            <label>
              <span>Adresse mail</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              <span>Objet</span>
              <input name="subject" type="text" required />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows="5" required />
            </label>
            <button className="contact-form__submit" type="submit">
              Envoyer le message
            </button>
          </form>
        </div>
      </section>

      <section
        ref={detailRef}
        className={`detail-view${imageFocus ? " detail-view--focus" : ""}`}
        aria-hidden={!detailProject}
        style={{ pointerEvents: detailProject ? "auto" : "none" }}
      >
        {detailProject && (() => {
          const incomingPortrait = incomingDetailBg ? portraitSrcsRef.current.has(incomingDetailBg) : false;
          const showBlur = detailBgPortrait || incomingPortrait;
          const blurSrc = incomingPortrait ? incomingDetailBg : (detailBg || detailProject.detailImage);
          return (
          <>
            {showBlur && (
              <img
                className="detail-bg detail-bg-blur"
                src={blurSrc}
                aria-hidden="true"
                alt=""
              />
            )}
            <img
              className={`detail-bg detail-bg-current${detailBgPortrait ? " detail-bg--portrait" : ""}`}
              src={detailBg || detailProject.detailImage}
              alt=""
            />
            {incomingDetailBg && (
              <img
                className={`detail-bg detail-bg-next${incomingPortrait ? " detail-bg--portrait" : ""}`}
                src={incomingDetailBg}
                alt=""
              />
            )}
            {focusedVideo && (
              <video
                key={focusedVideo}
                className="detail-video-focus"
                src={focusedVideo}
                muted
                loop
                playsInline
                autoPlay
              />
            )}
            <span className="detail-scrim" />
            <span className="detail-bottom-tv" aria-hidden="true" />
            <Identity onClick={closeProject} />
            <button
              className="back-button"
              onClick={closeProject}
              style={{
                "--project-color": detailProject.color,
                backgroundColor: detailProject.color,
                color: detailProject.textColor || undefined,
                borderColor: detailProject.textColor ? `${detailProject.textColor}cc` : undefined,
              }}
              type="button"
            >
              Retour
            </button>
            <ProjectCard
              className="project-card--detail detail-card-real detail-focus-hide"
              hidden={isTransitioning}
              project={detailProject}
            />
            {detailProject.url ? (
              <a
                href={detailProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__hint project-card__live-link detail-focus-hide"
              >
                Voir le site live
                <span />
              </a>
            ) : detailProject.comingSoon ? (
              <span className="project-card__hint project-card__live-link detail-focus-hide" style={{ opacity: 0.5, cursor: "default" }}>
                Site coming soon
              </span>
            ) : null}
            <div ref={contentRef} className="detail-copy detail-focus-hide">
              <h1>{detailProject.navTitle}</h1>
              <p>{detailProject.description}</p>
              {detailProject.caseStudy && (
                <button
                  ref={caseStudyCtaRef}
                  className="detail-casestudy-cta"
                  onClick={openCaseStudy}
                  type="button"
                  style={{
                    backgroundColor: detailProject.color,
                    color: detailProject.textColor || "#ffffff",
                  }}
                >
                  Étude de cas
                </button>
              )}
            </div>
            <div ref={carouselRef} className="carousel" aria-label="Images projet">
              <button
                className="carousel-control carousel-control--prev"
                onClick={() => scrollCarousel(-1)}
                type="button"
                aria-label="Images precedentes"
              >
                <span aria-hidden="true" />
              </button>
              <div
                ref={carouselTrackRef}
                className="carousel-track"
                onWheel={handleCarouselWheel}
              >
                {getFullGallery(detailProject).map((item, index) => (
                  <CarouselThumb
                    key={getGallerySrc(item)}
                    item={item}
                    isActive={index === activeThumb}
                    onActivate={() => focusGalleryImage(index)}
                    portraitSrcsRef={portraitSrcsRef}
                  />
                ))}
              </div>
              <button
                className="carousel-control carousel-control--next"
                onClick={() => scrollCarousel(1)}
                type="button"
                aria-label="Images suivantes"
              >
                <span aria-hidden="true" />
              </button>
            </div>
            {detailProject.caseStudy && (
              <div ref={caseStudyBackdropRef} className="detail-casestudy-backdrop" onClick={closeCaseStudy} aria-hidden="true" />
            )}
            {detailProject.caseStudy && (
              <section
                ref={caseStudyRef}
                className="detail-casestudy"
                aria-hidden={!caseStudyOpen}
                style={{ "--cs-color": detailProject.color, "--cs-text": detailProject.textColor || "#ffffff" }}
              >
                <div ref={caseStudyContentRef} className="detail-casestudy__inner">
                  <div className="detail-casestudy__topbar">
                    <span className="detail-casestudy__label">Étude de cas</span>
                    <button
                      className="detail-casestudy__close"
                      onClick={closeCaseStudy}
                      type="button"
                      aria-label="Fermer l'étude de cas"
                    >
                      <span /><span />
                    </button>
                  </div>

                  {(() => {
                    const media = getCsMedia(detailProject);
                    const cs = detailProject.caseStudy;
                    return (
                      <>
                        <h2 className="detail-casestudy__project-title">{detailProject.navTitle}</h2>
                        {cs.subtitle && <p className="detail-casestudy__subtitle">{cs.subtitle}</p>}

                        {cs.context && (
                          <div className="detail-casestudy__block">
                            <p className="detail-casestudy__block-label">Contexte</p>
                            <p className="detail-casestudy__body">{cs.context}</p>
                          </div>
                        )}

                        <div className="detail-casestudy__block">
                          <p className="detail-casestudy__block-label">Le problème</p>
                          <p className="detail-casestudy__body">{cs.problem}</p>
                        </div>

                        {media[0] && (
                          <div className="detail-casestudy__img-wrap">
                            <CsMediaItem item={media[0]} />
                            {media[1] && <CsMediaItem item={media[1]} />}
                          </div>
                        )}

                        <div className="detail-casestudy__block">
                          <p className="detail-casestudy__block-label">Ma démarche</p>
                          <h3 className="detail-casestudy__block-title">Comment on l'a construit</h3>
                          <div className="detail-casestudy__steps">
                            {cs.steps.map((step) => (
                              <div key={step.num} className="detail-casestudy__step">
                                <span className="detail-casestudy__step-num">{step.num}</span>
                                <strong>{step.title}</strong>
                                <p>{step.text}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {media[2] && (
                          <div className="detail-casestudy__img-wrap detail-casestudy__img-wrap--single">
                            <CsMediaItem item={media[2]} />
                          </div>
                        )}

                        <div className="detail-casestudy__block">
                          <p className="detail-casestudy__block-label">Résultat</p>
                          <p className="detail-casestudy__body">{cs.result}</p>
                        </div>

                        {cs.learnings && (
                          <div className="detail-casestudy__block">
                            <p className="detail-casestudy__block-label">Ce que j'ai appris</p>
                            <p className="detail-casestudy__body">{cs.learnings}</p>
                          </div>
                        )}

                        {cs.role && (
                          <div className="detail-casestudy__block">
                            <p className="detail-casestudy__block-label">Mon rôle — Product Designer</p>
                            <div className="detail-casestudy__role-tags">
                              {cs.role.map((r) => (
                                <span key={r} className="detail-casestudy__role-tag">{r}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              </section>
            )}
          </>
          );
        })()}
      </section>

      <div
        ref={transitionCardRef}
        className="transition-card"
        aria-hidden="true"
      >
        <ProjectCard className="project-card--transition" project={visibleProject} />
      </div>
    </main>
  );
}

export default App;
