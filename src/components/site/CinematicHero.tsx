import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
      return;
    }

    const masterCtx = gsap.context(() => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.play().catch(() => {});
        }
      });

      const numScenes = heroScenes.length;
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const desktopCtx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: `+=${numScenes * 100}%`,
              pin: true,
              pinSpacing: true,
              scrub: 0.5,
              onUpdate: (self) => {
                const p = self.progress;
                setProgressPercent(Math.min(100, Math.round(p * 100)));
                const idx = Math.min(numScenes - 1, Math.floor(p * numScenes));
                setActiveSceneIndex(idx);
              },
            },
          });

          videoRefs.current.forEach((video, idx) => {
            if (video) gsap.set(video, { autoAlpha: idx === 0 ? 1 : 0, scale: 1, y: 0 });
          });
          textRefs.current.forEach((el, idx) => {
            if (el) {
              gsap.set(el, { autoAlpha: idx === 0 ? 1 : 0, y: idx === 0 ? 0 : 24, scale: 1 });
            }
          });
          if (outroRef.current) {
            gsap.set(outroRef.current, { autoAlpha: 0, y: 24, scale: 1 });
          }

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

          const lastText = textRefs.current[numScenes - 1];
          const outroTime = (numScenes - 0.45) * stepDuration;
          if (lastText && outroRef.current) {
            tl.to(lastText, { autoAlpha: 0, y: -20, duration: stepDuration * 0.3, ease: "power2.in" }, outroTime)
              .to(outroRef.current, { autoAlpha: 1, y: 0, duration: stepDuration * 0.35, ease: "power2.out" }, outroTime + stepDuration * 0.32);
          }

          return () => {
            tl.scrollTrigger?.kill(true);
            tl.kill();
          };
        }, container);

        return () => desktopCtx.revert();
      });

      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        const tabletCtx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: `+=${numScenes * 80}%`,
              pin: true,
              pinSpacing: true,
              scrub: 0.6,
              onUpdate: (self) => {
                const p = self.progress;
                setProgressPercent(Math.min(100, Math.round(p * 100)));
                const idx = Math.min(numScenes - 1, Math.floor(p * numScenes));
                setActiveSceneIndex(idx);
              },
            },
          });

          videoRefs.current.forEach((video, idx) => {
            if (video) gsap.set(video, { autoAlpha: idx === 0 ? 1 : 0, scale: 1.01, y: 0 });
          });
          textRefs.current.forEach((el, idx) => {
            if (el) {
              gsap.set(el, { autoAlpha: idx === 0 ? 1 : 0, y: idx === 0 ? 0 : 16, scale: 1 });
            }
          });
          if (outroRef.current) {
            gsap.set(outroRef.current, { autoAlpha: 0, y: 16, scale: 1 });
          }

          const stepDuration = 1 / numScenes;

          heroScenes.forEach((_, i) => {
            if (i < numScenes - 1) {
              const curVideo = videoRefs.current[i];
              const nextVideo = videoRefs.current[i + 1];
              const curText = textRefs.current[i];
              const nextText = textRefs.current[i + 1];
              const time = (i + 0.6) * stepDuration;

              tl.to(curVideo, { autoAlpha: 0, duration: stepDuration * 0.35, ease: "sine.inOut" }, time)
                .to(nextVideo, { autoAlpha: 1, duration: stepDuration * 0.35, ease: "sine.inOut" }, time)
                .to(curText, { autoAlpha: 0, y: -12, duration: stepDuration * 0.25, ease: "power2.in" }, time)
                .to(nextText, { autoAlpha: 1, y: 0, duration: stepDuration * 0.25, ease: "power2.out" }, time + stepDuration * 0.2);
            }
          });

          const lastText = textRefs.current[numScenes - 1];
          const outroTime = (numScenes - 0.45) * stepDuration;
          if (lastText && outroRef.current) {
            tl.to(lastText, { autoAlpha: 0, y: -12, duration: stepDuration * 0.22, ease: "power2.in" }, outroTime)
              .to(outroRef.current, { autoAlpha: 1, y: 0, duration: stepDuration * 0.24, ease: "power2.out" }, outroTime + stepDuration * 0.18);
          }

          return () => {
            tl.scrollTrigger?.kill(true);
            tl.kill();
          };
        }, container);

        return () => tabletCtx.revert();
      });

      mm.add("(max-width: 767px)", () => {
        const mobileCtx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "+=160%",
              scrub: 0.45,
              onUpdate: (self) => {
                const p = self.progress;
                setProgressPercent(Math.min(100, Math.round(p * 100)));
                const idx = Math.min(numScenes - 1, Math.floor(p * numScenes));
                setActiveSceneIndex(idx);
              },
            },
          });

          videoRefs.current.forEach((video, idx) => {
            if (video) gsap.set(video, { autoAlpha: idx === 0 ? 1 : 0, scale: 1.02, y: 0 });
          });
          textRefs.current.forEach((el, idx) => {
            if (el) {
              gsap.set(el, { autoAlpha: idx === 0 ? 1 : 0, y: idx === 0 ? 0 : 18, scale: 1 });
            }
          });
          if (outroRef.current) {
            gsap.set(outroRef.current, { autoAlpha: 0, y: 18, scale: 1 });
          }

          const stepDuration = 0.22;

          heroScenes.forEach((_, i) => {
            const panel = textRefs.current[i];
            if (!panel) return;

            const start = i * stepDuration;
            const fadeOut = start + stepDuration * 0.7;

            tl.to(panel, { autoAlpha: 1, y: 0, duration: stepDuration * 0.55, ease: "power2.out" }, start)
              .to(panel, { autoAlpha: 0, y: -10, duration: stepDuration * 0.4, ease: "power2.in" }, fadeOut);
          });

          tl.to(container, { scale: 0.995, ease: "none" }, 0);
          tl.to(videoRefs.current[0], { scale: 1.02, yPercent: 3, ease: "none" }, 0);

          return () => {
            tl.scrollTrigger?.kill(true);
            tl.kill();
          };
        }, container);

        return () => mobileCtx.revert();
      });

      return () => {
        mm.revert();
      };
    }, container);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      masterCtx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} data-no-batch className="relative w-full min-h-[100svh] sm:h-screen overflow-hidden bg-background text-foreground z-10">
      {/* 1. CINEMATIC VIDEO BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroScenes.map((scene, index) => (
          <video
            key={scene.id}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 pb-6 sm:pb-8 flex flex-col justify-between h-full pointer-events-none">
        <div className="flex items-center justify-between gap-3 sm:gap-4 pt-4 pointer-events-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 sm:px-3.5 sm:py-1.5 surface-card text-[10px] sm:text-xs font-mono-tech uppercase tracking-[0.25em] text-[var(--emerald-accent)] border border-[var(--hairline)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--emerald-accent)] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full size-2 bg-[var(--emerald-accent)]" />
            </span>
            THE FUTURE OF PRODUCT DISCOVERY
          </div>

          <div className="hidden sm:flex items-center gap-2 rounded-full px-4 py-1.5 surface-card border border-[var(--hairline)]">
            <Sparkles className="size-3.5 text-[var(--cyan-accent)]" />
            <span className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground">
              {progressPercent >= 90 ? "EXPLORE ALL" : heroScenes[activeSceneIndex].category}
            </span>
          </div>
        </div>

        <div className="my-auto py-6 sm:py-8 max-w-3xl relative min-h-[260px] sm:min-h-[300px] flex items-center">
          {heroScenes.map((scene, index) => (
            <div
              key={scene.id}
              ref={(el) => {
                textRefs.current[index] = el;
              }}
              className="absolute inset-x-0 space-y-5 sm:space-y-6 pointer-events-auto"
              style={{
                opacity: index === 0 ? 1 : 0,
                visibility: index === 0 ? "visible" : "hidden",
              }}
            >
              <div className="inline-block font-mono-tech text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
                {scene.category} · {scene.product}
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold leading-[0.98] tracking-tight whitespace-pre-line text-foreground">
                {scene.headline}
              </h1>

              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                {scene.description}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-2">
                <Link href={scene.ctaLink}>
                  <ShimmerButton className="btn-accent">
                    {scene.ctaText}
                    <ArrowRight className="size-4" />
                  </ShimmerButton>
                </Link>
                <Link
                  href="/guides"
                  className="btn-ghost-glow rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
                >
                  Explore Guides
                </Link>
              </div>
            </div>
          ))}

          <div
            ref={outroRef}
            className="absolute inset-x-0 space-y-5 sm:space-y-6 pointer-events-auto"
            style={{
              opacity: 0,
              visibility: "hidden",
            }}
          >
            <div className="inline-block font-mono-tech text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[var(--cyan-accent)]">
              CHOICE CONFIDENCE GUARANTEED
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold leading-tight text-foreground">
              Ready to Find Your <br />
              <span className="text-accent-gradient">Next Favorite</span>?
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
              Explore our editorially curated rankings, comparison matrices, and signal-graded reviews.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-2">
              <Link href="/collections">
                <ShimmerButton className="btn-accent">
                  Explore All Products
                  <ArrowRight className="size-4" />
                </ShimmerButton>
              </Link>
              <Link
                href="/best-of-2026"
                className="btn-ghost-glow rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
              >
                View Editor's Picks
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 sm:gap-6 pb-4 pt-4 border-t border-[var(--hairline)]/50 pointer-events-auto">
          <div className="font-mono-tech text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <span className="text-foreground font-semibold">0{activeSceneIndex + 1}</span>
            <span>/</span>
            <span>04</span>
          </div>

          <div className="flex-1 max-w-md h-1 rounded-full bg-[var(--surface-2)] overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[var(--emerald-accent)] to-[var(--cyan-accent)] transition-all duration-200 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground hidden sm:block">
            {progressPercent >= 90 ? "SCROLL TO EXPLORE" : "SCROLL DOWN"}
          </div>
        </div>
      </div>
    </div>
  );
}
