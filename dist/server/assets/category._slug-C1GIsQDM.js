import { r as getProductsByCategory } from "./products-DK41-WSW.js";
import { c as SplitTextReveal, n as HandUnderline } from "./motion-CSNJjo3r.js";
import { n as Filters, t as Route } from "./category._slug-DfSuaZfQ.js";
import { r as ProductCard } from "./ProductCards-DO0DKzl3.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as Icons from "lucide-react";
import { ArrowLeft, Inbox } from "lucide-react";
//#region src/routes/category.$slug.tsx?tsr-split=component
function CategoryDetailPage() {
	const { category } = Route.useLoaderData();
	const products = getProductsByCategory(category.slug);
	const [searchQuery, setSearchQuery] = useState("");
	const [sortBy, setSortBy] = useState("rating-desc");
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
	const IconComponent = Icons[category.icon] || Icons.HelpCircle;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("section", {
		className: "relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid opacity-30" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative max-w-6xl mx-auto",
				children: [/* @__PURE__ */ jsxs(Link, {
					to: "/categories",
					className: "inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "size-3.5 group-hover:-translate-x-1 transition-transform" }), "Back to Categories"]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-col lg:flex-row lg:items-center justify-between gap-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-4 max-w-2xl",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "grid place-items-center size-10 rounded-xl bg-[var(--surface)] border border-[var(--emerald-accent)]/20 text-[var(--emerald-accent)]",
									children: /* @__PURE__ */ jsx(IconComponent, { className: "size-5" })
								}), /* @__PURE__ */ jsx("span", {
									className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
									children: "Ecosystem"
								})]
							}),
							/* @__PURE__ */ jsx(SplitTextReveal, {
								text: category.name,
								className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-muted-foreground text-lg leading-relaxed",
								children: [
									"We've reviewed ",
									category.productCount,
									" products in this category. Here is our ",
									/* @__PURE__ */ jsx(HandUnderline, { children: "editor's shortlist" }),
									"."
								]
							})
						]
					})
				})]
			})
		]
	}), /* @__PURE__ */ jsx("section", {
		className: "px-6 lg:px-10 py-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto space-y-10",
			children: [/* @__PURE__ */ jsx(Filters, {
				searchQuery,
				setSearchQuery,
				sortBy,
				setSortBy,
				sortOptions,
				placeholder: `Search ${category.name} products...`
			}), sortedProducts.length > 0 ? /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: sortedProducts.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.slug))
			}) : /* @__PURE__ */ jsxs("div", {
				className: "text-center py-20 border border-dashed border-[var(--hairline)] rounded-3xl surface-card-2 flex flex-col items-center justify-center space-y-4",
				children: [
					/* @__PURE__ */ jsx(Inbox, { className: "size-12 text-muted-foreground" }),
					/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold",
						children: "No products found"
					}),
					/* @__PURE__ */ jsx("p", {
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
