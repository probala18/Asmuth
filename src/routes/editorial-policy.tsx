import { createFileRoute } from "@tanstack/react-router";
import { SplitTextReveal } from "@/components/site/motion";

export const Route = createFileRoute("/editorial-policy")({
  head: () => ({
    meta: [
      { title: "Editorial Policy — genCART" },
      { name: "description", content: "Learn about the standards of accuracy, independence, and transparency that guide genCART." },
    ],
  }),
  component: EditorialPolicyPage,
});

function EditorialPolicyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-20 space-y-12">
      <div className="space-y-4">
        <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Integrity</p>
        <SplitTextReveal text="Editorial Policy" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
        <p className="text-xl text-muted-foreground leading-relaxed">
          genCART stands for absolute editorial clarity. Our policy outlines our values, correction procedures, and independence principles.
        </p>
      </div>

      <div className="space-y-8 font-sans leading-relaxed text-foreground/80">
        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">Independence and Autonomy</h3>
          <p>
            genCART editors and writers have complete control over all reviews, articles, and guides. We do not pitch ideas to companies prior to testing, and we never show drafts of our coverage to any external entity before publication. If a product fails our laboratory benchmarks, we report it exactly as is.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">Correction Guidelines</h3>
          <p>
            While we strive for perfect accuracy in our hardware specifications, prices, and software details, errors can occur. When we identify a material error, we correct it immediately and append a public note to the top of the article detailing what was corrected.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">Affiliate Relationship Separation</h3>
          <p>
            Our review and guide authors are completely separated from our business and marketing teams. The editorial team selects which products to evaluate based on merit and reader interest, completely unaware of potential affiliate contracts or rates.
          </p>
        </div>
      </div>
    </article>
  );
}
