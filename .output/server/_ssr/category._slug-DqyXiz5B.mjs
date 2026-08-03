import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as SplitTextReveal, n as HandUnderline } from "./motion-CSNJjo3r.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as getProductsByCategory } from "./products-DK41-WSW.mjs";
import { A as Inbox, K as CircleQuestionMark, dt as ArrowLeft, t as lucide_react_exports } from "../_libs/lucide-react.mjs";
import { r as ProductCard } from "./ProductCards-DO0DKzl3.mjs";
import { r as Route, t as Filters } from "./category._slug-C1hGWCeF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-DqyXiz5B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CategoryDetailPage() {
	const { category } = Route.useLoaderData();
	const products = getProductsByCategory(category.slug);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [sortBy, setSortBy] = (0, import_react.useState)("rating-desc");
	const sortOptions = [
		{
			label: "Top Rated",
			value: "rating-desc"
		},
		{
			label: "Price: Low to High",
			value: "price-asc"
		},
		{
			label: "Price: High to Low",
			value: "price-desc"
		},
		{
			label: "Popularity",
			value: "popular"
		}
	];
	const sortedProducts = [...products.filter((p) => {
		return p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase()) || p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
	})].sort((a, b) => {
		if (sortBy === "rating-desc") return b.rating - a.rating;
		if (sortBy === "price-asc") return a.price - b.price;
		if (sortBy === "price-desc") return b.price - a.price;
		if (sortBy === "popular") return b.reviewCount - a.reviewCount;
		return 0;
	});
	const IconComponent = lucide_react_exports[category.icon] || CircleQuestionMark;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-6xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/categories",
					className: "inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5 group-hover:-translate-x-1 transition-transform" }), "Back to Categories"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col lg:flex-row lg:items-center justify-between gap-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid place-items-center size-10 rounded-xl bg-[var(--surface)] border border-[var(--emerald-accent)]/20 text-[var(--emerald-accent)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, { className: "size-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
									children: "Ecosystem"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitTextReveal, {
								text: category.name,
								className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground text-lg leading-relaxed",
								children: [
									"We've reviewed ",
									category.productCount,
									" products in this category. Here is our ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandUnderline, { children: "editor's shortlist" }),
									"."
								]
							})
						]
					})
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 lg:px-10 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto space-y-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filters, {
				searchQuery,
				setSearchQuery,
				sortBy,
				setSortBy,
				sortOptions,
				placeholder: `Search ${category.name} products...`
			}), sortedProducts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: sortedProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-20 border border-dashed border-[var(--hairline)] rounded-3xl surface-card-2 flex flex-col items-center justify-center space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "size-12 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-semibold",
						children: "No products found"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground max-w-xs",
						children: "No products in this category match your search criteria. Try a different query."
					})
				]
			})]
		})
	})] });
}
//#endregion
export { CategoryDetailPage as component };
