import { c as SplitTextReveal } from "./motion-CSNJjo3r.js";
import { t as Route } from "./compare._slug-DKDeDVF7.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, Award, Check, ExternalLink, Star, X } from "lucide-react";
//#region src/routes/compare.$slug.tsx?tsr-split=component
function CompareDetailPage() {
	const { comparison, productA, productB } = Route.useLoaderData();
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative pt-36 pb-12 px-6 lg:px-10 overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-60" }), /* @__PURE__ */ jsxs("div", {
				className: "relative max-w-6xl mx-auto",
				children: [
					/* @__PURE__ */ jsxs(Link, {
						to: "/compare",
						className: "inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group",
						children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "size-3.5 group-hover:-translate-x-1 transition-transform" }), "Back to Comparison Hub"]
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] block mb-3",
						children: [comparison.category, " Clash"]
					}),
					/* @__PURE__ */ jsx(SplitTextReveal, {
						text: comparison.title,
						className: "font-display text-4xl lg:text-6xl font-bold tracking-tight mb-4"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground max-w-2xl leading-relaxed",
						children: comparison.excerpt
					})
				]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative",
				children: [/* @__PURE__ */ jsxs("div", {
					className: `surface-card p-6 md:p-8 rounded-3xl border ${comparison.winner === productA.slug ? "border-[var(--emerald-accent)]/50" : "border-[var(--hairline)]"} flex flex-col justify-between relative`,
					children: [
						comparison.winner === productA.slug && /* @__PURE__ */ jsxs("span", {
							className: "absolute top-4 right-4 bg-[var(--emerald-accent)] text-background text-[9px] font-bold font-mono-tech px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md",
							children: [/* @__PURE__ */ jsx(Award, { className: "size-3" }), " Winner"]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--surface-2)]",
									children: /* @__PURE__ */ jsx("img", {
										src: productA.image,
										alt: productA.name,
										className: "size-full object-cover"
									})
								}),
								/* @__PURE__ */ jsx("p", {
									className: "font-mono-tech text-[10px] uppercase tracking-wider text-[var(--emerald-accent)]",
									children: productA.brand
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-2xl font-bold",
									children: productA.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: productA.shortDescription
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "font-mono text-sm font-bold text-[var(--emerald-accent)]",
											children: productA.rating
										}),
										/* @__PURE__ */ jsx("div", {
											className: "flex items-center gap-0.5",
											children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: `size-3 ${i < Math.floor(productA.rating) ? "fill-amber-400 text-amber-400" : "text-muted"}` }, i))
										}),
										/* @__PURE__ */ jsxs("span", {
											className: "text-xs text-muted-foreground",
											children: [
												"(",
												productA.reviewCount,
												")"
											]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "pt-6 border-t border-[var(--hairline)]/50 mt-6 flex items-center justify-between",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "font-display text-3xl font-bold text-foreground",
								children: ["$", productA.price]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ jsx(Link, {
									to: `/product/${productA.slug}`,
									className: "btn-ghost-glow rounded-full px-4 py-2 text-xs font-semibold",
									children: "Specs"
								}), /* @__PURE__ */ jsxs("a", {
									href: productA.affiliateUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "btn-accent rounded-full px-4 py-2 text-xs font-semibold inline-flex items-center gap-1",
									children: ["Amazon ", /* @__PURE__ */ jsx(ExternalLink, { className: "size-3" })]
								})]
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: `surface-card p-6 md:p-8 rounded-3xl border ${comparison.winner === productB.slug ? "border-[var(--emerald-accent)]/50" : "border-[var(--hairline)]"} flex flex-col justify-between relative`,
					children: [
						comparison.winner === productB.slug && /* @__PURE__ */ jsxs("span", {
							className: "absolute top-4 right-4 bg-[var(--emerald-accent)] text-background text-[9px] font-bold font-mono-tech px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md",
							children: [/* @__PURE__ */ jsx(Award, { className: "size-3" }), " Winner"]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--surface-2)]",
									children: /* @__PURE__ */ jsx("img", {
										src: productB.image,
										alt: productB.name,
										className: "size-full object-cover"
									})
								}),
								/* @__PURE__ */ jsx("p", {
									className: "font-mono-tech text-[10px] uppercase tracking-wider text-[var(--emerald-accent)]",
									children: productB.brand
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-2xl font-bold",
									children: productB.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: productB.shortDescription
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "font-mono text-sm font-bold text-[var(--emerald-accent)]",
											children: productB.rating
										}),
										/* @__PURE__ */ jsx("div", {
											className: "flex items-center gap-0.5",
											children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: `size-3 ${i < Math.floor(productB.rating) ? "fill-amber-400 text-amber-400" : "text-muted"}` }, i))
										}),
										/* @__PURE__ */ jsxs("span", {
											className: "text-xs text-muted-foreground",
											children: [
												"(",
												productB.reviewCount,
												")"
											]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "pt-6 border-t border-[var(--hairline)]/50 mt-6 flex items-center justify-between",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "font-display text-3xl font-bold text-foreground",
								children: ["$", productB.price]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ jsx(Link, {
									to: `/product/${productB.slug}`,
									className: "btn-ghost-glow rounded-full px-4 py-2 text-xs font-semibold",
									children: "Specs"
								}), /* @__PURE__ */ jsxs("a", {
									href: productB.affiliateUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "btn-accent rounded-full px-4 py-2 text-xs font-semibold inline-flex items-center gap-1",
									children: ["Amazon ", /* @__PURE__ */ jsx(ExternalLink, { className: "size-3" })]
								})]
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-5xl mx-auto",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold",
						children: "Specification Comparison"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "Direct spec alignment highlighting the superior metric."
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "surface-card rounded-3xl overflow-hidden border border-[var(--hairline)]",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-[1.5fr_2fr_2fr] px-6 py-4 bg-[var(--surface-2)]/60 font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground",
						children: [
							/* @__PURE__ */ jsx("span", { children: "Metric" }),
							/* @__PURE__ */ jsx("span", { children: productA.name }),
							/* @__PURE__ */ jsx("span", { children: productB.name })
						]
					}), comparison.specs.map((spec, i) => {
						const valAObj = spec.values.find((v) => v.productSlug === productA.slug);
						const valBObj = spec.values.find((v) => v.productSlug === productB.slug);
						return /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-[1.5fr_2fr_2fr] items-center px-6 py-4 border-t border-[var(--hairline)] hover:bg-[var(--surface-2)]/30 transition-colors",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-xs font-mono-tech uppercase tracking-wider text-muted-foreground",
									children: spec.label
								}),
								/* @__PURE__ */ jsxs("span", {
									className: `text-sm ${valAObj?.isWinner ? "text-[var(--emerald-accent)] font-semibold" : "text-foreground"}`,
									children: [valAObj?.value || "—", valAObj?.isWinner && /* @__PURE__ */ jsx("span", { className: "inline-block ml-1.5 size-1.5 rounded-full bg-[var(--emerald-accent)]" })]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: `text-sm ${valBObj?.isWinner ? "text-[var(--emerald-accent)] font-semibold" : "text-foreground"}`,
									children: [valBObj?.value || "—", valBObj?.isWinner && /* @__PURE__ */ jsx("span", { className: "inline-block ml-1.5 size-1.5 rounded-full bg-[var(--emerald-accent)]" })]
								})
							]
						}, i);
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "surface-card p-6 md:p-8 rounded-3xl border border-[var(--hairline)] space-y-6",
					children: [/* @__PURE__ */ jsxs("h4", {
						className: "font-display font-semibold text-lg border-b border-[var(--hairline)] pb-3",
						children: [productA.name, " Review"]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "text-[10px] font-mono-tech uppercase tracking-wider text-[var(--emerald-accent)] block mb-2 font-bold",
							children: "Key Strengths"
						}), /* @__PURE__ */ jsx("ul", {
							className: "space-y-2",
							children: productA.pros && productA.pros.map((p) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2 text-xs text-muted-foreground leading-relaxed",
								children: [/* @__PURE__ */ jsx(Check, { className: "size-3.5 text-[var(--emerald-accent)] mt-0.5 shrink-0" }), /* @__PURE__ */ jsx("span", { children: p })]
							}, p))
						})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "text-[10px] font-mono-tech uppercase tracking-wider text-[var(--cyan-accent)] block mb-2 font-bold",
							children: "Key Drawbacks"
						}), /* @__PURE__ */ jsx("ul", {
							className: "space-y-2",
							children: productA.cons && productA.cons.map((p) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2 text-xs text-muted-foreground leading-relaxed",
								children: [/* @__PURE__ */ jsx(X, { className: "size-3.5 text-[var(--cyan-accent)] mt-0.5 shrink-0" }), /* @__PURE__ */ jsx("span", { children: p })]
							}, p))
						})] })]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "surface-card p-6 md:p-8 rounded-3xl border border-[var(--hairline)] space-y-6",
					children: [/* @__PURE__ */ jsxs("h4", {
						className: "font-display font-semibold text-lg border-b border-[var(--hairline)] pb-3",
						children: [productB.name, " Review"]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "text-[10px] font-mono-tech uppercase tracking-wider text-[var(--emerald-accent)] block mb-2 font-bold",
							children: "Key Strengths"
						}), /* @__PURE__ */ jsx("ul", {
							className: "space-y-2",
							children: productB.pros && productB.pros.map((p) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2 text-xs text-muted-foreground leading-relaxed",
								children: [/* @__PURE__ */ jsx(Check, { className: "size-3.5 text-[var(--emerald-accent)] mt-0.5 shrink-0" }), /* @__PURE__ */ jsx("span", { children: p })]
							}, p))
						})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "text-[10px] font-mono-tech uppercase tracking-wider text-[var(--cyan-accent)] block mb-2 font-bold",
							children: "Key Drawbacks"
						}), /* @__PURE__ */ jsx("ul", {
							className: "space-y-2",
							children: productB.cons && productB.cons.map((p) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2 text-xs text-muted-foreground leading-relaxed",
								children: [/* @__PURE__ */ jsx(X, { className: "size-3.5 text-[var(--cyan-accent)] mt-0.5 shrink-0" }), /* @__PURE__ */ jsx("span", { children: p })]
							}, p))
						})] })]
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-4xl mx-auto surface-card-2 p-8 md:p-12 rounded-3xl border border-[var(--hairline)] text-center relative overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" }),
					/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-3",
						children: "The Spec Verdict"
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl md:text-3xl font-bold mb-4",
						children: "Recommended Selection"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto mb-8",
						children: comparison.verdict
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap justify-center gap-4",
						children: [comparison.winner && /* @__PURE__ */ jsxs("a", {
							href: comparison.winner === productA.slug ? productA.affiliateUrl : productB.affiliateUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "btn-accent rounded-full px-6 py-3 text-xs font-semibold inline-flex items-center gap-2",
							children: [
								"Buy Recommended (",
								comparison.winner === productA.slug ? productA.name : productB.name,
								") ",
								/* @__PURE__ */ jsx(ExternalLink, { className: "size-3.5" })
							]
						}), /* @__PURE__ */ jsx(Link, {
							to: "/compare",
							className: "btn-ghost-glow rounded-full px-6 py-3 text-xs font-semibold",
							children: "Compare Other Products"
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { CompareDetailPage as component };
