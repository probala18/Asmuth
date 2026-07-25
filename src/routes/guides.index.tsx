import { createFileRoute } from "@tanstack/react-router";
import { SplitTextReveal, HandUnderline } from "@/components/site/motion";
import { GuideCard } from "@/components/site/ContentCards";
import { guides } from "@/data/guides";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: "Buying Guides & Manuals — genCART" },
      { name: "description", content: "Expert buying guides, workspaces breakdowns, and hardware manuals for builders and developers." },
    ],
  }),
  component: GuidesIndexPage,
});

function GuidesIndexPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-6xl mx-auto text-center">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-3">Buying Handbooks</p>
          <SplitTextReveal text="Hardware manuals" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Practical breakdowns of professional workflows and components. <HandUnderline>Buy exactly what you need</HandUnderline>, avoid what you don't.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </section>
    </>
  );
}
