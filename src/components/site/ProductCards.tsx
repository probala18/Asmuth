import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Star,
  Timer,
  Tag,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  GitCompareArrows,
  LucideIcon,
} from "lucide-react";
import * as Icons from "lucide-react";
import type { Product, Category } from "@/types";
import { TiltCard, MouseGlow } from "./motion";
import { motion } from "motion/react";
import { toggleSavedProduct, useSavedProducts } from "@/lib/saved-products";

// Helper to resolve icon dynamic name from Lucide
function resolveIcon(name: string): LucideIcon {
  const IconComponent = (Icons as any)[name];
  return IconComponent || Icons.HelpCircle;
}

export function ProductCard({
  product,
  compareSelected = false,
  onCompareToggle,
}: {
  product: Product;
  compareSelected?: boolean;
  onCompareToggle?: (slug: string) => void;
}) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;
  const savedProducts = useSavedProducts();
  const isSaved = savedProducts.some((savedProduct) => savedProduct.slug === product.slug);

  const handleSaveToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    toggleSavedProduct(product.slug, product);
  };

  const handleCompareToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onCompareToggle?.(product.slug);
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={{
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        tap: { scale: 0.975 },
      }}
      whileInView="animate"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <TiltCard
        className="surface-card overflow-hidden group flex flex-col h-full relative"
        max={6}
      >
        <div className="flex flex-col h-full">
          {/* Image panel */}
          <div className="relative aspect-[5/4] overflow-hidden bg-[var(--surface-2)]">
            <Link href={`/product/${product.slug}`} className="block size-full">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
            </Link>
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

            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                type="button"
                onClick={handleCompareToggle}
                className={`flex items-center justify-center size-9 rounded-full border border-[var(--hairline)] bg-background/85 backdrop-blur-md text-foreground shadow-sm transition-all ${compareSelected ? "border-[var(--emerald-accent)] text-[var(--emerald-accent)]" : "hover:border-[var(--emerald-accent)] hover:text-[var(--emerald-accent)]"}`}
                aria-label={compareSelected ? "Remove from compare" : "Add to compare"}
              >
                <GitCompareArrows className="size-4" />
              </button>
              <button
                type="button"
                onClick={handleSaveToggle}
                className="flex items-center justify-center size-9 rounded-full border border-[var(--hairline)] bg-background/85 backdrop-blur-md text-foreground shadow-sm transition-all hover:border-[var(--emerald-accent)] hover:text-[var(--emerald-accent)]"
                aria-label={isSaved ? "Remove from saved" : "Save product"}
              >
                {isSaved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
              </button>
            </div>
          </div>

          {/* Info panel */}
          <Link
            href={`/product/${product.slug}`}
            className="p-6 flex-1 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)]">
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
              <motion.span
                variants={{
                  initial: { x: 0 },
                  hover: { x: 3 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="size-8 rounded-full bg-[var(--surface-2)] group-hover:bg-[var(--emerald-accent)] text-foreground group-hover:text-background flex items-center justify-center transition-colors"
              >
                <ArrowRight className="size-4" />
              </motion.span>
            </div>
          </Link>
        </div>
      </TiltCard>
    </motion.div>
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
        `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`,
      );
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [hours]);

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={{
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        tap: { scale: 0.975 },
      }}
      whileInView="animate"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <TiltCard
        className="surface-card overflow-hidden group flex flex-col h-full relative"
        max={5}
      >
        <div className="relative aspect-[5/4] overflow-hidden bg-[var(--surface-2)]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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
              <span className="font-display text-2xl font-bold text-accent-gradient">
                ${product.price}
              </span>
              {hasDiscount && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 450, damping: 15 }}
            className="w-full mt-4"
          >
            <Link
              href={`/product/${product.slug}`}
              className="btn-ghost-glow w-full rounded-full py-2.5 text-xs font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <Tag className="size-3" /> Grab deal
            </Link>
          </motion.div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function CategoryCard({ category }: { category: Category }) {
  const IconComponent = resolveIcon(category.icon);

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={{
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        tap: { scale: 0.98 },
      }}
      whileInView="animate"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <TiltCard
        className="surface-card-2 relative overflow-hidden group flex flex-col justify-between h-full min-h-[280px]"
        max={6}
      >
        <img
          src={category.image}
          alt=""
          loading="lazy"
          decoding="async"
          sizes="(min-width: 768px) 33vw, 100vw"
          className="absolute inset-0 size-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-[1.04] dark:opacity-20"
        />
        <div className="absolute inset-0 bg-[var(--surface)]/80" />
        <div
          className="absolute -right-20 -top-20 size-60 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
          style={{ background: "var(--gradient-accent)" }}
        />

        <div className="relative p-8 pb-0">
          <div className="size-12 grid place-items-center rounded-xl bg-background border border-[var(--hairline)] text-[var(--emerald-accent)] group-hover:scale-110 transition-transform duration-300 mb-6">
            <IconComponent className="size-5" />
          </div>
          <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">
            {category.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed pr-4 line-clamp-2">
            {category.description}
          </p>
        </div>

        <div className="relative p-8 pt-6 border-t border-[var(--hairline)]/50 mt-6 flex items-center justify-between">
          <span className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground">
            {category.productCount} items reviewed
          </span>
          <Link
            href={`/category/${category.slug}`}
            className="text-xs font-semibold text-[var(--emerald-accent)] inline-flex items-center gap-1 transition-all"
          >
            <span>Explore</span>
            <motion.span
              variants={{
                initial: { x: 0 },
                hover: { x: 3 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="inline-block"
            >
              <ArrowRight className="size-3.5" />
            </motion.span>
          </Link>
        </div>
      </TiltCard>
    </motion.div>
  );
}
