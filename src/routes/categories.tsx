import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { SplitTextReveal, TiltCard, HandUnderline } from "@/components/site/motion";
import { categories } from "@/data";

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
          {categories.map((c) => {
            const IconComponent = (Icons as any)[c.icon] || Icons.HelpCircle;
            return (
              <TiltCard key={c.slug} className="surface-card-2 p-10 relative overflow-hidden group flex flex-col justify-between" max={5}>
                <div className="absolute inset-0 bg-gradient-to-br from-[color-mix(in_oklab,var(--emerald-accent)_15%,transparent)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="size-16 rounded-2xl bg-[var(--surface)] border border-[var(--emerald-accent)]/25 grid place-items-center mb-8 group-hover:glow-emerald transition">
                    <IconComponent className="size-7 text-[var(--emerald-accent)]" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-2">{c.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{c.description}</p>
                </div>
                <div className="flex items-center justify-between border-t border-[var(--hairline)]/50 pt-6 mt-6">
                  <span className="font-mono-tech text-xs text-[var(--emerald-accent)]">{c.productCount} products</span>
                  <Link to={`/category/${c.slug}`} className="text-xs font-semibold text-foreground/70 hover:text-[var(--emerald-accent)] transition">Explore →</Link>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>
    </>
  );
}
