import { i as products } from "./products-DK41-WSW.js";
import { c as SplitTextReveal, u as TiltCard } from "./motion-CSNJjo3r.js";
import { t as Route } from "./product._slug-B_QyKAW3.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, Check, ExternalLink, ShieldCheck, Star, Truck, X } from "lucide-react";
//#region src/routes/product.$slug.tsx?tsr-split=component
function ProductDetailPage() {
	const { product, review } = Route.useLoaderData();
	const related = products.filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug).slice(0, 3);
	const fallbackRelated = related.length > 0 ? related : products.filter((p) => p.slug !== product.slug).slice(0, 3);
	const hasDiscount = product.originalPrice && product.originalPrice > product.price;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-60" }), /* @__PURE__ */ jsxs("div", {
				className: "relative max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsxs(Link, {
					to: `/category/${product.categorySlug}`,
					className: "inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group",
					children: [
						/* @__PURE__ */ jsx(ArrowLeft, { className: "size-3.5 group-hover:-translate-x-1 transition-transform" }),
						"Back to ",
						product.category
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center",
					children: [/* @__PURE__ */ jsxs(TiltCard, {
						className: "relative aspect-square rounded-3xl overflow-hidden surface-card border border-[var(--hairline)]",
						max: 4,
						children: [/* @__PURE__ */ jsx("img", {
							src: product.image,
							alt: product.name,
							className: "size-full object-cover"
						}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ jsxs("p", {
								className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
								children: [
									product.brand,
									" · ",
									product.category
								]
							}),
							/* @__PURE__ */ jsx(SplitTextReveal, {
								text: product.name,
								className: "font-display text-5xl lg:text-6xl font-bold tracking-tight"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground text-lg leading-relaxed",
								children: product.shortDescription
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex items-center gap-1 text-[var(--emerald-accent)]",
									children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: `size-4 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}` }, i))
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-sm text-muted-foreground",
									children: [
										product.rating,
										" · ",
										product.reviewCount,
										" user evaluations"
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-baseline gap-3 pt-2",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "font-display text-5xl font-bold text-accent-gradient",
									children: ["$", product.price]
								}), hasDiscount && /* @__PURE__ */ jsxs("span", {
									className: "text-xl text-muted-foreground line-through",
									children: ["$", product.originalPrice]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-3 pt-2",
								children: [
									/* @__PURE__ */ jsxs("a", {
										href: product.affiliateUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "btn-accent rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2 cursor-pointer",
										children: ["Buy on Amazon", /* @__PURE__ */ jsx(ExternalLink, { className: "size-4" })]
									}),
									review && /* @__PURE__ */ jsxs(Link, {
										to: `/reviews/${review.slug}`,
										className: "btn-ghost-glow rounded-full px-7 py-3.5 text-sm font-semibold",
										children: [
											"Read Expert Review (",
											review.overallScore.toFixed(1),
											")"
										]
									}),
									/* @__PURE__ */ jsx(Link, {
										to: "/compare",
										className: "btn-ghost-glow rounded-full px-6 py-3.5 text-sm font-semibold inline-flex items-center justify-center",
										children: "Compare Tech"
									})
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-3 gap-4 pt-6 border-t border-[var(--hairline)]",
								children: [
									{
										Icon: ShieldCheck,
										label: "Tested Integrity"
									},
									{
										Icon: Truck,
										label: "Best Pricing"
									},
									{
										Icon: Check,
										label: "Editor Approved"
									}
								].map((b) => /* @__PURE__ */ jsxs("div", {
									className: "text-[10px] md:text-xs text-muted-foreground flex items-center gap-1.5 font-medium",
									children: [
										/* @__PURE__ */ jsx(b.Icon, { className: "size-4 text-[var(--emerald-accent)] shrink-0" }),
										" ",
										b.label
									]
								}, b.label))
							})
						]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16 bg-[var(--surface)]/30 border-y border-[var(--hairline)]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-5xl mx-auto surface-card-2 p-10 lg:p-14",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3",
						children: "Specifications"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl lg:text-4xl font-semibold mb-10 max-w-xl",
						children: "Technical Specifications & Performance"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6",
						children: product.specs.map((spec) => /* @__PURE__ */ jsxs("div", {
							className: "flex justify-between items-center py-3 border-b border-[var(--hairline)]",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium text-muted-foreground",
								children: spec.label
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-semibold text-foreground",
								children: spec.value
							})]
						}, spec.label))
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "surface-card-2 p-8 border border-[var(--hairline)] rounded-2xl",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-4 font-semibold",
						children: "What We Love"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-3",
						children: product.pros.map((pro) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-3 text-sm text-foreground",
							children: [
								/* @__PURE__ */ jsx(Check, { className: "size-4 text-[var(--emerald-accent)] mt-0.5 shrink-0" }),
								" ",
								pro
							]
						}, pro))
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "surface-card-2 p-8 border border-[var(--hairline)] rounded-2xl",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-accent)] mb-4 font-semibold",
						children: "Keep in Mind"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-3",
						children: product.cons.map((con) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-3 text-sm text-foreground",
							children: [
								/* @__PURE__ */ jsx(X, { className: "size-4 text-[var(--cyan-accent)] mt-0.5 shrink-0" }),
								" ",
								con
							]
						}, con))
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16 bg-[var(--surface)]/20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-4xl mx-auto surface-card p-10 lg:p-14 text-center border border-[var(--hairline)]",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-4",
						children: "The Overview"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto mb-8",
						children: product.description
					}),
					/* @__PURE__ */ jsxs("a", {
						href: product.affiliateUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "btn-accent inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold cursor-pointer",
						children: ["Check Price on Amazon", /* @__PURE__ */ jsx(ExternalLink, { className: "size-4" })]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16 border-t border-[var(--hairline)]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-semibold mb-8 text-center",
					children: "Similar Tech Picks"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: fallbackRelated.map((p) => /* @__PURE__ */ jsx(TiltCard, {
						className: "surface-card overflow-hidden group border border-[var(--hairline)] rounded-2xl flex flex-col justify-between",
						children: /* @__PURE__ */ jsxs(Link, {
							to: `/product/${p.slug}`,
							children: [/* @__PURE__ */ jsx("div", {
								className: "aspect-[5/4] overflow-hidden bg-[var(--surface-2)]",
								children: /* @__PURE__ */ jsx("img", {
									src: p.image,
									alt: p.name,
									loading: "lazy",
									className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "p-5 flex justify-between items-center",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
									className: "font-mono-tech text-[9px] uppercase text-muted-foreground",
									children: p.brand
								}), /* @__PURE__ */ jsx("h3", {
									className: "font-display text-lg font-semibold text-foreground group-hover:text-[var(--emerald-accent)] transition-colors",
									children: p.name
								})] }), /* @__PURE__ */ jsxs("span", {
									className: "text-[var(--emerald-accent)] font-display font-semibold",
									children: ["$", p.price]
								})]
							})]
						})
					}, p.slug))
				})]
			})
		})
	] });
}
//#endregion
export { ProductDetailPage as component };
