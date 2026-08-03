import { a as __toESM } from "../_runtime.mjs";
import { r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as products, t as getDealsProducts } from "./products-DK41-WSW.mjs";
import { t as categories } from "./categories-BkPZMTJV.mjs";
import { $ as Check, H as Cpu, I as Gamepad2, N as Headphones, O as Layers, U as Compass, X as ChevronRight, Z as ChevronLeft, d as Star, dt as ArrowLeft, et as Camera, f as Sparkles, h as ShieldCheck, i as Watch, j as House, k as Laptop, n as Zap, ot as Battery, p as Smartphone, st as Award, tt as Briefcase, ut as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as saveUserPreferences, n as getUserPreferences, s as useSavedProducts } from "./saved-products-CUi3zrcj.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { r as ProductCard } from "./ProductCards-DO0DKzl3.mjs";
import { t as dashboardData } from "./personalizedDashboardData-B57S7eqJ.mjs";
import { t as ShimmerButton } from "./shimmer-button-D_NQsErd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-BUhQAmFN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categoryIcons = {
	computing: Laptop,
	audio: Headphones,
	wearables: Watch,
	mobile: Smartphone,
	cameras: Camera,
	gaming: Gamepad2
};
function DashboardHeroSection() {
	const getGreeting = () => {
		const h = (/* @__PURE__ */ new Date()).getHours();
		if (h < 12) return "Good morning";
		if (h < 18) return "Good afternoon";
		return "Good evening";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
		"data-no-batch": true,
		className: "px-4 sm:px-6 lg:px-10 pt-28 pb-6",
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .5,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 surface-card-2 rounded-2xl border border-[var(--hairline)] p-4 hidden lg:flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-2",
						children: "Categories"
					}), categories.map((c) => {
						const Icon = categoryIcons[c.slug] || Sparkles;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: `/category/${c.slug}`,
							className: "flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-foreground/80 hover:text-foreground hover:bg-[var(--surface)] transition-all group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-muted-foreground group-hover:text-[var(--emerald-accent)] transition-colors" }), c.name]
						}, c.slug);
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 relative overflow-hidden rounded-2xl min-h-[280px] sm:min-h-[320px] bg-gradient-to-br from-[var(--surface-2)] to-[color-mix(in_oklab,var(--emerald-accent)_12%,var(--background))] border border-[var(--hairline)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-20 pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col justify-center h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: "hidden",
								animate: "visible",
								variants: {
									hidden: { opacity: 0 },
									visible: {
										opacity: 1,
										transition: {
											staggerChildren: .08,
											delayChildren: .1
										}
									}
								},
								className: "max-w-md space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
										variants: {
											hidden: {
												opacity: 0,
												y: 12
											},
											visible: {
												opacity: 1,
												y: 0
											}
										},
										className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
										children: "Your Personalized Feed"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
										variants: {
											hidden: {
												opacity: 0,
												y: 16
											},
											visible: {
												opacity: 1,
												y: 0
											}
										},
										className: "font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground",
										children: [
											"Latest trending ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-accent-gradient",
												children: "Product picks"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
										variants: {
											hidden: {
												opacity: 0,
												y: 12
											},
											visible: {
												opacity: 1,
												y: 0
											}
										},
										className: "text-muted-foreground text-sm leading-relaxed max-w-sm",
										children: "Editorially curated recommendations built around your interest profile."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										variants: {
											hidden: {
												opacity: 0,
												y: 12
											},
											visible: {
												opacity: 1,
												y: 0
											}
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/collections",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ShimmerButton, {
												className: "btn-accent",
												children: ["Explore Collections", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
											})
										})
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute right-4 bottom-4 hidden sm:flex items-end gap-3 pointer-events-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/assets/product-laptop.jpg",
									alt: "",
									className: "w-28 h-20 rounded-xl object-cover shadow-lg opacity-90 translate-y-2",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/assets/product-headphones.jpg",
									alt: "",
									className: "w-24 h-24 rounded-xl object-cover shadow-lg opacity-80 -translate-y-2",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/assets/product-watch.jpg",
									alt: "",
									className: "w-20 h-20 rounded-xl object-cover shadow-lg opacity-85",
									loading: "lazy"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3 flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card-2 rounded-2xl border border-[var(--hairline)] p-5 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-10 rounded-full overflow-hidden border border-[var(--hairline)] bg-[var(--surface-2)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: dashboardData.user.avatar,
										alt: dashboardData.user.name,
										className: "size-full object-cover"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [getGreeting(), ","]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-sm font-bold text-foreground",
									children: dashboardData.user.firstName
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/dashboard",
									className: "btn-accent flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold w-full",
									children: "My Workspace"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									className: "flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-medium w-full border border-[var(--hairline)] text-foreground hover:bg-[var(--surface)] transition-all",
									children: "Manage Account"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card-2 rounded-2xl border border-[var(--hairline)] p-4 space-y-2 bg-gradient-to-br from-[color-mix(in_oklab,var(--cyan-accent)_8%,var(--background))] to-[var(--surface)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono-tech text-[9px] uppercase tracking-widest text-[var(--cyan-accent)]",
									children: "Deal Alert"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-semibold text-foreground leading-snug",
									children: [
										"Get up to 25% off on selected",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[var(--emerald-accent)]",
											children: "computing products"
										}),
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/deals",
									className: "text-[10px] font-mono-tech text-[var(--emerald-accent)] inline-flex items-center gap-1 hover:gap-2 transition-all",
									children: ["View Deals ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card-2 rounded-2xl border border-[var(--hairline)] p-4 space-y-2 bg-gradient-to-br from-[color-mix(in_oklab,var(--emerald-accent)_6%,var(--background))] to-[var(--surface)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono-tech text-[9px] uppercase tracking-widest text-[var(--emerald-accent)]",
									children: "Editorial"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-semibold text-foreground leading-snug",
									children: [
										"New comparison matrix:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[var(--cyan-accent)]",
											children: "Laptop Air vs MacBook Pro"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/compare",
									className: "text-[10px] font-mono-tech text-[var(--emerald-accent)] inline-flex items-center gap-1 hover:gap-2 transition-all",
									children: ["Read Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" })]
								})
							]
						})
					]
				})
			]
		})
	});
}
function DealsAndOffersSection() {
	const deals = getDealsProducts();
	const [countdown, setCountdown] = (0, import_react.useState)({
		days: 4,
		hours: 13,
		mins: 34,
		secs: 56
	});
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setCountdown((prev) => {
				let { days, hours, mins, secs } = prev;
				secs--;
				if (secs < 0) {
					secs = 59;
					mins--;
				}
				if (mins < 0) {
					mins = 59;
					hours--;
				}
				if (hours < 0) {
					hours = 23;
					days--;
				}
				if (days < 0) days = 0;
				return {
					days,
					hours,
					mins,
					secs
				};
			});
		}, 1e3);
		return () => clearInterval(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
		"data-no-batch": true,
		className: "px-4 sm:px-6 lg:px-10 py-8",
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: { duration: .5 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto surface-card-2 rounded-2xl border border-[var(--hairline)] p-6 sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-xl sm:text-2xl font-bold text-foreground",
					children: ["Deals and ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent-gradient",
						children: "offers"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Signal-grade savings on curated products"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: [
						{
							val: countdown.days,
							label: "Days"
						},
						{
							val: countdown.hours,
							label: "Hour"
						},
						{
							val: countdown.mins,
							label: "Min"
						},
						{
							val: countdown.secs,
							label: "Sec"
						}
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold text-foreground bg-[var(--surface-2)] px-3 py-1.5 rounded-lg border border-[var(--hairline)] min-w-[42px] text-center tabular-nums",
							children: String(t.val).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono-tech text-[9px] text-muted-foreground mt-1",
							children: t.label
						})]
					}, t.label))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",
				children: deals.map((product) => {
					const discount = product.originalPrice ? Math.round((product.originalPrice - product.price) / product.originalPrice * 100) : 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: `/product/${product.slug}`,
						className: "group text-center space-y-3 p-3 rounded-xl hover:bg-[var(--surface)] transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-square rounded-xl overflow-hidden bg-[var(--surface-2)] mx-auto w-full max-w-[140px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: product.image,
									alt: product.name,
									className: "size-full object-cover group-hover:scale-105 transition-transform duration-500",
									loading: "lazy"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-foreground truncate",
								children: product.name
							}),
							discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-block bg-[var(--emerald-accent)]/15 text-[var(--emerald-accent)] font-mono-tech text-[10px] font-bold px-2 py-0.5 rounded-md",
								children: [
									"-",
									discount,
									"%"
								]
							})
						]
					}, product.slug);
				})
			})]
		})
	});
}
function CategoryBrowserSection({ title, categorySlug, accentColor, categoryProducts }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
		"data-no-batch": true,
		className: "px-4 sm:px-6 lg:px-10 py-4",
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: { duration: .5 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto surface-card-2 rounded-2xl border border-[var(--hairline)] p-4 sm:p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-12 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sm:col-span-3 rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[200px]",
					style: { background: `linear-gradient(135deg, color-mix(in oklab, ${accentColor} 15%, var(--background)), color-mix(in oklab, ${accentColor} 6%, var(--surface)))` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl sm:text-2xl font-bold text-foreground leading-snug",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: `/category/${categorySlug}`,
							className: "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold border border-[var(--hairline)] bg-background/60 backdrop-blur-sm text-foreground hover:bg-background transition-all",
							children: ["Browse now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" })]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sm:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",
					children: categoryProducts.slice(0, 4).map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: `/product/${product.slug}`,
						className: "group flex flex-col items-start gap-2.5 p-3 rounded-xl hover:bg-[var(--surface)] transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full aspect-square rounded-xl overflow-hidden bg-[var(--surface-2)] max-w-[120px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: product.name,
								className: "size-full object-cover group-hover:scale-105 transition-transform duration-500",
								loading: "lazy"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-foreground line-clamp-1",
								children: product.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono-tech text-[10px] text-muted-foreground",
								children: ["From ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-foreground font-semibold",
									children: ["$", product.price]
								})]
							})]
						})]
					}, product.slug))
				})]
			})
		})
	});
}
function PromotionalBannersSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
		"data-no-batch": true,
		className: "px-4 sm:px-6 lg:px-10 py-4",
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: { duration: .5 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-2xl border border-[var(--hairline)] min-h-[200px] bg-gradient-to-br from-[color-mix(in_oklab,var(--emerald-accent)_10%,var(--background))] to-[var(--surface)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 p-6 sm:p-8 flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 max-w-[200px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono-tech text-[9px] uppercase tracking-widest text-[var(--emerald-accent)]",
								children: "Up to 20% Off"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl sm:text-3xl font-bold text-foreground",
								children: "Smart Watch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/category/wearables",
								className: "inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold border border-[var(--hairline)] bg-background/70 backdrop-blur-sm text-foreground hover:bg-background transition-all",
								children: "View Collection"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/product-watch.jpg",
						alt: "Smart Watch",
						className: "w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover shadow-xl",
						loading: "lazy"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-2xl border border-[var(--hairline)] min-h-[200px] bg-gradient-to-br from-[color-mix(in_oklab,var(--cyan-accent)_10%,var(--background))] to-[var(--surface)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 p-6 sm:p-8 flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 max-w-[200px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono-tech text-[9px] uppercase tracking-widest text-[var(--cyan-accent)]",
								children: "Up to 15% Off"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl sm:text-3xl font-bold text-foreground",
								children: "Buds Pro"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/category/audio",
								className: "inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold border border-[var(--hairline)] bg-background/70 backdrop-blur-sm text-foreground hover:bg-background transition-all",
								children: "Shop Now"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/product-headphones.jpg",
						alt: "Buds Pro",
						className: "w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover shadow-xl",
						loading: "lazy"
					})]
				})]
			})]
		})
	});
}
function ContinueExploringSection() {
	const suggestions = products.slice(0, 4);
	if (suggestions.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
		"data-no-batch": true,
		className: "px-4 sm:px-6 lg:px-10 py-4",
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: { duration: .45 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto rounded-3xl border border-[var(--hairline)] bg-[linear-gradient(135deg,var(--surface),var(--surface-2))] p-6 sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)]",
					children: "Continue exploring"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl sm:text-2xl font-semibold text-foreground",
					children: "Pick up where you left off"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline-flex rounded-full border border-[var(--hairline)] px-3 py-1 text-xs text-muted-foreground",
					children: "Built around your recent interests"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4",
				children: suggestions.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: `/product/${product.slug}`,
					className: "group rounded-2xl border border-[var(--hairline)] bg-background/70 p-4 transition-all hover:-translate-y-1 hover:border-[var(--emerald-accent)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-[5/4] overflow-hidden rounded-xl bg-[var(--surface-2)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image,
							alt: product.name,
							className: "size-full object-cover transition-transform duration-500 group-hover:scale-105",
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-foreground",
							children: product.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: product.category
						})]
					})]
				}, product.slug))
			})]
		})
	});
}
function SavedProductsSection() {
	const visibleProducts = useSavedProducts().slice(0, 3);
	const hasSavedProducts = visibleProducts.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
		"data-no-batch": true,
		className: "px-4 sm:px-6 lg:px-10 py-4",
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: { duration: .45 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto rounded-3xl border border-[var(--hairline)] bg-[var(--surface)]/70 p-6 sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
					children: "Saved for later"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl sm:text-2xl font-semibold text-foreground",
					children: hasSavedProducts ? "Keep an eye on these" : "Start building your shortlist"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wishlist",
					className: "text-sm font-medium text-[var(--emerald-accent)] inline-flex items-center gap-2",
					children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), hasSavedProducts ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
				children: visibleProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: `/product/${product.slug}`,
					className: "group flex items-center gap-3 rounded-2xl border border-[var(--hairline)] bg-background/70 p-3 transition-all hover:border-[var(--cyan-accent)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-16 shrink-0 overflow-hidden rounded-xl bg-[var(--surface-2)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image,
							alt: product.name,
							className: "size-full object-cover",
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-foreground",
						children: product.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: product.category
					})] })]
				}, product.slug))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-dashed border-[var(--hairline)] bg-background/60 p-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Save products from the catalog to keep your favorite picks in one place."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/collections",
					className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--emerald-accent)]",
					children: ["Explore products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			})]
		})
	});
}
function PopularProductsSection() {
	const scrollRef = (0, import_react.useRef)(null);
	const popular = products.filter((p) => p.isTrending || p.isBestSeller);
	const scroll = (dir) => {
		if (scrollRef.current) scrollRef.current.scrollBy({
			left: dir === "left" ? -300 : 300,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
		"data-no-batch": true,
		className: "px-4 sm:px-6 lg:px-10 py-8",
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: { duration: .5 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-xl sm:text-2xl font-bold text-foreground",
					children: ["Popular ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent-gradient",
						children: "Products"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Trending and best-selling across all categories"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scroll("left"),
						className: "p-2 rounded-full surface-card border border-[var(--hairline)] hover:bg-[var(--surface)] transition-all text-muted-foreground hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scroll("right"),
						className: "p-2 rounded-full surface-card border border-[var(--hairline)] hover:bg-[var(--surface)] transition-all text-muted-foreground hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollRef,
				className: "flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory",
				style: { scrollbarWidth: "none" },
				children: popular.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: `/product/${product.slug}`,
					className: "group shrink-0 w-52 sm:w-56 surface-card-2 rounded-2xl border border-[var(--hairline)] p-4 snap-start hover:shadow-xl transition-all space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square rounded-xl overflow-hidden bg-[var(--surface-2)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image,
							alt: product.name,
							className: "size-full object-cover group-hover:scale-105 transition-transform duration-500",
							loading: "lazy"
						}), product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-2 left-2 font-mono-tech text-[9px] uppercase tracking-wider bg-background/80 backdrop-blur-sm text-[var(--emerald-accent)] px-2 py-0.5 rounded-md border border-[var(--hairline)]",
							children: product.badge
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-foreground line-clamp-1",
								children: product.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground line-clamp-1",
								children: product.shortDescription
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-sm font-bold text-foreground",
									children: ["$", product.price]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-0.5 text-[10px] text-[var(--emerald-accent)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-current" }), product.rating]
								})]
							})
						]
					})]
				}, product.slug))
			})]
		})
	});
}
/**
* Modular recommendation engine scoring function.
* Scores products based on user onboarding preferences (categories, priorities,
* budget, usage, brands, current interests) and product signals (ratings, editor picks, trending).
*
* Gracefully falls back to trending/editor-picked products if preferences are incomplete.
*/
function getRecommendedProducts(prefs, allProducts) {
	if (!prefs || !prefs.interests || prefs.interests.length === 0) return allProducts.filter((p) => p.isEditorsPick || p.isBestSeller || p.isTrending).slice(0, 8);
	const scored = allProducts.map((product) => {
		let score = 0;
		const normalizedCategory = product.category.toLowerCase();
		if (prefs.interests.some((interest) => interest.toLowerCase() === normalizedCategory)) score += 25;
		const productText = `${product.name} ${product.shortDescription} ${product.category}`.toLowerCase();
		prefs.currentInterests.forEach((ci) => {
			const keyword = ci.toLowerCase().replace(/s$/, "");
			if (productText.includes(keyword)) score += 20;
		});
		if (prefs.preferredBrands.some((b) => b.toLowerCase() === product.brand.toLowerCase())) score += 15;
		prefs.usage.forEach((u) => {
			const usageLower = u.toLowerCase();
			if ((usageLower.includes("programming") || usageLower.includes("work") || usageLower.includes("creative")) && product.category === "Computing") score += 15;
			if (usageLower.includes("music") && product.category === "Audio") score += 15;
			if ((usageLower.includes("photo") || usageLower.includes("video")) && product.category === "Cameras") score += 15;
			if (usageLower.includes("gaming") && (product.category === "Gaming" || product.slug.includes("gaming"))) score += 15;
		});
		prefs.priorities.forEach((p) => {
			const priorityLower = p.toLowerCase();
			if (priorityLower.includes("value") && product.originalPrice && product.originalPrice > product.price) score += 10;
			if (priorityLower.includes("battery")) {
				if (product.specs.some((s) => s.label.toLowerCase().includes("battery"))) score += 10;
			}
			if (priorityLower.includes("performance") && (product.isEditorsPick || product.price > 500)) score += 10;
		});
		switch (prefs.budget) {
			case "Under $100":
				if (product.price <= 100) score += 20;
				break;
			case "$100–$300":
				if (product.price >= 100 && product.price <= 300) score += 20;
				break;
			case "$300–$700":
				if (product.price >= 300 && product.price <= 700) score += 20;
				break;
			case "$700–$1,500":
				if (product.price >= 700 && product.price <= 1500) score += 20;
				break;
			case "$1,500+":
				if (product.price >= 1500) score += 20;
				break;
			default:
				score += 10;
				break;
		}
		score += (product.rating || 4) * 2;
		if (product.isEditorsPick) score += 5;
		if (product.isBestSeller) score += 5;
		if (product.isTrending) score += 3;
		return {
			product,
			score
		};
	});
	scored.sort((a, b) => b.score - a.score);
	return scored.map((item) => item.product);
}
function PersonalizedRecommendations() {
	const sectionRef = (0, import_react.useRef)(null);
	const recommendedProducts = (0, import_react.useMemo)(() => {
		return getRecommendedProducts(getUserPreferences(), products).slice(0, 6);
	}, []);
	(0, import_react.useEffect)(() => {
		let cleanup;
		let isMounted = true;
		(async () => {
			const { gsap } = await import("../_libs/gsap.mjs").then((n) => n.i);
			const { ScrollTrigger } = await import("../_libs/gsap.mjs").then((n) => n.n);
			gsap.registerPlugin(ScrollTrigger);
			const section = sectionRef.current;
			if (!section || !isMounted) return;
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
			const anim = gsap.from(section.querySelectorAll(".rec-card"), {
				opacity: 0,
				y: 24,
				stagger: .08,
				duration: .6,
				ease: "power3.out",
				scrollTrigger: {
					trigger: section,
					start: "top 80%",
					once: true
				}
			});
			cleanup = () => {
				anim.scrollTrigger?.kill();
				anim.kill();
			};
		})();
		return () => {
			isMounted = false;
			cleanup?.();
		};
	}, []);
	if (recommendedProducts.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "recommendations-section",
		ref: sectionRef,
		"data-no-batch": true,
		className: "px-4 sm:px-6 lg:px-10 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto space-y-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					duration: .5,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
					children: "Recommended for you"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground",
					children: "Discover what deserves your attention"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground",
					children: ["Fresh editorial picks ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",
				children: recommendedProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rec-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product })
				}, product.slug))
			})]
		})
	});
}
var step1Categories = [
	{
		id: "Computing",
		label: "Computing",
		icon: Laptop
	},
	{
		id: "Audio",
		label: "Audio",
		icon: Headphones
	},
	{
		id: "Mobile",
		label: "Mobile",
		icon: Smartphone
	},
	{
		id: "Wearables",
		label: "Wearables",
		icon: Watch
	},
	{
		id: "Cameras",
		label: "Cameras",
		icon: Camera
	},
	{
		id: "Smart Home",
		label: "Smart Home",
		icon: House
	},
	{
		id: "Gaming",
		label: "Gaming",
		icon: Gamepad2
	},
	{
		id: "Workspace",
		label: "Workspace",
		icon: Briefcase
	}
];
var step2Priorities = [
	{
		id: "Performance",
		label: "Performance",
		icon: Cpu
	},
	{
		id: "Design",
		label: "Design",
		icon: Layers
	},
	{
		id: "Value for money",
		label: "Value for money",
		icon: ShieldCheck
	},
	{
		id: "Battery life",
		label: "Battery life",
		icon: Battery
	},
	{
		id: "Camera quality",
		label: "Camera quality",
		icon: Camera
	},
	{
		id: "Audio quality",
		label: "Audio quality",
		icon: Headphones
	},
	{
		id: "Portability",
		label: "Portability",
		icon: Compass
	},
	{
		id: "Durability",
		label: "Durability",
		icon: ShieldCheck
	},
	{
		id: "Innovation",
		label: "Innovation",
		icon: Zap
	},
	{
		id: "Premium experience",
		label: "Premium experience",
		icon: Award
	}
];
var step3Usages = [
	"Work & Productivity",
	"Creative Work",
	"Programming & Development",
	"Content Creation",
	"Gaming",
	"Music & Audio",
	"Photography & Video",
	"Study & Learning",
	"Everyday Use"
];
var step3Budgets = [
	"Under $100",
	"$100–$300",
	"$300–$700",
	"$700–$1,500",
	"$1,500+",
	"No preference"
];
var step4Brands = [
	"Apple",
	"Samsung",
	"Sony",
	"Dell",
	"Lenovo",
	"ASUS",
	"Google",
	"Bose",
	"JBL",
	"Canon",
	"Nikon",
	"No preference"
];
var step4Exploration = [
	"MacBooks",
	"Windows Laptops",
	"Wireless Earbuds",
	"Headphones",
	"Smartphones",
	"Smartwatches",
	"Cameras",
	"Gaming Laptops",
	"Monitors",
	"Mechanical Keyboards"
];
function PersonalizationOnboarding({ onComplete, initialPreferences }) {
	const [step, setStep] = (0, import_react.useState)(1);
	const [selectedInterests, setSelectedInterests] = (0, import_react.useState)(initialPreferences?.interests || []);
	const [selectedPriorities, setSelectedPriorities] = (0, import_react.useState)(initialPreferences?.priorities || []);
	const [selectedUsage, setSelectedUsage] = (0, import_react.useState)(initialPreferences?.usage || []);
	const [selectedBudget, setSelectedBudget] = (0, import_react.useState)(initialPreferences?.budget || "No preference");
	const [selectedBrands, setSelectedBrands] = (0, import_react.useState)(initialPreferences?.preferredBrands || []);
	const [selectedExploration, setSelectedExploration] = (0, import_react.useState)(initialPreferences?.currentInterests || []);
	const containerRef = (0, import_react.useRef)(null);
	const toggleSelection = (list, setList, item) => {
		if (list.includes(item)) setList(list.filter((i) => i !== item));
		else setList([...list, item]);
	};
	const handleFinish = () => {
		saveUserPreferences({
			onboardingCompleted: true,
			interests: selectedInterests.length > 0 ? selectedInterests : ["Computing", "Audio"],
			priorities: selectedPriorities.length > 0 ? selectedPriorities : ["Performance", "Design"],
			usage: selectedUsage.length > 0 ? selectedUsage : ["Everyday Use"],
			budget: selectedBudget,
			preferredBrands: selectedBrands,
			currentInterests: selectedExploration.length > 0 ? selectedExploration : ["Laptops", "Headphones"]
		});
		setStep(5);
	};
	const handleFinalExplore = () => {
		onComplete(saveUserPreferences({ onboardingCompleted: true }));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-2xl px-4 py-8 overflow-y-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-30 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-3xl surface-card-2 border border-[var(--hairline)] rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden my-auto z-10",
				children: [step <= 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between pb-6 border-b border-[var(--hairline)] mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-7 rounded-lg flex items-center justify-center font-display text-xs font-bold text-[oklch(0.13_0.03_270)]",
							style: { background: "var(--gradient-accent)" },
							children: "Æ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-sm font-semibold tracking-tight text-foreground",
							children: ["genCART", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--emerald-accent)] text-[10px] align-top ml-0.5",
								children: "®"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono-tech text-xs uppercase tracking-widest text-[var(--emerald-accent)]",
							children: [
								"0",
								step,
								" / 04"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-24 h-1.5 rounded-full bg-[var(--surface-2)] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-gradient-to-r from-[var(--emerald-accent)] to-[var(--cyan-accent)] transition-all duration-500 ease-out",
								style: { width: `${step / 4 * 100}%` }
							})
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
					mode: "wait",
					children: [
						step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: 20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							exit: {
								opacity: 0,
								x: -20
							},
							transition: { duration: .3 },
							className: "space-y-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground",
										children: "What are you interested in?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Choose the worlds you'd like to explore. Select all that apply."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 sm:grid-cols-4 gap-3.5",
									children: step1Categories.map((cat) => {
										const Icon = cat.icon;
										const isSelected = selectedInterests.includes(cat.id);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => toggleSelection(selectedInterests, setSelectedInterests, cat.id),
											className: `p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between aspect-square group ${isSelected ? "border-[var(--emerald-accent)] bg-[var(--emerald-accent)]/10 shadow-lg" : "border-[var(--hairline)] bg-[var(--surface)] hover:bg-[var(--surface-2)]"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between items-start w-full",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `size-6 transition-colors ${isSelected ? "text-[var(--emerald-accent)]" : "text-muted-foreground group-hover:text-foreground"}` }), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "size-5 rounded-full bg-[var(--emerald-accent)] text-background flex items-center justify-center",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 stroke-[3]" })
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-sm font-semibold text-foreground",
												children: cat.label
											})]
										}, cat.id);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-end pt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setStep(2),
										className: "btn-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold",
										children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})
								})
							]
						}, "step1"),
						step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: 20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							exit: {
								opacity: 0,
								x: -20
							},
							transition: { duration: .3 },
							className: "space-y-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground",
										children: "What matters most to you?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Choose the qualities you value most (3–5 recommended)."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 sm:grid-cols-5 gap-3",
									children: step2Priorities.map((item) => {
										const Icon = item.icon;
										const isSelected = selectedPriorities.includes(item.id);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => toggleSelection(selectedPriorities, setSelectedPriorities, item.id),
											className: `p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between min-h-[96px] group ${isSelected ? "border-[var(--emerald-accent)] bg-[var(--emerald-accent)]/10" : "border-[var(--hairline)] bg-[var(--surface)] hover:bg-[var(--surface-2)]"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between items-start w-full",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `size-4 ${isSelected ? "text-[var(--emerald-accent)]" : "text-muted-foreground group-hover:text-foreground"}` }), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-[var(--emerald-accent)]" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-xs font-semibold text-foreground leading-snug",
												children: item.label
											})]
										}, item.id);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setStep(1),
										className: "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setStep(3),
										className: "btn-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold",
										children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})]
								})
							]
						}, "step2"),
						step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: 20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							exit: {
								opacity: 0,
								x: -20
							},
							transition: { duration: .3 },
							className: "space-y-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground",
										children: "Usage & Budget"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Tell us how you intend to use your tech and your typical budget range."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "font-mono-tech text-xs uppercase tracking-wider text-[var(--emerald-accent)]",
										children: "How do you use your tech?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: step3Usages.map((use) => {
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => toggleSelection(selectedUsage, setSelectedUsage, use),
												className: `px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${selectedUsage.includes(use) ? "border-[var(--emerald-accent)] bg-[var(--emerald-accent)]/15 text-[var(--emerald-accent)]" : "border-[var(--hairline)] bg-[var(--surface)] text-foreground/80 hover:text-foreground hover:bg-[var(--surface-2)]"}`,
												children: use
											}, use);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "font-mono-tech text-xs uppercase tracking-wider text-[var(--cyan-accent)]",
										children: "What's your typical budget?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5",
										children: step3Budgets.map((b) => {
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setSelectedBudget(b),
												className: `p-3 rounded-xl border text-center transition-all text-xs font-semibold ${selectedBudget === b ? "border-[var(--cyan-accent)] bg-[var(--cyan-accent)]/15 text-[var(--cyan-accent)]" : "border-[var(--hairline)] bg-[var(--surface)] text-foreground/80 hover:text-foreground hover:bg-[var(--surface-2)]"}`,
												children: b
											}, b);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setStep(2),
										className: "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setStep(4),
										className: "btn-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold",
										children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})]
								})
							]
						}, "step3"),
						step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: 20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							exit: {
								opacity: 0,
								x: -20
							},
							transition: { duration: .3 },
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground",
										children: "Brands & First Exploration"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Choose your favorite brands and what you'd like to explore first."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "font-mono-tech text-xs uppercase tracking-wider text-[var(--emerald-accent)]",
											children: "Any brands you prefer? (Optional)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-muted-foreground",
											children: "Optional"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: step4Brands.map((b) => {
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => toggleSelection(selectedBrands, setSelectedBrands, b),
												className: `px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${selectedBrands.includes(b) ? "border-[var(--emerald-accent)] bg-[var(--emerald-accent)]/15 text-[var(--emerald-accent)]" : "border-[var(--hairline)] bg-[var(--surface)] text-foreground/80 hover:text-foreground"}`,
												children: b
											}, b);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "font-mono-tech text-xs uppercase tracking-wider text-[var(--cyan-accent)]",
										children: "What would you like to explore first?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: step4Exploration.map((item) => {
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => toggleSelection(selectedExploration, setSelectedExploration, item),
												className: `px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${selectedExploration.includes(item) ? "border-[var(--cyan-accent)] bg-[var(--cyan-accent)]/15 text-[var(--cyan-accent)]" : "border-[var(--hairline)] bg-[var(--surface)] text-foreground/80 hover:text-foreground"}`,
												children: item
											}, item);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setStep(3),
										className: "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: handleFinish,
										className: "btn-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold",
										children: ["Finish Setup ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" })]
									})]
								})
							]
						}, "step4"),
						step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								scale: .95
							},
							animate: {
								opacity: 1,
								scale: 1
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
							className: "py-12 text-center space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex p-4 rounded-3xl bg-[var(--emerald-accent)]/15 text-[var(--emerald-accent)] border border-[var(--emerald-accent)]/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-10" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 max-w-md mx-auto",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-4xl font-bold tracking-tight text-foreground",
										children: "You're all set."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-sm leading-relaxed",
										children: "Your personalized genCART product discovery workspace is ready."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: handleFinalExplore,
										className: "btn-accent inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold shadow-xl",
										children: ["Explore genCART ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})
								})
							]
						}, "step5")
					]
				})]
			})
		]
	});
}
function DashboardPage() {
	const [prefs, setPrefs] = (0, import_react.useState)(null);
	const [showOnboarding, setShowOnboarding] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const current = getUserPreferences();
		setPrefs(current);
		if (!current.onboardingCompleted) setShowOnboarding(true);
	}, []);
	const handleOnboardingComplete = (updatedPrefs) => {
		setPrefs(updatedPrefs);
		setShowOnboarding(false);
	};
	const computingProducts = products.filter((p) => p.categorySlug === "computing");
	const audioProducts = products.filter((p) => p.categorySlug === "audio");
	const mobileWearableProducts = products.filter((p) => p.categorySlug === "mobile" || p.categorySlug === "wearables" || p.categorySlug === "cameras");
	if (prefs === null) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground relative",
		children: [showOnboarding && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonalizationOnboarding, {
			onComplete: handleOnboardingComplete,
			initialPreferences: prefs
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "relative space-y-2 pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardHeroSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonalizedRecommendations, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinueExploringSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DealsAndOffersSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryBrowserSection, {
					title: "Computing & productivity",
					categorySlug: "computing",
					accentColor: "var(--emerald-accent)",
					categoryProducts: computingProducts
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryBrowserSection, {
					title: "Audio & sound",
					categorySlug: "audio",
					accentColor: "var(--cyan-accent)",
					categoryProducts: audioProducts
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromotionalBannersSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryBrowserSection, {
					title: "Consumer electronics & gadgets",
					categorySlug: "mobile",
					accentColor: "var(--emerald-accent)",
					categoryProducts: mobileWearableProducts
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavedProductsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopularProductsSection, {})
			]
		})]
	});
}
//#endregion
export { DashboardPage as component };
