import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
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
  Scale 
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scroll when mobile menu or search is open
  useEffect(() => {
    if (mobileMenuOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, searchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({ to: "/search", search: { q: searchQuery.trim() } });
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen || searchOpen
            ? "bg-background/70 backdrop-blur-xl border-b border-[var(--hairline)]"
            : "bg-transparent"
        }`}
        onMouseLeave={() => setMega(false)}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group z-50" onClick={() => setMobileMenuOpen(false)}>
            <img
              src="/assets/logo.png"
              alt="Asmuth logo"
              className="h-9 w-9 rounded-full border border-hairline bg-surface object-cover"
            />
            <span className="font-display text-xl font-semibold tracking-tight">
              Asmuth<span className="text-emerald-accent text-xs align-top ml-0.5">®</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.hasMega ? (
                <button
                  key={item.label}
                  onMouseEnter={() => setMega(true)}
                  className="nav-link text-sm font-medium flex items-center gap-1 cursor-pointer"
                >
                  {item.label}
                  <ChevronDown className={`size-3.5 transition-transform ${mega ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onMouseEnter={() => setMega(false)}
                  className="nav-link text-sm font-medium"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Action Bar */}
          <div className="flex items-center gap-2 lg:gap-3 z-50">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-full hover:bg-[var(--surface-2)] text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="size-5" />
            </button>

            <ThemeToggle />

            {/* Shop Now (desktop) */}
            <Link
              to="/collections"
              className="btn-accent hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              Shop Now
              <ArrowUpRight className="size-4" />
            </Link>

            {/* Mobile Hamburger menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full hover:bg-[var(--surface-2)] text-muted-foreground hover:text-foreground transition-colors lg:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Mega menu */}
        <div
          className={`absolute inset-x-0 top-full overflow-hidden transition-[max-height,opacity] duration-500 hidden lg:block ${
            mega ? "max-h-[420px] opacity-100 border-b border-[var(--hairline)]" : "max-h-0 opacity-0 pointer-events-none"
          }`}
          onMouseEnter={() => setMega(true)}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-8 pt-4 bg-background/95 backdrop-blur-xl">
            <div
              className="surface-card-2 p-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <div>
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-4">
                  Categories
                </p>
                <ul className="space-y-1">
                  {megaCategories.map((c, i) => (
                    <li
                      key={c.label}
                      className="opacity-0 translate-y-2"
                      style={{ animation: mega ? `fadeInUp .5s ${0.05 * i}s forwards` : undefined }}
                    >
                      <Link
                        to={c.href}
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
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--surface-2)] via-[var(--surface)] to-[color-mix(in_oklab,var(--emerald-accent)_15%,var(--background))] border border-[var(--hairline)] p-8">
                <div className="absolute inset-0 bg-radial-glow opacity-60" />
                <div className="relative">
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-accent)] mb-3">
                    Featured · 2026
                  </p>
                  <h3 className="font-display text-3xl font-semibold mb-2">Aether Laptop Air</h3>
                  <p className="text-sm text-muted-foreground max-w-sm mb-6">
                    M-class silicon, edge-to-edge OLED, all-day battery. Engineered as one.
                  </p>
                  <Link
                    to="/product/aether-laptop-air"
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
        </div>
      </header>

      {/* Mobile Drawer (Slide-out) */}
      <div
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 right-0 w-full sm:max-w-md bg-background border-l border-[var(--hairline)] pt-28 pb-8 px-8 flex flex-col justify-between transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
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
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-display font-semibold hover:text-[var(--emerald-accent)] transition-colors py-2 flex items-center justify-between"
                  >
                    {item.label}
                    <ArrowUpRight className="size-5 text-muted-foreground" />
                  </Link>
                ))}
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
                    to={c.href}
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
              to="/collections"
              className="btn-accent w-full flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop All Collections
              <ArrowUpRight className="size-4" />
            </Link>
            <p className="text-center text-xs text-muted-foreground">
              AETHER Affiliate E-Commerce Platform · 2026
            </p>
          </div>
        </div>
      </div>

      {/* Floating Search Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-start pt-32 px-6 lg:px-10 ${
          searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setSearchOpen(false)}
          className="absolute top-6 right-6 p-3 rounded-full hover:bg-[var(--surface-2)] text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          aria-label="Close search"
        >
          <X className="size-6" />
        </button>

        <div className="max-w-2xl mx-auto w-full">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-6 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products, reviews, guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--surface-2)] border border-[var(--hairline)] rounded-2xl py-5 pl-14 pr-6 text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--emerald-accent)] focus:border-transparent transition-all"
              autoFocus={searchOpen}
            />
          </form>

          <div className="mt-8">
            <h4 className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Trending Searches
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                { term: "Laptop Air", icon: Laptop },
                { term: "Buds Pro", icon: Headphones },
                { term: "Watch X", icon: Watch },
                { term: "Comparison Hub", icon: Scale },
                { term: "Latest Reviews", icon: TrendingUp },
                { term: "Best Deals", icon: Tag },
              ].map((item) => (
                <button
                  key={item.term}
                  onClick={() => {
                    setSearchQuery(item.term);
                    navigate({ to: "/search", search: { q: item.term } });
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm bg-[var(--surface)] hover:bg-[var(--surface-2)] border border-[var(--hairline)] hover:border-muted-foreground/30 transition-all cursor-pointer"
                >
                  <item.icon className="size-3.5 text-[var(--emerald-accent)]" />
                  {item.term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
