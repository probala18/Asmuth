"use client";

import { createElement, useEffect, useRef, type ElementType, type ReactNode } from "react";



/** Word-by-word reveal driven by GSAP ScrollTrigger when in view */
export function SplitTextReveal({
  text,
  className = "",
  as = "h1",
  delay = 0,
  stagger = 0.08,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const words = el.querySelectorAll<HTMLElement>("[data-word] > span");
      gsap.set(words, { yPercent: 110, opacity: 0 });
      const tween = gsap.to(words, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "expo.out",
        stagger,
        delay,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
      cleanup = () => { tween.scrollTrigger?.kill(); tween.kill(); };
    })();
    return () => cleanup?.();
  }, [delay, stagger]);

  const words = text.split(" ");
  return createElement(
    as,
    { ref, className },
    words.map((w, i) => (
      <span
        key={i}
        data-word
        className="inline-block overflow-hidden align-bottom mr-[0.25em]"
        style={{ verticalAlign: "bottom" }}
      >
        <span className="inline-block">{w}</span>
      </span>
    )),
  );
}

/** Hand-drawn underline SVG that draws on view */
export function HandUnderline({ children, color }: { children: ReactNode; color?: string }) {
  const ref = useRef<SVGPathElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const len = el.getTotalLength();
    el.style.strokeDasharray = `${len}`;
    el.style.strokeDashoffset = `${len}`;
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const t = gsap.to(el, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
      cleanup = () => { t.scrollTrigger?.kill(); t.kill(); };
    })();
    return () => cleanup?.();
  }, []);
  return (
    <span className="hand-underline">
      {children}
      <svg viewBox="0 0 300 18" preserveAspectRatio="none" aria-hidden>
        <path
          ref={ref}
          d="M3 12 C 60 3, 130 18, 200 8 S 290 4, 297 10"
          fill="none"
          stroke={color || "var(--emerald-accent)"}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/** Animated number counter when scrolled into view */
export function AnimatedCounter({
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: { to: number; duration?: number; suffix?: string; prefix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const obj = { v: 0 };
      const t = gsap.to(obj, {
        v: to,
        duration,
        ease: "power3.out",
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(obj.v).toLocaleString()}${suffix}`;
        },
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
      cleanup = () => { t.scrollTrigger?.kill(); t.kill(); };
    })();
    return () => cleanup?.();
  }, [to, duration, suffix, prefix]);
  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}

/** 3D tilt on mouse move */
export function TiltCard({
  children,
  className = "",
  max = 8,
}: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg) translateZ(0)`;
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
      }}
    >
      {children}
    </div>
  );
}

/** Scroll-triggered progress bar */
export function ScrollProgressBar({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    const num = numRef.current;
    if (!el || !num) return;
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const obj = { v: 0 };
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
      tl.to(el, { width: `${value}%`, duration: 1.4, ease: "power3.out" }, 0);
      tl.to(obj, {
        v: value,
        duration: 1.4,
        ease: "power3.out",
        onUpdate: () => { num.textContent = `${Math.round(obj.v)}%`; },
      }, 0);
      cleanup = () => { tl.scrollTrigger?.kill(); tl.kill(); };
    })();
    return () => cleanup?.();
  }, [value]);
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm font-medium">{label}</span>
        <span ref={numRef} className="font-mono-tech text-xs text-[var(--emerald-accent)]">0%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--surface-2)] overflow-hidden">
        <div
          ref={ref}
          className="h-full rounded-full"
          style={{ width: 0, background: "var(--gradient-accent)" }}
        />
      </div>
    </div>
  );
}

