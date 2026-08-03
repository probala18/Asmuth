import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as MouseGlow, u as TiltCard } from "./motion-CSNJjo3r.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as GitCompareArrows, K as CircleQuestionMark, c as Timer, d as Star, l as Tag, nt as Bookmark, rt as BookmarkCheck, t as lucide_react_exports, ut as ArrowRight } from "../_libs/lucide-react.mjs";
import { o as toggleSavedProduct, s as useSavedProducts } from "./saved-products-CUi3zrcj.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCards-DO0DKzl3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function resolveIcon(name) {
	return lucide_react_exports[name] || CircleQuestionMark;
}
function ProductCard({ product, compareSelected = false, onCompareToggle }) {
	const hasDiscount = product.originalPrice && product.originalPrice > product.price;
	const discountPercent = hasDiscount ? Math.round((product.originalPrice - product.price) / product.originalPrice * 100) : 0;
	const isSaved = useSavedProducts().some((savedProduct) => savedProduct.slug === product.slug);
	const handleSaveToggle = (event) => {
		event.preventDefault();
		event.stopPropagation();
		toggleSavedProduct(product.slug, product);
	};
	const handleCompareToggle = (event) => {
		event.preventDefault();
		event.stopPropagation();
		onCompareToggle?.(product.slug);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: "initial",
		whileHover: "hover",
		whileTap: "tap",
		variants: {
			initial: {
				opacity: 0,
				y: 16
			},
			animate: {
				opacity: 1,
				y: 0
			},
			tap: { scale: .975 }
		},
		whileInView: "animate",
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
			className: "surface-card overflow-hidden group flex flex-col h-full relative",
			max: 6,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col h-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[5/4] overflow-hidden bg-[var(--surface-2)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: product.slug },
							className: "block size-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: product.name,
								loading: "lazy",
								decoding: "async",
								sizes: "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
								className: "absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MouseGlow, {}),
						product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-4 left-4 rounded-full px-2.5 py-1 text-[9px] font-bold font-mono-tech text-background uppercase tracking-wider",
							style: { background: "var(--gradient-accent)" },
							children: product.badge.replace("-", " ")
						}),
						hasDiscount && !product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "absolute top-4 left-4 rounded-full px-2.5 py-1 text-[9px] font-bold font-mono-tech bg-[var(--danger)] text-white uppercase tracking-wider",
							children: [
								"-",
								discountPercent,
								"% OFF"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "absolute top-4 right-4 flex items-center gap-1 rounded-full bg-background/85 backdrop-blur-md px-2 py-0.5 text-[10px] font-bold font-mono-tech text-foreground shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 text-amber-400 fill-amber-400" }), product.rating.toFixed(1)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-4 right-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleCompareToggle,
								className: `flex items-center justify-center size-9 rounded-full border border-[var(--hairline)] bg-background/85 backdrop-blur-md text-foreground shadow-sm transition-all ${compareSelected ? "border-[var(--emerald-accent)] text-[var(--emerald-accent)]" : "hover:border-[var(--emerald-accent)] hover:text-[var(--emerald-accent)]"}`,
								"aria-label": compareSelected ? "Remove from compare" : "Add to compare",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompareArrows, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleSaveToggle,
								className: "flex items-center justify-center size-9 rounded-full border border-[var(--hairline)] bg-background/85 backdrop-blur-md text-foreground shadow-sm transition-all hover:border-[var(--emerald-accent)] hover:text-[var(--emerald-accent)]",
								"aria-label": isSaved ? "Remove from saved" : "Save product",
								children: isSaved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-4" })
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$slug",
					params: { slug: product.slug },
					className: "p-6 flex-1 flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-between",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)]",
									children: [
										product.brand,
										" · ",
										product.category
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold tracking-tight text-foreground group-hover:text-[var(--emerald-accent)] transition-colors line-clamp-1",
								children: product.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground line-clamp-2 leading-relaxed",
								children: product.shortDescription
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-6 border-t border-[var(--hairline)] mt-6 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-xl font-bold text-foreground",
								children: ["$", product.price]
							}), hasDiscount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground line-through",
								children: ["$", product.originalPrice]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							variants: {
								initial: { x: 0 },
								hover: { x: 3 }
							},
							transition: {
								type: "spring",
								stiffness: 300,
								damping: 15
							},
							className: "size-8 rounded-full bg-[var(--surface-2)] group-hover:bg-[var(--emerald-accent)] text-foreground group-hover:text-background flex items-center justify-center transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
						})]
					})]
				})]
			})
		})
	});
}
function DealCard({ product, hours }) {
	const hasDiscount = product.originalPrice && product.originalPrice > product.price;
	const discountPercent = hasDiscount ? Math.round((product.originalPrice - product.price) / product.originalPrice * 100) : 0;
	const [timeLeft, setTimeLeft] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const target = /* @__PURE__ */ new Date();
		target.setHours(target.getHours() + hours);
		const updateTimer = () => {
			const now = (/* @__PURE__ */ new Date()).getTime();
			const difference = target.getTime() - now;
			if (difference <= 0) {
				setTimeLeft("00:00:00");
				return;
			}
			const h = Math.floor(difference / (1e3 * 60 * 60));
			const m = Math.floor(difference % (1e3 * 60 * 60) / (1e3 * 60));
			const s = Math.floor(difference % (1e3 * 60) / 1e3);
			setTimeLeft(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`);
		};
		updateTimer();
		const interval = setInterval(updateTimer, 1e3);
		return () => clearInterval(interval);
	}, [hours]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: "initial",
		whileHover: "hover",
		whileTap: "tap",
		variants: {
			initial: {
				opacity: 0,
				y: 16
			},
			animate: {
				opacity: 1,
				y: 0
			},
			tap: { scale: .975 }
		},
		whileInView: "animate",
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
			className: "surface-card overflow-hidden group flex flex-col h-full relative",
			max: 5,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[5/4] overflow-hidden bg-[var(--surface-2)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						loading: "lazy",
						decoding: "async",
						sizes: "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
						className: "absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MouseGlow, {}),
					hasDiscount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold font-mono-tech text-white uppercase tracking-wider bg-[var(--danger)]",
						children: [
							"-",
							discountPercent,
							"% OFF"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono-tech text-[var(--cyan-accent)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "size-3 text-[var(--emerald-accent)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: timeLeft
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 flex-1 flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono-tech text-[9px] uppercase tracking-[0.2em] text-muted-foreground",
							children: "Limited stock drop"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold tracking-tight",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-3 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-2xl font-bold text-accent-gradient",
								children: ["$", product.price]
							}), hasDiscount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm text-muted-foreground line-through",
								children: ["$", product.originalPrice]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					whileHover: { scale: 1.02 },
					whileTap: { scale: .97 },
					transition: {
						type: "spring",
						stiffness: 450,
						damping: 15
					},
					className: "w-full mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/product/$slug",
						params: { slug: product.slug },
						className: "btn-ghost-glow w-full rounded-full py-2.5 text-xs font-semibold inline-flex items-center justify-center gap-2 cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "size-3" }), " Grab deal"]
					})
				})]
			})]
		})
	});
}
function CategoryCard({ category }) {
	const IconComponent = resolveIcon(category.icon);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: "initial",
		whileHover: "hover",
		whileTap: "tap",
		variants: {
			initial: {
				opacity: 0,
				y: 16
			},
			animate: {
				opacity: 1,
				y: 0
			},
			tap: { scale: .98 }
		},
		whileInView: "animate",
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
			className: "surface-card-2 relative overflow-hidden group flex flex-col justify-between h-full min-h-[280px]",
			max: 6,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: category.image,
					alt: "",
					loading: "lazy",
					decoding: "async",
					sizes: "(min-width: 768px) 33vw, 100vw",
					className: "absolute inset-0 size-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-[1.04] dark:opacity-20"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/55" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -right-20 -top-20 size-60 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity",
					style: { background: "var(--gradient-accent)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative p-8 pb-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-12 grid place-items-center rounded-xl bg-background border border-[var(--hairline)] text-[var(--emerald-accent)] group-hover:scale-110 transition-transform duration-300 mb-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-semibold mb-2 text-foreground",
							children: category.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed pr-4 line-clamp-2",
							children: category.description
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative p-8 pt-6 border-t border-[var(--hairline)]/50 mt-6 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground",
						children: [category.productCount, " items reviewed"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/category/$slug",
						params: { slug: category.slug },
						className: "text-xs font-semibold text-[var(--emerald-accent)] inline-flex items-center gap-1 transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							variants: {
								initial: { x: 0 },
								hover: { x: 3 }
							},
							transition: {
								type: "spring",
								stiffness: 300,
								damping: 15
							},
							className: "inline-block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })
						})]
					})]
				})
			]
		})
	});
}
//#endregion
export { DealCard as n, ProductCard as r, CategoryCard as t };
