import { c as SplitTextReveal, n as HandUnderline, s as ScrollProgressBar, u as TiltCard } from "./motion-CSNJjo3r.js";
import { t as product_laptop_default } from "./product-laptop-Dodj_pHU.js";
import { n as product_headphones_default, t as product_watch_default } from "./product-watch-DoQQwfvH.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Battery, Check, Cpu, Monitor, ShieldCheck, Star, Truck } from "lucide-react";
//#region src/routes/products.laptop-air.tsx?tsr-split=component
function ProductDetail() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative pt-32 pb-16 px-6 lg:px-10 overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-60" }), /* @__PURE__ */ jsxs("div", {
				className: "relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center",
				children: [/* @__PURE__ */ jsxs(TiltCard, {
					className: "relative aspect-square rounded-3xl overflow-hidden surface-card",
					max: 4,
					children: [/* @__PURE__ */ jsx("img", {
						src: product_laptop_default,
						alt: "genCART Laptop Air",
						className: "size-full object-cover"
					}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-50" })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
							children: "Computing · 2026 Edition"
						}),
						/* @__PURE__ */ jsx(SplitTextReveal, {
							text: "genCART Laptop Air",
							className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-muted-foreground text-lg max-w-md",
							children: ["M-class silicon. Edge-to-edge OLED. 22-hour battery. ", /* @__PURE__ */ jsx(HandUnderline, { children: "Engineered as one." })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex items-center gap-1 text-[var(--emerald-accent)]",
								children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "size-4 fill-current" }, i))
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm text-muted-foreground",
								children: "4.9 · 1,284 reviews"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "font-display text-5xl font-bold text-accent-gradient",
							children: "$999"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex gap-3 pt-2",
							children: [/* @__PURE__ */ jsx("button", {
								className: "btn-accent rounded-full px-7 py-3.5 text-sm font-semibold",
								children: "Add to Cart"
							}), /* @__PURE__ */ jsx(Link, {
								to: "/reviews/macbook-pro",
								className: "btn-ghost-glow rounded-full px-7 py-3.5 text-sm font-semibold",
								children: "Read Review"
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-3 gap-4 pt-6 border-t border-[var(--hairline)]",
							children: [
								{
									Icon: ShieldCheck,
									label: "Lifetime Warranty"
								},
								{
									Icon: Truck,
									label: "Free Shipping"
								},
								{
									Icon: Check,
									label: "30-Day Returns"
								}
							].map((b) => /* @__PURE__ */ jsxs("div", {
								className: "text-xs text-muted-foreground flex items-center gap-2",
								children: [
									/* @__PURE__ */ jsx(b.Icon, { className: "size-4 text-[var(--emerald-accent)]" }),
									" ",
									b.label
								]
							}, b.label))
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-5xl mx-auto surface-card-2 p-10 lg:p-14",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3",
						children: "Performance"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl lg:text-4xl font-semibold mb-10 max-w-xl",
						children: "Benchmarked against last year's flagship."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8",
						children: [
							/* @__PURE__ */ jsx(ScrollProgressBar, {
								label: "CPU Performance",
								value: 95
							}),
							/* @__PURE__ */ jsx(ScrollProgressBar, {
								label: "Battery Life",
								value: 92
							}),
							/* @__PURE__ */ jsx(ScrollProgressBar, {
								label: "Display Quality",
								value: 98
							}),
							/* @__PURE__ */ jsx(ScrollProgressBar, {
								label: "Build Quality",
								value: 96
							}),
							/* @__PURE__ */ jsx(ScrollProgressBar, {
								label: "Thermal Design",
								value: 88
							}),
							/* @__PURE__ */ jsx(ScrollProgressBar, {
								label: "Value Score",
								value: 90
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-5xl mx-auto",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-semibold mb-8",
					children: "Specifications"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-4",
					children: [
						{
							Icon: Cpu,
							k: "Chip",
							v: "genCART M-class · 12 core"
						},
						{
							Icon: Monitor,
							k: "Display",
							v: "14.2\" OLED · 120Hz"
						},
						{
							Icon: Battery,
							k: "Battery",
							v: "22 hours · all-day"
						}
					].map((s) => /* @__PURE__ */ jsxs("div", {
						className: "surface-card p-6",
						children: [
							/* @__PURE__ */ jsx(s.Icon, { className: "size-5 text-[var(--emerald-accent)] mb-3" }),
							/* @__PURE__ */ jsx("p", {
								className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1",
								children: s.k
							}),
							/* @__PURE__ */ jsx("p", {
								className: "font-display text-lg",
								children: s.v
							})
						]
					}, s.k))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-semibold mb-8",
					children: "You might also like"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: [
						{
							name: "genCART Buds Pro",
							img: product_headphones_default,
							price: "$129"
						},
						{
							name: "genCART Watch X",
							img: product_watch_default,
							price: "$199"
						},
						{
							name: "genCART Pad Pro",
							img: product_laptop_default,
							price: "$649"
						}
					].map((p) => /* @__PURE__ */ jsxs(TiltCard, {
						className: "surface-card overflow-hidden",
						children: [/* @__PURE__ */ jsx("div", {
							className: "aspect-[5/4] overflow-hidden",
							children: /* @__PURE__ */ jsx("img", {
								src: p.img,
								alt: p.name,
								loading: "lazy",
								className: "size-full object-cover"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-5 flex justify-between items-center",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-display text-lg font-semibold",
								children: p.name
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[var(--emerald-accent)] font-display",
								children: p.price
							})]
						})]
					}, p.name))
				})]
			})
		})
	] });
}
//#endregion
export { ProductDetail as component };
