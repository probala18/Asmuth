import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/motion-CSNJjo3r.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Word-by-word reveal driven by GSAP ScrollTrigger when in view */
function SplitTextReveal({ text, className = "", as = "h1", delay = 0, stagger = .08 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const el = ref.current;
		if (!el) return;
		let cleanup;
		(async () => {
			const { gsap } = await import("../_libs/gsap.mjs").then((n) => n.i);
			const { ScrollTrigger } = await import("../_libs/gsap.mjs").then((n) => n.n);
			gsap.registerPlugin(ScrollTrigger);
			const words = el.querySelectorAll("[data-word] > span");
			gsap.set(words, {
				yPercent: 110,
				opacity: 0
			});
			const tween = gsap.to(words, {
				yPercent: 0,
				opacity: 1,
				duration: .9,
				ease: "expo.out",
				stagger,
				delay,
				scrollTrigger: {
					trigger: el,
					start: "top 85%",
					once: true
				}
			});
			cleanup = () => {
				tween.scrollTrigger?.kill();
				tween.kill();
			};
		})();
		return () => cleanup?.();
	}, [delay, stagger]);
	const words = text.split(" ");
	return (0, import_react.createElement)(as, {
		ref,
		className
	}, words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"data-word": true,
		className: "inline-block overflow-hidden align-bottom mr-[0.25em]",
		style: { verticalAlign: "bottom" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block",
			children: w
		})
	}, i)));
}
/** Hand-drawn underline SVG that draws on view */
function HandUnderline({ children, color }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const len = el.getTotalLength();
		el.style.strokeDasharray = `${len}`;
		el.style.strokeDashoffset = `${len}`;
		let cleanup;
		(async () => {
			const { gsap } = await import("../_libs/gsap.mjs").then((n) => n.i);
			const { ScrollTrigger } = await import("../_libs/gsap.mjs").then((n) => n.n);
			gsap.registerPlugin(ScrollTrigger);
			const t = gsap.to(el, {
				strokeDashoffset: 0,
				duration: 1.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					once: true
				}
			});
			cleanup = () => {
				t.scrollTrigger?.kill();
				t.kill();
			};
		})();
		return () => cleanup?.();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "hand-underline",
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 300 18",
			preserveAspectRatio: "none",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				ref,
				d: "M3 12 C 60 3, 130 18, 200 8 S 290 4, 297 10",
				fill: "none",
				stroke: color || "var(--emerald-accent)",
				strokeWidth: "2.5",
				strokeLinecap: "round"
			})
		})]
	});
}
/** Animated number counter when scrolled into view */
function AnimatedCounter({ to, duration = 2, suffix = "", prefix = "", className = "" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		let cleanup;
		(async () => {
			const { gsap } = await import("../_libs/gsap.mjs").then((n) => n.i);
			const { ScrollTrigger } = await import("../_libs/gsap.mjs").then((n) => n.n);
			gsap.registerPlugin(ScrollTrigger);
			const obj = { v: 0 };
			const t = gsap.to(obj, {
				v: to,
				duration,
				ease: "power3.out",
				onUpdate: () => {
					el.textContent = `${prefix}${Math.round(obj.v).toLocaleString()}${suffix}`;
				},
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					once: true
				}
			});
			cleanup = () => {
				t.scrollTrigger?.kill();
				t.kill();
			};
		})();
		return () => cleanup?.();
	}, [
		to,
		duration,
		suffix,
		prefix
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: [
			prefix,
			"0",
			suffix
		]
	});
}
/** 3D tilt on mouse move */
function TiltCard({ children, className = "", max = 8 }) {
	const ref = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `tilt-card ${className}`,
		onMouseMove: (e) => {
			const el = ref.current;
			if (!el) return;
			const r = el.getBoundingClientRect();
			const px = (e.clientX - r.left) / r.width - .5;
			const py = (e.clientY - r.top) / r.height - .5;
			el.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg) translateZ(0)`;
		},
		onMouseLeave: () => {
			const el = ref.current;
			if (!el) return;
			el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
		},
		children
	});
}
/** Scroll-triggered progress bar */
function ScrollProgressBar({ label, value }) {
	const ref = (0, import_react.useRef)(null);
	const numRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		const num = numRef.current;
		if (!el || !num) return;
		let cleanup;
		(async () => {
			const { gsap } = await import("../_libs/gsap.mjs").then((n) => n.i);
			const { ScrollTrigger } = await import("../_libs/gsap.mjs").then((n) => n.n);
			gsap.registerPlugin(ScrollTrigger);
			const obj = { v: 0 };
			const tl = gsap.timeline({ scrollTrigger: {
				trigger: el,
				start: "top 85%",
				once: true
			} });
			tl.to(el, {
				width: `${value}%`,
				duration: 1.4,
				ease: "power3.out"
			}, 0);
			tl.to(obj, {
				v: value,
				duration: 1.4,
				ease: "power3.out",
				onUpdate: () => {
					num.textContent = `${Math.round(obj.v)}%`;
				}
			}, 0);
			cleanup = () => {
				tl.scrollTrigger?.kill();
				tl.kill();
			};
		})();
		return () => cleanup?.();
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between mb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			ref: numRef,
			className: "font-mono-tech text-xs text-[var(--emerald-accent)]",
			children: "0%"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-1.5 rounded-full bg-[var(--surface-2)] overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: "h-full rounded-full",
			style: {
				width: 0,
				background: "var(--gradient-accent)"
			}
		})
	})] });
}
/** Stacking cards container */
function StackingCards({ items }) {
	const wrap = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = wrap.current;
		if (!el) return;
		let cleanup;
		(async () => {
			const { gsap } = await import("../_libs/gsap.mjs").then((n) => n.i);
			const { ScrollTrigger } = await import("../_libs/gsap.mjs").then((n) => n.n);
			gsap.registerPlugin(ScrollTrigger);
			const cards = Array.from(el.querySelectorAll("[data-stack-card]"));
			const triggers = [];
			cards.forEach((card, i) => {
				if (i === cards.length - 1) return;
				const t = gsap.to(card, {
					scale: .92,
					opacity: .55,
					ease: "none",
					scrollTrigger: {
						trigger: card,
						start: "top 10%",
						end: "+=80%",
						scrub: true
					}
				});
				if (t.scrollTrigger) triggers.push(t.scrollTrigger);
			});
			cleanup = () => triggers.forEach((s) => s.kill());
		})();
		return () => cleanup?.();
	}, [items.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrap,
		className: "space-y-6",
		children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-stack-card": true,
			className: "sticky surface-card-2 p-8 lg:p-12",
			style: {
				top: `${80 + i * 12}px`,
				boxShadow: "var(--shadow-elegant)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-6 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-3",
							children: [
								"#",
								(i + 1).toString().padStart(2, "0"),
								" · ",
								it.tag
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl lg:text-4xl font-semibold max-w-2xl",
							children: it.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-3 max-w-2xl",
							children: it.subtitle
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-7xl text-accent-gradient opacity-70",
						children: ["0", i + 1]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-foreground/80 max-w-3xl leading-relaxed",
					children: it.body
				}),
				it.cta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-ghost-glow mt-6 rounded-full px-5 py-2 text-xs font-semibold",
					children: it.cta
				})
			]
		}, i))
	});
}
/** Horizontal showcase pinned to scroll */
function HorizontalShowcase({ items, header }) {
	const containerRef = (0, import_react.useRef)(null);
	const sectionRef = (0, import_react.useRef)(null);
	const trackRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		const section = sectionRef.current;
		const track = trackRef.current;
		if (!container || !section || !track) return;
		let cleanup;
		(async () => {
			const { gsap } = await import("../_libs/gsap.mjs").then((n) => n.i);
			const { ScrollTrigger } = await import("../_libs/gsap.mjs").then((n) => n.n);
			gsap.registerPlugin(ScrollTrigger);
			const distance = () => track.scrollWidth - window.innerWidth + 80;
			const tween = gsap.to(track, {
				x: () => -distance(),
				ease: "none",
				scrollTrigger: {
					trigger: container,
					start: "top 15%",
					end: () => `+=${distance()}`,
					scrub: 1,
					pin: true,
					pinSpacing: true,
					invalidateOnRefresh: true
				}
			});
			const cards = track.querySelectorAll("article");
			gsap.set(cards, {
				opacity: 0,
				y: 40
			});
			const revealTween = gsap.to(cards, {
				opacity: 1,
				y: 0,
				duration: .8,
				stagger: .1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: container,
					start: "top 80%",
					once: true
				}
			});
			cleanup = () => {
				tween.scrollTrigger?.kill();
				tween.kill();
				revealTween.scrollTrigger?.kill();
				revealTween.kill();
			};
		})();
		return () => cleanup?.();
	}, [items.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "relative",
		children: [header && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-6 lg:px-10 pt-24 pb-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-7xl mx-auto flex items-end justify-between gap-8 flex-wrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)]",
						children: header.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl lg:text-6xl font-semibold tracking-tight",
						children: header.title
					})]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: sectionRef,
			"data-no-batch": true,
			className: "relative overflow-hidden bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: trackRef,
				className: "flex gap-6 pl-6 lg:pl-10 py-8 will-change-transform",
				children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "surface-card-2 w-[80vw] md:w-[55vw] lg:w-[40vw] shrink-0 p-10 relative overflow-hidden z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -right-20 -top-20 size-72 rounded-full blur-3xl opacity-30 pointer-events-none",
						style: { background: "var(--gradient-accent)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-accent)] mb-4",
								children: [
									String(i + 1).padStart(2, "0"),
									" / ",
									String(items.length).padStart(2, "0")
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-14 grid place-items-center rounded-xl bg-[var(--surface-2)] border border-[var(--hairline)] text-[var(--emerald-accent)] mb-6",
								children: it.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl font-semibold mb-3",
								children: it.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mb-6 max-w-md",
								children: it.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono-tech text-xs text-[var(--emerald-accent)] mb-6",
								children: it.stats
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "btn-ghost-glow rounded-full px-5 py-2 text-xs font-semibold",
								children: "Explore →"
							})
						]
					})]
				}, i))
			})
		})]
	});
}
/** Animated SVG journey line — vertical, draws on scroll */
function JourneyLine({ steps }) {
	const ref = (0, import_react.useRef)(null);
	const pathRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		const path = pathRef.current;
		if (!el || !path) return;
		const len = path.getTotalLength();
		path.style.strokeDasharray = `${len}`;
		path.style.strokeDashoffset = `${len}`;
		let cleanup;
		(async () => {
			const { gsap } = await import("../_libs/gsap.mjs").then((n) => n.i);
			const { ScrollTrigger } = await import("../_libs/gsap.mjs").then((n) => n.n);
			gsap.registerPlugin(ScrollTrigger);
			const t = gsap.to(path, {
				strokeDashoffset: 0,
				ease: "none",
				scrollTrigger: {
					trigger: el,
					start: "top 80%",
					end: "bottom 60%",
					scrub: .8
				}
			});
			cleanup = () => {
				t.scrollTrigger?.kill();
				t.kill();
			};
		})();
		return () => cleanup?.();
	}, [steps.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative grid grid-cols-[40px_1fr] gap-x-6 gap-y-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 40 800",
			preserveAspectRatio: "none",
			className: "absolute left-0 top-0 h-full w-10 pointer-events-none",
			"aria-hidden": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "journey-grad",
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "var(--emerald-accent)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "var(--cyan-accent)"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				ref: pathRef,
				d: "M20 8 C 5 120, 35 220, 20 340 S 5 540, 20 660 S 35 760, 20 792",
				fill: "none",
				stroke: "url(#journey-grad)",
				strokeWidth: "2",
				strokeLinecap: "round"
			})]
		}), steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "contents",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1/2 -translate-x-1/2 top-2 size-3 rounded-full bg-[var(--emerald-accent)] glow-emerald" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-accent)] mb-2",
					children: ["Step ", String(i + 1).padStart(2, "0")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl font-semibold mb-2",
					children: s.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground max-w-xl",
					children: s.body
				})
			] })]
		}, i))]
	});
}
/** Fade up elements when scrolled into view using GSAP */
function RevealOnScroll({ children, delay = 0, y = 30, duration = .8, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		let cleanup;
		(async () => {
			const { gsap } = await import("../_libs/gsap.mjs").then((n) => n.i);
			const { ScrollTrigger } = await import("../_libs/gsap.mjs").then((n) => n.n);
			gsap.registerPlugin(ScrollTrigger);
			const tween = gsap.fromTo(el, {
				opacity: 0,
				y
			}, {
				opacity: 1,
				y: 0,
				duration,
				ease: "power2.out",
				delay,
				scrollTrigger: {
					trigger: el,
					start: "top 88%",
					once: true
				}
			});
			cleanup = () => {
				tween.scrollTrigger?.kill();
				tween.kill();
			};
		})();
		return () => cleanup?.();
	}, [
		delay,
		y,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `will-change-transform opacity-0 ${className}`,
		children
	});
}
/** Hover mouse glow tracker */
function MouseGlow({ className = "" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const handleMove = (e) => {
			const r = el.getBoundingClientRect();
			const x = e.clientX - r.left;
			const y = e.clientY - r.top;
			el.style.setProperty("--x", `${x}px`);
			el.style.setProperty("--y", `${y}px`);
		};
		window.addEventListener("mousemove", handleMove, { passive: true });
		return () => window.removeEventListener("mousemove", handleMove);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${className}`,
		style: { background: "radial-gradient(400px circle at var(--x, 0px) var(--y, 0px), color-mix(in oklab, var(--emerald-accent) 15%, transparent), transparent 80%)" }
	});
}
//#endregion
export { MouseGlow as a, SplitTextReveal as c, JourneyLine as i, StackingCards as l, HandUnderline as n, RevealOnScroll as o, HorizontalShowcase as r, ScrollProgressBar as s, AnimatedCounter as t, TiltCard as u };
