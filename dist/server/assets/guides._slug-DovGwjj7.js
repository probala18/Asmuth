import { n as guides } from "./guides-DB9TZ9M8.js";
import { c as SplitTextReveal, u as TiltCard } from "./motion-CSNJjo3r.js";
import { t as Route } from "./guides._slug-M3SiHEhZ.js";
import { r as ProductCard } from "./ProductCards-DO0DKzl3.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, BookOpen } from "lucide-react";
//#region src/routes/guides.$slug.tsx?tsr-split=component
function GuideDetailPage() {
	const { guide, recommendedProducts } = Route.useLoaderData();
	const otherGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 2);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative pt-36 pb-16 px-6 lg:px-10 overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-60" }), /* @__PURE__ */ jsxs("div", {
				className: "relative max-w-4xl mx-auto",
				children: [
					/* @__PURE__ */ jsxs(Link, {
						to: "/guides",
						className: "inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group",
						children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "size-3.5 group-hover:-translate-x-1 transition-transform" }), "Back to Guides"]
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] block mb-4",
						children: [guide.category, " Setup Manual"]
					}),
					/* @__PURE__ */ jsx(SplitTextReveal, {
						text: guide.title,
						className: "font-display text-4xl lg:text-6xl font-bold tracking-tight mb-6"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xl text-muted-foreground leading-relaxed mb-8",
						children: guide.excerpt
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center gap-y-4 gap-x-8 pt-6 border-t border-[var(--hairline)] text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "block text-[10px] font-mono-tech uppercase text-muted-foreground/60 mb-0.5",
								children: "Written By"
							}), /* @__PURE__ */ jsx("span", {
								className: "font-semibold text-foreground",
								children: guide.author
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "block text-[10px] font-mono-tech uppercase text-muted-foreground/60 mb-0.5",
								children: "Published"
							}), /* @__PURE__ */ jsx("span", {
								className: "font-semibold text-foreground",
								children: guide.publishedAt
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "block text-[10px] font-mono-tech uppercase text-muted-foreground/60 mb-0.5",
								children: "Read Time"
							}), /* @__PURE__ */ jsxs("span", {
								className: "font-semibold text-foreground flex items-center gap-1",
								children: [/* @__PURE__ */ jsx(BookOpen, { className: "size-3.5" }), guide.readTime]
							})] })
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-4",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-5xl mx-auto aspect-[16/7] rounded-3xl overflow-hidden border border-[var(--hairline)] surface-card",
				children: /* @__PURE__ */ jsx("img", {
					src: guide.image,
					alt: guide.title,
					className: "size-full object-cover"
				})
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-4xl mx-auto space-y-12",
				children: guide.sections.map((section, idx) => /* @__PURE__ */ jsxs("div", {
					className: "space-y-4 relative pl-8 border-l-2 border-[var(--emerald-accent)]/20 hover:border-[var(--emerald-accent)] transition-colors",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "absolute -left-[9px] top-1.5 flex size-4 items-center justify-center rounded-full bg-background border-2 border-[var(--emerald-accent)] text-[8px] font-mono font-bold",
							children: idx + 1
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl font-bold text-foreground",
							children: section.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-foreground/80 leading-relaxed text-lg whitespace-pre-line font-sans",
							children: section.content
						})
					]
				}, idx))
			})
		}),
		recommendedProducts.length > 0 && /* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16 bg-[var(--surface)] border-y border-[var(--hairline)]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-6xl mx-auto",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center max-w-xl mx-auto mb-12",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-3",
							children: "Recommended Gear"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl font-bold",
							children: "The Workspace Core"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground mt-2",
							children: "We've thoroughly benchmarked these tools. They are the essential building blocks for this specific workflow."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: recommendedProducts.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.slug))
				})]
			})
		}),
		otherGuides.length > 0 && /* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-6xl mx-auto",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex justify-between items-end mb-10",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
						children: "Ecosystem Guides"
					}), /* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Other Setup Handbooks"
					})] }), /* @__PURE__ */ jsx(Link, {
						to: "/guides",
						className: "text-xs font-semibold text-[var(--emerald-accent)] hover:underline",
						children: "View all manuals →"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-8",
					children: otherGuides.map((g) => /* @__PURE__ */ jsx(TiltCard, {
						className: "surface-card overflow-hidden group flex flex-col h-full relative",
						max: 4,
						children: /* @__PURE__ */ jsxs(Link, {
							to: `/guides/${g.slug}`,
							className: "flex flex-col h-full",
							children: [/* @__PURE__ */ jsx("div", {
								className: "aspect-[16/9] overflow-hidden bg-[var(--surface-2)]",
								children: /* @__PURE__ */ jsx("img", {
									src: g.image,
									alt: g.title,
									className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "p-6 flex-1 flex flex-col justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", {
										className: "font-mono-tech text-[9px] text-[var(--emerald-accent)] uppercase tracking-wider block mb-2",
										children: g.category
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "font-display text-xl font-bold group-hover:text-[var(--emerald-accent)] transition-colors line-clamp-2",
										children: g.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground mt-2 line-clamp-2",
										children: g.excerpt
									})
								] }), /* @__PURE__ */ jsxs("div", {
									className: "pt-4 border-t border-[var(--hairline)] mt-4 flex items-center justify-between text-xs text-muted-foreground",
									children: [/* @__PURE__ */ jsxs("span", { children: ["By ", g.author] }), /* @__PURE__ */ jsx("span", { children: g.readTime })]
								})]
							})]
						})
					}, g.slug))
				})]
			})
		})
	] });
}
//#endregion
export { GuideDetailPage as component };
