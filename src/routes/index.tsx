import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Box, Shield, Truck, Sparkles,
  Laptop, Headphones, Watch, Smartphone, Gamepad2, Camera,
  Home as HomeIcon, Cpu, Star,
} from "lucide-react";
import {
  SplitTextReveal, HandUnderline, AnimatedCounter, TiltCard,
  HorizontalShowcase, JourneyLine, CinemaGrid,
} from "@/components/site/motion";
import { ThreeHero } from "@/components/site/ThreeHero";
import laptopImg from "@/assets/product-laptop.jpg";
import headphonesImg from "@/assets/product-headphones.jpg";
import watchImg from "@/assets/product-watch.jpg";
import phoneImg from "@/assets/product-phone.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AETHER — Premium Tech, Editorially Curated" },
      { name: "description", content: "Future Commerce. Editorial reviews, in-depth buying guides, and signal-grade tech picks for 2026." },
      { property: "og:title", content: "AETHER — Premium Tech, Editorially Curated" },
      { property: "og:description", content: "Future Commerce. Editorial reviews and signal-grade tech picks." },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Aether Buds Pro", category: "Audio", price: "$129", rating: 4.9, img: headphonesImg },
  { name: "Aether Watch X", category: "Wearables", price: "$199", rating: 4.8, img: watchImg },
  { name: "Aether Laptop Air", category: "Computing", price: "$999", rating: 4.9, img: laptopImg },
  { name: "Aether Phone 15", category: "Mobile", price: "$799", rating: 4.7, img: phoneImg },
  { name: "Aether Pad Pro", category: "Tablet", price: "$649", rating: 4.8, img: laptopImg },
  { name: "Aether Lens X", category: "Camera", price: "$1,299", rating: 4.9, img: phoneImg },
];

const features = [
  { icon: Box, title: "Innovative Design", body: "Every product crafted with future-forward aesthetics, where engineering meets art." },
  { icon: Shield, title: "Lifetime Warranty", body: "Premium materials backed by lifetime protection. Built once. Built right." },
  { icon: Truck, title: "Express Delivery", body: "Global priority shipping. Tracked, insured, and at your door in 48 hours." },
  { icon: Sparkles, title: "Concierge Service", body: "Direct access to product specialists for setup, support, and personalization." },
];