/** Stacking cards container */
export function StackingCards({ items }: { items: Array<{ title: string; subtitle: string; body: string; tag: string; cta?: string }> }) {
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-stack-card]"));
      const triggers: ScrollTrigger[] = [];
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        const t = gsap.to(card, {
          scale: 0.92,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 10%",
            end: "+=80%",
            scrub: true,
          },
        });
        if (t.scrollTrigger) triggers.push(t.scrollTrigger);
      });
      cleanup = () => triggers.forEach((s) => s.kill());
    })();
    return () => cleanup?.();
  }, [items.length]);
  return (
    <div ref={wrap} className="space-y-6">
      {items.map((it, i) => (
        <div
          key={i}
          data-stack-card
          className="sticky surface-card-2 p-8 lg:p-12"
          style={{ top: `${80 + i * 12}px`, boxShadow: "var(--shadow-elegant)" }}
        >
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-3">
                #{(i + 1).toString().padStart(2, "0")} · {it.tag}
              </p>
              <h3 className="font-display text-3xl lg:text-4xl font-semibold max-w-2xl">{it.title}</h3>
              <p className="text-muted-foreground mt-3 max-w-2xl">{it.subtitle}</p>
            </div>
            <span className="font-display text-7xl text-accent-gradient opacity-70">0{i + 1}</span>
          </div>
          <p className="mt-6 text-foreground/80 max-w-3xl leading-relaxed">{it.body}</p>
          {it.cta && (
            <button className="btn-ghost-glow mt-6 rounded-full px-5 py-2 text-xs font-semibold">{it.cta}</button>
          )}
        </div>
      ))}
    </div>
  );
}

/** Horizontal showcase pinned to scroll */
export function HorizontalShowcase({
  items,
  header,
}: {
  items: Array<{ title: string; description: string; stats: string; icon: ReactNode }>;
  header?: { label: string; title: ReactNode };
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!container || !section || !track) return;
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      
      const distance = () => track.scrollWidth - window.innerWidth + 80;
      
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 15%",
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });

      // Local cards reveal animation when section enters viewport (ignores global batch opacity: 0)
      const cards = track.querySelectorAll("article");
      gsap.set(cards, { opacity: 0, y: 40 });
      const revealTween = gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          once: true,
        }
      });

      cleanup = () => { 
        tween.scrollTrigger?.kill(); 
        tween.kill(); 
        revealTween.scrollTrigger?.kill();
        revealTween.kill();
      };
    })();
    return () => cleanup?.();
  }, [items.length]);
  return (
    <div ref={containerRef} className="relative">
      {header && (
        <div className="px-6 lg:px-10 pt-24 pb-12">
          <div className="max-w-7xl mx-auto flex items-end justify-between gap-8 flex-wrap">
            <div className="space-y-3">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)]">
                {header.label}
              </p>
              <h2 className="font-display text-4xl lg:text-6xl font-semibold tracking-tight">
                {header.title}
              </h2>
            </div>
          </div>
        </div>
      )}
      <section ref={sectionRef} data-no-batch className="relative overflow-hidden bg-background">
        <div ref={trackRef} className="flex gap-6 pl-6 lg:pl-10 py-8 will-change-transform">
        {items.map((it, i) => (
          <article
            key={i}
            className="surface-card-2 w-[80vw] md:w-[55vw] lg:w-[40vw] shrink-0 p-10 relative overflow-hidden z-10"
          >
            <div className="absolute -right-20 -top-20 size-72 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: "var(--gradient-accent)" }} />
            <div className="relative z-20">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-accent)] mb-4">
                {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </p>
              <div className="size-14 grid place-items-center rounded-xl bg-[var(--surface-2)] border border-[var(--hairline)] text-[var(--emerald-accent)] mb-6">
                {it.icon}
              </div>
              <h3 className="font-display text-3xl font-semibold mb-3">{it.title}</h3>
              <p className="text-muted-foreground mb-6 max-w-md">{it.description}</p>
              <p className="font-mono-tech text-xs text-[var(--emerald-accent)] mb-6">{it.stats}</p>
              <button className="btn-ghost-glow rounded-full px-5 py-2 text-xs font-semibold">Explore →</button>
            </div>
          </article>
        ))}
      </div>
    </section>
    </div>
  );
}

