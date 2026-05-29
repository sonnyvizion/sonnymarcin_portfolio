import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

const projects = [
  {
    slug: "domaine-arimont",
    navTitle: "Le Domaine d'Arimont",
    title: "Arimont",
    category: "Site vitrine",
    tags: ["Hospitality", "Booking"],
    yearLabel: "26'",
    color: "#7B6647",
    heroImage: "https://picsum.photos/seed/arimont/2200/1400",
    detailImage: "https://picsum.photos/seed/arimont-detail/2200/1400",
    gallery: [
      "https://picsum.photos/seed/arimont-1/640/420",
      "https://picsum.photos/seed/arimont-2/640/420",
      "https://picsum.photos/seed/arimont-3/640/420",
      "https://picsum.photos/seed/arimont-4/640/420",
      "https://picsum.photos/seed/arimont-5/640/420",
      "https://picsum.photos/seed/arimont-6/640/420",
    ],
    description:
      "Une experience digitale temporaire pour presenter un lieu, clarifier son positionnement et guider les visiteurs vers une prise de contact simple.",
  },
  {
    slug: "holora",
    navTitle: "Holora",
    title: "Holora",
    category: "Brand website",
    tags: ["Identity", "Webflow"],
    yearLabel: "26'",
    color: "#B24774",
    heroImage: "https://picsum.photos/seed/holora/2200/1400",
    detailImage: "https://picsum.photos/seed/holora-detail/2200/1400",
    gallery: [
      "https://picsum.photos/seed/holora-1/640/420",
      "https://picsum.photos/seed/holora-2/640/420",
      "https://picsum.photos/seed/holora-3/640/420",
      "https://picsum.photos/seed/holora-4/640/420",
      "https://picsum.photos/seed/holora-5/640/420",
      "https://picsum.photos/seed/holora-6/640/420",
    ],
    description:
      "Un univers de marque deploye sur une interface claire, avec une attention particuliere portee au rythme, aux contrastes et a la conversion.",
  },
  {
    slug: "young-wild-pixels",
    navTitle: "Young, Wild & Pixels",
    title: "Young, Wild & Pixels",
    category: "Creative platform",
    tags: ["Art direction", "Motion"],
    yearLabel: "26'",
    color: "#D65A35",
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
      "Une direction interactive expressive, concue pour donner de l'impact aux contenus tout en gardant une navigation rapide et lisible.",
  },
  {
    slug: "el-conciergio",
    navTitle: "El Conciergio",
    title: "Conciergio",
    category: "Shopify website",
    tags: ["Whatsapp app", "IA generation"],
    yearLabel: "26'",
    color: "#20C934",
    heroImage: "https://picsum.photos/seed/conciergio/2200/1400",
    detailImage: "https://picsum.photos/seed/conciergio-detail/2200/1400",
    gallery: [
      "https://picsum.photos/seed/conciergio-1/640/420",
      "https://picsum.photos/seed/conciergio-2/640/420",
      "https://picsum.photos/seed/conciergio-3/640/420",
      "https://picsum.photos/seed/conciergio-4/640/420",
      "https://picsum.photos/seed/conciergio-5/640/420",
      "https://picsum.photos/seed/conciergio-6/640/420",
    ],
    description:
      "El Conciergio est un site vitrine one page concu pour presenter une solution de conciergerie automatisee via WhatsApp, pensee pour les Airbnb, gites, B&B et hebergements touristiques.",
  },
  {
    slug: "hormone-concept",
    navTitle: "Hormone Concept",
    title: "Hormone Concept",
    category: "Shopify website",
    tags: ["Shopify", "IA generation"],
    yearLabel: "26'",
    color: "#2F86E9",
    heroImage: "https://picsum.photos/seed/hormone/2200/1400",
    detailImage: "https://picsum.photos/seed/hormone-detail/2200/1400",
    gallery: [
      "https://picsum.photos/seed/hormone-1/640/420",
      "https://picsum.photos/seed/hormone-2/640/420",
      "https://picsum.photos/seed/hormone-3/640/420",
      "https://picsum.photos/seed/hormone-4/640/420",
      "https://picsum.photos/seed/hormone-5/640/420",
      "https://picsum.photos/seed/hormone-6/640/420",
    ],
    description:
      "Une boutique conceptuelle temporaire pour presenter une selection produit, installer un imaginaire fort et guider l'utilisateur vers l'achat.",
  },
  {
    slug: "kozy-sneakers",
    navTitle: "Kozy Sneakers",
    title: "Kozy Sneakers",
    category: "E-commerce",
    tags: ["Shopify", "Sneakers"],
    yearLabel: "26'",
    color: "#4E58B8",
    heroImage: "https://picsum.photos/seed/kozy/2200/1400",
    detailImage: "https://picsum.photos/seed/kozy-detail/2200/1400",
    gallery: [
      "https://picsum.photos/seed/kozy-1/640/420",
      "https://picsum.photos/seed/kozy-2/640/420",
      "https://picsum.photos/seed/kozy-3/640/420",
      "https://picsum.photos/seed/kozy-4/640/420",
      "https://picsum.photos/seed/kozy-5/640/420",
      "https://picsum.photos/seed/kozy-6/640/420",
    ],
    description:
      "Une experience e-commerce temporaire avec une lecture produit immediate, une direction visuelle tendue et un tunnel simplifie.",
  },
  {
    slug: "brenda-company",
    navTitle: "Brenda Company",
    title: "Brenda Company",
    category: "Corporate website",
    tags: ["Brand", "CMS"],
    yearLabel: "26'",
    color: "#8E54E9",
    heroImage: "https://picsum.photos/seed/brenda/2200/1400",
    detailImage: "https://picsum.photos/seed/brenda-detail/2200/1400",
    gallery: [
      "https://picsum.photos/seed/brenda-1/640/420",
      "https://picsum.photos/seed/brenda-2/640/420",
      "https://picsum.photos/seed/brenda-3/640/420",
      "https://picsum.photos/seed/brenda-4/640/420",
      "https://picsum.photos/seed/brenda-5/640/420",
      "https://picsum.photos/seed/brenda-6/640/420",
    ],
    description:
      "Une presence corporate temporaire, structuree autour d'une proposition claire, de contenus courts et d'une interface facile a maintenir.",
  },
  {
    slug: "le-rougail",
    navTitle: "Le Rougail",
    title: "Le Rougail",
    category: "Restaurant website",
    tags: ["Booking", "Menu"],
    yearLabel: "26'",
    color: "#C43F2F",
    heroImage: "https://picsum.photos/seed/rougail/2200/1400",
    detailImage: "https://picsum.photos/seed/rougail-detail/2200/1400",
    gallery: [
      "https://picsum.photos/seed/rougail-1/640/420",
      "https://picsum.photos/seed/rougail-2/640/420",
      "https://picsum.photos/seed/rougail-3/640/420",
      "https://picsum.photos/seed/rougail-4/640/420",
      "https://picsum.photos/seed/rougail-5/640/420",
      "https://picsum.photos/seed/rougail-6/640/420",
    ],
    description:
      "Un site restaurant temporaire pense pour faire comprendre l'ambiance, consulter rapidement la carte et declencher une reservation.",
  },
];

