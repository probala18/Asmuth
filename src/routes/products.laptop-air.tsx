import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ShieldCheck, Truck, Cpu, Battery, Monitor, Star } from "lucide-react";
import { SplitTextReveal, TiltCard, HandUnderline, ScrollProgressBar } from "@/components/site/motion";
import laptopImg from "@/assets/product-laptop.jpg";
import headphonesImg from "@/assets/product-headphones.jpg";
import watchImg from "@/assets/product-watch.jpg";

export const Route = createFileRoute("/products/laptop-air")({
  head: () => ({
    meta: [
      { title: "genCART Laptop Air — genCART" },
      { name: "description", content: "genCART Laptop Air: M-class silicon, edge-to-edge OLED, 22-hour battery. Engineered as one." },
      { property: "og:title", content: "genCART Laptop Air — genCART" },
      { property: "og:description", content: "M-class silicon, edge-to-edge OLED, 22-hour battery." },
      { property: "og:image", content: laptopImg },
      { property: "twitter:image", content: laptopImg },
    ],
  }),
  component: ProductDetail,
});

function ProductDetail() {
  return (
    <>
      <section className="relative pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <TiltCard className="relative aspect-square rounded-3xl overflow-hidden surface-card" max={4}>
            <img src={laptopImg} alt="genCART Laptop Air" className="size-full object-cover" />
            <div className="absolute inset-0 bg-radial-glow opacity-50" />
          </TiltCard>

          <div className="space-y-6">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Computing · 2026 Edition</p>
            <SplitTextReveal text="genCART Laptop Air" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
            <p className="text-muted-foreground text-lg max-w-md">
              M-class silicon. Edge-to-edge OLED. 22-hour battery. <HandUnderline>Engineered as one.</HandUnderline>
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[var(--emerald-accent)]">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <span className="text-sm text-muted-foreground">4.9 · 1,284 reviews</span>
            </div>
            <p className="font-display text-5xl font-bold text-accent-gradient">$999</p>
            <div className="flex gap-3 pt-2">
              <button className="btn-accent rounded-full px-7 py-3.5 text-sm font-semibold">Add to Cart</button>
              <Link to="/reviews/macbook-pro" className="btn-ghost-glow rounded-full px-7 py-3.5 text-sm font-semibold">Read Review</Link>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--hairline)]">
              {[
                { Icon: ShieldCheck, label: "Lifetime Warranty" },
                { Icon: Truck, label: "Free Shipping" },
                { Icon: Check, label: "30-Day Returns" },
              ].map((b) => (
                <div key={b.label} className="text-xs text-muted-foreground flex items-center gap-2">
                  <b.Icon className="size-4 text-[var(--emerald-accent)]" /> {b.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPECS WITH PROGRESS BARS */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-5xl mx-auto surface-card-2 p-10 lg:p-14">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3">Performance</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-10 max-w-xl">Benchmarked against last year's flagship.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <ScrollProgressBar label="CPU Performance" value={95} />
            <ScrollProgressBar label="Battery Life" value={92} />
            <ScrollProgressBar label="Display Quality" value={98} />
            <ScrollProgressBar label="Build Quality" value={96} />
            <ScrollProgressBar label="Thermal Design" value={88} />
            <ScrollProgressBar label="Value Score" value={90} />
          </div>
        </div>
      </section>

      {/* SPECS TABLE */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-8">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { Icon: Cpu, k: "Chip", v: "genCART M-class · 12 core" },
              { Icon: Monitor, k: "Display", v: "14.2\" OLED · 120Hz" },
              { Icon: Battery, k: "Battery", v: "22 hours · all-day" },
            ].map((s) => (
              <div key={s.k} className="surface-card p-6">
                <s.Icon className="size-5 text-[var(--emerald-accent)] mb-3" />
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">{s.k}</p>
                <p className="font-display text-lg">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-8">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "genCART Buds Pro", img: headphonesImg, price: "$129" },
              { name: "genCART Watch X", img: watchImg, price: "$199" },
              { name: "genCART Pad Pro", img: laptopImg, price: "$649" },
            ].map((p) => (
              <TiltCard key={p.name} className="surface-card overflow-hidden">
                <div className="aspect-[5/4] overflow-hidden"><img src={p.img} alt={p.name} loading="lazy" className="size-full object-cover" /></div>
                <div className="p-5 flex justify-between items-center">
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <span className="text-[var(--emerald-accent)] font-display">{p.price}</span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
