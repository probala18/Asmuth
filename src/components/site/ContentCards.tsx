import { Link } from "@tanstack/react-router";
import { Star, Award, Calendar, BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import type { Review, Guide, Brand } from "@/types";
import { TiltCard, MouseGlow } from "./motion";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <TiltCard className="surface-card overflow-hidden group flex flex-col h-full relative" max={5}>
      <Link to={`/reviews/${review.slug}`} className="flex flex-col h-full">
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-2)]">
          <img
            src={review.image}
            alt={review.productName}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 768px) 33vw, 100vw"
            className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
          <MouseGlow />

          {/* Badge */}
          {review.badge && (
            <span 
              className="absolute top-4 left-4 rounded-full px-2.5 py-1 text-[9px] font-bold font-mono-tech text-background uppercase tracking-wider flex items-center gap-1"
              style={{ background: "var(--gradient-accent)" }}
            >
              <Award className="size-3" />
              {review.badge.replace("-", " ")}
            </span>
          )}

          {/* Score overlay */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur-md px-3 py-1 shadow-md">
            <span className="text-[10px] font-mono-tech text-muted-foreground uppercase">Score</span>
            <span className="font-display font-bold text-sm text-[var(--emerald-accent)]">{review.overallScore.toFixed(1)}</span>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[var(--cyan-accent)]">
              Expert Review
            </span>
            <h3 className="font-display text-xl font-semibold leading-snug text-foreground group-hover:text-[var(--emerald-accent)] transition-colors line-clamp-2">
              {review.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {review.excerpt}
            </p>
          </div>

          <div className="pt-6 border-t border-[var(--hairline)] mt-6 flex items-center justify-between text-xs text-muted-foreground">
            <span>By {review.author}</span>
            <span className="flex items-center gap-1">
              <BookOpen className="size-3" />
              {review.readTime}
            </span>
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <TiltCard className="surface-card overflow-hidden group flex flex-col h-full relative" max={5}>
      <Link to={`/guides/${guide.slug}`} className="flex flex-col h-full">
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-2)]">
          <img
            src={guide.image}
            alt={guide.title}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
          <MouseGlow />
          
          <span 
            className="absolute top-4 left-4 rounded px-2 py-0.5 text-[9px] font-bold font-mono-tech text-background uppercase tracking-wider"
            style={{ background: "var(--gradient-accent)" }}
          >
            {guide.category}
          </span>
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[var(--emerald-accent)]">
              Buying Guide
            </span>
            <h3 className="font-display text-xl font-semibold leading-snug text-foreground group-hover:text-[var(--emerald-accent)] transition-colors line-clamp-2">
              {guide.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {guide.excerpt}
            </p>
          </div>

          <div className="pt-6 border-t border-[var(--hairline)] mt-6 flex items-center justify-between text-xs text-muted-foreground">
            <span>By {guide.author}</span>
            <span className="flex items-center gap-1">
              <BookOpen className="size-3" />
              {guide.readTime}
            </span>
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <TiltCard className="surface-card p-8 flex flex-col justify-between h-full min-h-[200px] relative group" max={5}>
      <div className="absolute -right-16 -top-16 size-48 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" style={{ background: "var(--gradient-accent)" }} />
      
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="font-display text-xl font-bold tracking-tight text-accent-gradient uppercase">
            {brand.name}
          </div>
          <a 
            href={brand.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-[var(--emerald-accent)] transition-colors p-1"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Visit ${brand.name} website`}
          >
            <ExternalLink className="size-4" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
          {brand.description}
        </p>
      </div>

      <div className="pt-4 border-t border-[var(--hairline)]/50 mt-auto flex items-center justify-between text-xs">
        <span className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground">
          {brand.productCount} products
        </span>
        <Link 
          to={`/brand/${brand.slug}`}
          className="font-semibold text-[var(--emerald-accent)] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
        >
          View all <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </TiltCard>
  );
}
