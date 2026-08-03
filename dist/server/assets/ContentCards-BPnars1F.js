import { a as MouseGlow, u as TiltCard } from "./motion-CSNJjo3r.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Award, BookOpen, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
//#region src/components/site/ContentCards.tsx
function ReviewCard({ review }) {
	return /* @__PURE__ */ jsx(motion.div, {
		initial: {
			opacity: 0,
			y: 16
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: {
			duration: .4,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "h-full",
		children: /* @__PURE__ */ jsx(TiltCard, {
			className: "surface-card overflow-hidden group flex flex-col h-full relative",
			max: 5,
			children: /* @__PURE__ */ jsxs(Link, {
				to: `/reviews/${review.slug}`,
				className: "flex flex-col h-full",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative aspect-[16/10] overflow-hidden bg-[var(--surface-2)]",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: review.image,
							alt: review.productName,
							loading: "lazy",
							decoding: "async",
							sizes: "(min-width: 768px) 33vw, 100vw",
							className: "absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
						}),
						/* @__PURE__ */ jsx(MouseGlow, {}),
						review.badge && /* @__PURE__ */ jsxs("span", {
							className: "absolute top-4 left-4 rounded-full px-2.5 py-1 text-[9px] font-bold font-mono-tech text-background uppercase tracking-wider flex items-center gap-1",
							style: { background: "var(--gradient-accent)" },
							children: [/* @__PURE__ */ jsx(Award, { className: "size-3" }), review.badge.replace("-", " ")]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur-md px-3 py-1 shadow-md",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-[10px] font-mono-tech text-muted-foreground uppercase",
								children: "Score"
							}), /* @__PURE__ */ jsx("span", {
								className: "font-display font-bold text-sm text-[var(--emerald-accent)]",
								children: review.overallScore.toFixed(1)
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "p-6 flex-1 flex flex-col justify-between",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[var(--cyan-accent)]",
								children: "Expert Review"
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-xl font-semibold leading-snug text-foreground group-hover:text-[var(--emerald-accent)] transition-colors line-clamp-2",
								children: review.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground line-clamp-2 leading-relaxed",
								children: review.excerpt
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "pt-6 border-t border-[var(--hairline)] mt-6 flex items-center justify-between text-xs text-muted-foreground",
						children: [/* @__PURE__ */ jsxs("span", { children: ["By ", review.author] }), /* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ jsx(BookOpen, { className: "size-3" }), review.readTime]
						})]
					})]
				})]
			})
		})
	});
}
function GuideCard({ guide }) {
	return /* @__PURE__ */ jsx(motion.div, {
		initial: {
			opacity: 0,
			y: 16
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: {
			duration: .4,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "h-full",
		children: /* @__PURE__ */ jsx(TiltCard, {
			className: "surface-card overflow-hidden group flex flex-col h-full relative",
			max: 5,
			children: /* @__PURE__ */ jsxs(Link, {
				to: `/guides/${guide.slug}`,
				className: "flex flex-col h-full",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative aspect-[16/10] overflow-hidden bg-[var(--surface-2)]",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: guide.image,
							alt: guide.title,
							loading: "lazy",
							decoding: "async",
							sizes: "(min-width: 1024px) 50vw, 100vw",
							className: "absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
						}),
						/* @__PURE__ */ jsx(MouseGlow, {}),
						/* @__PURE__ */ jsx("span", {
							className: "absolute top-4 left-4 rounded px-2 py-0.5 text-[9px] font-bold font-mono-tech text-background uppercase tracking-wider",
							style: { background: "var(--gradient-accent)" },
							children: guide.category
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "p-6 flex-1 flex flex-col justify-between",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[var(--emerald-accent)]",
								children: "Buying Guide"
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-xl font-semibold leading-snug text-foreground group-hover:text-[var(--emerald-accent)] transition-colors line-clamp-2",
								children: guide.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground line-clamp-2 leading-relaxed",
								children: guide.excerpt
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "pt-6 border-t border-[var(--hairline)] mt-6 flex items-center justify-between text-xs text-muted-foreground",
						children: [/* @__PURE__ */ jsxs("span", { children: ["By ", guide.author] }), /* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ jsx(BookOpen, { className: "size-3" }), guide.readTime]
						})]
					})]
				})]
			})
		})
	});
}
function BrandCard({ brand }) {
	return /* @__PURE__ */ jsx(motion.div, {
		initial: {
			opacity: 0,
			y: 16
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: {
			duration: .4,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "h-full",
		children: /* @__PURE__ */ jsxs(TiltCard, {
			className: "surface-card p-8 flex flex-col justify-between h-full min-h-[200px] relative group",
			max: 5,
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute -right-16 -top-16 size-48 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity",
					style: { background: "var(--gradient-accent)" }
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between mb-4",
					children: [/* @__PURE__ */ jsx("div", {
						className: "font-display text-xl font-bold tracking-tight text-accent-gradient uppercase",
						children: brand.name
					}), /* @__PURE__ */ jsx("a", {
						href: brand.website,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-muted-foreground hover:text-[var(--emerald-accent)] transition-colors p-1",
						onClick: (e) => e.stopPropagation(),
						"aria-label": `Visit ${brand.name} website`,
						children: /* @__PURE__ */ jsx(ExternalLink, { className: "size-4" })
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3",
					children: brand.description
				})] }),
				/* @__PURE__ */ jsxs("div", {
					className: "pt-4 border-t border-[var(--hairline)]/50 mt-auto flex items-center justify-between text-xs",
					children: [/* @__PURE__ */ jsxs("span", {
						className: "font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground",
						children: [brand.productCount, " products"]
					}), /* @__PURE__ */ jsxs(Link, {
						to: `/brand/${brand.slug}`,
						className: "font-semibold text-[var(--emerald-accent)] inline-flex items-center gap-1 group-hover:gap-2 transition-all",
						children: ["View all ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5" })]
					})]
				})
			]
		})
	});
}
//#endregion
export { GuideCard as n, ReviewCard as r, BrandCard as t };
