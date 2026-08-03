import { c as SplitTextReveal, n as HandUnderline, s as ScrollProgressBar, u as TiltCard } from "./motion-CSNJjo3r.js";
import { t as product_laptop_default } from "./product-laptop-Dodj_pHU.js";
import { t as product_phone_default } from "./product-phone-By5mG-nQ.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Award, Check, Star, X } from "lucide-react";
//#region src/routes/reviews.macbook-pro.tsx?tsr-split=component
var pros = [
	"M3 Max chip is in a class of its own",
	"OLED-grade mini-LED, peak 1600 nits",
	"All-day battery — actually 18+ hours",
	"Studio-grade speakers"
];
var cons = [
	"Premium tier pricing",
	"No touchscreen",
	"Limited port flexibility for legacy gear"
];
function ReviewPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative pt-32 pb-16 px-6 lg:px-10 overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-60" }), /* @__PURE__ */ jsxs("div", {
				className: "relative max-w-6xl mx-auto",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ jsx(Award, { className: "size-4 text-[var(--emerald-accent)]" }), /* @__PURE__ */ jsx("span", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
							children: "Editor's Choice · Expert Review"
						})]
					}),
					/* @__PURE__ */ jsx(SplitTextReveal, {
						text: "MacBook Pro M3 Max",
						className: "font-display text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl"
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-6 text-xl text-muted-foreground max-w-2xl",
						children: [
							"Three weeks of real-life testing. The verdict: the ",
							/* @__PURE__ */ jsx(HandUnderline, { children: "most complete pro laptop" }),
							" Apple has ever shipped."
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-6 mt-8",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-display text-6xl font-bold text-accent-gradient",
							children: "9.4"
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "flex items-center gap-1 text-[var(--emerald-accent)]",
							children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "size-4 fill-current" }, i))
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: "By Editorial · 14 min read"
						})] })]
					})
				]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-12",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-6xl mx-auto aspect-[16/8] rounded-3xl overflow-hidden surface-card",
				children: /* @__PURE__ */ jsx("img", {
					src: product_laptop_default,
					alt: "MacBook Pro M3 Max",
					className: "size-full object-cover"
				})
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-5xl mx-auto surface-card-2 p-10 lg:p-14",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3",
						children: "Editorial Score"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl lg:text-4xl font-semibold mb-10",
						children: "Tested against the 2025 flagship."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8",
						children: [
							/* @__PURE__ */ jsx(ScrollProgressBar, {
								label: "Performance",
								value: 95
							}),
							/* @__PURE__ */ jsx(ScrollProgressBar, {
								label: "Battery",
								value: 90
							}),
							/* @__PURE__ */ jsx(ScrollProgressBar, {
								label: "Display",
								value: 98
							}),
							/* @__PURE__ */ jsx(ScrollProgressBar, {
								label: "Camera (FaceTime)",
								value: 88
							}),
							/* @__PURE__ */ jsx(ScrollProgressBar, {
								label: "Audio",
								value: 94
							}),
							/* @__PURE__ */ jsx(ScrollProgressBar, {
								label: "Value",
								value: 82
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "surface-card-2 p-10",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-4",
						children: "What we loved"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-3",
						children: pros.map((p) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-3 text-sm",
							children: [/* @__PURE__ */ jsx(Check, { className: "size-4 text-[var(--emerald-accent)] mt-0.5 shrink-0" }), p]
						}, p))
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "surface-card-2 p-10",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-accent)] mb-4",
						children: "Where it stalls"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-3",
						children: cons.map((p) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-3 text-sm",
							children: [/* @__PURE__ */ jsx(X, { className: "size-4 text-[var(--cyan-accent)] mt-0.5 shrink-0" }), p]
						}, p))
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-5xl mx-auto",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl lg:text-4xl font-semibold mb-8",
					children: "vs. Dell XPS 16"
				}), /* @__PURE__ */ jsx("div", {
					className: "surface-card-2 overflow-hidden",
					children: [
						{
							spec: "Chip",
							a: "M3 Max · 16 core",
							b: "Intel Ultra 9",
							winner: "a"
						},
						{
							spec: "Display",
							a: "16\" mini-LED 120Hz",
							b: "16.3\" OLED 90Hz",
							winner: "a"
						},
						{
							spec: "Battery",
							a: "22h video",
							b: "12h video",
							winner: "a"
						},
						{
							spec: "Starting Price",
							a: "$2,499",
							b: "$1,899",
							winner: "b"
						},
						{
							spec: "Weight",
							a: "2.16 kg",
							b: "2.13 kg",
							winner: "b"
						},
						{
							spec: "Build",
							a: "Unibody aluminum",
							b: "CNC aluminum",
							winner: "a"
						}
					].map((row, i) => /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-[1fr_2fr_2fr] items-center px-6 py-4 border-t border-[var(--hairline)] first:border-t-0",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-xs font-mono-tech uppercase tracking-wider text-muted-foreground",
								children: row.spec
							}),
							/* @__PURE__ */ jsx("span", {
								className: `text-sm ${row.winner === "a" ? "text-[var(--emerald-accent)] font-semibold" : ""}`,
								children: row.a
							}),
							/* @__PURE__ */ jsx("span", {
								className: `text-sm ${row.winner === "b" ? "text-[var(--emerald-accent)] font-semibold" : ""}`,
								children: row.b
							})
						]
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-4xl mx-auto surface-card-2 p-10 lg:p-14 text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-4",
						children: "The verdict"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "font-display text-3xl lg:text-4xl leading-snug",
						children: "\"If you make a living on this machine — every dollar earns itself back.\""
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/products/laptop-air",
						className: "btn-accent inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold mt-8",
						children: "See Best Alternatives →"
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-semibold mb-8",
					children: "More reviews"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: [
						{
							t: "genCART Laptop Air",
							img: product_laptop_default
						},
						{
							t: "genCART Phone 15",
							img: product_phone_default
						},
						{
							t: "Dell XPS 16",
							img: product_laptop_default
						}
					].map((r) => /* @__PURE__ */ jsxs(TiltCard, {
						className: "surface-card overflow-hidden",
						children: [/* @__PURE__ */ jsx("div", {
							className: "aspect-[5/4]",
							children: /* @__PURE__ */ jsx("img", {
								src: r.img,
								alt: r.t,
								className: "size-full object-cover",
								loading: "lazy"
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "p-5",
							children: /* @__PURE__ */ jsx("h3", {
								className: "font-display text-lg",
								children: r.t
							})
						})]
					}, r.t))
				})]
			})
		})
	] });
}
//#endregion
export { ReviewPage as component };
