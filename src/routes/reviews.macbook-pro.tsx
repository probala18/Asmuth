import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X, Award, Star } from "lucide-react";
import { SplitTextReveal, ScrollProgressBar, HandUnderline, TiltCard } from "@/components/site/motion";
import laptopImg from "@/assets/product-laptop.jpg";
import phoneImg from "@/assets/product-phone.jpg";

export const Route = createFileRoute("/reviews/macbook-pro")({
  head: () => ({
    meta: [
      { title: "MacBook Pro M3 Max — Expert Review · AETHER" },
      { name: "description", content: "Three weeks with the MacBook Pro M3 Max. Performance benchmarks, battery, display, value — and how it compares." },
      { property: "og:title", content: "MacBook Pro M3 Max — Expert Review · AETHER" },
      { property: "og:description", content: "Three weeks with the MacBook Pro M3 Max — the editor's full review." },
      { property: "og:image", content: laptopImg },
      { property: "twitter:image", content: laptopImg },
    ],
  }),
  component: ReviewPage,
});

const pros = ["M3 Max chip is in a class of its own", "OLED-grade mini-LED, peak 1600 nits", "All-day battery — actually 18+ hours", "Studio-grade speakers"];
const cons = ["Premium tier pricing", "No touchscreen", "Limited port flexibility for legacy gear"];

function ReviewPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Award className="size-4 text-[var(--emerald-accent)]" />
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Editor's Choice · Expert Review</span>
          </div>
          <SplitTextReveal text="MacBook Pro M3 Max" className="font-display text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl" />
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
            Three weeks of real-life testing. The verdict: the <HandUnderline>most complete pro laptop</HandUnderline> Apple has ever shipped.
          </p>
          <div className="flex items-center gap-6 mt-8">
            <span className="font-display text-6xl font-bold text-accent-gradient">9.4</span>
            <div>
              <div className="flex items-center gap-1 text-[var(--emerald-accent)]">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">By Editorial · 14 min read</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-12">
        <div className="max-w-6xl mx-auto aspect-[16/8] rounded-3xl overflow-hidden surface-card">
          <img src={laptopImg} alt="MacBook Pro M3 Max" className="size-full object-cover" />
        </div>
      </section>

      {/* SCORES */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto surface-card-2 p-10 lg:p-14">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3">Editorial Score</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-10">Tested against the 2025 flagship.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <ScrollProgressBar label="Performance" value={95} />
            <ScrollProgressBar label="Battery" value={90} />
            <ScrollProgressBar label="Display" value={98} />
            <ScrollProgressBar label="Camera (FaceTime)" value={88} />
            <ScrollProgressBar label="Audio" value={94} />
            <ScrollProgressBar label="Value" value={82} />
          </div>
        </div>
      </section>

      {/* PROS / CONS */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="surface-card-2 p-10">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-4">What we loved</p>
            <ul className="space-y-3">
              {pros.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <Check className="size-4 text-[var(--emerald-accent)] mt-0.5 shrink-0" />{p}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card-2 p-10">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-accent)] mb-4">Where it stalls</p>
            <ul className="space-y-3">
              {cons.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <X className="size-4 text-[var(--cyan-accent)] mt-0.5 shrink-0" />{p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-8">vs. Dell XPS 16</h2>
          <div className="surface-card-2 overflow-hidden">
            {[
              { spec: "Chip", a: "M3 Max · 16 core", b: "Intel Ultra 9", winner: "a" },
              { spec: "Display", a: "16\" mini-LED 120Hz", b: "16.3\" OLED 90Hz", winner: "a" },
              { spec: "Battery", a: "22h video", b: "12h video", winner: "a" },
              { spec: "Starting Price", a: "$2,499", b: "$1,899", winner: "b" },
              { spec: "Weight", a: "2.16 kg", b: "2.13 kg", winner: "b" },
              { spec: "Build", a: "Unibody aluminum", b: "CNC aluminum", winner: "a" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-[1fr_2fr_2fr] items-center px-6 py-4 border-t border-[var(--hairline)] first:border-t-0">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-muted-foreground">{row.spec}</span>
                <span className={`text-sm ${row.winner === "a" ? "text-[var(--emerald-accent)] font-semibold" : ""}`}>{row.a}</span>
                <span className={`text-sm ${row.winner === "b" ? "text-[var(--emerald-accent)] font-semibold" : ""}`}>{row.b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERDICT */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-4xl mx-auto surface-card-2 p-10 lg:p-14 text-center">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-4">The verdict</p>
          <p className="font-display text-3xl lg:text-4xl leading-snug">
            "If you make a living on this machine — every dollar earns itself back."
          </p>
          <Link to="/products/laptop-air" className="btn-accent inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold mt-8">
            See Best Alternatives →
          </Link>
        </div>
      </section>

      {/* RELATED */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-8">More reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Aether Laptop Air", img: laptopImg },
              { t: "Aether Phone 15", img: phoneImg },
              { t: "Dell XPS 16", img: laptopImg },
            ].map((r) => (
              <TiltCard key={r.t} className="surface-card overflow-hidden">
                <div className="aspect-[5/4]"><img src={r.img} alt={r.t} className="size-full object-cover" loading="lazy" /></div>
                <div className="p-5"><h3 className="font-display text-lg">{r.t}</h3></div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
