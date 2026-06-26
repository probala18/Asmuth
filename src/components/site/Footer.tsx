import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Newsletter } from "./UIComponents";

const cols = [
  {
    title: "Hubs",
    items: [
      { label: "All Categories", href: "/categories" },
      { label: "Curated Collections", href: "/collections" },
      { label: "Live Deals", href: "/deals" },
      { label: "Compare Hub", href: "/compare" },
    ],
  },
  {
    title: "Content",
    items: [
      { label: "Editorial Reviews", href: "/reviews" },
      { label: "Buying Guides", href: "/guides" },
      { label: "Best of 2026", href: "/best-of-2026" },
      { label: "Brand Directory", href: "/brands" },
    ],
  },
  {
    title: "Editorial & Trust",
    items: [
      { label: "About Us", href: "/about" },
      { label: "How We Review", href: "/how-we-review" },
      { label: "Editorial Policy", href: "/editorial-policy" },
      { label: "Common FAQs", href: "/faq" },
    ],
  },
  {
    title: "Legal & Support",
    items: [
      { label: "Contact Specialist", href: "/contact" },
      { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[var(--hairline)] bg-[var(--surface)]">
      <div className="absolute inset-x-0 top-0 h-px hairline-x" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        
        {/* Newsletter Section */}
        <div className="mb-20">
          <Newsletter />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-16 mb-16 items-start">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-accent)" }}>
                <span className="font-display text-sm font-bold text-[oklch(0.13_0.03_270)]">Æ</span>
              </div>
              <span className="font-display text-lg font-semibold tracking-tight">
                AETHER<span className="text-[var(--emerald-accent)] text-[10px] align-top ml-0.5">®</span>
              </span>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-xs">
              ASMUTH-powered editorial shopping platform. Independent testing, expert reviews, and reference performance picks.
            </p>
            <div className="text-[10px] text-muted-foreground font-mono-tech flex flex-wrap gap-x-3 gap-y-1">
              <Link to="/dmca" className="hover:text-[var(--emerald-accent)] transition-colors">DMCA Notice</Link>
              <span>·</span>
              <Link to="/editorial-policy" className="hover:text-[var(--emerald-accent)] transition-colors">Editorial Integrity</Link>
            </div>
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
        <div className="relative overflow-hidden border-t border-[var(--hairline)] pt-10">
          <p
            className="font-display font-bold text-[clamp(4rem,18vw,16rem)] leading-none tracking-tighter select-none text-accent-gradient opacity-90 text-center lg:text-left"
          >
            AETHER
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--hairline)]">
          <p className="text-xs text-muted-foreground font-mono-tech text-center md:text-left">
            © 2026 Aether Industries — Future Commerce. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono-tech flex items-center justify-center">
            <span className="inline-block size-1.5 rounded-full bg-[var(--emerald-accent)] mr-2 align-middle animate-pulse" />
            All systems nominal
          </p>
        </div>
      </div>
    </footer>
  );
}
