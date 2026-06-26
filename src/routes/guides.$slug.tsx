import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Calendar, ExternalLink } from "lucide-react";
import { SplitTextReveal, TiltCard } from "@/components/site/motion";
import { ProductCard } from "@/components/site/ProductCards";
import { getGuide, guides } from "@/data/guides";
import { getProduct } from "@/data";

export const Route = createFileRoute("/guides/$slug")({
  parseParams: (params) => ({
    slug: params.slug,
  }),
  head: ({ params }) => {
    const guide = getGuide(params.slug);
    return {
      meta: [
        { title: guide ? `${guide.title} · AETHER` : "Buying Guide · AETHER" },
        { name: "description", content: guide ? guide.excerpt : "Expert buying guide and setups." },
        { property: "og:title", content: guide ? `${guide.title} · AETHER` : "Buying Guide · AETHER" },
        { property: "og:description", content: guide ? guide.excerpt : "Expert buying guide." },
        { property: "og:image", content: guide?.image },
      ],
    };
  },
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) {
      throw notFound();
    }
    // Load products recommended in this guide
    const recommendedProducts = (guide.relatedProducts || [])
      .map((slug) => getProduct(slug))
      .filter(Boolean);
    return { guide, recommendedProducts };
  },
  component: GuideDetailPage,
});

function GuideDetailPage() {
  const { guide, recommendedProducts } = Route.useLoaderData();

  // Find other guides
  const otherGuides = guides
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 2);

  return (
    <>
      {/* Header section */}
      <section className="relative pt-36 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="relative max-w-4xl mx-auto">
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Guides
          </Link>

          <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] block mb-4">
            {guide.category} Setup Manual
          </span>

          <SplitTextReveal text={guide.title} className="font-display text-4xl lg:text-6xl font-bold tracking-tight mb-6" />

          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {guide.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-y-4 gap-x-8 pt-6 border-t border-[var(--hairline)] text-xs text-muted-foreground">
            <div>
              <span className="block text-[10px] font-mono-tech uppercase text-muted-foreground/60 mb-0.5">Written By</span>
              <span className="font-semibold text-foreground">{guide.author}</span>
            </div>
            <div>
              <span className="block text-[10px] font-mono-tech uppercase text-muted-foreground/60 mb-0.5">Published</span>
              <span className="font-semibold text-foreground">{guide.publishedAt}</span>
            </div>
            <div>
              <span className="block text-[10px] font-mono-tech uppercase text-muted-foreground/60 mb-0.5">Read Time</span>
              <span className="font-semibold text-foreground flex items-center gap-1">
                <BookOpen className="size-3.5" />
                {guide.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 lg:px-10 py-4">
        <div className="max-w-5xl mx-auto aspect-[16/7] rounded-3xl overflow-hidden border border-[var(--hairline)] surface-card">
          <img src={guide.image} alt={guide.title} className="size-full object-cover" />
        </div>
      </section>

      {/* Guide Content & Breakdown */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {guide.sections.map((section, idx) => (
            <div key={idx} className="space-y-4 relative pl-8 border-l-2 border-[var(--emerald-accent)]/20 hover:border-[var(--emerald-accent)] transition-colors">
              <span className="absolute -left-[9px] top-1.5 flex size-4 items-center justify-center rounded-full bg-background border-2 border-[var(--emerald-accent)] text-[8px] font-mono font-bold">
                {idx + 1}
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground">
                {section.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed text-lg whitespace-pre-line font-sans">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Products */}
      {recommendedProducts.length > 0 && (
        <section className="px-6 lg:px-10 py-16 bg-[var(--surface)] border-y border-[var(--hairline)]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-12">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-3">Recommended Gear</p>
              <h2 className="font-display text-3xl font-bold">The Workspace Core</h2>
              <p className="text-sm text-muted-foreground mt-2">
                We've thoroughly benchmarked these tools. They are the essential building blocks for this specific workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Guides */}
      {otherGuides.length > 0 && (
        <section className="px-6 lg:px-10 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-10">
              <div>
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Ecosystem Guides</p>
                <h2 className="font-display text-3xl font-semibold">Other Setup Handbooks</h2>
              </div>
              <Link to="/guides" className="text-xs font-semibold text-[var(--emerald-accent)] hover:underline">
                View all manuals &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherGuides.map((g) => (
                <TiltCard key={g.slug} className="surface-card overflow-hidden group flex flex-col h-full relative" max={4}>
                  <Link to={`/guides/${g.slug}`} className="flex flex-col h-full">
                    <div className="aspect-[16/9] overflow-hidden bg-[var(--surface-2)]">
                      <img src={g.image} alt={g.title} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="font-mono-tech text-[9px] text-[var(--emerald-accent)] uppercase tracking-wider block mb-2">{g.category}</span>
                        <h3 className="font-display text-xl font-bold group-hover:text-[var(--emerald-accent)] transition-colors line-clamp-2">{g.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{g.excerpt}</p>
                      </div>
                      <div className="pt-4 border-t border-[var(--hairline)] mt-4 flex items-center justify-between text-xs text-muted-foreground">
                        <span>By {g.author}</span>
                        <span>{g.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
