import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

interface SearchCommandProps {
  isOpen: boolean;
  onClose: () => void;
}

const trendingSearches = [
  "M-class OLED laptops",
  "Adaptive ANC earbuds",
  "Titanium smartwatches",
  "OLED vs Mini-LED comparisons",
  "Best Noise Cancelling 2026",
];

export function SearchCommand({ isOpen, onClose }: SearchCommandProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard shortcut listener (⌘K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search event handler call
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onClose();
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSelectTrending = (text: string) => {
    onClose();
    router.push(`/search?q=${encodeURIComponent(text)}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -16 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl surface-card-2 border border-[var(--hairline)] rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            <form onSubmit={handleSubmit} className="relative flex items-center px-4 border-b border-[var(--hairline)]">
              <Search className="size-5 text-muted-foreground mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, brands, categories..."
                className="w-full h-14 bg-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="p-1 rounded-full text-muted-foreground hover:text-foreground mr-2"
                >
                  <X className="size-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded bg-[var(--surface-2)] text-[10px] font-mono-tech text-muted-foreground border border-[var(--hairline)]">
                ESC
              </kbd>
            </form>

            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
              <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--emerald-accent)]">
                <TrendingUp className="size-3.5" />
                Trending Intelligence Queries
              </div>

              <div className="space-y-1">
                {trendingSearches.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectTrending(item)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-foreground/80 hover:text-foreground hover:bg-[var(--surface)] transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Sparkles className="size-3.5 text-muted-foreground group-hover:text-[var(--emerald-accent)] transition-colors" />
                      {item}
                    </span>
                    <ArrowRight className="size-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--emerald-accent)]" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
