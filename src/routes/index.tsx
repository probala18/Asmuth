import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Marquee } from "@/components/ui/marquee";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Box,
  Camera,
  Cpu,
  Flame,
  Gamepad2,
  Headphones,
  Home as HomeIcon,
  Laptop,
  Scale,
  Shield,
  Smartphone,
  Sparkles,
  Star,
  Tag,
  TrendingUp,
  Truck,
  Watch,
} from "lucide-react";
import {
  SplitTextReveal,
  HandUnderline,
  AnimatedCounter,
  TiltCard,
  HorizontalShowcase,
  JourneyLine,
  RevealOnScroll,
} from "@/components/site/motion";
import { ThreeHero } from "@/components/site/ThreeHero";
import { ProductCard, DealCard, CategoryCard } from "@/components/site/ProductCards";
import { ReviewCard, GuideCard, BrandCard } from "@/components/site/ContentCards";
import { TrustMetric } from "@/components/site/UIComponents";
import {
  products,
  categories,
  brands,
  reviews,
  guides,
  comparisons,
  testimonials,
} from "@/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "genCART — Premium Tech, Editorially Curated" },
      { name: "description", content: "Future Commerce. Editorial reviews, in-depth buying guides, and signal-grade tech picks for 2026." },
      { property: "og:title", content: "genCART — Premium Tech, Editorially Curated" },
      { property: "og:description", content: "Future Commerce. Editorial reviews and signal-grade tech picks." },
    ],
  }),
  component: Index,
});

