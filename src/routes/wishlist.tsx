import { createFileRoute, Link } from "@tanstack/react-router";
import { Inbox, Trash2 } from "lucide-react";
import { SplitTextReveal } from "@/components/site/motion";
import { ProductCard } from "@/components/site/ProductCards";
import { clearSavedProducts, removeSavedProduct, useSavedProducts } from "@/lib/saved-products";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Your Wishlist — genCART" },
      {
        name: "description",
        content: "View and manage your bookmarked premium tech products on genCART.",
      },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const wishlistItems = useSavedProducts();

  const handleClear = () => {
    clearSavedProducts();
  };

  const handleRemove = (slug: string) => {
    removeSavedProduct(slug);
  };

  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="relative max-w-6xl mx-auto text-center space-y-4">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
            Your Collection
          </p>
          <SplitTextReveal
            text="Wishlist"
            className="font-display text-5xl lg:text-7xl font-bold tracking-tight"
          />
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            A curated list of products you are tracking. Check back for stock changes, price drops,
            or reviews updates.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-8 min-h-[400px]">
        <div className="max-w-7xl mx-auto space-y-6">
          {wishlistItems.length > 0 ? (
            <>
              <div className="flex justify-between items-center border-b border-[var(--hairline)] pb-4">
                <span className="text-xs font-mono-tech uppercase text-muted-foreground">
                  {wishlistItems.length} Saved item{wishlistItems.length !== 1 ? "s" : ""}
                </span>
                <button
                  onClick={handleClear}
                  className="text-xs text-[var(--cyan-accent)] hover:text-foreground font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Trash2 className="size-4" /> Clear All
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistItems.map((product) => (
                  <div key={product.slug} className="relative group">
                    <ProductCard product={product} />
                    <button
                      onClick={() => handleRemove(product.slug)}
                      className="absolute top-4 right-14 size-7 rounded-full bg-background/80 hover:bg-[var(--danger)] text-foreground hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer z-10"
                      aria-label="Remove item"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20 border border-dashed border-[var(--hairline)] rounded-3xl surface-card flex flex-col items-center justify-center space-y-4">
              <Inbox className="size-12 text-muted-foreground" />
              <h3 className="font-display text-xl font-semibold">Your wishlist is empty</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Explore our curated categories to add products to your wishlist.
              </p>
              <div className="pt-2">
                <Link
                  to="/categories"
                  className="btn-accent rounded-full px-6 py-3 text-xs font-semibold"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
