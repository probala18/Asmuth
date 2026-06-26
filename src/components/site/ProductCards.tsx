import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Star, Timer, Tag, ArrowRight, LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import type { Product, Category } from "@/types";
import { TiltCard, MouseGlow } from "./motion";

// Helper to resolve icon dynamic name from Lucide
function resolveIcon(name: string): LucideIcon {
  const IconComponent = (Icons as any)[name];
  return IconComponent || Icons.HelpCircle;
}

export function ProductCard({ product }: { product: Product }) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100) 
    : 0;

  return (
    <TiltCard className="surface-card overflow-hidden group flex flex-col h-full relative" max={6}>
      <Link to={`/product/${product.slug}`} className="flex flex-col h-full">
        {/* Image panel */}
        <div className="relative aspect-[5/4] overflow-hidden bg-[var(--surface-2)]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />
          <MouseGlow />
          
          {/* Badge */}
          {product.badge && (
            <span 
              className="absolute top-4 left-4 rounded-full px-2.5 py-1 text-[9px] font-bold font-mono-tech text-background uppercase tracking-wider" 
              style={{ background: "var(--gradient-accent)" }}
            >
              {product.badge.replace("-", " ")}
            </span>
          )}

          {/* Discount Badge */}
          {hasDiscount && !product.badge && (
            <span className="absolute top-4 left-4 rounded-full px-2.5 py-1 text-[9px] font-bold font-mono-tech bg-[var(--danger)] text-white uppercase tracking-wider">
              -{discountPercent}% OFF
            </span>
          )}

          {/* Rating */}
          <span className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-background/85 backdrop-blur-md px-2 py-0.5 text-[10px] font-bold font-mono-tech text-foreground shadow-sm">
            <Star className="size-3 text-amber-400 fill-amber-400" />
            {product.rating.toFixed(1)}
          </span>
        </div>

        {/* Info panel */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[var(--emerald-accent)]">
                {product.brand} · {product.category}
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold tracking-tight text-foreground group-hover:text-[var(--emerald-accent)] transition-colors line-clamp-1">
              {product.name}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          <div className="pt-6 border-t border-[var(--hairline)] mt-6 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-xl font-bold text-foreground">
                ${product.price}
              </span>
              {hasDiscount && (
                <span className="text-xs text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <span className="size-8 rounded-full bg-[var(--surface-2)] group-hover:bg-[var(--emerald-accent)] text-foreground group-hover:text-background flex items-center justify-center transition-colors">
              <ArrowRight className="size-4" />
            </span>
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}

export function DealCard({ product, hours }: { product: Product; hours: number }) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100) 
    : 0;

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const target = new Date();
    target.setHours(target.getHours() + hours);

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target.getTime() - now;

      if (difference <= 0) {
        setTimeLeft("00:00:00");
        return;
      }

      const h = Math.floor(difference / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(
        `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
      );
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [hours]);

  return (
    <TiltCard className="surface-card overflow-hidden group flex flex-col h-full relative" max={5}>
      <div className="relative aspect-[5/4] overflow-hidden bg-[var(--surface-2)]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <MouseGlow />

        {/* Discount Badge */}
        {hasDiscount && (
          <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold font-mono-tech text-white uppercase tracking-wider bg-[var(--danger)]">
            -{discountPercent}% OFF
          </span>
        )}

        {/* Timer */}
        <span className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono-tech text-[var(--cyan-accent)]">
          <Timer className="size-3 text-[var(--emerald-accent)]" />
          <span className="tabular-nums">{timeLeft}</span>
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <span className="font-mono-tech text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            Limited stock drop
          </span>
          <h3 className="font-display text-lg font-semibold tracking-tight">{product.name}</h3>
          <div className="flex items-baseline gap-3 pt-1">
            <span className="font-display text-2xl font-bold text-accent-gradient">${product.price}</span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>

        <Link
          to={`/product/${product.slug}`}
          className="btn-ghost-glow w-full rounded-full py-2.5 text-xs font-semibold inline-flex items-center justify-center gap-2 mt-4 cursor-pointer"
        >
          <Tag className="size-3" /> Grab deal
        </Link>
      </div>
    </TiltCard>
  );
}

export function CategoryCard({ category }: { category: Category }) {
  const IconComponent = resolveIcon(category.icon);

  return (
    <TiltCard className="surface-card-2 p-8 relative overflow-hidden group flex flex-col justify-between h-full min-h-[220px]" max={6}>
      <div className="absolute -right-20 -top-20 size-60 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" style={{ background: "var(--gradient-accent)" }} />
      
      <div>
        <div className="size-12 grid place-items-center rounded-xl bg-background border border-[var(--hairline)] text-[var(--emerald-accent)] group-hover:scale-110 transition-transform duration-300 mb-6">
          <IconComponent className="size-5" />
        </div>
        <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">{category.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed pr-4 line-clamp-2">{category.description}</p>
      </div>

      <div className="pt-6 border-t border-[var(--hairline)]/50 mt-6 flex items-center justify-between">
        <span className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground">
          {category.productCount} items reviewed
        </span>
        <Link
          to={`/category/${category.slug}`}
          className="text-xs font-semibold text-[var(--emerald-accent)] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
        >
          Explore <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </TiltCard>
  );
}
