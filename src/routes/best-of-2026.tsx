import { createFileRoute, Link } from "@tanstack/react-router";
import { SplitTextReveal, StackingCards, HandUnderline, AnimatedCounter } from "@/components/site/motion";
import laptopImg from "@/assets/product-laptop.jpg";

export const Route = createFileRoute("/best-of-2026")({
  head: () => ({
    meta: [
      { title: "Best Products of 2026 — AETHER" },
      { name: "description", content: "The definitive AETHER ranking of the best premium tech of 2026 — laptops, audio, phones, wearables, and more." },
      { property: "og:title", content: "Best Products of 2026 — AETHER" },
      { property: "og:description", content: "The definitive ranking of the best premium tech of 2026." },
      { property: "og:image", content: laptopImg },
      { property: "twitter:image", content: laptopImg },
    ],
  }),
  component: BestOf,
});

const picks = [
  { tag: "Best Laptop", title: "Aether Laptop Air", subtitle: "Engineered as one. Edge-to-edge OLED, 22h battery.", body: "We tested 14 laptops in the $800-1200 bracket. The Air wins on every axis we measure — performance per watt, display calibration accuracy, battery endurance, and build precision. The only laptop in the bracket whose successor we wouldn't immediately replace it with.", cta: "Read review →" },
  { tag: "Best Headphones", title: "Aether Buds Pro", subtitle: "Reference-grade tuning, ANC that disappears.", body: "Compared head-to-head against six flagship in-ear models. The Buds Pro produce the flattest frequency response in the category and the only ANC implementation that doesn't add audible pressure. Battery life landed at 9.4h with ANC on — best in class.", cta: "See specs →" },
  { tag: "Best Wearable", title: "Aether Watch X", subtitle: "Quiet intelligence, all-day battery.", body: "Most smartwatches are notification machines. The Watch X is a vitals instrument that happens to be a watch. The 72-hour battery and AMOLED always-on are quietly the best in the category.", cta: "Explore →" },
  { tag: "Best Phone", title: "Aether Phone 15", subtitle: "Flagship signal — without flagship friction.", body: "Camera processing has been the deciding factor for the last three flagship cycles. The Phone 15 ships the only computational pipeline that we couldn't tell apart from a mirrorless body under standard lab conditions.", cta: "Read review →" },
  { tag: "Best Value", title: "Aether Pad Pro", subtitle: "Pro tablet at consumer money.", body: "$649 puts this in mid-tier territory, but everything from the laminated 120Hz display to the M-class chip is firmly pro-tier. The cheapest serious tablet we'd actually recommend to a working creator.", cta: "Compare →" },
];

function BestOf() {
  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-6xl mx-auto">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3">Annual Awards · Vol. 06</p>
          <SplitTextReveal text="Best of 2026" className="font-display text-6xl lg:text-8xl font-bold tracking-tight" />
          <p className="mt-6 text-xl text-muted-foreground max-w-xl">
            Five categories. <HandUnderline>One winner each.</HandUnderline> Determined by long-loop testing, not unboxings.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: 1248, s: "+", l: "Products Tested" },
              { n: 14, s: "", l: "Categories" },
              { n: 86, s: "", l: "Test Weeks" },
              { n: 5, s: "", l: "Winners" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-4xl font-bold text-accent-gradient">
                  <AnimatedCounter to={s.n} suffix={s.s} />
                </p>
                <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <StackingCards items={picks} />
        </div>
      </section>

      <section className="px-6 lg:px-10 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">Want the runner-ups?</h2>
          <p className="text-muted-foreground mb-8">Every category has 3 honorable mentions and 2 hard passes. Read the full reports.</p>
          <Link to="/reviews/macbook-pro" className="btn-accent rounded-full px-7 py-3.5 text-sm font-semibold inline-flex">Open the full report →</Link>
        </div>
      </section>
    </>
  );
}
