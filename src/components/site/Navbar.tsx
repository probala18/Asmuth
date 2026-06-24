import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Laptop, Headphones, Gamepad2, Home as HomeIcon, ChevronDown } from "lucide-react";

const megaCategories = [
  { icon: Laptop, label: "Laptops", desc: "Pro & ultraportable", href: "/categories" },
  { icon: Headphones, label: "Audio", desc: "Headphones & speakers", href: "/categories" },
  { icon: Gamepad2, label: "Gaming", desc: "Consoles & rigs", href: "/categories" },
  { icon: HomeIcon, label: "Smart Home", desc: "Connected living", href: "/categories" },
];

const navItems = [
  { label: "Products", href: "/categories", hasMega: true },
  { label: "Collections", href: "/collections" },
  { label: "Reviews", href: "/reviews/macbook-pro" },
  { label: "Deals", href: "/deals" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-[var(--hairline)]" : "bg-transparent"
      }`}
      onMouseLeave={() => setMega(false)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-accent)" }}>
            <span className="font-display text-lg font-bold text-[oklch(0.13_0.03_270)]">Æ</span>
            <span className="absolute inset-0 rounded-xl blur-md opacity-50" style={{ background: "var(--gradient-accent)" }} />
          </div>
          <span className="font-display text-xl font-semibold tracking-tight">
            AETHER<span className="text-[var(--emerald-accent)] text-xs align-top ml-0.5">®</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) =>
            item.hasMega ? (
              <button
                key={item.label}
                onMouseEnter={() => setMega(true)}
                className="nav-link text-sm font-medium flex items-center gap-1"
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
            ),
          )}
        </nav>

        <Link
          to="/collections"
          className="btn-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
        >
          Shop Now
          <ArrowUpRight className="size-4" />
        </Link>
      </div>

      {/* Mega menu */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden transition-[max-height,opacity] duration-500 ${
          mega ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        onMouseEnter={() => setMega(true)}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-8">
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

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--surface-2)] via-[var(--surface)] to-black border border-[var(--hairline)] p-8">
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
                  to="/products/laptop-air"
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
  );
}
