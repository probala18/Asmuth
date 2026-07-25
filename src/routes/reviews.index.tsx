import { createFileRoute, Link } from "@tanstack/react-router";
import { SplitTextReveal, HandUnderline } from "@/components/site/motion";
import { ReviewCard } from "@/components/site/ContentCards";
import { reviews } from "@/data";

export const Route = createFileRoute("/reviews/")({
  head: () => ({
    meta: [
      { title: "Expert Reviews — genCART" },
      { name: "description", content: "In-depth, lab-tested expert reviews on premium tech. Independent editorial, zero sponsors." },
    ],
  }),
  component: ReviewsIndexPage,
});

function ReviewsIndexPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="relative max-w-6xl mx-auto text-center">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-3">Independent Editorial</p>
          <SplitTextReveal text="Expert lab reviews" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Three-week daily usage, standardised benchmarks, no sponsored content. <HandUnderline>We test it ourselves.</HandUnderline>
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <ReviewCard key={r.slug} review={r} />
          ))}
        </div>
      </section>
    </>
  );
}
