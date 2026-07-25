import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, Heart, Award } from "lucide-react";
import { SplitTextReveal } from "@/components/site/motion";

export const Route = createFileRoute("/how-we-review")({
  head: () => ({
    meta: [
      { title: "How We Review — genCART" },
      { name: "description", content: "Our laboratory testing standards, benchmarks, and editorial guidelines." },
    ],
  }),
  component: HowWeReviewPage,
});

function HowWeReviewPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-20 space-y-12">
      <div className="space-y-4">
        <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Methodology</p>
        <SplitTextReveal text="How We Review" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
        <p className="text-xl text-muted-foreground leading-relaxed">
          Behind every score lies 30+ hours of standardized benchmarks and testing. We evaluate each product based on real-world metrics, design details, and material durability.
        </p>
      </div>

      <div className="surface-card p-8 md:p-10 rounded-3xl border border-[var(--hairline)] space-y-8">
        <h3 className="font-display text-2xl font-bold text-foreground">Our 4-Step Pipeline</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              step: "01",
              title: "Procurement",
              desc: "We buy products directly from retail stores. No free review samples, no developer hardware sent directly from PR teams.",
            },
            {
              step: "02",
              title: "Lab Testing",
              desc: "Every product is benchmarked against its competitors in controlled environments. We measure battery run time, temperature under load, and sound output.",
            },
            {
              step: "03",
              title: "Daily Driving",
              desc: "A member of our editorial staff takes the product home as their primary daily device for a minimum of 21 days.",
            },
            {
              step: "04",
              title: "Scoring & Review",
              desc: "Our review scoring is entirely mathematical. Individual categories are weighted to calculate the final genCART Rating.",
            },
          ].map((s) => (
            <div key={s.step} className="space-y-2 relative pl-6 border-l border-[var(--emerald-accent)]">
              <span className="absolute -left-[5px] top-1 flex size-2 rounded-full bg-[var(--emerald-accent)]" />
              <div className="text-xs font-mono-tech text-[var(--emerald-accent)] font-bold">{s.step} / Phase</div>
              <h4 className="font-display text-lg font-bold">{s.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { icon: ShieldCheck, title: "Zero Ads", desc: "No banners, no sponsored reviews, no corporate interference." },
          { icon: Heart, title: "Lab Verified", desc: "Every metric shown is backed by oscilloscope or meter logs." },
          { icon: Award, title: "Long-Loop Logs", desc: "We track products over months to report software stability." },
        ].map((item, idx) => (
          <div key={idx} className="surface-card-2 p-6 rounded-2xl border border-[var(--hairline)] flex flex-col justify-between space-y-4">
            <item.icon className="size-6 text-[var(--emerald-accent)]" />
            <div>
              <h5 className="font-display font-semibold text-sm">{item.title}</h5>
              <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
