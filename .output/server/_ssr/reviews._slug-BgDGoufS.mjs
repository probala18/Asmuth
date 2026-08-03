import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as SplitTextReveal, s as ScrollProgressBar, u as TiltCard } from "./motion-CSNJjo3r.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Check, V as ExternalLink, d as Star, dt as ArrowLeft, r as X, st as Award } from "../_libs/lucide-react.mjs";
import { n as reviews } from "./reviews-CbTxooB7.mjs";
import { t as Route } from "./reviews._slug-Cr7lxfIC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews._slug-BgDGoufS.js
var import_jsx_runtime = require_jsx_runtime();
function DynamicReviewPage() {
	const { review, product, comparison } = Route.useLoaderData();
	const relatedReviews = reviews.filter((r) => r.slug !== review.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative pt-32 pb-16 px-6 lg:px-10 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-6xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/reviews",
						className: "inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5 group-hover:-translate-x-1 transition-transform" }), "Back to Reviews"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4 text-[var(--emerald-accent)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
							children: [review.badge ? review.badge.replace("-", " ").toUpperCase() : "EXPERT REVIEW", " · LAB TESTED"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitTextReveal, {
						text: review.title,
						className: "font-display text-4xl lg:text-6xl font-bold tracking-tight max-w-4xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xl text-muted-foreground max-w-3xl leading-relaxed",
						children: review.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6 mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-6xl font-bold text-accent-gradient",
							children: review.overallScore.toFixed(1)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1 text-[var(--emerald-accent)]",
							children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-4 ${i < Math.floor(review.overallScore / 2) ? "fill-current text-[var(--emerald-accent)]" : "text-muted"}` }, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: [
								"By ",
								review.author,
								" (",
								review.authorRole,
								") · ",
								review.readTime
							]
						})] })]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-6xl mx-auto aspect-[16/8] rounded-3xl overflow-hidden surface-card border border-[var(--hairline)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: review.image,
					alt: review.productName,
					className: "size-full object-cover"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.8fr_1.2fr] gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 text-foreground/90 text-lg leading-relaxed font-sans",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold text-foreground",
							children: "Lab-Tested Verdict"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-pre-line",
							children: review.content
						}),
						product && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6 rounded-2xl border border-[var(--hairline)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display font-semibold text-lg",
									children: product.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Check real-time pricing and stock."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: product.affiliateUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "btn-accent rounded-full px-5 py-2.5 text-xs font-semibold inline-flex items-center gap-1.5",
									children: ["Buy on Amazon ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
								})]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card-2 p-8 rounded-3xl border border-[var(--hairline)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-6",
							children: "Component Breakdown"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-6",
							children: review.scores.map((score) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgressBar, {
								label: score.label,
								value: score.value
							}, score.label))
						})]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card-2 p-8 rounded-3xl border border-[var(--hairline)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-4",
						children: "What we loved"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: review.pros.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-sm leading-relaxed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-[var(--emerald-accent)] mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
						}, p))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card-2 p-8 rounded-3xl border border-[var(--hairline)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-accent)] mb-4",
						children: "Where it stalls"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: review.cons.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-sm leading-relaxed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4 text-[var(--cyan-accent)] mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
						}, p))
					})]
				})]
			})
		}),
		comparison && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-5xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold mb-2",
						children: "Comparative Analysis"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mb-8",
						children: "How it benchmarks against key competitors in the category."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "surface-card rounded-3xl overflow-hidden border border-[var(--hairline)]",
						children: comparison.specs.map((spec, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[1.5fr_2fr_2fr] items-center px-6 py-4 border-t border-[var(--hairline)] first:border-t-0 hover:bg-[var(--surface-2)]/50 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-mono-tech uppercase tracking-wider text-muted-foreground",
								children: spec.label
							}), spec.values.map((v, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-sm ${v.isWinner ? "text-[var(--emerald-accent)] font-semibold" : "text-foreground"}`,
								children: v.value
							}, idx))]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 p-6 surface-card-2 rounded-2xl border border-[var(--hairline)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono-tech text-[9px] uppercase tracking-widest text-[var(--emerald-accent)] font-bold block mb-2",
								children: "Editor's Verdict"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground leading-relaxed italic",
								children: [
									"\"",
									comparison.verdict,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: `/compare/${comparison.slug}`,
									className: "text-xs font-semibold text-[var(--emerald-accent)] hover:underline inline-flex items-center gap-1",
									children: "View full comparison data →"
								})
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl mx-auto surface-card-2 p-10 lg:p-14 text-center rounded-3xl border border-[var(--hairline)] relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-4",
						children: "Overall Verdict"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl lg:text-3xl leading-snug font-semibold text-foreground max-w-2xl mx-auto",
						children: [
							"\"",
							review.verdict,
							"\""
						]
					}),
					product && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: product.affiliateUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "btn-accent inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold",
							children: ["Buy on Amazon ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: `/category/${product.categorySlug}`,
							className: "btn-ghost-glow rounded-full px-7 py-3.5 text-sm font-semibold",
							children: "Browse Alternative Options"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 py-16 border-t border-[var(--hairline)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-end mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
						children: "More Reading"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Latest Expert Reviews"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/reviews",
						className: "text-xs font-semibold text-[var(--emerald-accent)] hover:underline",
						children: "View all reviews →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: relatedReviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
						className: "surface-card overflow-hidden group flex flex-col h-full relative",
						max: 5,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: `/reviews/${r.slug}`,
							className: "flex flex-col h-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "aspect-[16/10] overflow-hidden relative bg-[var(--surface-2)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: r.image,
									alt: r.productName,
									className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-3 right-3 rounded-full bg-background/90 px-2 py-0.5 text-xs font-bold font-mono text-[var(--emerald-accent)]",
									children: r.overallScore
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 flex-1 flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono-tech text-[9px] text-[var(--cyan-accent)] uppercase tracking-wider block mb-2",
									children: "Review"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-base font-semibold group-hover:text-[var(--emerald-accent)] transition-colors line-clamp-2",
									children: r.title
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-4 border-t border-[var(--hairline)]/50 mt-4 flex items-center justify-between text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["By ", r.author] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.readTime })]
								})]
							})]
						})
					}, r.slug))
				})]
			})
		})
	] });
}
//#endregion
export { DynamicReviewPage as component };
