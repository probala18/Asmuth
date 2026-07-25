import { createFileRoute } from "@tanstack/react-router";
import { SplitTextReveal } from "@/components/site/motion";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — genCART" },
      { name: "description", content: "Terms of use and guidelines when browsing genCART." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-20 space-y-12">
      <div className="space-y-4">
        <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Legal</p>
        <SplitTextReveal text="Terms of Service" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
        <p className="text-xl text-muted-foreground leading-relaxed">
          The guidelines and rules for visiting and utilizing the content on genCART.
        </p>
      </div>

      <div className="space-y-8 font-sans leading-relaxed text-foreground/80">
        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">1. Content Usage</h3>
          <p>
            All benchmarks, editorial ratings, custom images, and text content published on genCART are copyrighted material. You may not scrape, copy, or republish our ratings or content without explicit written permission from our editorial board.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">2. Disclaimer of Liability</h3>
          <p>
            genCART reviews and guides represent our editorial opinions based on laboratory benchmarks and daily driving. We are not liable for any issues, malfunctions, or warranty disputes arising from products you choose to purchase via links on our platform.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">3. Modifications to Service</h3>
          <p>
            We reserve the right to modify, adjust scores, update benchmarks, or terminate parts of the genCART site at any time without prior notification.
          </p>
        </div>
      </div>
    </article>
  );
}
