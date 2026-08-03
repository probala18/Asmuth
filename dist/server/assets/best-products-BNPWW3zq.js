import { i as products } from "./products-DK41-WSW.js";
import { t as categories } from "./categories-BkPZMTJV.js";
import { c as SplitTextReveal, n as HandUnderline } from "./motion-CSNJjo3r.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Award, Star } from "lucide-react";
//#region src/routes/best-products.tsx?tsr-split=component
function BestProductsPage() {
	const bestByCategory = categories.map((cat) => {
		const catProducts = products.filter((p) => p.categorySlug === cat.slug).sort((a, b) => b.rating - a.rating);
		return {
			category: cat,
			topProduct: catProducts[0],
			runnerUp: catProducts[1]
		};
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("section", {
		className: "relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid opacity-30" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative max-w-6xl mx-auto text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-3",
						children: "Gold Standards"
					}),
					/* @__PURE__ */ jsx(SplitTextReveal, {
						text: "Best Tech Picks",
						className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-6 text-muted-foreground max-w-xl mx-auto",
						children: [
							"The definitive genCART ranking. Only products that achieve ",
							/* @__PURE__ */ jsx(HandUnderline, { children: "exceptional benchmarks" }),
							" in our laboratory are awarded."
						]
					})
				]
			})
		]
	}), /* @__PURE__ */ jsx("section", {
		className: "px-6 lg:px-10 py-16",
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto space-y-12",
			children: bestByCategory.map(({ category, topProduct, runnerUp }) => {
				if (!topProduct) return null;
				return /* @__PURE__ */ jsxs("div", {
					className: "surface-card rounded-3xl border border-[var(--hairline)] overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 p-8 md:p-12 relative",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "absolute -left-12 -top-12 size-48 rounded-full blur-3xl opacity-10",
							style: { background: "var(--gradient-accent)" }
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-6 flex flex-col justify-between relative",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "font-mono-tech text-[10px] uppercase tracking-wider text-[var(--emerald-accent)] bg-[var(--surface-2)] px-3 py-1 rounded-full font-bold",
										children: category.name
									}),
									/* @__PURE__ */ jsxs("h2", {
										className: "font-display text-3xl font-bold",
										children: [category.name, " Winner"]
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-sm text-muted-foreground leading-relaxed",
										children: [
											"We've tested ",
											category.productCount,
											" models in ",
											category.name.toLowerCase(),
											" to find the absolute best option."
										]
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "pt-6 border-t border-[var(--hairline)]/50",
								children: /* @__PURE__ */ jsxs(Link, {
									to: `/category/${category.slug}`,
									className: "font-semibold text-xs text-[var(--emerald-accent)] hover:underline inline-flex items-center gap-1 group",
									children: ["Browse full category shortlisted specs ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5 group-hover:translate-x-1 transition-transform" })]
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 sm:grid-cols-[1.2fr_1.5fr] gap-6 items-center",
							children: [/* @__PURE__ */ jsx("div", {
								className: "aspect-square rounded-2xl overflow-hidden bg-[var(--surface-2)] border border-[var(--hairline)]",
								children: /* @__PURE__ */ jsx("img", {
									src: topProduct.image,
									alt: topProduct.name,
									className: "size-full object-cover"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "bg-[var(--emerald-accent)] text-background text-[8px] font-mono-tech font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1",
											children: [/* @__PURE__ */ jsx(Award, { className: "size-2.5" }), " Best Choice"]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-1 text-[var(--emerald-accent)] text-xs font-mono font-bold",
											children: [
												/* @__PURE__ */ jsx(Star, { className: "size-3.5 fill-current" }),
												" ",
												topProduct.rating
											]
										})]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "font-display text-2xl font-bold",
										children: topProduct.name
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs text-muted-foreground leading-relaxed line-clamp-3",
										children: topProduct.shortDescription
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "pt-2 flex flex-wrap gap-2",
										children: [/* @__PURE__ */ jsx(Link, {
											to: `/product/${topProduct.slug}`,
											className: "btn-accent rounded-full px-4 py-2 text-xs font-semibold",
											children: "Specs & Pricing"
										}), runnerUp && /* @__PURE__ */ jsxs(Link, {
											to: `/product/${runnerUp.slug}`,
											className: "btn-ghost-glow rounded-full px-4 py-2 text-xs font-semibold",
											children: ["Runner up: ", runnerUp.name]
										})]
									})
								]
							})]
						})
					]
				}, category.slug);
			})
		})
	})] });
}
//#endregion
export { BestProductsPage as component };
