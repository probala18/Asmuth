import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Star,
  Bookmark,
  Scale,
  Sparkles,
  Timer,
  Tag,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  Laptop,
  Headphones,
  Watch,
  Smartphone,
  Camera,
  Gamepad2,
} from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { products, categories, getDealsProducts } from "@/data";
import { dashboardData } from "@/data/personalizedDashboardData";
import type { Product } from "@/types";

/* ───────────────────────────────────────────────────────────
 * PersonalizedDashboardHero — Reference-inspired Layout
 *
 * Structure (inspired by reference image):
 *  Row 1:  [Category Sidebar] [Hero Banner] [User Card + Promos]
 *  Row 2:  Deals & Offers (countdown + discount product row)
 *  Row 3:  Category Browser Sections (banner + 2×4 grid)
 *  Row 4:  Dual Promotional Banners
 *  Row 5:  Popular Products Carousel
 *
 * Uses genCART design tokens, Framer Motion, GSAP ScrollTrigger.
 * ─────────────────────────────────────────────────────────── */

const categoryIcons: Record<string, any> = {
  computing: Laptop,
  audio: Headphones,
  wearables: Watch,
  mobile: Smartphone,
  cameras: Camera,
  gaming: Gamepad2,
};

/* ─── Section 1: Hero (Sidebar + Banner + User Card) ──── */
export function DashboardHeroSection() {
  const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <motion.section
      data-no-batch
      className="px-4 sm:px-6 lg:px-10 pt-28 pb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* LEFT — Category Sidebar */}
        <div className="lg:col-span-2 surface-card-2 rounded-2xl border border-[var(--hairline)] p-4 hidden lg:flex flex-col gap-1">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-2">
            Categories
          </p>
          {categories.map((c) => {
            const Icon = categoryIcons[c.slug] || Sparkles;
            return (
              <Link
                key={c.slug}
                to={`/category/${c.slug}`}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-foreground/80 hover:text-foreground hover:bg-[var(--surface)] transition-all group"
              >
                <Icon className="size-4 text-muted-foreground group-hover:text-[var(--emerald-accent)] transition-colors" />
                {c.name}
              </Link>
            );
          })}
        </div>

        {/* CENTER — Hero Banner */}
        <div className="lg:col-span-7 relative overflow-hidden rounded-2xl min-h-[280px] sm:min-h-[320px] bg-gradient-to-br from-[var(--surface-2)] to-[color-mix(in_oklab,var(--emerald-accent)_12%,var(--background))] border border-[var(--hairline)]">
          <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

          {/* Banner Content */}
          <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col justify-center h-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              }}
              className="max-w-md space-y-4"
            >
              <motion.p
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]"
              >
                Your Personalized Feed
              </motion.p>
              <motion.h1
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground"
              >
                Latest trending <br />
                <span className="text-accent-gradient">Product picks</span>
              </motion.h1>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                className="text-muted-foreground text-sm leading-relaxed max-w-sm"
              >
                Editorially curated recommendations built around your interest profile.
              </motion.p>
              <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
                <Link to="/collections">
                  <ShimmerButton className="btn-accent">
                    Explore Collections
                    <ArrowRight className="size-4" />
                  </ShimmerButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating product images on right side of banner */}
          <div className="absolute right-4 bottom-4 hidden sm:flex items-end gap-3 pointer-events-none">
            <img src="/assets/product-laptop.jpg" alt="" className="w-28 h-20 rounded-xl object-cover shadow-lg opacity-90 translate-y-2" loading="lazy" />
            <img src="/assets/product-headphones.jpg" alt="" className="w-24 h-24 rounded-xl object-cover shadow-lg opacity-80 -translate-y-2" loading="lazy" />
            <img src="/assets/product-watch.jpg" alt="" className="w-20 h-20 rounded-xl object-cover shadow-lg opacity-85" loading="lazy" />
          </div>
        </div>

        {/* RIGHT — User Card + Promo Cards */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          {/* User Welcome Card */}
          <div className="surface-card-2 rounded-2xl border border-[var(--hairline)] p-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full overflow-hidden border border-[var(--hairline)] bg-[var(--surface-2)]">
                <img src={dashboardData.user.avatar} alt={dashboardData.user.name} className="size-full object-cover" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{getGreeting()},</p>
                <p className="font-display text-sm font-bold text-foreground">{dashboardData.user.firstName}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/dashboard" className="btn-accent flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold w-full">
                My Workspace
              </Link>
              <Link to="/login" className="flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-medium w-full border border-[var(--hairline)] text-foreground hover:bg-[var(--surface)] transition-all">
                Manage Account
              </Link>
            </div>
          </div>

          {/* Promo Cards */}
          <div className="surface-card-2 rounded-2xl border border-[var(--hairline)] p-4 space-y-2 bg-gradient-to-br from-[color-mix(in_oklab,var(--cyan-accent)_8%,var(--background))] to-[var(--surface)]">
            <p className="font-mono-tech text-[9px] uppercase tracking-widest text-[var(--cyan-accent)]">Deal Alert</p>
            <p className="text-xs font-semibold text-foreground leading-snug">
              Get up to 25% off on selected <span className="text-[var(--emerald-accent)]">computing products</span>.
            </p>
            <Link to="/deals" className="text-[10px] font-mono-tech text-[var(--emerald-accent)] inline-flex items-center gap-1 hover:gap-2 transition-all">
              View Deals <ArrowRight className="size-3" />
            </Link>
          </div>

          <div className="surface-card-2 rounded-2xl border border-[var(--hairline)] p-4 space-y-2 bg-gradient-to-br from-[color-mix(in_oklab,var(--emerald-accent)_6%,var(--background))] to-[var(--surface)]">
            <p className="font-mono-tech text-[9px] uppercase tracking-widest text-[var(--emerald-accent)]">Editorial</p>
            <p className="text-xs font-semibold text-foreground leading-snug">
              New comparison matrix: <span className="text-[var(--cyan-accent)]">Laptop Air vs MacBook Pro</span>
            </p>
            <Link to="/compare" className="text-[10px] font-mono-tech text-[var(--emerald-accent)] inline-flex items-center gap-1 hover:gap-2 transition-all">
              Read Now <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ─── Section 2: Deals & Offers (Countdown + Products) ── */
export function DealsAndOffersSection() {
  const deals = getDealsProducts();
  const [countdown, setCountdown] = useState({ days: 4, hours: 13, mins: 34, secs: 56 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, mins, secs } = prev;
        secs--;
        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) days = 0;
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      data-no-batch
      className="px-4 sm:px-6 lg:px-10 py-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto surface-card-2 rounded-2xl border border-[var(--hairline)] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Deals and <span className="text-accent-gradient">offers</span>
            </h2>
            <p className="text-xs text-muted-foreground mt-1">Signal-grade savings on curated products</p>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-2">
            {[
              { val: countdown.days, label: "Days" },
              { val: countdown.hours, label: "Hour" },
              { val: countdown.mins, label: "Min" },
              { val: countdown.secs, label: "Sec" },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center">
                <span className="font-display text-lg font-bold text-foreground bg-[var(--surface-2)] px-3 py-1.5 rounded-lg border border-[var(--hairline)] min-w-[42px] text-center tabular-nums">
                  {String(t.val).padStart(2, "0")}
                </span>
                <span className="font-mono-tech text-[9px] text-muted-foreground mt-1">{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deals Product Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {deals.map((product) => {
            const discount = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : 0;
            return (
              <Link key={product.slug} to={`/product/${product.slug}`} className="group text-center space-y-3 p-3 rounded-xl hover:bg-[var(--surface)] transition-all">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-[var(--surface-2)] mx-auto w-full max-w-[140px]">
                  <img src={product.image} alt={product.name} className="size-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <p className="text-xs font-semibold text-foreground truncate">{product.name}</p>
                {discount > 0 && (
                  <span className="inline-block bg-[var(--emerald-accent)]/15 text-[var(--emerald-accent)] font-mono-tech text-[10px] font-bold px-2 py-0.5 rounded-md">
                    -{discount}%
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

/* ─── Section 3: Category Browser (Banner + Grid) ─────── */
export function CategoryBrowserSection({
  title,
  categorySlug,
  accentColor,
  categoryProducts,
}: {
  title: string;
  categorySlug: string;
  accentColor: string;
  categoryProducts: Product[];
}) {
  return (
    <motion.section
      data-no-batch
      className="px-4 sm:px-6 lg:px-10 py-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto surface-card-2 rounded-2xl border border-[var(--hairline)] p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          {/* Left Banner */}
          <div
            className="sm:col-span-3 rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[200px]"
            style={{
              background: `linear-gradient(135deg, color-mix(in oklab, ${accentColor} 15%, var(--background)), color-mix(in oklab, ${accentColor} 6%, var(--surface)))`,
            }}
          >
            <div className="space-y-3">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground leading-snug">
                {title}
              </h3>
              <Link
                to={`/category/${categorySlug}`}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold border border-[var(--hairline)] bg-background/60 backdrop-blur-sm text-foreground hover:bg-background transition-all"
              >
                Browse now <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="sm:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {categoryProducts.slice(0, 4).map((product) => (
              <Link
                key={product.slug}
                to={`/product/${product.slug}`}
                className="group flex flex-col items-start gap-2.5 p-3 rounded-xl hover:bg-[var(--surface)] transition-all"
              >
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-[var(--surface-2)] max-w-[120px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-semibold text-foreground line-clamp-1">{product.name}</p>
                  <p className="font-mono-tech text-[10px] text-muted-foreground">
                    From <span className="text-foreground font-semibold">${product.price}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ─── Section 4: Dual Promotional Banners ─────────────── */
export function PromotionalBannersSection() {
  return (
    <motion.section
      data-no-batch
      className="px-4 sm:px-6 lg:px-10 py-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Banner 1 */}
        <div className="relative overflow-hidden rounded-2xl border border-[var(--hairline)] min-h-[200px] bg-gradient-to-br from-[color-mix(in_oklab,var(--emerald-accent)_10%,var(--background))] to-[var(--surface)]">
          <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
          <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between gap-4">
            <div className="space-y-3 max-w-[200px]">
              <p className="font-mono-tech text-[9px] uppercase tracking-widest text-[var(--emerald-accent)]">
                Up to 20% Off
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Smart Watch
              </h3>
              <Link
                to="/category/wearables"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold border border-[var(--hairline)] bg-background/70 backdrop-blur-sm text-foreground hover:bg-background transition-all"
              >
                View Collection
              </Link>
            </div>
            <img src="/assets/product-watch.jpg" alt="Smart Watch" className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover shadow-xl" loading="lazy" />
          </div>
        </div>

        {/* Banner 2 */}
        <div className="relative overflow-hidden rounded-2xl border border-[var(--hairline)] min-h-[200px] bg-gradient-to-br from-[color-mix(in_oklab,var(--cyan-accent)_10%,var(--background))] to-[var(--surface)]">
          <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
          <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between gap-4">
            <div className="space-y-3 max-w-[200px]">
              <p className="font-mono-tech text-[9px] uppercase tracking-widest text-[var(--cyan-accent)]">
                Up to 15% Off
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Buds Pro
              </h3>
              <Link
                to="/category/audio"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold border border-[var(--hairline)] bg-background/70 backdrop-blur-sm text-foreground hover:bg-background transition-all"
              >
                Shop Now
              </Link>
            </div>
            <img src="/assets/product-headphones.jpg" alt="Buds Pro" className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover shadow-xl" loading="lazy" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ─── Section 5: Popular Products Carousel ────────────── */
export function PopularProductsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const popular = products.filter((p) => p.isTrending || p.isBestSeller);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  return (
    <motion.section
      data-no-batch
      className="px-4 sm:px-6 lg:px-10 py-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Popular <span className="text-accent-gradient">Products</span>
            </h2>
            <p className="text-xs text-muted-foreground mt-1">Trending and best-selling across all categories</p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full surface-card border border-[var(--hairline)] hover:bg-[var(--surface)] transition-all text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full surface-card border border-[var(--hairline)] hover:bg-[var(--surface)] transition-all text-muted-foreground hover:text-foreground"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {popular.map((product) => (
            <Link
              key={product.slug}
              to={`/product/${product.slug}`}
              className="group shrink-0 w-52 sm:w-56 surface-card-2 rounded-2xl border border-[var(--hairline)] p-4 snap-start hover:shadow-xl transition-all space-y-3"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-[var(--surface-2)]">
                <img src={product.image} alt={product.name} className="size-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                {product.badge && (
                  <span className="absolute top-2 left-2 font-mono-tech text-[9px] uppercase tracking-wider bg-background/80 backdrop-blur-sm text-[var(--emerald-accent)] px-2 py-0.5 rounded-md border border-[var(--hairline)]">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-foreground line-clamp-1">{product.name}</p>
                <p className="text-[10px] text-muted-foreground line-clamp-1">{product.shortDescription}</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-display text-sm font-bold text-foreground">${product.price}</span>
                  <div className="flex items-center gap-0.5 text-[10px] text-[var(--emerald-accent)]">
                    <Star className="size-3 fill-current" />
                    {product.rating}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