/** Animated SVG journey line — vertical, draws on scroll */
export function JourneyLine({ steps }: { steps: Array<{ title: string; body: string }> }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  useEffect(() => {
    const el = ref.current;
    const path = pathRef.current;
    if (!el || !path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const t = gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 0.8,
        },
      });
      cleanup = () => { t.scrollTrigger?.kill(); t.kill(); };
    })();
    return () => cleanup?.();
  }, [steps.length]);
  return (
    <div ref={ref} className="relative grid grid-cols-[40px_1fr] gap-x-6 gap-y-12">
      <svg
        viewBox="0 0 40 800"
        preserveAspectRatio="none"
        className="absolute left-0 top-0 h-full w-10 pointer-events-none"
        aria-hidden
      >
        <defs>
          <linearGradient id="journey-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--emerald-accent)" />
            <stop offset="100%" stopColor="var(--cyan-accent)" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d="M20 8 C 5 120, 35 220, 20 340 S 5 540, 20 660 S 35 760, 20 792"
          fill="none"
          stroke="url(#journey-grad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {steps.map((s, i) => (
        <div className="contents" key={i}>
          <div className="relative">
            <span className="absolute left-1/2 -translate-x-1/2 top-2 size-3 rounded-full bg-[var(--emerald-accent)] glow-emerald" />
          </div>
          <div>
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-accent)] mb-2">
              Step {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="font-display text-2xl font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground max-w-xl">{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Fade up elements when scrolled into view using GSAP */
export function RevealOnScroll({
  children,
  delay = 0,
  y = 30,
  duration = 0.8,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const tween = gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: "power2.out",
          delay,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
      cleanup = () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    })();
    return () => cleanup?.();
  }, [delay, y, duration]);
  return (
    <div ref={ref} className={`will-change-transform opacity-0 ${className}`}>
      {children}
    </div>
  );
}

/** Hover mouse glow tracker */
export function MouseGlow({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${className}`}
      style={{
        background: "radial-gradient(400px circle at var(--x, 0px) var(--y, 0px), color-mix(in oklab, var(--emerald-accent) 15%, transparent), transparent 80%)",
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────
 * MagneticButton — cursor-attracted hover effect
 *
 * Wraps any interactive element so it subtly follows the
 * cursor within its bounding box. Reverts on mouse leave.
 * ───────────────────────────────────────────────────────── */
export function MagneticButton({
  children,
  className = "",
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");

      const handleMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) * strength;
        const dy = (e.clientY - cy) * strength;
        gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: "power3.out" });
      };

      const handleLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      };

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);
      cleanup = () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      };
    })();
    return () => cleanup?.();
  }, [strength]);

  return (
    <div ref={ref} className={`inline-block will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
 * TextScramble — letter-by-letter decode on scroll
 *
 * Cycles through random characters before resolving to the
 * final text. Fires once when scrolled into view.
 * ───────────────────────────────────────────────────────── */
export function TextScramble({
  text,
  className = "",
  as = "span",
  speed = 0.04,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  speed?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.textContent = text.replace(/\S/g, "·");
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz0123456789@#$%";
      const final = text.split("");
      const resolved = new Array(final.length).fill(false);
      let frame = 0;
      let rafId = 0;
      let running = false;

      const scramble = () => {
        if (!running) return;
        frame++;
        const display = final.map((ch, i) => {
          if (ch === " ") return " ";
          if (resolved[i]) return ch;
          if (frame > (i + 1) * (1 / speed) * 0.6) {
            resolved[i] = true;
            return ch;
          }
          return chars[Math.floor(Math.random() * chars.length)];
        });
        el.textContent = display.join("");
        if (resolved.every(Boolean)) { running = false; return; }
        rafId = requestAnimationFrame(scramble);
      };

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => { running = true; scramble(); },
      });

      cleanup = () => {
        cancelAnimationFrame(rafId);
        running = false;
        st.kill();
      };
    })();
    return () => cleanup?.();
  }, [text, speed]);

  return createElement(as, { ref, className });
}

