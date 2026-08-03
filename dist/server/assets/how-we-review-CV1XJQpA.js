import { c as SplitTextReveal } from "./motion-CSNJjo3r.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Award, Heart, ShieldCheck } from "lucide-react";
//#region src/routes/how-we-review.tsx?tsr-split=component
function HowWeReviewPage() {
	return /* @__PURE__ */ jsxs("article", {
		className: "max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-20 space-y-12",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
						children: "Methodology"
					}),
					/* @__PURE__ */ jsx(SplitTextReveal, {
						text: "How We Review",
						className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xl text-muted-foreground leading-relaxed",
						children: "Behind every score lies 30+ hours of standardized benchmarks and testing. We evaluate each product based on real-world metrics, design details, and material durability."
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "surface-card p-8 md:p-10 rounded-3xl border border-[var(--hairline)] space-y-8",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "font-display text-2xl font-bold text-foreground",
					children: "Our 4-Step Pipeline"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-8",
					children: [
						{
							step: "01",
							title: "Procurement",
							desc: "We buy products directly from retail stores. No free review samples, no developer hardware sent directly from PR teams."
						},
						{
							step: "02",
							title: "Lab Testing",
							desc: "Every product is benchmarked against its competitors in controlled environments. We measure battery run time, temperature under load, and sound output."
						},
						{
							step: "03",
							title: "Daily Driving",
							desc: "A member of our editorial staff takes the product home as their primary daily device for a minimum of 21 days."
						},
						{
							step: "04",
							title: "Scoring & Review",
							desc: "Our review scoring is entirely mathematical. Individual categories are weighted to calculate the final genCART Rating."
						}
					].map((s) => /* @__PURE__ */ jsxs("div", {
						className: "space-y-2 relative pl-6 border-l border-[var(--emerald-accent)]",
						children: [
							/* @__PURE__ */ jsx("span", { className: "absolute -left-[5px] top-1 flex size-2 rounded-full bg-[var(--emerald-accent)]" }),
							/* @__PURE__ */ jsxs("div", {
								className: "text-xs font-mono-tech text-[var(--emerald-accent)] font-bold",
								children: [s.step, " / Phase"]
							}),
							/* @__PURE__ */ jsx("h4", {
								className: "font-display text-lg font-bold",
								children: s.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground leading-relaxed",
								children: s.desc
							})
						]
					}, s.step))
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
				children: [
					{
						icon: ShieldCheck,
						title: "Zero Ads",
						desc: "No banners, no sponsored reviews, no corporate interference."
					},
					{
						icon: Heart,
						title: "Lab Verified",
						desc: "Every metric shown is backed by oscilloscope or meter logs."
					},
					{
						icon: Award,
						title: "Long-Loop Logs",
						desc: "We track products over months to report software stability."
					}
				].map((item, idx) => /* @__PURE__ */ jsxs("div", {
					className: "surface-card-2 p-6 rounded-2xl border border-[var(--hairline)] flex flex-col justify-between space-y-4",
					children: [/* @__PURE__ */ jsx(item.icon, { className: "size-6 text-[var(--emerald-accent)]" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h5", {
						className: "font-display font-semibold text-sm",
						children: item.title
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground mt-1",
						children: item.desc
					})] })]
				}, idx))
			})
		]
	});
}
//#endregion
export { HowWeReviewPage as component };
