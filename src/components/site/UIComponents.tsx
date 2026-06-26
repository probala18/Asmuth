import { useState } from "react";
import { Send, CheckCircle, Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import * as Icons from "lucide-react";
import { AnimatedCounter } from "./motion";

export function TrustMetric({ 
  value, 
  suffix = "", 
  prefix = "", 
  label, 
  iconName 
}: { 
  value: number; 
  suffix?: string; 
  prefix?: string; 
  label: string; 
  iconName: string;
}) {
  const IconComponent = (Icons as any)[iconName] || Icons.ShieldCheck;

  return (
    <div className="text-center p-6 flex flex-col items-center">
      <div className="inline-grid place-items-center size-12 rounded-full bg-[var(--surface)] border border-[var(--emerald-accent)]/20 mb-4 shadow-sm">
        <IconComponent className="size-5 text-[var(--emerald-accent)]" />
      </div>
      <p className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
        <AnimatedCounter to={value} prefix={prefix} suffix={suffix} className="text-accent-gradient" />
      </p>
      <p className="text-sm text-muted-foreground mt-2 font-medium">{label}</p>
    </div>
  );
}

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    setSubmitted(true);
    setSubmitting(false);
    setEmail("");
  };

  return (
    <div className="relative overflow-hidden rounded-3xl surface-card-2 p-8 lg:p-12 border border-[var(--hairline)]">
      <div className="absolute -right-20 -bottom-20 size-72 rounded-full blur-3xl opacity-20" style={{ background: "var(--gradient-accent)" }} />
      
      {submitted ? (
        <div className="flex flex-col items-center justify-center text-center py-6 animate-fade-in">
          <CheckCircle className="size-14 text-[var(--success)] mb-4 animate-bounce" />
          <h3 className="font-display text-2xl font-semibold mb-2">Welcome aboard</h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            You've subscribed to The Signal. Get ready for five products worth your attention next Sunday.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-3">
              The Signal · Weekly
            </p>
            <h3 className="font-display text-3xl lg:text-4xl font-semibold mb-3 tracking-tight">
              Future-grade tech, <span className="text-accent-gradient">delivered weekly</span>.
            </h3>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              One email. Five products worth your attention. Zero ad clutter. Zero noise.
            </p>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-md w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@signal.com"
                disabled={submitting}
                className="flex-1 h-12 rounded-full bg-background border border-[var(--hairline)] px-5 text-sm placeholder:text-muted-foreground focus:border-[var(--emerald-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--emerald-accent)]/30 transition-all"
              />
              <button 
                type="submit" 
                disabled={submitting}
                className="btn-accent rounded-full h-12 px-6 inline-flex items-center gap-2 text-sm font-semibold disabled:opacity-50 cursor-pointer"
              >
                {submitting ? "Sending..." : "Subscribe"}
                {!submitting && <Send className="size-4" />}
              </button>
            </form>
            <p className="text-[10px] text-muted-foreground mt-3 pl-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

interface FiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  sortOptions: Array<{ label: string; value: string }>;
  placeholder?: string;
}

export function Filters({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  sortOptions,
  placeholder = "Search items..."
}: FiltersProps) {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--surface)] border border-[var(--hairline)]">
      {/* Search Input */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full h-11 pl-11 pr-4 bg-background border border-[var(--hairline)] rounded-xl text-sm placeholder:text-muted-foreground focus:border-[var(--emerald-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--emerald-accent)]/20 transition-all"
        />
      </div>

      {/* Sort selection */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-mono-tech uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 shrink-0">
          <ArrowUpDown className="size-3.5" /> Sort by
        </span>
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-11 px-4 pr-10 bg-background border border-[var(--hairline)] rounded-xl text-sm focus:border-[var(--emerald-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--emerald-accent)]/20 transition-all appearance-none cursor-pointer font-medium text-foreground"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            <SlidersHorizontal className="size-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
