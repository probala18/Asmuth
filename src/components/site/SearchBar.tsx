import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Clock3, Search, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSavedProducts } from "@/lib/saved-products";
import {
  clearRecentSearches,
  getRecentSearches,
  getSearchSuggestions,
  persistRecentSearch,
} from "@/lib/search";
import type { SearchSuggestion } from "@/lib/search";

interface GlobalSearchProps {
  className?: string;
  placeholder?: string;
}

export function GlobalSearch({
  className = "",
  placeholder = "Search products, brands, categories...",
}: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const savedProducts = useSavedProducts();
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    setRecentSearches(getRecentSearches());
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const suggestionGroups = useMemo(
    () => getSearchSuggestions(query, recentSearches, savedProducts),
    [query, recentSearches, savedProducts],
  );
  const flattenedItems = useMemo(
    () => suggestionGroups.flatMap((group) => group.items),
    [suggestionGroups],
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const value = query.trim();
    if (!value) return;
    persistRecentSearch(value);
    setRecentSearches(getRecentSearches());
    router.push(`/search?q=${encodeURIComponent(value)}`);
    setOpen(false);
    setQuery("");
  };

  const selectSuggestion = (item: SearchSuggestion) => {
    if (item.href) {
      if (item.params) {
        let path = item.href as string;
        Object.entries(item.params).forEach(([k, v]) => {
          path = path.replace(`$${k}`, v as string).replace(`:${k}`, v as string);
        });
        router.push(path);
      } else {
        router.push(item.href as string);
      }
      setOpen(false);
      setQuery("");
      return;
    }

    const term = item.label.trim();
    persistRecentSearch(term);
    setRecentSearches(getRecentSearches());
    router.push(`/search?q=${encodeURIComponent(term)}`);
    setOpen(false);
    setQuery("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!flattenedItems.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % flattenedItems.length);
      setOpen(true);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => (prev - 1 + flattenedItems.length) % flattenedItems.length);
      setOpen(true);
    }

    if (event.key === "Enter") {
      const current = flattenedItems[activeIndex];
      if (current) {
        event.preventDefault();
        selectSuggestion(current);
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-[var(--surface)]/80 px-3 py-2 text-sm text-muted-foreground shadow-sm transition-all hover:border-[var(--emerald-accent)] hover:text-foreground lg:hidden"
      >
        <Search className="size-4" />
        Search
      </button>

      <form onSubmit={handleSubmit} className="hidden lg:flex relative flex-1 min-w-0 max-w-[360px]">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full min-w-0 rounded-full border border-[var(--hairline)] bg-[var(--surface)]/80 py-2.5 pl-10 pr-10 text-sm text-foreground shadow-sm outline-none transition-all focus:border-[var(--emerald-accent)] focus:bg-[var(--surface)]"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-[var(--surface-2)] hover:text-foreground"
          >
            <X className="size-3.5" />
          </button>
        ) : (
          <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded border border-[var(--hairline)] bg-[var(--surface-2)] px-1.5 py-0.5 text-[10px] font-mono-tech text-muted-foreground">
            ⌘K
          </kbd>
        )}
      </form>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-24 z-[70] max-w-2xl rounded-3xl border border-[var(--hairline)] bg-background/95 p-4 shadow-2xl backdrop-blur-xl lg:absolute lg:inset-x-0 lg:top-full lg:mt-3 lg:max-w-2xl lg:p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono-tech uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
                  Search intelligence
                </p>
                <p className="text-sm text-muted-foreground">
                  Discover products, stories, comparisons, and guides in one place.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-[var(--surface)] hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="mb-3 lg:hidden">
              <form onSubmit={handleSubmit} className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setOpen(true);
                  }}
                  onFocus={() => setOpen(true)}
                  onKeyDown={handleKeyDown}
                  placeholder={placeholder}
                  className="w-full rounded-full border border-[var(--hairline)] bg-[var(--surface)]/80 py-3 pl-10 pr-10 text-sm text-foreground shadow-sm outline-none transition-all focus:border-[var(--emerald-accent)]"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-[var(--surface-2)] hover:text-foreground"
                  >
                    <X className="size-3.5" />
                  </button>
                ) : null}
              </form>
            </div>

            <div className="max-h-[60vh] overflow-y-auto pr-1">
              {suggestionGroups.map((group, groupIndex) => (
                <div key={group.title} className="mb-4">
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground">
                    <Sparkles className="size-3 text-[var(--emerald-accent)]" />
                    {group.title}
                  </div>
                  <div className="space-y-1">
                    {group.items.map((item, index) => {
                      const globalIndex =
                        suggestionGroups
                          .slice(0, groupIndex)
                          .reduce((sum, current) => sum + current.items.length, 0) + index;
                      const active = globalIndex === activeIndex;
                      return (
                        <button
                          key={`${group.title}-${item.id}`}
                          type="button"
                          onClick={() => selectSuggestion(item)}
                          className={`flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left text-sm transition-all ${active ? "bg-[var(--surface)] text-foreground" : "text-muted-foreground hover:bg-[var(--surface)] hover:text-foreground"}`}
                        >
                          <span className="flex items-center gap-2.5">
                            {item.kind === "recent" ? (
                              <Clock3 className="size-3.5" />
                            ) : (
                              <Search className="size-3.5" />
                            )}
                            <span>
                              <span className="block">{item.label}</span>
                              {item.detail ? (
                                <span className="block text-[11px] text-muted-foreground">
                                  {item.detail}
                                </span>
                              ) : null}
                            </span>
                          </span>
                          <ArrowRight className="size-3.5 text-muted-foreground" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {!suggestionGroups.length && (
                <div className="rounded-2xl border border-dashed border-[var(--hairline)] bg-[var(--surface)]/70 px-4 py-6 text-center text-sm text-muted-foreground">
                  Start typing to discover curated products and editorial content.
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--hairline)] pt-3 text-xs text-muted-foreground">
              <span>Press Enter to search, Esc to close.</span>
              <button
                type="button"
                onClick={() => {
                  clearRecentSearches();
                  setRecentSearches([]);
                }}
                className="text-[var(--emerald-accent)] transition-colors hover:text-foreground"
              >
                Clear recent searches
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
