import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { productStories, type ProductStory } from "@/data/productStories";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────────
 * ProductStorytelling
 *
 * An Apple-inspired, scroll-driven editorial product story
 * section. Each product pins its image on the left while
 * the user scrolls through 3 narrative chapters on the
 * right. Products crossfade one after another.
 *
 * Stack: GSAP ScrollTrigger (pin + scrub) · Lenis-synced ·
 * theme-aware · a11y prefers-reduced-motion fallback.
 * ───────────────────────────────────────────────────────── */

export function ProductStorytelling() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} data-no-batch className="relative">
      <SectionIntro />
      {productStories.map((story, idx) => (
        <StoryBlock
          key={story.id}
          story={story}
          index={idx}
          total={productStories.length}
        />
      ))}
      <SectionOutro />
    </section>
  );
}

function SectionIntro() {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 text-center space-y-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
        Curated With Intention
      </p>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        Products Worth Your <span className="text-accent-gradient">Attention</span>.
      </h2>
      <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        We research, compare, and test the details that matter — so you can spend less time searching and more time choosing.
      </p>
    </motion.div>
  );
}

function SectionOutro() {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 text-center space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)]">
        Discover More
      </p>
      <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
        Find What Fits <span className="text-accent-gradient">Your World</span>.
      </h3>
      <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
        Explore the products, reviews, comparisons, and guides that make your next decision easier.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <Link href="/collections">
          <ShimmerButton className="btn-accent">
            Explore All Products
            <ArrowRight className="size-4" />
          </ShimmerButton>
        </Link>
        <Link
          href="/best-of-2026"
          className="btn-ghost-glow rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
        >
          View Editor's Picks
        </Link>
      </div>
    </motion.div>
  );
}

