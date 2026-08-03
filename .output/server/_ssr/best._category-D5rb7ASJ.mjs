import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as SplitTextReveal, n as HandUnderline, u as TiltCard } from "./motion-CSNJjo3r.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Star, dt as ArrowLeft, st as Award } from "../_libs/lucide-react.mjs";
import { t as Route } from "./best._category-BFOFFtQl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/best._category-D5rb7ASJ.js
var import_jsx_runtime = require_jsx_runtime();
function BestCategoryPage() {
	const { category, catProducts } = Route.useLoaderData();
	const winner = catProducts[0];
	const runners = catProducts.slice(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
		children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-6xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/best-products",
					className: "inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5 group-hover:-translate-x-1 transition-transform" }), "All Best Picks"]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] block mb-3",
					children: "Category Awards"
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitTextReveal, {
					text: `Best in ${category.name}`,
					className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-xl text-muted-foreground max-w-xl",
					children: [
						"Out of ",
						category.productCount,
						" models assessed, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HandUnderline, {
							children: [
								"these ",
								catProducts.length,
								" devices"
							]
						}),
						" represent the highest standard of engineering."
					]
				})
				]
			})]
		}),
			winner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 lg:px-10 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-6xl mx-auto surface-card p-8 md:p-12 rounded-3xl border border-[var(--emerald-accent)]/40 relative overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-center",
					children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -left-12 -top-12 size-64 rounded-full blur-3xl opacity-20",
						style: { background: "var(--gradient-accent)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-square rounded-2xl overflow-hidden bg-[var(--surface-2)] border border-[var(--hairline)] relative z-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: winner.image,
							alt: winner.name,
							className: "size-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6 relative z-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "bg-[var(--emerald-accent)] text-background text-[10px] font-mono-tech font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-3.5" }), " 2026 Winner"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-mono-tech text-muted-foreground",
								children: winner.brand
							})]
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl lg:text-5xl font-bold",
							children: winner.name
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-lg leading-relaxed",
							children: winner.shortDescription
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 text-[var(--emerald-accent)]",
								children: [...Array(5)].map((_, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(Star, { className: `size-4 ${i < Math.floor(winner.rating) ? "fill-amber-400 text-amber-400" : "text-muted"}` }, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: [
									winner.rating,
									" / 5 (",
									winner.reviewCount,
									" reviews)"
								]
							})]
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-foreground/80 leading-relaxed font-sans",
							children: winner.description
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3 pt-4 border-t border-[var(--hairline)]/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: winner.affiliateUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-accent rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-1.5",
								children: ["Buy ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-3.5" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: `/product/${winner.slug}`,
								className: "btn-ghost-glow rounded-full px-6 py-3 text-sm font-semibold",
								children: "Full specifications"
							})]
						})
						]
					})
					]
				})
			}),
			runners.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 lg:px-10 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-6xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-bold mb-8",
						children: "Honorable Mentions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-8",
						children: runners.map((p, idx) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)(TiltCard, {
							className: "surface-card p-6 rounded-3xl border border-[var(--hairline)] flex flex-col justify-between h-full relative",
							max: 3,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[16/10] rounded-xl overflow-hidden bg-[var(--surface-2)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.image,
										alt: p.name,
										className: "size-full object-cover"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono-tech text-[9px] uppercase tracking-wider text-muted-foreground",
										children: ["Rank #", idx + 2]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 text-[var(--emerald-accent)] text-xs font-mono font-bold",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-current" }),
											" ",
											p.rating
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-xl font-bold",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground leading-relaxed line-clamp-3",
									children: p.shortDescription
								})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-6 border-t border-[var(--hairline)]/50 mt-6 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-lg font-bold",
									children: ["$", p.price]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: `/product/${p.slug}`,
									className: "btn-ghost-glow rounded-full px-4 py-2 text-xs font-semibold",
									children: "Explore Gear"
								})]
							})]
						}, p.slug))
					})]
				})
			})
		]
	});
}
//#endregion
export { BestCategoryPage as component };
