import { createFileRoute, Link } from "@tanstack/react-router";
import { Laptop, Headphones, Watch, Smartphone, Gamepad2, Home as HomeIcon, Camera, Cpu, Tv } from "lucide-react";
import { SplitTextReveal, TiltCard, HandUnderline } from "@/components/site/motion";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Categories — AETHER" },
      { name: "description", content: "Browse every premium tech category at AETHER: computing, audio, wearables, mobile, gaming, smart home." },
      { property: "og:title", content: "Categories — AETHER" },
      { property: "og:description", content: "Browse every premium tech category at AETHER." },
    ],
  }),
  component: CategoriesPage,
});

const categories = [
  { icon: Laptop, name: "Computing", count: "250+ Products", body: "Laptops, desktops, and tablets engineered for makers and creators." },
  { icon: Headphones, name: "Audio", count: "180+ Products", body: "Reference-grade headphones, speakers, and spatial audio rigs." },
  { icon: Watch, name: "Wearables", count: "120+ Products", body: "Smartwatches and fitness tech that quietly elevate your day." },
  { icon: Smartphone, name: "Mobile", count: "90+ Products", body: "Flagship phones and accessories — silicon meeting software." },
  { icon: Gamepad2, name: "Gaming", count: "210+ Products", body: "Consoles, rigs, and peripherals engineered for milliseconds." },
  { icon: HomeIcon, name: "Smart Home", count: "340+ Products", body: "Ambient automations that disappear into the architecture." },
  { icon: Camera, name: "Cameras", count: "75+ Products", body: "Mirrorless, cinema, and creator kits for serious storytelling." },
  { icon: Cpu, name: "Components", count: "420+ Products", body: "CPUs, GPUs, memory, and storage for high-performance builds." },
  { icon: Tv, name: "Displays", count: "95+ Products", body: "OLED, mini-LED, and reference monitors with calibration grade." },
];

function CategoriesPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[var(--emerald-accent)]" />
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Browse the collection</span>
            <span className="block w-8 h-px bg-[var(--emerald-accent)]" />
          </div>
          <SplitTextReveal
            text="Discover every category"
            className="font-display text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            From <HandUnderline>flagship silicon</HandUnderline> to ambient smart home — the entire 2026 catalog, organized.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <TiltCard key={c.name} className="surface-card-2 p-10 relative overflow-hidden group" max={5}>
              <div className="absolute inset-0 bg-gradient-to-br from-[color-mix(in_oklab,var(--emerald-accent)_15%,transparent)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="size-16 rounded-2xl bg-[var(--surface)] border border-[var(--emerald-accent)]/25 grid place-items-center mb-8 group-hover:glow-emerald transition">
                  <c.icon className="size-7 text-[var(--emerald-accent)]" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">{c.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{c.body}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-xs text-[var(--emerald-accent)]">{c.count}</span>
                  <Link to="/collections" className="text-xs text-foreground/70 hover:text-[var(--emerald-accent)] transition">Explore →</Link>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </>
  );
}
