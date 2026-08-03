import { c as SplitTextReveal, n as HandUnderline, u as TiltCard } from "./motion-CSNJjo3r.js";
import { t as product_laptop_default } from "./product-laptop-Dodj_pHU.js";
import { n as product_headphones_default, t as product_watch_default } from "./product-watch-DoQQwfvH.js";
import { t as product_phone_default } from "./product-phone-By5mG-nQ.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Flame, Tag, Timer } from "lucide-react";
//#region src/routes/deals.tsx?tsr-split=component
var deals = [
	{
		slug: "genCART-laptop-air",
		name: "genCART Laptop Air",
		img: product_laptop_default,
		was: 1199,
		now: 999,
		off: 17,
		hours: 4
	},
	{
		slug: "genCART-buds-pro",
		name: "genCART Buds Pro",
		img: product_headphones_default,
		was: 159,
		now: 129,
		off: 19,
		hours: 8
	},
	{
		slug: "genCART-watch-x",
		name: "genCART Watch X",
		img: product_watch_default,
		was: 249,
		now: 199,
		off: 20,
		hours: 12
	},
	{
		slug: "genCART-phone-15",
		name: "genCART Phone 15",
		img: product_phone_default,
		was: 899,
		now: 799,
		off: 11,
		hours: 6
	},
	{
		slug: "genCART-pad-pro",
		name: "genCART Pad Pro",
		img: "/assets/product-tablet.png",
		was: 749,
		now: 649,
		off: 13,
		hours: 20
	},
	{
		slug: "genCART-lens-x",
		name: "genCART Lens X",
		img: "/assets/product-camera.png",
		was: 1499,
		now: 1299,
		off: 13,
		hours: 16
	}
];
function Countdown({ hours }) {
	const [timeLeft, setTimeLeft] = useState("");
	useEffect(() => {
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
	return /* @__PURE__ */ jsx("span", {
		className: "font-mono-tech tabular-nums",
		children: timeLeft
	});
}
function DealsPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("section", {
		className: "relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }), /* @__PURE__ */ jsxs("div", {
			className: "relative max-w-6xl mx-auto",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 mb-6",
					children: [/* @__PURE__ */ jsx(Flame, { className: "size-4 text-[var(--emerald-accent)]" }), /* @__PURE__ */ jsx("span", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
						children: "Limited Drops"
					})]
				}),
				/* @__PURE__ */ jsx(SplitTextReveal, {
					text: "Editor-vetted deals",
					className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-6 text-muted-foreground max-w-xl",
					children: ["We don't list every discount — only the ones ", /* @__PURE__ */ jsx(HandUnderline, { children: "worth your inbox." })]
				})
			]
		})]
	}), /* @__PURE__ */ jsx("section", {
		className: "px-6 lg:px-10 py-16",
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
			children: deals.map((d) => /* @__PURE__ */ jsxs(TiltCard, {
				className: "surface-card overflow-hidden group",
				max: 5,
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative aspect-[5/4] overflow-hidden bg-[var(--surface-2)]",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: d.img,
							alt: d.name,
							loading: "lazy",
							decoding: "async",
							className: "size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
						}),
						/* @__PURE__ */ jsxs("span", {
							className: "absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-bold font-mono-tech text-background",
							style: { background: "var(--gradient-accent)" },
							children: [
								"-",
								d.off,
								"%"
							]
						}),
						/* @__PURE__ */ jsxs("span", {
							className: "absolute top-3 right-3 flex items-center gap-1 rounded-full bg-background/70 backdrop-blur px-2.5 py-1 text-[10px] font-mono-tech text-[var(--cyan-accent)]",
							children: [/* @__PURE__ */ jsx(Timer, { className: "size-3 text-[var(--emerald-accent)]" }), /* @__PURE__ */ jsx(Countdown, { hours: d.hours })]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "p-5 space-y-2",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-lg font-semibold",
							children: d.name
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-baseline gap-3",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "font-display text-2xl font-bold text-accent-gradient",
								children: ["$", d.now]
							}), /* @__PURE__ */ jsxs("span", {
								className: "text-sm text-muted-foreground line-through",
								children: ["$", d.was]
							})]
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: `/product/${d.slug}`,
							className: "btn-ghost-glow w-full rounded-full py-2 text-xs font-semibold inline-flex items-center justify-center gap-2 mt-2",
							children: [/* @__PURE__ */ jsx(Tag, { className: "size-3" }), " Grab deal"]
						})
					]
				})]
			}, d.name))
		})
	})] });
}
//#endregion
export { DealsPage as component };