function StoryBlock({
  story,
  total,
}: {
  story: ProductStory;
  index: number;
  total: number;
}) {
  const blockRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [viewportMode, setViewportMode] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const numChapters = story.chapters.length;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getMode = () => {
      if (window.matchMedia("(max-width: 767px)").matches) return "mobile" as const;
      if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) return "tablet" as const;
      return "desktop" as const;
    };

    setViewportMode(getMode());

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = () => {
      setViewportMode(getMode());
    };

    mediaQuery.addEventListener("change", handleChange);
    tabletQuery.addEventListener("change", handleChange);
    desktopQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      tabletQuery.removeEventListener("change", handleChange);
      desktopQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    const block = blockRef.current;
    const image = imageRef.current;
    if (!block || !image) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      chapterRefs.current.forEach((el, idx) => {
        if (el) {
          gsap.set(el, { autoAlpha: 1, y: 0, filter: "blur(0px)" });
        }
      });
      return;
    }

    const masterCtx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const desktopCtx = gsap.context(() => {
          chapterRefs.current.forEach((el, idx) => {
            if (el) {
              gsap.set(el, {
                autoAlpha: idx === 0 ? 1 : 0,
                y: idx === 0 ? 0 : 40,
                filter: idx === 0 ? "blur(0px)" : "blur(8px)",
              });
            }
          });

          const scrollEnd = numChapters * 100;
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: block,
              start: "top top",
              end: `+=${scrollEnd}%`,
              pin: true,
              pinSpacing: true,
              scrub: 0.5,
            },
          });

          const step = 1 / numChapters;
          const imageKeyframes = [
            { scale: 1, rotation: 0, x: 0, y: 0 },
            { scale: 1.04, rotation: -0.8, x: -6, y: 4 },
            { scale: 1.07, rotation: 0.6, x: 4, y: -3 },
          ];

          story.chapters.forEach((_, i) => {
            if (i < imageKeyframes.length) {
              tl.to(
                image,
                {
                  scale: imageKeyframes[i].scale,
                  rotation: imageKeyframes[i].rotation,
                  x: imageKeyframes[i].x,
                  y: imageKeyframes[i].y,
                  duration: step,
                  ease: "power1.inOut",
                },
                i * step
              );
            }

            if (i < numChapters - 1) {
              const curChapter = chapterRefs.current[i];
              const nextChapter = chapterRefs.current[i + 1];
              const transitionTime = (i + 0.7) * step;

              if (curChapter) {
                tl.to(
                  curChapter,
                  {
                    autoAlpha: 0,
                    y: -30,
                    filter: "blur(6px)",
                    duration: step * 0.3,
                    ease: "power2.in",
                  },
                  transitionTime
                );
              }
              if (nextChapter) {
                tl.to(
                  nextChapter,
                  {
                    autoAlpha: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: step * 0.35,
                    ease: "power2.out",
                  },
                  transitionTime + step * 0.32
                );
              }
            }
          });

          return () => {
            tl.scrollTrigger?.kill(true);
            tl.kill();
          };
        }, block);

        return () => desktopCtx.revert();
      });

      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        const tabletCtx = gsap.context(() => {
          chapterRefs.current.forEach((el, idx) => {
            if (el) {
              gsap.set(el, {
                autoAlpha: idx === 0 ? 1 : 0,
                y: idx === 0 ? 0 : 24,
                filter: idx === 0 ? "blur(0px)" : "blur(5px)",
              });
            }
          });

          const scrollEnd = numChapters * 70;
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: block,
              start: "top top",
              end: `+=${scrollEnd}%`,
              pin: true,
              pinSpacing: true,
              scrub: 0.6,
            },
          });

          const step = 1 / numChapters;
          const imageKeyframes = [
            { scale: 1, rotation: 0, x: 0, y: 0 },
            { scale: 1.02, rotation: -0.4, x: -3, y: 2 },
            { scale: 1.03, rotation: 0.3, x: 2, y: -2 },
          ];

          story.chapters.forEach((_, i) => {
            if (i < imageKeyframes.length) {
              tl.to(image, { scale: imageKeyframes[i].scale, rotation: imageKeyframes[i].rotation, x: imageKeyframes[i].x, y: imageKeyframes[i].y, duration: step, ease: "power1.inOut" }, i * step);
            }

            if (i < numChapters - 1) {
              const curChapter = chapterRefs.current[i];
              const nextChapter = chapterRefs.current[i + 1];
              const transitionTime = (i + 0.7) * step;

              if (curChapter) {
                tl.to(curChapter, { autoAlpha: 0, y: -18, filter: "blur(4px)", duration: step * 0.25, ease: "power2.in" }, transitionTime);
              }
              if (nextChapter) {
                tl.to(nextChapter, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: step * 0.25, ease: "power2.out" }, transitionTime + step * 0.2);
              }
            }
          });

          return () => {
            tl.scrollTrigger?.kill(true);
            tl.kill();
          };
        }, block);

        return () => tabletCtx.revert();
      });

      mm.add("(max-width: 767px)", () => {
        const mobileCtx = gsap.context(() => {
          chapterRefs.current.forEach((el, idx) => {
            if (el) {
              gsap.set(el, { autoAlpha: 1, y: 0, filter: "blur(0px)" });
            }
          });

          chapterRefs.current.forEach((el, idx) => {
            if (!el) return;
            gsap.fromTo(
              el,
              { autoAlpha: 0, y: 24 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 88%",
                  once: true,
                },
              }
            );
          });

          if (imageRef.current) {
            gsap.fromTo(
              imageRef.current,
              { scale: 0.98, y: 8 },
              {
                scale: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: imageRef.current,
                  start: "top 90%",
                  once: true,
                },
              }
            );
          }
        }, block);

        return () => mobileCtx.revert();
      });

      return () => {
        mm.revert();
      };
    }, block);

    return () => {
      masterCtx.revert();
    };
  }, [numChapters, story.chapters]);

  const isMobile = viewportMode === "mobile";

  return (
    <div ref={blockRef} className="relative min-h-screen bg-background">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 ${isMobile ? "" : "min-h-screen flex flex-col md:flex-row lg:flex-row items-center gap-8 md:gap-10 lg:gap-16"}`}>
        {!isMobile ? (
          <>
            <div className="w-full md:w-1/2 lg:w-1/2 flex items-center justify-center relative">
              <div
                ref={imageRef}
                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl bg-[var(--surface)]"
              >
                <img
                  src={story.image}
                  alt={story.product}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover"
                />
                <div
                  className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 70%, ${story.accent}, transparent 70%)`,
                  }}
                />
              </div>

              <div className="absolute top-4 left-4 md:top-6 md:left-0 font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-[var(--hairline)]">
                {story.id} / {String(total).padStart(2, "0")}
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 relative min-h-[320px] sm:min-h-[360px] flex items-center">
              {story.chapters.map((chapter, ci) => (
                <div
                  key={ci}
                  ref={(el) => {
                    chapterRefs.current[ci] = el;
                  }}
                  className="absolute inset-x-0 space-y-5 lg:space-y-6"
                  style={{
                    opacity: ci === 0 ? 1 : 0,
                    visibility: ci === 0 ? "visible" : "hidden",
                  }}
                >
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
                    {story.category}
                  </p>
                  <p className="font-mono-tech text-xs uppercase tracking-widest text-muted-foreground">
                    {story.product}
                  </p>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground">
                    {chapter.title}
                  </h3>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
                    {chapter.description}
                  </p>
                  <Link
                    href={`/product/${story.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--emerald-accent)] hover:gap-3 transition-all"
                  >
                    Explore Product
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <div className="flex items-center gap-2 pt-4">
                    {story.chapters.map((_, di) => (
                      <span
                        key={di}
                        className={`block rounded-full transition-all duration-300 ${
                          di === ci
                            ? "w-8 h-1.5 bg-[var(--emerald-accent)]"
                            : "w-1.5 h-1.5 bg-[var(--surface-2)]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="w-full space-y-6 pb-8">
            <div className="flex items-center justify-between rounded-full border border-[var(--hairline)] bg-background/70 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground backdrop-blur-sm">
              <span>{story.category}</span>
              <span>{story.id} / {String(total).padStart(2, "0")}</span>
            </div>
            {story.chapters.map((chapter, ci) => (
              <div
                key={ci}
                ref={(el) => {
                  chapterRefs.current[ci] = el;
                }}
                className="rounded-[2rem] border border-[var(--hairline)] bg-[var(--surface)]/80 p-5 sm:p-7 shadow-sm"
              >
                <div className="mb-5 overflow-hidden rounded-[1.5rem] border border-[var(--hairline)] bg-[var(--surface)]">
                  <img src={story.image} alt={story.product} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                </div>
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
                  {story.product}
                </p>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  {chapter.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {chapter.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <Link href={`/product/${story.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--emerald-accent)]">
                    Explore Product
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <div className="flex items-center gap-2">
                    {story.chapters.map((_, di) => (
                      <span key={di} className={`block rounded-full ${di === ci ? "h-2 w-6 bg-[var(--emerald-accent)]" : "h-2 w-2 bg-[var(--surface-2)]"}`} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
