import { createFileRoute } from "@tanstack/react-router";
import { SplitTextReveal } from "@/components/site/motion";

export const Route = createFileRoute("/affiliate-disclosure")({
  head: () => ({
    meta: [
      { title: "Affiliate Disclosure — genCART" },
      { name: "description", content: "Details on how genCART uses affiliate links to fund our lab and testing team." },
    ],
  }),
  component: AffiliateDisclosurePage,
});

function AffiliateDisclosurePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-20 space-y-12">
      <div className="space-y-4">
        <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Transparency</p>
        <SplitTextReveal text="Affiliate Disclosure" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
        <p className="text-xl text-muted-foreground leading-relaxed">
          How genCART funds independent reviews. We believe in complete financial transparency with our readers.
        </p>
      </div>

      <div className="space-y-8 font-sans leading-relaxed text-foreground/80">
        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">How We Earn Commission</h3>
          <p>
            When you click a link on genCART to purchase a product from Amazon or other retail partners, we receive a small commission from that sale. This does not increase the price you pay; the retailer shares a portion of their standard margin with us as a referral partner.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">Amazon Associate Program</h3>
          <p>
            genCART is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">Separation of Editorial and Affiliate Business</h3>
          <p>
            Our writers, benchmark engineers, and laboratory testers do not know which affiliate programs genCART has or what commission rates are earned from various stores. The editorial evaluation of a product's performance is conducted without commercial influence.
          </p>
        </div>
      </div>
    </article>
  );
}
