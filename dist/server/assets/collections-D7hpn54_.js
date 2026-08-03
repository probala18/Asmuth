import { c as SplitTextReveal, n as HandUnderline, u as TiltCard } from "./motion-CSNJjo3r.js";
import { t as product_laptop_default } from "./product-laptop-Dodj_pHU.js";
import { n as product_headphones_default, t as product_watch_default } from "./product-watch-DoQQwfvH.js";
import { t as product_phone_default } from "./product-phone-By5mG-nQ.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
//#region src/routes/collections.tsx?tsr-split=component
var collections = [
	{
		title: "Creator Workstation",
		count: 8,
		body: "The full stack for video, design, and dev — from silicon to monitor calibration.",
		img: product_laptop_default,
		categorySlug: "computing"
	},
	{
		title: "Immersive Audio",
		count: 6,
		body: "Reference-grade headphones, spatial speakers, and the gear that makes them sing.",
		img: product_headphones_default,
		categorySlug: "audio"
	},
	{
		title: "Quiet Wearables",
		count: 5,
		body: "Vitals, focus, and time — beautifully resolved, never demanding.",
		img: product_watch_default,
		categorySlug: "wearables"
	},
	{
		title: "Pocket Flagships",
		count: 4,
		body: "The phones engineered as one. Silicon, software, and signal in perfect step.",
		img: product_phone_default,
		categorySlug: "mobile"
	},
	{
		title: "Ambient Smart Home",
		count: 9,
		body: "Automations that fade into the architecture instead of fighting for attention.",
		img: "/assets/product-hub.png",
		categorySlug: "smart-home"
	},
	{
		title: "Travel Light",
		count: 7,
		body: "The carry-on stack — thin laptops, fast chargers, sub-300g headphones.",
		img: "/assets/product-studio-monitor.png",
		categorySlug: "computing"
	}
];
function CollectionsPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("section", {
		className: "relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }), /* @__PURE__ */ jsxs("div", {
			className: "relative max-w-6xl mx-auto",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3",
					children: "Editor curated · 2026"
				}),
				/* @__PURE__ */ jsx(SplitTextReveal, {
					text: "Collections, deeply edited",
					className: "font-display text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-6 text-muted-foreground max-w-xl",
					children: [
						"Not a shop. A library of ",
						/* @__PURE__ */ jsx(HandUnderline, { children: "working setups" }),
						" — every product, every adapter, every reason behind it."
					]
				})
			]
		})]
	}), /* @__PURE__ */ jsx("section", {
		className: "px-6 lg:px-10 py-16",
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
			children: collections.map((c) => /* @__PURE__ */ jsxs(TiltCard, {
				className: "surface-card overflow-hidden group",
				max: 6,
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative aspect-[4/3] overflow-hidden bg-[var(--surface-2)]",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: c.img,
							alt: c.title,
							loading: "lazy",
							decoding: "async",
							className: "size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" }),
						/* @__PURE__ */ jsxs("span", {
							className: "absolute top-4 left-4 font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] bg-background/60 backdrop-blur px-2 py-1 rounded",
							children: [c.count, " items"]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-xl font-semibold mb-2",
							children: c.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground mb-5 line-clamp-2",
							children: c.body
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: `/category/${c.categorySlug}`,
							className: "inline-flex items-center gap-2 text-sm font-semibold text-[var(--emerald-accent)] hover:gap-3 transition-all",
							children: ["View collection ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
						})
					]
				})]
			}, c.title))
		})
	})] });
}
//#endregion
export { CollectionsPage as component };
