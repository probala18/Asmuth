import { createFileRoute } from "@tanstack/react-router";
import { SplitTextReveal } from "@/components/site/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — AETHER" },
      { name: "description", content: "Learn about the mission, values, and editorial process behind AETHER." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-20 space-y-12">
      <div className="space-y-4">
        <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">The Mission</p>
        <SplitTextReveal text="About AETHER" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
        <p className="text-xl text-muted-foreground leading-relaxed">
          We believe in physical tools designed for focus. We build independent editorial standardizations to test hardware, separate signal from noise, and help creators make informed choices.
        </p>
      </div>

      <div className="aspect-[16/7] rounded-3xl overflow-hidden bg-[var(--surface-2)] border border-[var(--hairline)]">
        <img src="/assets/product-laptop.jpg" alt="AETHER Workspace" className="size-full object-cover" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-semibold">100% Independent</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We buy every unit we test off the shelf, using standard retail channels. We do not accept sponsored content, pre-screened review units, or affiliate fees that compromise our testing standards. Our editorial judgments are entirely our own.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-2xl font-semibold">Laboratory Benchmarks</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We don't do unboxings. Every product reviewed goes through a standardized 3-week routine involving acoustic evaluation, thermal profiling under workload, screen calibration audits, and real-world battery endurance tests.
          </p>
        </div>
      </div>
    </article>
  );
}
