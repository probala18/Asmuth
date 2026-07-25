import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface HeroScene {
  id: string;
  video: string;
  category: string;
  product: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const heroScenes: HeroScene[] = [
  {
    id: "computing",
    video: "/visuals/laptop.mp4",
    category: "COMPUTING",
    product: "genCART Laptop Air",
    headline: "Discover Better.\nChoose Smarter.",
    description: "M-class silicon. Edge-to-edge OLED. 22-hour battery life engineered for modern workflows.",
    ctaText: "Explore Product",
    ctaLink: "/product/genCART-laptop-air",
  },
  {
    id: "audio",
    video: "/visuals/headphones.mp4",
    category: "AUDIO",
    product: "genCART Buds Pro",
    headline: "Compare What\nMatters.",
    description: "Reference-grade acoustic tuning with adaptive ANC that disappears into your day.",
    ctaText: "Explore Product",
    ctaLink: "/product/genCART-buds-pro",
  },
  {
    id: "wearables",
    video: "/visuals/wearables.mp4",
    category: "WEARABLES",
    product: "genCART Watch X",
    headline: "Find What\nFits You.",
    description: "Quiet intelligence on your wrist — medical-grade vitals tracking wrapped in titanium.",
    ctaText: "Explore Product",
    ctaLink: "/product/genCART-watch-x",
  },
  {
    id: "mobile",
    video: "/visuals/phone.mp4",
    category: "MOBILE",
    product: "genCART Phone 15",
    headline: "Make Your Next Choice\nWith Confidence.",
    description: "Silicon, software, and signal in perfect step. Engineered for absolute clarity.",
    ctaText: "Explore Product",
    ctaLink: "/product/genCART-phone-15",
  },
];

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const outroRef = useRef<HTMLDivElement>(null);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Play all videos muted to keep them ready and buffered
    videoRefs.current.forEach((v) => {
      if (v) {
        v.play().catch(() => {});
      }
    });

    const numScenes = heroScenes.length;

    // GSAP scrubbed timeline for pinning and synchronized video + text crossfades
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${numScenes * 100}%`,
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        onUpdate: (self) => {
          if (!isMounted) return;
          const p = self.progress;
          setProgressPercent(Math.min(100, Math.round(p * 100)));
          const idx = Math.min(numScenes - 1, Math.floor(p * numScenes));
          setActiveSceneIndex(idx);
        },
      },
    });

    // Initialize initial states for text and video layers using autoAlpha
    videoRefs.current.forEach((v, idx) => {
      if (v) gsap.set(v, { autoAlpha: idx === 0 ? 1 : 0 });
    });
    textRefs.current.forEach((el, idx) => {
      if (el) {
        gsap.set(el, { autoAlpha: idx === 0 ? 1 : 0, y: idx === 0 ? 0 : 25 });
      }
    });
    if (outroRef.current) {
      gsap.set(outroRef.current, { autoAlpha: 0, y: 25 });
    }

    // Step-by-step sequential crossfade keyframes (zero overlap)
    const stepDuration = 1 / numScenes;

    heroScenes.forEach((_, i) => {
      if (i < numScenes - 1) {
        const curVideo = videoRefs.current[i];
        const nextVideo = videoRefs.current[i + 1];
        const curText = textRefs.current[i];
        const nextText = textRefs.current[i + 1];
        const time = (i + 0.65) * stepDuration;

        tl.to(curVideo, { autoAlpha: 0, duration: stepDuration * 0.5, ease: "sine.inOut" }, time)
          .to(nextVideo, { autoAlpha: 1, duration: stepDuration * 0.5, ease: "sine.inOut" }, time)
          .to(curText, { autoAlpha: 0, y: -20, duration: stepDuration * 0.3, ease: "power2.in" }, time)
          .to(nextText, { autoAlpha: 1, y: 0, duration: stepDuration * 0.35, ease: "power2.out" }, time + stepDuration * 0.32);
      }
    });

    // Final scene transition into Outro panel
    const lastText = textRefs.current[numScenes - 1];
    const outroTime = (numScenes - 0.45) * stepDuration;
    if (lastText && outroRef.current) {
      tl.to(lastText, { autoAlpha: 0, y: -20, duration: stepDuration * 0.3, ease: "power2.in" }, outroTime)
        .to(outroRef.current, { autoAlpha: 1, y: 0, duration: stepDuration * 0.35, ease: "power2.out" }, outroTime + stepDuration * 0.32);
    }

    // Refresh ScrollTrigger to ensure pin spacing matches layout
    const timer = setTimeout(() => {
      if (isMounted) ScrollTrigger.refresh();
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      tl.scrollTrigger?.kill(true);
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} data-no-batch className="relative w-full h-screen overflow-hidden bg-background text-foreground z-10">
      {/* 1. CINEMATIC VIDEO BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroScenes.map((scene, index) => (
          <video
            key={scene.id}
            ref={(el) => (videoRefs.current[index] = el)}
            src={scene.video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 size-full object-cover transition-transform duration-700 pointer-events-none"
            style={{
              opacity: index === 0 ? 1 : 0,
              visibility: index === 0 ? "visible" : "hidden",
            }}
          />
        ))}

        {/* Dynamic Light/Dark Theme Ambient Lighting & Mask Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30 dark:from-background dark:via-background/70 dark:to-background/40 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow opacity-60 dark:opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-40 pointer-events-none" />
      </div>

      {/* 2. HUD TOP EYEBROW & HERO NAV CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-8 flex flex-col justify-between h-full pointer-events-none">
        
        {/* Top Tagline */}
        <div className="flex items-center justify-between gap-4 pt-4 pointer-events-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 surface-card text-xs font-mono-tech uppercase tracking-[0.25em] text-[var(--emerald-accent)] border border-[var(--hairline)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--emerald-accent)] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full size-2 bg-[var(--emerald-accent)]" />
            </span>
            THE FUTURE OF PRODUCT DISCOVERY
          </div>

          {/* Active Category Pill */}
          <div className="hidden sm:flex items-center gap-2 rounded-full px-4 py-1.5 surface-card border border-[var(--hairline)]">
            <Sparkles className="size-3.5 text-[var(--cyan-accent)]" />
            <span className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground">
              {progressPercent >= 90 ? "EXPLORE ALL" : heroScenes[activeSceneIndex].category}
            </span>
          </div>
        </div>

        {/* 3. MAIN CENTER NARRATIVE CONTENT PANELS (SYNCHRONIZED CROSSFADE) */}
        <div className="my-auto py-8 max-w-3xl relative min-h-[300px] flex items-center">
          
          {/* Individual Scene Text Panels */}
          {heroScenes.map((scene, index) => (
            <div
              key={scene.id}
              ref={(el) => (textRefs.current[index] = el)}
              className="absolute inset-x-0 space-y-6 pointer-events-auto"
              style={{
                opacity: index === 0 ? 1 : 0,
                visibility: index === 0 ? "visible" : "hidden",
              }}
            >
              {/* Category Badge */}
              <div className="inline-block font-mono-tech text-xs uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
                {scene.category} · {scene.product}
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[0.98] tracking-tight whitespace-pre-line text-foreground">
                {scene.headline}
              </h1>

              {/* Supporting Copy */}
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
                {scene.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to={scene.ctaLink}>
                  <ShimmerButton className="btn-accent">
                    {scene.ctaText}
                    <ArrowRight className="size-4" />
                  </ShimmerButton>
                </Link>
                <Link
                  to="/guides"
                  className="btn-ghost-glow rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
                >
                  Explore Guides
                </Link>
              </div>
            </div>
          ))}

          {/* Outro Panel */}
          <div
            ref={outroRef}
            className="absolute inset-x-0 space-y-6 pointer-events-auto"
            style={{
              opacity: 0,
              visibility: "hidden",
            }}
          >
            <div className="inline-block font-mono-tech text-xs uppercase tracking-[0.3em] text-[var(--cyan-accent)]">
              CHOICE CONFIDENCE GUARANTEED
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-foreground">
              Ready to Find Your <br />
              <span className="text-accent-gradient">Next Favorite</span>?
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-lg">
              Explore our editorially curated rankings, comparison matrices, and signal-graded reviews.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/collections">
                <ShimmerButton className="btn-accent">
                  Explore All Products
                  <ArrowRight className="size-4" />
                </ShimmerButton>
              </Link>
              <Link
                to="/best-of-2026"
                className="btn-ghost-glow rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
              >
                View Editor's Picks
              </Link>
            </div>
          </div>

        </div>

        {/* 4. SCROLL PROGRESS HUD BOTTOM BAR */}
        <div className="flex items-center justify-between gap-6 pb-4 pt-4 border-t border-[var(--hairline)]/50 pointer-events-auto">
          {/* Scene counter */}
          <div className="font-mono-tech text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <span className="text-foreground font-semibold">0{activeSceneIndex + 1}</span>
            <span>/</span>
            <span>04</span>
          </div>

          {/* Progress bar line */}
          <div className="flex-1 max-w-md h-1 rounded-full bg-[var(--surface-2)] overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[var(--emerald-accent)] to-[var(--cyan-accent)] transition-all duration-200 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Scroll Cue */}
          <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground hidden sm:block">
            {progressPercent >= 90 ? "SCROLL TO EXPLORE" : "SCROLL DOWN"}
          </div>
        </div>

      </div>
    </div>
  );
}
