import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as SplitTextReveal } from "./motion-CSNJjo3r.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Inbox, s as Trash2 } from "../_libs/lucide-react.mjs";
import { r as removeSavedProduct, s as useSavedProducts, t as clearSavedProducts } from "./saved-products-CUi3zrcj.mjs";
import { r as ProductCard } from "./ProductCards-DO0DKzl3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-BGGonccy.js
var import_jsx_runtime = require_jsx_runtime();
function WishlistPage() {
	const wishlistItems = useSavedProducts();
	const handleClear = () => {
		clearSavedProducts();
	};
	const handleRemove = (slug) => {
		removeSavedProduct(slug);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-w-6xl mx-auto text-center space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
					children: "Your Collection"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitTextReveal, {
					text: "Wishlist",
					className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm max-w-md mx-auto",
					children: "A curated list of products you are tracking. Check back for stock changes, price drops, or reviews updates."
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 lg:px-10 py-8 min-h-[400px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto space-y-6",
			children: wishlistItems.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center border-b border-[var(--hairline)] pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs font-mono-tech uppercase text-muted-foreground",
					children: [
						wishlistItems.length,
						" Saved item",
						wishlistItems.length !== 1 ? "s" : ""
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleClear,
					className: "text-xs text-[var(--cyan-accent)] hover:text-foreground font-semibold flex items-center gap-1.5 transition-colors cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), " Clear All"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: wishlistItems.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => handleRemove(product.slug),
						className: "absolute top-4 right-14 size-7 rounded-full bg-background/80 hover:bg-[var(--danger)] text-foreground hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer z-10",
						"aria-label": "Remove item",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
					})]
				}, product.slug))
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-20 border border-dashed border-[var(--hairline)] rounded-3xl surface-card flex flex-col items-center justify-center space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "size-12 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold",
						children: "Your wishlist is empty"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground max-w-xs",
						children: "Explore our curated categories to add products to your wishlist."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/categories",
							className: "btn-accent rounded-full px-6 py-3 text-xs font-semibold",
							children: "Browse Categories"
						})
					})
				]
			})
		})
	})] });
}
//#endregion
export { WishlistPage as component };
