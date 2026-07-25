import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { productStories, type ProductStory } from "@/data/productStories";

/* ─────────────────────────────────────────────────────────
 * ProductStorytelling
 *
 * An Apple-inspired, scroll-driven editorial product story
 * section.  Each product pins its image on the left while
 * the user scrolls through 3 narrative chapters on the
 * right.  Products crossfade one after another.
 *
 * Stack: GSAP ScrollTrigger (pin + scrub) · Lenis-synced ·
 * theme-aware · a11y prefers-reduced-motion fallback.
 * ───────────────────────────────────────────────────────── */

export function ProductStorytelling() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} data-no-batch className="relative">
      {/* ── Section Intro ── */}
      <SectionIntro />

      {/* ── Pinned Story Blocks (one per product) ── */}
      {productStories.map((story, idx) => (
        <StoryBlock
          key={story.id}
          story={story}
          index={idx}
          total={productStories.length}
        />
      ))}

      {/* ── Final Section CTA ── */}
      <SectionOutro />
    </section>
  );
}

/* ─── Section Intro ──────────────────────────────────── */
function SectionIntro() {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-6 lg:px-10 py-24 text-center space-y-5"
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

/* ─── Section Outro CTA ──────────────────────────────── */
function SectionOutro() {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-6 lg:px-10 py-24 text-center space-y-6"
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
    </motion.div>
  );
}

/* ─── Individual Product Story Block ─────────────────── */
function StoryBlock({
  story,
  index,
  total,
}: {
  story: ProductStory;
  index: number;
  total: number;
}) {
  const blockRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  const numChapters = story.chapters.length;

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let isMounted = true;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const block = blockRef.current;
      const image = imageRef.current;
      if (!block || !image || !isMounted) return;

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      // Initialize chapter states
      chapterRefs.current.forEach((el, idx) => {
        if (el) {
          gsap.set(el, {
            autoAlpha: idx === 0 ? 1 : 0,
            y: idx === 0 ? 0 : 40,
            filter: idx === 0 ? "blur(0px)" : "blur(8px)",
          });
        }
      });

      // Per-product timeline
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

      // Subtle image camera movements per chapter
      const imageKeyframes = [
        { scale: 1, rotation: 0, x: 0, y: 0 },
        { scale: 1.04, rotation: -0.8, x: -6, y: 4 },
        { scale: 1.07, rotation: 0.6, x: 4, y: -3 },
      ];

      story.chapters.forEach((_, i) => {
        // Image subtle camera movement
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

        // Chapter text crossfade
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

      cleanup = () => {
        tl.scrollTrigger?.kill(true);
        tl.kill();
      };
    })();

    return () => {
      isMounted = false;
      cleanup?.();
    };
  }, [numChapters, story.chapters]);

  return (
    <div ref={blockRef} className="relative min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-screen flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* ─── LEFT: Product Visual ──────────────── */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative">
          <div
            ref={imageRef}
            className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl bg-[var(--surface)]"
          >
            {/* Product Image */}
            <img
              src={story.image}
              alt={story.product}
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            {/* Subtle ambient glow */}
            <div
              className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 30% 70%, ${story.accent}, transparent 70%)`,
              }}
            />
          </div>

          {/* Product Index Badge */}
          <div className="absolute top-4 left-4 lg:top-8 lg:left-0 font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-[var(--hairline)]">
            {story.id} / {String(total).padStart(2, "0")}
          </div>
        </div>

        {/* ─── RIGHT: Story Chapters ──────────────── */}
        <div className="w-full lg:w-1/2 relative min-h-[320px] sm:min-h-[360px] flex items-center">
          {story.chapters.map((chapter, ci) => (
            <div
              key={ci}
              ref={(el) => (chapterRefs.current[ci] = el)}
              className="absolute inset-x-0 space-y-5 lg:space-y-6"
              style={{
                opacity: ci === 0 ? 1 : 0,
                visibility: ci === 0 ? "visible" : "hidden",
              }}
            >
              {/* Category tag */}
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
                {story.category}
              </p>

              {/* Product name */}
              <p className="font-mono-tech text-xs uppercase tracking-widest text-muted-foreground">
                {story.product}
              </p>

              {/* Chapter heading */}
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground">
                {chapter.title}
              </h3>

              {/* Chapter description */}
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
                {chapter.description}
              </p>

              {/* CTA */}
              <Link
                to={`/product/${story.slug}`}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--emerald-accent)] hover:gap-3 transition-all"
              >
                Explore Product
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Chapter Progress Dots */}
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
      </div>
    </div>
  );
}
