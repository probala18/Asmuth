import { c as SplitTextReveal } from "./motion-CSNJjo3r.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/about.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsxs("article", {
		className: "max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-20 space-y-12",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
						children: "The Mission"
					}),
					/* @__PURE__ */ jsx(SplitTextReveal, {
						text: "About genCART",
						className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xl text-muted-foreground leading-relaxed",
						children: "We believe in physical tools designed for focus. We build independent editorial standardizations to test hardware, separate signal from noise, and help creators make informed choices."
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "aspect-[16/7] rounded-3xl overflow-hidden bg-[var(--surface-2)] border border-[var(--hairline)]",
				children: /* @__PURE__ */ jsx("img", {
					src: "/assets/product-laptop.jpg",
					alt: "genCART Workspace",
					className: "size-full object-cover"
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-10 pt-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold",
						children: "100% Independent"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground leading-relaxed",
						children: "We buy every unit we test off the shelf, using standard retail channels. We do not accept sponsored content, pre-screened review units, or affiliate fees that compromise our testing standards. Our editorial judgments are entirely our own."
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold",
						children: "Laboratory Benchmarks"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground leading-relaxed",
						children: "We don't do unboxings. Every product reviewed goes through a standardized 3-week routine involving acoustic evaluation, thermal profiling under workload, screen calibration audits, and real-world battery endurance tests."
					})]
				})]
			})
		]
	});
}
//#endregion
export { AboutPage as component };
