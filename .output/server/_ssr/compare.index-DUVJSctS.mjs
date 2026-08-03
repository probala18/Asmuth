import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as SplitTextReveal, n as HandUnderline, u as TiltCard } from "./motion-CSNJjo3r.mjs";
import { P as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as products } from "./products-DK41-WSW.mjs";
import { P as GitCompare, f as Sparkles, ut as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as comparisons } from "./comparisons-CETU7BC4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare.index-DUVJSctS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CompareHubPage() {
	const navigate = useNavigate();
	const [productA, setProductA] = (0, import_react.useState)("");
	const [productB, setProductB] = (0, import_react.useState)("");
	const handleCompare = (e) => {
		e.preventDefault();
		if (!productA || !productB) return;
		if (productA === productB) return;
		const existing = comparisons.find((c) => c.products.includes(productA) && c.products.includes(productB) || c.slug === `${productA}-vs-${productB}` || c.slug === `${productB}-vs-${productA}`);
		if (existing) navigate({ to: `/compare/${existing.slug}` });
		else navigate({ to: `/compare/${productA}-vs-${productB}` });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-6xl mx-auto text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-3",
							children: "Spec Matrix"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitTextReveal, {
							text: "Compare side-by-side",
							className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-muted-foreground max-w-xl mx-auto",
							children: [
								"Choose any two tech flagships. We align their specs, prices, and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandUnderline, { children: "identify the objective winner" }),
								"."
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl mx-auto surface-card p-8 md:p-12 rounded-3xl border border-[var(--hairline)] relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -left-16 -top-16 size-48 rounded-full blur-3xl opacity-10",
					style: { background: "var(--gradient-accent)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleCompare,
					className: "space-y-8 relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-mono-tech uppercase tracking-wider text-muted-foreground",
									children: "Product A"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: productA,
									onChange: (e) => setProductA(e.target.value),
									className: "w-full bg-[var(--surface-2)] border border-[var(--hairline)] rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-[var(--emerald-accent)] transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select product..."
									}), products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: p.slug,
										disabled: p.slug === productB,
										children: p.name
									}, p.slug))]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center pt-6 md:pt-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-10 rounded-full bg-[var(--surface-2)] border border-[var(--hairline)] flex items-center justify-center text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompare, { className: "size-5" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-mono-tech uppercase tracking-wider text-muted-foreground",
									children: "Product B"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: productB,
									onChange: (e) => setProductB(e.target.value),
									className: "w-full bg-[var(--surface-2)] border border-[var(--hairline)] rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-[var(--emerald-accent)] transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select product..."
									}), products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: p.slug,
										disabled: p.slug === productA,
										children: p.name
									}, p.slug))]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: !productA || !productB,
							className: "btn-accent inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
							children: ["Compare Products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-6xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
						children: "Editor's Shortlists"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Featured Head-to-Head Comparisons"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-8",
					children: comparisons.map((c) => {
						const prodA = products.find((p) => p.slug === c.products[0]);
						const prodB = products.find((p) => p.slug === c.products[1]);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
							className: "surface-card p-6 md:p-8 rounded-3xl border border-[var(--hairline)] flex flex-col justify-between h-full group relative overflow-hidden",
							max: 4,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4 relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono-tech text-[9px] uppercase tracking-wider text-[var(--emerald-accent)] font-semibold bg-[var(--surface-2)] px-2.5 py-1 rounded-full",
											children: c.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xl md:text-2xl font-bold group-hover:text-[var(--emerald-accent)] transition-colors",
											children: c.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground leading-relaxed line-clamp-3",
											children: c.excerpt
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-8 border-t border-[var(--hairline)] mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [prodA && prodB && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex -space-x-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: prodA.image,
												alt: prodA.name,
												className: "size-10 rounded-full border-2 border-background object-cover bg-background"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: prodB.image,
												alt: prodB.name,
												className: "size-10 rounded-full border-2 border-background object-cover bg-background"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground font-mono-tech",
											children: c.publishedAt
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: `/compare/${c.slug}`,
										className: "font-semibold text-xs text-[var(--emerald-accent)] hover:underline inline-flex items-center gap-1 shrink-0",
										children: ["Compare Specs ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
									})]
								})
							]
						}, c.slug);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl mx-auto surface-card p-6 rounded-2xl border border-dashed border-[var(--hairline)] flex items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "size-8 rounded-full bg-[var(--surface-2)] border border-[var(--hairline)] flex items-center justify-center shrink-0 text-[var(--emerald-accent)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display font-semibold text-sm",
					children: "Dynamic Specs Engine"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground leading-relaxed mt-1",
					children: "If you compare two products that do not have a curated comparison write-up, our custom spec engine will dynamically generate a side-by-side matrix comparing all registered specs, dimensions, pros/cons, and pricing."
				})] })]
			})
		})
	] });
}
//#endregion
export { CompareHubPage as component };