function Index() {
  // Get sliced data for section previews
  const featuredCategories = categories.filter((c) => c.featured).slice(0, 3);
  const trendingProducts = products.filter((p) => p.isTrending).slice(0, 3);
  const editorPicks = products.filter((p) => p.isEditorsPick).slice(0, 3);
  const dealsList = products.filter((p) => p.originalPrice && p.originalPrice > p.price).slice(0, 3);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 3);
  const latestReviews = reviews.slice(0, 3);
  const buyingGuides = guides.slice(0, 2);
  const featuredBrands = brands.slice(0, 4);

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const hero = heroRef.current;
      if (!hero) return;

      // Respect prefers-reduced-motion
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      // 1. Staggered load animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      const badge = hero.querySelector(".hero-badge");
      const titleWrapper = hero.querySelector(".hero-title");
      const desc = hero.querySelector(".hero-desc");
      const buttons = hero.querySelectorAll(".hero-btn");
      const social = hero.querySelector(".hero-social");
      const scrollCue = hero.querySelector(".hero-scroll");

      // Hide initially to prevent layout flash before GSAP starts
      gsap.set([badge, desc, social, scrollCue], { opacity: 0 });
      gsap.set(badge, { y: -20 });
      gsap.set(desc, { y: 24 });
      gsap.set(buttons, { opacity: 0, scale: 0.95 });
      gsap.set(social, { y: 16 });
      gsap.set(scrollCue, { y: -15 });

      tl.to(badge, { opacity: 1, y: 0, duration: 0.6, delay: 0.25 })
        .to(desc, { opacity: 1, y: 0, duration: 0.8 }, "-=0.2")
        .to(buttons, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: "back.out(1.5)" }, "-=0.5")
        .to(social, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .to(scrollCue, { opacity: 1, y: 0, duration: 0.5 }, "-=0.1");

      // 2. Parallax and Fade on Scroll
      const parallaxItems = hero.querySelectorAll(".hero-parallax-item");
      const scrollTween = gsap.to(parallaxItems, {
        y: (i, target) => {
          const speed = parseFloat(target.getAttribute("data-parallax-speed") || "0.15");
          return window.innerHeight * speed;
        },
        opacity: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        }
      });

      cleanup = () => {
        tl.kill();
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
      };
    })();

    return () => cleanup?.();
  }, []);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[92dvh] pt-28 pb-20 px-6 lg:px-10 overflow-hidden flex items-center">
        <ThreeHero className="opacity-70" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-5xl mx-auto text-center space-y-10 pt-10">
          <div className="hero-badge hero-parallax-item flex items-center justify-center gap-3" data-parallax-speed="0.08">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--emerald-accent)] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full size-2 bg-[var(--emerald-accent)]" />
            </span>
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
              Premium Collection · 2026
            </span>
          </div>

          <div className="hero-title hero-parallax-item" data-parallax-speed="0.04">
            <SplitTextReveal
              text="Discover Better. Choose Smarter."
              as="h1"
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.98]"
            />
          </div>

          <p className="hero-desc hero-parallax-item text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto" data-parallax-speed="0.12">
            We research, compare, and curate the products worth your attention — so you can {" "}
            <HandUnderline><span className="text-foreground">spend less time</span></HandUnderline>{" "} 
            searching and more time choosing with {" "}
            <HandUnderline><span className="text-foreground">confidence</span></HandUnderline>.
          </p>

          <div className="hero-buttons hero-parallax-item flex items-center justify-center gap-4 pt-2 flex-wrap" data-parallax-speed="0.18">
            <Link to="/collections" className="hero-btn">
              <ShimmerButton className="btn-accent">
                Explore Collection
                <ArrowRight className="size-4" />
              </ShimmerButton>
            </Link>
            <Link to="/best-of-2026" className="hero-btn btn-ghost-glow rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
              Best of 2026
            </Link>
          </div>

          <div className="hero-social hero-parallax-item flex items-center justify-center gap-6 pt-6" data-parallax-speed="0.22">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="size-8 rounded-full border-2 border-background" style={{ background: i % 2 ? "var(--cyan-accent)" : "var(--emerald-accent)" }} />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-[var(--emerald-accent)]">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">2.5M+ trusted by enthusiasts</p>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="hero-scroll hero-parallax-item flex flex-col items-center gap-2 pt-8" data-parallax-speed="0.28">
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
            <span className="block h-10 w-px bg-gradient-to-b from-[var(--emerald-accent)] to-transparent" />
          </div>
        </div>
      </section>

      {/* 2. LOGO MARQUEE */}
      <section className="relative overflow-hidden py-8 border-y border-[var(--hairline)] bg-[var(--surface)]/40">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <Marquee pauseOnHover className="[--duration:30s]">
          {["FUTURE COMMERCE", "·", "genCART 2026", "·", "ENGINEERED AS ONE", "·", "SIGNAL ABOVE NOISE", "·", "BUILT IN ORBIT", "·"].map((t, i) => (
            <span key={i} className="font-display text-2xl lg:text-3xl text-muted-foreground/60 tracking-wider whitespace-nowrap mx-4">
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      {/* 3. TRUST METRICS */}
      <motion.section
        className="px-6 lg:px-10 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto surface-card-2 p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <TrustMetric value={25000} suffix="+" label="Products Researched" iconName="Box" />
            <TrustMetric value={500} suffix="+" label="Buying Covered" iconName="Cpu" />
            <TrustMetric value={100} suffix="+" label="Categories" iconName="Sparkles" />
            <TrustMetric value={98} suffix="%" label="Reader Satisfaction" iconName="Shield" />
          </div>
        </div>
      </motion.section>

      {/* 4. FEATURED CATEGORIES */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll className="space-y-4 mb-12">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
              Browse by Category
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold">
              Curated <span className="text-accent-gradient">product worlds</span>.
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCategories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRENDING PRODUCTS */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 gap-8 flex-wrap">
            <RevealOnScroll className="space-y-3">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)]">
                Trending Now
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold">
                Hot picks, <HandUnderline>rising fast</HandUnderline>.
              </h2>
            </RevealOnScroll>
            <Link to="/trending" className="btn-ghost-glow rounded-full px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2">
              View all trending <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. TODAY'S DEALS */}
      <section className="px-6 lg:px-10 py-16 bg-[var(--surface)]/30 border-y border-[var(--hairline)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 gap-8 flex-wrap">
            <RevealOnScroll className="space-y-3">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
                Limited Offers
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold">
                Deals you <span className="text-accent-gradient">actually want</span>.
              </h2>
            </RevealOnScroll>
            <Link to="/deals" className="btn-ghost-glow rounded-full px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2">
              All deals <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealsList.map((d, index) => (
              <DealCard key={d.slug} product={d} hours={[4, 8, 12][index % 3]} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. BEST SELLERS */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)]">
              Ranked Collection
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
              Best Sellers <span className="italic">2026</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Our editor's top three recommendations, ranked according to performance, value, and reliability.
            </p>
          </div>

          <div className="space-y-8">
            {bestSellers.map((p, idx) => (
              <RevealOnScroll key={p.slug} delay={idx * 0.1} className="surface-card-2 p-8 lg:p-12 relative overflow-hidden group">
                <div className="absolute top-8 right-8 font-display text-7xl font-bold text-[var(--emerald-accent)]/15 group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-8 items-center">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--surface)] border border-[var(--hairline)]">
                    <img src={p.image} alt={p.name} loading="lazy" decoding="async" className="size-full object-cover" />
                  </div>
                  
                  <div className="space-y-4">
                    <span className="font-mono-tech text-[9px] uppercase tracking-widest text-[var(--emerald-accent)]">
                      RANK {idx + 1} · {p.category}
                    </span>
                    <h3 className="font-display text-3xl font-semibold text-foreground">{p.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                    
                    <div className="pt-4 border-t border-[var(--hairline)]/50 flex flex-wrap items-center gap-6">
                      <div>
                        <p className="text-[10px] font-mono-tech uppercase text-muted-foreground">Rating</p>
                        <p className="font-display font-semibold text-lg text-foreground flex items-center gap-1">
                          <Star className="size-4 fill-amber-400 text-amber-400" />
                          {p.rating.toFixed(1)}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono-tech uppercase text-muted-foreground">Price</p>
                        <p className="font-display font-semibold text-lg text-[var(--emerald-accent)]">${p.price}</p>
                      </div>
                      <div className="lg:ml-auto">
                        <Link to={`/product/${p.slug}`} className="btn-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold">
                          View details
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HORIZONTAL SCROLL STORY */}
      <div className="pb-16">
        <HorizontalShowcase
          header={{
            label: "Ecosystem Showcase",
            title: <>Every category, <span className="text-accent-gradient">elevated</span>.</>,
          }}
          items={[
            { title: "Computing", description: "Pro silicon, ultraportable chassis, cinema-grade displays — for makers and builders.", stats: "120+ products · 4.9 avg rating", icon: <Laptop className="size-6" /> },
            { title: "Audio", description: "Reference-tuned headphones and immersive spatial speakers for sound that disappears.", stats: "84 products · 4.8 avg rating", icon: <Headphones className="size-6" /> },
            { title: "Wearables", description: "Quiet intelligence on your wrist — vitals, focus, and time, beautifully resolved.", stats: "42 products · 4.9 avg rating", icon: <Watch className="size-6" /> },
            { title: "Mobile", description: "Flagship phones engineered as one — silicon, software, and signal in perfect step.", stats: "36 products · 4.7 avg rating", icon: <Smartphone className="size-6" /> },
            { title: "Cameras", description: "Mirrorless cinema gear and tools designed to capture high-density creative detail.", stats: "58 products · 4.9 avg rating", icon: <Camera className="size-6" /> },
          ]}
        />
      </div>

      {/* 10. BUYING GUIDES */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 gap-8 flex-wrap">
            <RevealOnScroll className="space-y-3">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)]">
                In-Depth Guides
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold">
                Buying guides for <HandUnderline>critical builders</HandUnderline>.
              </h2>
            </RevealOnScroll>
            <Link to="/guides" className="btn-ghost-glow rounded-full px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2">
              Browse all guides <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {buyingGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. LATEST REVIEWS */}
      <section className="px-6 lg:px-10 py-16 bg-[var(--surface)]/20 border-y border-[var(--hairline)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 gap-8 flex-wrap">
            <RevealOnScroll className="space-y-3">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
                Tested & Graded
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold">
                Latest expert <span className="text-accent-gradient">lab reviews</span>.
              </h2>
            </RevealOnScroll>
            <Link to="/reviews" className="btn-ghost-glow rounded-full px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2">
              All reviews <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestReviews.map((r) => (
              <ReviewCard key={r.slug} review={r} />
            ))}
          </div>
        </div>
      </section>

      {/* 12. PRODUCT COMPARISON MINI */}
      <motion.section
        className="px-6 lg:px-10 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll className="text-center mb-12 space-y-3">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)]">
              Side by Side
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold">
              Laptop Air vs. Dell XPS 16
            </h2>
            <p className="text-xs text-muted-foreground font-mono-tech">
              A quick review of the defining specs.
            </p>
          </RevealOnScroll>

          <div className="surface-card-2 overflow-hidden border border-[var(--hairline)] rounded-2xl">
            {[
              { spec: "Chip", a: "M-class · 12 core", b: "Intel Ultra 9", winner: "a" },
              { spec: "Display", a: "14.2\" OLED 120Hz", b: "16.3\" OLED 90Hz", winner: "a" },
              { spec: "Battery", a: "22h video run", b: "11.5h video run", winner: "a" },
              { spec: "Weight", a: "1.24 kg", b: "2.13 kg", winner: "a" },
              { spec: "Starting Price", a: "$999", b: "$1,899", winner: "a" },
            ].map((row, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-[1.2fr_2fr_2fr] items-center px-6 py-4 border-t border-[var(--hairline)] first:border-t-0"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-xs font-mono-tech uppercase tracking-wider text-muted-foreground">{row.spec}</span>
                <span className={`text-sm ${row.winner === "a" ? "text-[var(--emerald-accent)] font-semibold" : ""}`}>{row.a}</span>
                <span className={`text-sm ${row.winner === "b" ? "text-[var(--emerald-accent)] font-semibold" : ""}`}>{row.b}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/compare" className="btn-ghost-glow rounded-full px-6 py-2.5 text-xs font-semibold inline-flex items-center gap-1.5">
              <Scale className="size-3.5" /> Go to Comparison Hub
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 13. EDITOR'S PICKS */}
      <section className="px-6 lg:px-10 py-16 bg-[var(--surface)]/30 border-y border-[var(--hairline)]">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll className="space-y-3 mb-12 text-center">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
              Curated shortlist
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold">
              Editor's <span className="text-accent-gradient">personal picks</span>.
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {editorPicks.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 14. WHY TRUST genCART */}
      <section className="px-6 lg:px-10 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3">How we curate</p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold max-w-2xl">
              From signal to <HandUnderline>shortlist</HandUnderline>.
            </h2>
          </div>
          <JourneyLine
            steps={[
              { title: "Source", body: "We track 25,000+ launches a year. Only the ones with measurable, repeatable advantages move forward." },
              { title: "Test", body: "Long-loop, real-life testing — weeks, not unboxings. We grade against last year's best, not the marketing deck." },
              { title: "Edit", body: "Editorial review, comparison rigs, sample swaps. Anything that loses to its predecessor never gets recommended." },
              { title: "Recommend", body: "What's left earns a place in the collection — with the data, the why, and the alternatives, in writing." },
            ]}
          />
        </div>
      </section>

      {/* 15. TESTIMONIALS */}
      <motion.section
        className="px-6 lg:px-10 py-24"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-5xl mx-auto surface-card-2 p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-50" />
          <div className="relative">
            <span className="font-display text-2xl lg:text-3xl leading-snug max-w-3xl mx-auto block mb-6">
              "genCART is the only place I check before any tech purchase. The reviews are the reviews
              I'd write — if I had three weeks per product."
            </span>
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
              Maya Chen — Director of Design, Loop Studio
            </p>
          </div>
        </div>
      </motion.section>

      {/* BOTTOM CTA */}
      <motion.section
        className="px-6 lg:px-10 py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto rounded-3xl p-10 lg:p-20 text-center relative overflow-hidden shadow-2xl" style={{ background: "var(--gradient-accent)" }}>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-[oklch(0.13_0.03_270)] tracking-tight">
            Ready to upgrade <span className="italic">everything</span>?
          </h2>
          <p className="text-[oklch(0.13_0.03_270)]/80 max-w-xl mx-auto mt-4 font-medium text-sm">
            Browse the 2026 collection, or start with the editor's shortlist.
          </p>
          <motion.div
            className="flex gap-3 justify-center mt-8 flex-wrap"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/collections">
              <ShimmerButton className="bg-background text-foreground hover:bg-[var(--surface)] shadow-md">
                Shop Collections
                <ArrowRight className="size-4" />
              </ShimmerButton>
            </Link>
            <Link to="/best-of-2026" className="rounded-full px-7 py-3.5 text-sm font-semibold border border-[oklch(0.13_0.03_270)] text-[oklch(0.13_0.03_270)] hover:bg-[oklch(0.13_0.03_270)] hover:text-background transition-colors">
              Best of 2026
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
