import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Laptop,
  Headphones,
  Watch,
  Smartphone,
  Camera,
  ChevronDown,
  Menu,
  X,
  Search,
  TrendingUp,
  Tag,
  Scale,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { GlobalSearch } from "./SearchBar";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const megaCategories = [
  { icon: Laptop, label: "Computing", desc: "Laptops & tablets", href: "/category/computing" },
  { icon: Headphones, label: "Audio", desc: "Monitors & buds", href: "/category/audio" },
  { icon: Smartphone, label: "Mobile", desc: "Flagship phones", href: "/category/mobile" },
  { icon: Watch, label: "Wearables", desc: "Vitals & smartwatch", href: "/category/wearables" },
  { icon: Camera, label: "Cameras", desc: "Cinema & creative imaging", href: "/category/cameras" },
];

const navItems = [
  { label: "Products", href: "/categories", hasMega: true },
  { label: "Collections", href: "/collections" },
  { label: "Reviews", href: "/reviews" },
  { label: "Deals", href: "/deals" },
  { label: "Guides", href: "/guides" },
  { label: "Compare", href: "/compare" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-xl border-b border-[var(--hairline)] ${
          scrolled || mobileMenuOpen ? "bg-background/90" : ""
        }`}
        onMouseLeave={() => setMega(false)}
      >
        <div className="mx-auto flex min-h-20 max-w-7xl flex-nowrap items-center justify-between gap-3 px-6 py-3 lg:px-10 lg:py-0">
          {/* Logo */}
          <Link
            href="/"
            className="z-50 flex flex-shrink-0 items-center gap-3 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="https://chatgpt.com/s/m_6a70a9607fa081918c3e305985694c68"
              alt="genCART logo"
              className="h-9 w-9 rounded-full border border-hairline bg-surface object-cover"
            />
            <span className="font-display text-xl font-semibold tracking-tight">
              genCART<span className="text-emerald-accent text-xs align-top ml-0.5">®</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item) =>
              item.hasMega ? (
                <button
                  key={item.label}
                  onMouseEnter={() => setMega(true)}
                  className="nav-link text-sm font-medium flex items-center gap-1 cursor-pointer"
                >
                  {item.label}
                  <ChevronDown
                    className={`size-3.5 transition-transform ${mega ? "rotate-180" : ""}`}
                  />
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setMega(false)}
                  className="nav-link text-sm font-medium"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Action Bar */}
          <div className="z-50 ml-auto flex min-w-0 items-center justify-end gap-2 lg:gap-3">
            <GlobalSearch className="flex-1 min-w-0 max-w-[520px] sm:max-w-[420px]" />

            <ThemeToggle />

            <Link
              href="/login"
              className="hidden lg:inline-flex items-center rounded-full border border-[var(--hairline)] px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-[var(--surface-2)]"
            >
              Login
            </Link>

            {/* Shop Now (desktop) */}
            <Link
              href="/collections"
              className="btn-accent hidden xl:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              Shop Now
              <ArrowUpRight className="size-4" />
            </Link>

            {/* Mobile Hamburger menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="cursor-pointer rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-[var(--surface-2)] hover:text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Mega menu */}
        <AnimatePresence>
          {mega && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-full overflow-hidden hidden lg:block border-b border-[var(--hairline)] bg-background/95 backdrop-blur-xl"
              onMouseLeave={() => setMega(false)}
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-8 pt-4">
                <div
                  className="surface-card-2 p-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8"
                  style={{ boxShadow: "var(--shadow-elegant)" }}
                >
                  <div>
                    <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-4">
                      Categories
                    </p>
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.04 } },
                      }}
                      className="space-y-1"
                    >
                      {megaCategories.map((c) => (
                        <motion.li
                          key={c.label}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { ease: "easeOut", duration: 0.25 },
                            },
                          }}
                        >
                          <Link
                            href={c.href}
                            className="group flex items-center gap-4 rounded-xl px-3 py-3 hover:bg-[color-mix(in_oklab,var(--emerald-accent)_8%,transparent)] transition-colors"
                            onClick={() => setMega(false)}
                          >
                            <span className="grid place-items-center size-10 rounded-lg bg-[var(--surface-2)] border border-[var(--hairline)] text-[var(--emerald-accent)] group-hover:ring-emerald transition">
                              <c.icon className="size-5" />
                            </span>
                            <span className="flex-1">
                              <span className="block text-sm font-medium">{c.label}</span>
                              <span className="block text-xs text-muted-foreground">{c.desc}</span>
                            </span>
                            <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-[var(--emerald-accent)] transition" />
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl bg-[var(--surface)] border border-[var(--hairline)] p-8">
                    <div className="absolute inset-0 bg-radial-glow opacity-60" />
                    <div className="relative">
                      <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-accent)] mb-3">
                        Featured · 2026
                      </p>
                      <h3 className="font-display text-3xl font-semibold mb-2">
                        genCART Laptop Air
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-sm mb-6">
                        M-class silicon, edge-to-edge OLED, all-day battery. Engineered as one.
                      </p>
                      <Link
                        href="/products/laptop-air"
                        className="btn-ghost-glow inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide"
                        onClick={() => setMega(false)}
                      >
                        Explore →
                      </Link>
                    </div>
                    <div
                      className="absolute -right-10 -bottom-10 size-60 rounded-full blur-3xl"
                      style={{ background: "var(--gradient-accent)", opacity: 0.25 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer (Slide-out) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-xl lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed inset-y-0 right-0 w-full sm:max-w-md bg-background border-l border-[var(--hairline)] pt-28 pb-8 px-8 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Items */}
              <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-250px)] pr-2">
                <div className="space-y-4">
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)]">
                    Navigation
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-2xl font-display font-semibold hover:text-[var(--emerald-accent)] transition-colors py-2 flex items-center justify-between"
                      >
                        {item.label}
                        <ArrowUpRight className="size-5 text-muted-foreground" />
                      </Link>
                    ))}
                    <Link
                      href="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-display font-semibold hover:text-[var(--emerald-accent)] transition-colors py-2 flex items-center justify-between"
                    >
                      Login
                      <ArrowUpRight className="size-5 text-muted-foreground" />
                    </Link>
                  </div>
                </div>

                <div className="border-t border-[var(--hairline)] pt-6 space-y-4">
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-accent)]">
                    Product Categories
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {megaCategories.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl surface-card-2 hover:bg-[color-mix(in_oklab,var(--emerald-accent)_8%,transparent)] transition-colors"
                      >
                        <span className="grid place-items-center size-8 rounded-lg bg-background border border-[var(--hairline)] text-[var(--emerald-accent)]">
                          <c.icon className="size-4" />
                        </span>
                        <span className="text-sm font-medium">{c.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Call to Action */}
              <div className="space-y-4 border-t border-[var(--hairline)] pt-6">
                <Link
                  href="/collections"
                  className="btn-accent w-full flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop All Collections
                  <ArrowUpRight className="size-4" />
                </Link>
                <p className="text-center text-xs text-muted-foreground">
                  genCART Affiliate E-Commerce Platform · 2026
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
