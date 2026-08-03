import { c as SplitTextReveal, l as StackingCards, n as HandUnderline, t as AnimatedCounter } from "./motion-CSNJjo3r.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/best-of-2026.tsx?tsr-split=component
var picks = [
	{
		tag: "Best Laptop",
		title: "genCART Laptop Air",
		subtitle: "Engineered as one. Edge-to-edge OLED, 22h battery.",
		body: "We tested 14 laptops in the $800-1200 bracket. The Air wins on every axis we measure — performance per watt, display calibration accuracy, battery endurance, and build precision. The only laptop in the bracket whose successor we wouldn't immediately replace it with.",
		cta: "Read review →"
	},
	{
		tag: "Best Headphones",
		title: "genCART Buds Pro",
		subtitle: "Reference-grade tuning, ANC that disappears.",
		body: "Compared head-to-head against six flagship in-ear models. The Buds Pro produce the flattest frequency response in the category and the only ANC implementation that doesn't add audible pressure. Battery life landed at 9.4h with ANC on — best in class.",
		cta: "See specs →"
	},
	{
		tag: "Best Wearable",
		title: "genCART Watch X",
		subtitle: "Quiet intelligence, all-day battery.",
		body: "Most smartwatches are notification machines. The Watch X is a vitals instrument that happens to be a watch. The 72-hour battery and AMOLED always-on are quietly the best in the category.",
		cta: "Explore →"
	},
	{
		tag: "Best Phone",
		title: "genCART Phone 15",
		subtitle: "Flagship signal — without flagship friction.",
		body: "Camera processing has been the deciding factor for the last three flagship cycles. The Phone 15 ships the only computational pipeline that we couldn't tell apart from a mirrorless body under standard lab conditions.",
		cta: "Read review →"
	},
	{
		tag: "Best Value",
		title: "genCART Pad Pro",
		subtitle: "Pro tablet at consumer money.",
		body: "$649 puts this in mid-tier territory, but everything from the laminated 120Hz display to the M-class chip is firmly pro-tier. The cheapest serious tablet we'd actually recommend to a working creator.",
		cta: "Compare →"
	}
];
function BestOf() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid opacity-30" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative max-w-6xl mx-auto",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3",
							children: "Annual Awards · Vol. 06"
						}),
						/* @__PURE__ */ jsx(SplitTextReveal, {
							text: "Best of 2026",
							className: "font-display text-6xl lg:text-8xl font-bold tracking-tight"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-6 text-xl text-muted-foreground max-w-xl",
							children: [
								"Five categories. ",
								/* @__PURE__ */ jsx(HandUnderline, { children: "One winner each." }),
								" Determined by long-loop testing, not unboxings."
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-6",
							children: [
								{
									n: 1248,
									s: "+",
									l: "Products Tested"
								},
								{
									n: 14,
									s: "",
									l: "Categories"
								},
								{
									n: 86,
									s: "",
									l: "Test Weeks"
								},
								{
									n: 5,
									s: "",
									l: "Winners"
								}
							].map((s) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "font-display text-4xl font-bold text-accent-gradient",
								children: /* @__PURE__ */ jsx(AnimatedCounter, {
									to: s.n,
									suffix: s.s
								})
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: s.l
							})] }, s.l))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-5xl mx-auto",
				children: /* @__PURE__ */ jsx(StackingCards, { items: picks })
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-4xl mx-auto text-center",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl lg:text-4xl font-semibold mb-4",
						children: "Want the runner-ups?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground mb-8",
						children: "Every category has 3 honorable mentions and 2 hard passes. Read the full reports."
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/reviews/macbook-pro",
						className: "btn-accent rounded-full px-7 py-3.5 text-sm font-semibold inline-flex",
						children: "Open the full report →"
					})
				]
			})
		})
	] });
}
//#endregion
export { BestOf as component };