/* ─────────────────────────────────────────────────────────
 * ParallaxImage — smooth scroll-driven Y shift
 *
 * Wraps an image and applies a GSAP scrub-based yPercent
 * shift as the user scrolls past it.
 * ───────────────────────────────────────────────────────── */
export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.15,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(img, { scale: 1 + speed * 0.6 });

      const t = gsap.to(img, {
        yPercent: -15 * speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      cleanup = () => { t.scrollTrigger?.kill(); t.kill(); };
    })();
    return () => cleanup?.();
  }, [speed]);

  return (
    <div ref={wrapRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="size-full object-cover will-change-transform"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
 * StaggerGrid — grid items cascade in with scale + opacity
 *
 * Uses ScrollTrigger.batch for a stagger reveal of grid
 * children. Each child scales up from 0.92 and fades in.
 * ───────────────────────────────────────────────────────── */
export function StaggerGrid({
  children,
  className = "",
  stagger = 0.07,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const items = Array.from(el.children) as HTMLElement[];
      gsap.set(items, { opacity: 0, scale: 0.92, y: 30 });

      const batch = ScrollTrigger.batch(items, {
        start: "top 90%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            ease: "back.out(1.4)",
            stagger,
            overwrite: true,
          }),
      });

      cleanup = () => batch.forEach((t) => t.kill());
    })();
    return () => cleanup?.();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
 * CountUpBar — animated horizontal stat bar
 *
 * Shows a label and value, with a bar that grows to the
 * specified percentage on scroll.
 * ───────────────────────────────────────────────────────── */
export function CountUpBar({
  label,
  value,
  max = 100,
  color,
  suffix = "",
}: {
  label: string;
  value: number;
  max?: number;
  color?: string;
  suffix?: string;
}) {
  const barRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const num = numRef.current;
    if (!bar || !num) return;
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const pct = (value / max) * 100;
      const obj = { v: 0 };
      const tl = gsap.timeline({
        scrollTrigger: { trigger: bar, start: "top 88%", once: true },
      });
      tl.to(bar, { width: `${pct}%`, duration: 1.2, ease: "expo.out" }, 0);
      tl.to(
        obj,
        {
          v: value,
          duration: 1.2,
          ease: "expo.out",
          onUpdate: () => {
            num.textContent = `${Math.round(obj.v)}${suffix}`;
          },
        },
        0
      );
      cleanup = () => { tl.scrollTrigger?.kill(); tl.kill(); };
    })();
    return () => cleanup?.();
  }, [value, max, suffix]);

  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span
          ref={numRef}
          className="font-mono-tech text-xs font-semibold text-[var(--emerald-accent)]"
        >
          0{suffix}
        </span>
      </div>
      <div className="h-2 rounded-full bg-[var(--surface-2)] overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{ width: 0, background: color || "var(--gradient-accent)" }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
 * GlowLine — decorative SVG line that draws on scroll
 *
 * A horizontal line with an accent glow that reveals itself
 * as a stroke-dashoffset animation when scrolled into view.
 * ───────────────────────────────────────────────────────── */
export function GlowLine({
  className = "",
  color,
}: {
  className?: string;
  color?: string;
}) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const t = gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.6,
        ease: "power2.inOut",
        scrollTrigger: { trigger: path, start: "top 90%", once: true },
      });
      cleanup = () => { t.scrollTrigger?.kill(); t.kill(); };
    })();
    return () => cleanup?.();
  }, []);

  return (
    <svg
      viewBox="0 0 800 6"
      preserveAspectRatio="none"
      className={`w-full h-1.5 ${className}`}
      aria-hidden
    >
      <path
        ref={pathRef}
        d="M0 3 Q 200 0, 400 3 T 800 3"
        fill="none"
        stroke={color || "url(#glow-line-grad)"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="glow-line-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--emerald-accent)" stopOpacity="0.1" />
          <stop offset="50%" stopColor="var(--cyan-accent)" />
          <stop offset="100%" stopColor="var(--emerald-accent)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