export default function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-10 overflow-hidden">
        <ThreeHero className="opacity-70" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-5xl mx-auto text-center space-y-10 pt-10">
          <div className="flex items-center justify-center gap-3">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--emerald-accent)] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full size-2 bg-[var(--emerald-accent)]" />
            </span>
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
              Premium Collection · 2026
            </span>
          </div>

          <SplitTextReveal
            text="LUXURY THAT ELEVATES EVERY DAY"
            as="h1"
            className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] font-bold leading-[0.95] tracking-tight"
          />

          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Curated excellence — engineered as one. Discover premium products that transform your day with{" "}
            <HandUnderline><span className="text-foreground">timeless precision</span></HandUnderline>.
          </p>

          <div className="flex items-center justify-center gap-4 pt-2 flex-wrap">
            <Link to="/collections" className="btn-accent inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide">
              Explore Collection
              <ArrowRight className="size-4" />
            </Link>
            <Link to="/best-of-2026" className="btn-ghost-glow rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
              Best of 2026
            </Link>
          </div>

          <div className="flex items-center justify-center gap-3 pt-6">
            <div className="flex items-center gap-1 text-[var(--emerald-accent)]">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
            </div>
            <p className="text-xs text-muted-foreground">2.5M+ trusted by enthusiasts</p>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-[var(--emerald-accent)] to-transparent" />
        </div>
      </section>


      {/* MARQUEE */}
      <section className="relative overflow-hidden py-10 border-y border-[var(--hairline)] bg-[var(--surface)]/40">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-16 items-center font-display text-3xl text-muted-foreground/60">
              {["FUTURE COMMERCE", "·", "AETHER 2026", "·", "ENGINEERED AS ONE", "·", "SIGNAL ABOVE NOISE", "·", "BUILT IN ORBIT", "·"].map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 lg:px-10 py-24">
        <div className="max-w-7xl mx-auto surface-card-2 p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 size-96 rounded-full blur-3xl opacity-20" style={{ background: "var(--gradient-accent)" }} />
          <div className="relative">
            <div className="flex items-center gap-3 mb-12">
              <span className="block w-8 h-px bg-[var(--emerald-accent)]" />
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
                Built for excellence
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {features.map((f) => (
                <div key={f.title} className="group">
                  <div className="size-14 rounded-xl bg-[var(--surface)] border border-[var(--hairline)] grid place-items-center mb-6 group-hover:ring-emerald transition-all">
                    <f.icon className="size-6 text-[var(--emerald-accent)]" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 gap-8 flex-wrap">
            <div>
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3">
                Signature Edition
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold max-w-2xl">
                The collection, <HandUnderline>defined</HandUnderline>.
              </h2>
            </div>
            <Link to="/categories" className="btn-ghost-glow rounded-full px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2">
              View all <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <TiltCard key={p.name} className="surface-card overflow-hidden group">
                <div className="relative aspect-[5/4] overflow-hidden bg-[var(--surface-2)]">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  />
                  <span className="absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-bold font-mono-tech text-background" style={{ background: "var(--gradient-accent)" }}>
                    {p.rating}
                  </span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle at 50% 100%, color-mix(in oklab, var(--emerald-accent) 25%, transparent), transparent 60%)" }} />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[var(--emerald-accent)]">{p.category}</span>
                    <span className="font-display text-lg font-semibold">{p.price}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CINEMA GRID — Categories: staggered cinematic card reveal */}
      <section className="px-6 lg:px-10 pt-24 pb-24">
        <div className="max-w-7xl mx-auto mb-14">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3">
            Worlds to explore
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-semibold max-w-3xl tracking-tight">
            Every category, <span className="text-accent-gradient">elevated</span>.
          </h2>
        </div>
        <CinemaGrid
          items={[
            { title: "Computing", description: "Pro silicon, ultraportable chassis, cinema-grade displays — for makers and builders.", stats: "120+ products · 4.9 avg rating", icon: <Laptop className="size-6" /> },
            { title: "Audio", description: "Reference-tuned headphones and immersive spatial speakers for sound that disappears.", stats: "84 products · 4.8 avg rating", icon: <Headphones className="size-6" /> },
            { title: "Wearables", description: "Quiet intelligence on your wrist — vitals, focus, and time, beautifully resolved.", stats: "42 products · 4.9 avg rating", icon: <Watch className="size-6" /> },
            { title: "Mobile", description: "Flagship phones engineered as one — silicon, software, and signal in perfect step.", stats: "36 products · 4.7 avg rating", icon: <Smartphone className="size-6" /> },
            { title: "Gaming", description: "Frame-perfect rigs and peripherals built for the moment between input and reaction.", stats: "58 products · 4.8 avg rating", icon: <Gamepad2 className="size-6" /> },
            { title: "Smart Home", description: "An ambient layer for your space — automations that fade into the architecture.", stats: "92 products · 4.8 avg rating", icon: <HomeIcon className="size-6" /> },
          ]}
        />
      </section>



      {/* TRUST / COUNTERS */}
      <section className="px-6 lg:px-10 py-24">
        <div className="max-w-7xl mx-auto surface-card-2 p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px hairline-x" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { n: 25000, suffix: "+", label: "Products Reviewed", Icon: Box },
              { n: 500, suffix: "+", label: "Buying Guides", Icon: Cpu },
              { n: 100, suffix: "+", label: "Categories", Icon: Sparkles },
              { n: 98, suffix: "%", label: "Reader Satisfaction", Icon: Shield },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="inline-grid place-items-center size-12 rounded-full bg-[var(--surface)] border border-[var(--emerald-accent)]/30 mb-4">
                  <s.Icon className="size-5 text-[var(--emerald-accent)]" />
                </div>
                <p className="font-display text-4xl lg:text-5xl font-bold">
                  <AnimatedCounter to={s.n} suffix={s.suffix} className="text-accent-gradient" />
                </p>
                <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
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

      {/* TESTIMONIAL */}
      <section className="px-6 lg:px-10 py-24">
        <div className="max-w-5xl mx-auto surface-card-2 p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-50" />
          <div className="relative">
            <Camera className="size-8 mx-auto text-[var(--emerald-accent)] mb-6" />
            <p className="font-display text-2xl lg:text-3xl leading-snug max-w-3xl mx-auto">
              "AETHER is the only place I check before any tech purchase. The reviews are the reviews
              I'd write — if I had three weeks per product."
            </p>
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mt-6">
              Maya Chen — Director of Design, Loop Studio
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-24">
        <div className="max-w-7xl mx-auto rounded-3xl p-10 lg:p-20 text-center relative overflow-hidden" style={{ background: "var(--gradient-accent)" }}>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-[oklch(0.13_0.03_270)] tracking-tight">
            Ready to upgrade <span className="italic">everything</span>?
          </h2>
          <p className="text-[oklch(0.13_0.03_270)]/80 max-w-xl mx-auto mt-4">
            Browse the 2026 collection, or start with the editor's shortlist.
          </p>
          <div className="flex gap-3 justify-center mt-8 flex-wrap">
            <Link to="/collections" className="rounded-full px-7 py-3.5 text-sm font-semibold bg-background text-foreground hover:bg-[var(--surface)] transition-colors">
              Shop Collections
            </Link>
            <Link to="/best-of-2026" className="rounded-full px-7 py-3.5 text-sm font-semibold border border-[oklch(0.13_0.03_270)] text-[oklch(0.13_0.03_270)] hover:bg-[oklch(0.13_0.03_270)] hover:text-background transition-colors">
              Best of 2026
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

