import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as SplitTextReveal, u as TiltCard } from "./motion-CSNJjo3r.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { dt as ArrowLeft, it as BookOpen } from "../_libs/lucide-react.mjs";
import { r as ProductCard } from "./ProductCards-DO0DKzl3.mjs";
import { n as guides } from "./guides-DB9TZ9M8.mjs";
import { t as Route } from "./guides._slug-M3SiHEhZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guides._slug-DovGwjj7.js
var import_jsx_runtime = require_jsx_runtime();
function GuideDetailPage() {
	const { guide, recommendedProducts } = Route.useLoaderData();
	const otherGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative pt-36 pb-16 px-6 lg:px-10 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-4xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/guides",
						className: "inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5 group-hover:-translate-x-1 transition-transform" }), "Back to Guides"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] block mb-4",
						children: [guide.category, " Setup Manual"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitTextReveal, {
						text: guide.title,
						className: "font-display text-4xl lg:text-6xl font-bold tracking-tight mb-6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl text-muted-foreground leading-relaxed mb-8",
						children: guide.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-y-4 gap-x-8 pt-6 border-t border-[var(--hairline)] text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-mono-tech uppercase text-muted-foreground/60 mb-0.5",
								children: "Written By"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: guide.author
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-mono-tech uppercase text-muted-foreground/60 mb-0.5",
								children: "Published"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: guide.publishedAt
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-mono-tech uppercase text-muted-foreground/60 mb-0.5",
								children: "Read Time"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-foreground flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-3.5" }), guide.readTime]
							})] })
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-5xl mx-auto aspect-[16/7] rounded-3xl overflow-hidden border border-[var(--hairline)] surface-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: guide.image,
					alt: guide.title,
					className: "size-full object-cover"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-4xl mx-auto space-y-12",
				children: guide.sections.map((section, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 relative pl-8 border-l-2 border-[var(--emerald-accent)]/20 hover:border-[var(--emerald-accent)] transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -left-[9px] top-1.5 flex size-4 items-center justify-center rounded-full bg-background border-2 border-[var(--emerald-accent)] text-[8px] font-mono font-bold",
							children: idx + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold text-foreground",
							children: section.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/80 leading-relaxed text-lg whitespace-pre-line font-sans",
							children: section.content
						})
					]
				}, idx))
			})
		}),
		recommendedProducts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 py-16 bg-[var(--surface)] border-y border-[var(--hairline)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-6xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-xl mx-auto mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-3",
							children: "Recommended Gear"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold",
							children: "The Workspace Core"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-2",
							children: "We've thoroughly benchmarked these tools. They are the essential building blocks for this specific workflow."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: recommendedProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
				})]
			})
		}),
		otherGuides.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-6xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-end mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
						children: "Ecosystem Guides"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Other Setup Handbooks"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/guides",
						className: "text-xs font-semibold text-[var(--emerald-accent)] hover:underline",
						children: "View all manuals →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-8",
					children: otherGuides.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
						className: "surface-card overflow-hidden group flex flex-col h-full relative",
						max: 4,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: `/guides/${g.slug}`,
							className: "flex flex-col h-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[16/9] overflow-hidden bg-[var(--surface-2)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: g.image,
									alt: g.title,
									className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 flex-1 flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono-tech text-[9px] text-[var(--emerald-accent)] uppercase tracking-wider block mb-2",
										children: g.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-bold group-hover:text-[var(--emerald-accent)] transition-colors line-clamp-2",
										children: g.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground mt-2 line-clamp-2",
										children: g.excerpt
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-4 border-t border-[var(--hairline)] mt-4 flex items-center justify-between text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["By ", g.author] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: g.readTime })]
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