function getDetailCardRect() {
  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  if (isMobile) {
    return {
      left: 20,
      top: window.innerHeight - 304,
      width: Math.min(window.innerWidth - 40, 420),
      height: 244,
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
      top: window.innerHeight - 348,
      width: window.innerWidth - 40,
      height: 244,
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
    ? Math.min(window.innerHeight - 96, 654)
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
      style={{ backgroundColor: project.color }}
      onClick={onClick}
      type="button"
      aria-label={`Voir le projet ${project.navTitle}`}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
    >
      <span className="project-card__content">
        <span className="project-card__category card-motion-label">
          {project.category}
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

function App() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [detailProject, setDetailProject] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);
  const [imageFocus, setImageFocus] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTransitioning, setContactTransitioning] = useState(false);
  const [detailBg, setDetailBg] = useState(null);
  const [incomingDetailBg, setIncomingDetailBg] = useState(null);
  const stageRef = useRef(null);
  const slidesRef = useRef([]);
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
        if (current >= 100) {
          window.clearInterval(interval);
          return 100;
        }

        const increment = current > 90 ? 1 : current > 62 ? 3 : 5;
        return Math.min(100, current + increment);
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

  const transitionDetailBackground = (nextImage) => {
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
      const currentImage = currentSlide.querySelector("img");
      const nextImage = nextSlide.querySelector("img");
      if (!currentSlide || !nextSlide) return;

      scrollStateRef.current.lock = true;
      gsap.killTweensOf(stageRef.current);
      gsap.set(stageRef.current, { y: 0 });
      gsap.killTweensOf([
        currentSlide,
        nextSlide,
        currentImage,
        nextImage,
        cardRef.current,
      ]);
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
          cardRef.current,
          {
            backgroundColor: projects[nextIndex].color,
            duration: reduceMotion ? 0.01 : 0.58,
            ease: "power3.inOut",
          },
          0.14,
        )
        .call(
          () => {
            setActiveIndex(nextIndex);
            requestAnimationFrame(() => {
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
          0.34,
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
      });
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
      transitionDetailBackground(detailProject.detailImage);
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

  useEffect(() => {
    const onKey = (e) => {
      if (isLoading || isTransitioning || contactOpen) return;
      if (detailProject) {
        if (e.key === "Escape") closeProject();
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
  }, [activeIndex, isLoading, detailProject, isTransitioning, contactOpen, goToProject, openProject, closeProject]);

  const focusGalleryImage = (index) => {
    setActiveThumb(index);
    transitionDetailBackground(detailProject.gallery[index]);
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

    track.scrollBy({
      left: direction * track.clientWidth * 0.72,
      behavior: reduceMotion ? "auto" : "smooth",
    });
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
            <img src={project.heroImage} alt="" />
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
                <strong>Portfolio</strong>
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
          style={{ backgroundColor: activeProject.color }}
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
        className="detail-view"
        aria-hidden={!detailProject}
        style={{ pointerEvents: detailProject ? "auto" : "none" }}
      >
        {detailProject && (
          <>
            <img
              className="detail-bg detail-bg-current"
              src={detailBg || detailProject.detailImage}
              alt=""
            />
            {incomingDetailBg && (
              <img
                className="detail-bg detail-bg-next"
                src={incomingDetailBg}
                alt=""
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
            <div ref={contentRef} className="detail-copy detail-focus-hide">
              <h1>{detailProject.navTitle}</h1>
              <p>{detailProject.description}</p>
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
                {detailProject.gallery.map((image, index) => (
                  <button
                    className={index === activeThumb ? "is-active" : ""}
                    key={image}
                    onClick={(event) => {
                      focusGalleryImage(index);
                      event.currentTarget.scrollIntoView({
                        behavior: reduceMotion ? "auto" : "smooth",
                        block: "nearest",
                        inline: "nearest",
                      });
                    }}
                    type="button"
                  >
                    <img src={image} alt={`Apercu ${index + 1} du projet`} />
                  </button>
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
          </>
        )}
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
