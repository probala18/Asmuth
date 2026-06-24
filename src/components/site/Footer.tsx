import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Send } from "lucide-react";

const cols = [
  {
    title: "Trending",
    items: [
      { label: "Laptops 2026", href: "/categories" },
      { label: "Wireless Audio", href: "/categories" },
      { label: "Smart Home", href: "/categories" },
      { label: "Wearables", href: "/categories" },
    ],
  },
  {
    title: "Reviews",
    items: [
      { label: "MacBook Pro M3 Max", href: "/reviews/macbook-pro" },
      { label: "Aether Laptop Air", href: "/products/laptop-air" },
      { label: "Best of 2026", href: "/best-of-2026" },
      { label: "Editor's Choice", href: "/collections" },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "Best Laptops < $1000", href: "/best-of-2026" },
      { label: "Buying Guides", href: "/best-of-2026" },
      { label: "Comparisons", href: "/reviews/macbook-pro" },
      { label: "Setup Picks", href: "/collections" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Contact", href: "/contact" },
      { label: "Deals", href: "/deals" },
      { label: "Categories", href: "/categories" },
      { label: "Collections", href: "/collections" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[var(--hairline)] bg-[var(--surface)]">
      <div className="absolute inset-x-0 top-0 h-px hairline-x" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_2fr] gap-16 mb-16">
          {/* Newsletter */}
          <div>
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-4">
              The Signal · Weekly
            </p>
            <h3 className="font-display text-3xl lg:text-4xl font-semibold mb-4 max-w-md">
              Future-grade picks, <span className="text-accent-gradient">delivered weekly</span>.
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              One email. Five products worth your attention. Zero noise.
            </p>
            <form className="flex items-center gap-2 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  placeholder="you@signal.com"
                  className="w-full h-12 rounded-full bg-[var(--surface-2)] border border-[var(--hairline)] px-5 text-sm placeholder:text-muted-foreground focus:border-[var(--emerald-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--emerald-accent)]/30 transition"
                />
              </div>
              <button className="btn-accent rounded-full h-12 px-5 inline-flex items-center gap-2 text-sm font-semibold">
                Subscribe
                <Send className="size-4" />
              </button>
            </form>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <Link
                        to={it.href}
                        className="group inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-[var(--emerald-accent)] transition-colors"
                      >
                        {it.label}
                        <ArrowUpRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Big wordmark */}
        <div className="relative overflow-hidden">
          <p
            className="font-display font-bold text-[clamp(4rem,18vw,16rem)] leading-none tracking-tighter select-none text-accent-gradient opacity-90"
          >
            AETHER
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-[var(--hairline)]">
          <p className="text-xs text-muted-foreground font-mono-tech">© 2026 Aether Industries — Future Commerce</p>
          <p className="text-xs text-muted-foreground font-mono-tech">
            <span className="inline-block size-1.5 rounded-full bg-[var(--emerald-accent)] mr-2 align-middle animate-pulse" />
            All systems nominal
          </p>
        </div>
      </div>
    </footer>
  );
}
