import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SplitTextReveal, TiltCard, HandUnderline } from "@/components/site/motion";
import laptopImg from "@/assets/product-laptop.jpg";
import headphonesImg from "@/assets/product-headphones.jpg";
import watchImg from "@/assets/product-watch.jpg";
import phoneImg from "@/assets/product-phone.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Curated Collections — genCART" },
      { name: "description", content: "Editor-curated genCART collections: workstations, immersive audio, ambient living, and more." },
      { property: "og:title", content: "Curated Collections — genCART" },
      { property: "og:description", content: "Editor-curated genCART collections for every workflow." },
      { property: "og:image", content: "/og-collections.jpg" },
    ],
  }),
  component: CollectionsPage,
});

const collections = [
  { title: "Creator Workstation", count: 8, body: "The full stack for video, design, and dev — from silicon to monitor calibration.", img: laptopImg, categorySlug: "computing" },
  { title: "Immersive Audio", count: 6, body: "Reference-grade headphones, spatial speakers, and the gear that makes them sing.", img: headphonesImg, categorySlug: "audio" },
  { title: "Quiet Wearables", count: 5, body: "Vitals, focus, and time — beautifully resolved, never demanding.", img: watchImg, categorySlug: "wearables" },
  { title: "Pocket Flagships", count: 4, body: "The phones engineered as one. Silicon, software, and signal in perfect step.", img: phoneImg, categorySlug: "mobile" },
  { title: "Ambient Smart Home", count: 9, body: "Automations that fade into the architecture instead of fighting for attention.", img: "/assets/product-hub.png", categorySlug: "smart-home" },
  { title: "Travel Light", count: 7, body: "The carry-on stack — thin laptops, fast chargers, sub-300g headphones.", img: "/assets/product-studio-monitor.png", categorySlug: "computing" },
];

function CollectionsPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="relative max-w-6xl mx-auto">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3">Editor curated · 2026</p>
          <SplitTextReveal
            text="Collections, deeply edited"
            className="font-display text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          />
          <p className="mt-6 text-muted-foreground max-w-xl">
            Not a shop. A library of <HandUnderline>working setups</HandUnderline> — every product, every adapter, every reason behind it.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((c) => (
            <TiltCard key={c.title} className="surface-card overflow-hidden group" max={6}>
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-2)]">
                <img src={c.img} alt={c.title} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <span className="absolute top-4 left-4 font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] bg-background/60 backdrop-blur px-2 py-1 rounded">
                  {c.count} items
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 line-clamp-2">{c.body}</p>
                <Link to={`/category/${c.categorySlug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--emerald-accent)] hover:gap-3 transition-all">
                  View collection <ArrowRight className="size-4" />
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </>
  );
}
