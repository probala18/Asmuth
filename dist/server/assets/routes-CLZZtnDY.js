import { i as products } from "./products-DK41-WSW.js";
import { t as categories } from "./categories-BkPZMTJV.js";
import { n as reviews } from "./reviews-CbTxooB7.js";
import { n as guides } from "./guides-DB9TZ9M8.js";
import { i as JourneyLine, n as HandUnderline, o as RevealOnScroll, r as HorizontalShowcase } from "./motion-CSNJjo3r.js";
import { n as DealCard, r as ProductCard, t as CategoryCard } from "./ProductCards-DO0DKzl3.js";
import { n as GuideCard, r as ReviewCard } from "./ContentCards-BPnars1F.js";
import { n as cn, t as ShimmerButton } from "./shimmer-button-D_NQsErd.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ArrowUpRight, Camera, Headphones, Laptop, Scale, Smartphone, Sparkles, Star, Watch } from "lucide-react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region src/components/ui/marquee.tsx
function Marquee({ className, reverse, pauseOnHover = true, children, vertical = false, repeat = 4, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		...props,
		className: cn("group flex overflow-hidden p-2 [--duration:40s] [--gap:2rem] [gap:var(--gap)]", {
			"flex-row": !vertical,
			"flex-col": vertical
		}, className),
		children: Array(repeat).fill(0).map((_, i) => /* @__PURE__ */ jsx("div", {
			className: cn("flex shrink-0 justify-around [gap:var(--gap)]", {
				"animate-marquee flex-row": !vertical,
				"animate-marquee-vertical flex-col": vertical,
				"group-hover:[animation-play-state:paused]": pauseOnHover,
				"[animation-direction:reverse]": reverse
			}),
			children
		}, i))
	});
}
//#endregion
//#region src/components/site/CinematicHero.tsx
gsap.registerPlugin(ScrollTrigger);
var heroScenes = [
	{
		id: "computing",
		video: "/visuals/laptop.mp4",
		category: "COMPUTING",
		product: "genCART Laptop Air",
		headline: "Discover Better.\nChoose Smarter.",
		description: "M-class silicon. Edge-to-edge OLED. 22-hour battery life engineered for modern workflows.",
		ctaText: "Explore Product",
		ctaLink: "/product/genCART-laptop-air"
	},
	{
		id: "audio",
		video: "/visuals/headphones.mp4",
		category: "AUDIO",
		product: "genCART Buds Pro",
		headline: "Compare What\nMatters.",
		description: "Reference-grade acoustic tuning with adaptive ANC that disappears into your day.",
		ctaText: "Explore Product",
		ctaLink: "/product/genCART-buds-pro"
	},
	{
		id: "wearables",
		video: "/visuals/wearables.mp4",
		category: "WEARABLES",
		product: "genCART Watch X",
		headline: "Find What\nFits You.",
		description: "Quiet intelligence on your wrist — medical-grade vitals tracking wrapped in titanium.",
		ctaText: "Explore Product",
		ctaLink: "/product/genCART-watch-x"
	},
	{
		id: "mobile",
		video: "/visuals/phone.mp4",
		category: "MOBILE",
		product: "genCART Phone 15",
		headline: "Make Your Next Choice\nWith Confidence.",
		description: "Silicon, software, and signal in perfect step. Engineered for absolute clarity.",
		ctaText: "Explore Product",
		ctaLink: "/product/genCART-phone-15"
	}
];
function CinematicHero() {
	const containerRef = useRef(null);
	const videoRefs = useRef([]);
	const textRefs = useRef([]);
	const outroRef = useRef(null);
	const [activeSceneIndex, setActiveSceneIndex] = useState(0);
	const [progressPercent, setProgressPercent] = useState(0);
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			videoRefs.current.forEach((video) => {
				if (video) {
					video.pause();
					video.currentTime = 0;
				}
			});
			return;
		}
		const masterCtx = gsap.context(() => {
			videoRefs.current.forEach((video) => {
				if (video) video.play().catch(() => {});
			});
			const numScenes = heroScenes.length;
			const mm = gsap.matchMedia();
			mm.add("(min-width: 1024px)", () => {
				const desktopCtx = gsap.context(() => {
					const tl = gsap.timeline({ scrollTrigger: {
						trigger: container,
						start: "top top",
						end: `+=${numScenes * 100}%`,
						pin: true,
						pinSpacing: true,
						scrub: .5,
						onUpdate: (self) => {
							const p = self.progress;
							setProgressPercent(Math.min(100, Math.round(p * 100)));
							setActiveSceneIndex(Math.min(numScenes - 1, Math.floor(p * numScenes)));
						}
					} });
					videoRefs.current.forEach((video, idx) => {
						if (video) gsap.set(video, {
							autoAlpha: idx === 0 ? 1 : 0,
							scale: 1,
							y: 0
						});
					});
					textRefs.current.forEach((el, idx) => {
						if (el) gsap.set(el, {
							autoAlpha: idx === 0 ? 1 : 0,
							y: idx === 0 ? 0 : 24,
							scale: 1
						});
					});
					if (outroRef.current) gsap.set(outroRef.current, {
						autoAlpha: 0,
						y: 24,
						scale: 1
					});
					const stepDuration = 1 / numScenes;
					heroScenes.forEach((_, i) => {
						if (i < numScenes - 1) {
							const curVideo = videoRefs.current[i];
							const nextVideo = videoRefs.current[i + 1];
							const curText = textRefs.current[i];
							const nextText = textRefs.current[i + 1];
							const time = (i + .65) * stepDuration;
							tl.to(curVideo, {
								autoAlpha: 0,
								duration: stepDuration * .5,
								ease: "sine.inOut"
							}, time).to(nextVideo, {
								autoAlpha: 1,
								duration: stepDuration * .5,
								ease: "sine.inOut"
							}, time).to(curText, {
								autoAlpha: 0,
								y: -20,
								duration: stepDuration * .3,
								ease: "power2.in"
							}, time).to(nextText, {
								autoAlpha: 1,
								y: 0,
								duration: stepDuration * .35,
								ease: "power2.out"
							}, time + stepDuration * .32);
						}
					});
					const lastText = textRefs.current[numScenes - 1];
					const outroTime = (numScenes - .45) * stepDuration;
					if (lastText && outroRef.current) tl.to(lastText, {
						autoAlpha: 0,
						y: -20,
						duration: stepDuration * .3,
						ease: "power2.in"
					}, outroTime).to(outroRef.current, {
						autoAlpha: 1,
						y: 0,
						duration: stepDuration * .35,
						ease: "power2.out"
					}, outroTime + stepDuration * .32);
					return () => {
						tl.scrollTrigger?.kill(true);
						tl.kill();
					};
				}, container);
				return () => desktopCtx.revert();
			});
			mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
				const tabletCtx = gsap.context(() => {
					const tl = gsap.timeline({ scrollTrigger: {
						trigger: container,
						start: "top top",
						end: `+=${numScenes * 80}%`,
						pin: true,
						pinSpacing: true,
						scrub: .6,
						onUpdate: (self) => {
							const p = self.progress;
							setProgressPercent(Math.min(100, Math.round(p * 100)));
							setActiveSceneIndex(Math.min(numScenes - 1, Math.floor(p * numScenes)));
						}
					} });
					videoRefs.current.forEach((video, idx) => {
						if (video) gsap.set(video, {
							autoAlpha: idx === 0 ? 1 : 0,
							scale: 1.01,
							y: 0
						});
					});
					textRefs.current.forEach((el, idx) => {
						if (el) gsap.set(el, {
							autoAlpha: idx === 0 ? 1 : 0,
							y: idx === 0 ? 0 : 16,
							scale: 1
						});
					});
					if (outroRef.current) gsap.set(outroRef.current, {
						autoAlpha: 0,
						y: 16,
						scale: 1
					});
					const stepDuration = 1 / numScenes;
					heroScenes.forEach((_, i) => {
						if (i < numScenes - 1) {
							const curVideo = videoRefs.current[i];
							const nextVideo = videoRefs.current[i + 1];
							const curText = textRefs.current[i];
							const nextText = textRefs.current[i + 1];
							const time = (i + .6) * stepDuration;
							tl.to(curVideo, {
								autoAlpha: 0,
								duration: stepDuration * .35,
								ease: "sine.inOut"
							}, time).to(nextVideo, {
								autoAlpha: 1,
								duration: stepDuration * .35,
								ease: "sine.inOut"
							}, time).to(curText, {
								autoAlpha: 0,
								y: -12,
								duration: stepDuration * .25,
								ease: "power2.in"
							}, time).to(nextText, {
								autoAlpha: 1,
								y: 0,
								duration: stepDuration * .25,
								ease: "power2.out"
							}, time + stepDuration * .2);
						}
					});
					const lastText = textRefs.current[numScenes - 1];
					const outroTime = (numScenes - .45) * stepDuration;
					if (lastText && outroRef.current) tl.to(lastText, {
						autoAlpha: 0,
						y: -12,
						duration: stepDuration * .22,
						ease: "power2.in"
					}, outroTime).to(outroRef.current, {
						autoAlpha: 1,
						y: 0,
						duration: stepDuration * .24,
						ease: "power2.out"
					}, outroTime + stepDuration * .18);
					return () => {
						tl.scrollTrigger?.kill(true);
						tl.kill();
					};
				}, container);
				return () => tabletCtx.revert();
			});
			mm.add("(max-width: 767px)", () => {
				const mobileCtx = gsap.context(() => {
					const tl = gsap.timeline({ scrollTrigger: {
						trigger: container,
						start: "top top",
						end: "+=160%",
						scrub: .45,
						onUpdate: (self) => {
							const p = self.progress;
							setProgressPercent(Math.min(100, Math.round(p * 100)));
							setActiveSceneIndex(Math.min(numScenes - 1, Math.floor(p * numScenes)));
						}
					} });
					videoRefs.current.forEach((video, idx) => {
						if (video) gsap.set(video, {
							autoAlpha: idx === 0 ? 1 : 0,
							scale: 1.02,
							y: 0
						});
					});
					textRefs.current.forEach((el, idx) => {
						if (el) gsap.set(el, {
							autoAlpha: idx === 0 ? 1 : 0,
							y: idx === 0 ? 0 : 18,
							scale: 1
						});
					});
					if (outroRef.current) gsap.set(outroRef.current, {
						autoAlpha: 0,
						y: 18,
						scale: 1
					});
					const stepDuration = .22;
					heroScenes.forEach((_, i) => {
						const panel = textRefs.current[i];
						if (!panel) return;
						const start = i * stepDuration;
						const fadeOut = start + stepDuration * .7;
						tl.to(panel, {
							autoAlpha: 1,
							y: 0,
							duration: stepDuration * .55,
							ease: "power2.out"
						}, start).to(panel, {
							autoAlpha: 0,
							y: -10,
							duration: stepDuration * .4,
							ease: "power2.in"
						}, fadeOut);
					});
					tl.to(container, {
						scale: .995,
						ease: "none"
					}, 0);
					tl.to(videoRefs.current[0], {
						scale: 1.02,
						yPercent: 3,
						ease: "none"
					}, 0);
					return () => {
						tl.scrollTrigger?.kill(true);
						tl.kill();
					};
				}, container);
				return () => mobileCtx.revert();
			});
			return () => {
				mm.revert();
			};
		}, container);
		const timer = setTimeout(() => {
			ScrollTrigger.refresh();
		}, 100);
		return () => {
			clearTimeout(timer);
			masterCtx.revert();
		};
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		ref: containerRef,
		"data-no-batch": true,
		className: "relative w-full min-h-[100svh] sm:h-screen overflow-hidden bg-background text-foreground z-10",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0 z-0 overflow-hidden",
			children: [
				heroScenes.map((scene, index) => /* @__PURE__ */ jsx("video", {
					ref: (el) => videoRefs.current[index] = el,
					src: scene.video,
					autoPlay: true,
					loop: true,
					muted: true,
					playsInline: true,
					preload: "metadata",
					className: "absolute inset-0 size-full object-cover transition-transform duration-700 pointer-events-none",
					style: {
						opacity: index === 0 ? 1 : 0,
						visibility: index === 0 ? "visible" : "hidden"
					}
				}, scene.id)),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30 dark:from-background dark:via-background/70 dark:to-background/40 pointer-events-none" }),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-60 dark:opacity-80 pointer-events-none" }),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid opacity-30 dark:opacity-40 pointer-events-none" })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 pb-6 sm:pb-8 flex flex-col justify-between h-full pointer-events-none",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-3 sm:gap-4 pt-4 pointer-events-auto",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 rounded-full px-3 py-1.5 sm:px-3.5 sm:py-1.5 surface-card text-[10px] sm:text-xs font-mono-tech uppercase tracking-[0.25em] text-[var(--emerald-accent)] border border-[var(--hairline)]",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "relative flex size-2",
							children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-[var(--emerald-accent)] opacity-75 animate-ping" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full size-2 bg-[var(--emerald-accent)]" })]
						}), "THE FUTURE OF PRODUCT DISCOVERY"]
					}), /* @__PURE__ */ jsxs("div", {
						className: "hidden sm:flex items-center gap-2 rounded-full px-4 py-1.5 surface-card border border-[var(--hairline)]",
						children: [/* @__PURE__ */ jsx(Sparkles, { className: "size-3.5 text-[var(--cyan-accent)]" }), /* @__PURE__ */ jsx("span", {
							className: "font-mono-tech text-[10px] uppercase tracking-widest text-foreground",
							children: progressPercent >= 90 ? "EXPLORE ALL" : heroScenes[activeSceneIndex].category
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "my-auto py-6 sm:py-8 max-w-3xl relative min-h-[260px] sm:min-h-[300px] flex items-center",
					children: [heroScenes.map((scene, index) => /* @__PURE__ */ jsxs("div", {
						ref: (el) => textRefs.current[index] = el,
						className: "absolute inset-x-0 space-y-5 sm:space-y-6 pointer-events-auto",
						style: {
							opacity: index === 0 ? 1 : 0,
							visibility: index === 0 ? "visible" : "hidden"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-block font-mono-tech text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
								children: [
									scene.category,
									" · ",
									scene.product
								]
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "font-display text-3xl sm:text-5xl md:text-7xl font-bold leading-[0.98] tracking-tight whitespace-pre-line text-foreground",
								children: scene.headline
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl",
								children: scene.description
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-2",
								children: [/* @__PURE__ */ jsx(Link, {
									to: scene.ctaLink,
									children: /* @__PURE__ */ jsxs(ShimmerButton, {
										className: "btn-accent",
										children: [scene.ctaText, /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
									})
								}), /* @__PURE__ */ jsx(Link, {
									to: "/guides",
									className: "btn-ghost-glow rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2",
									children: "Explore Guides"
								})]
							})
						]
					}, scene.id)), /* @__PURE__ */ jsxs("div", {
						ref: outroRef,
						className: "absolute inset-x-0 space-y-5 sm:space-y-6 pointer-events-auto",
						style: {
							opacity: 0,
							visibility: "hidden"
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "inline-block font-mono-tech text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[var(--cyan-accent)]",
								children: "CHOICE CONFIDENCE GUARANTEED"
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "font-display text-3xl sm:text-5xl md:text-7xl font-bold leading-tight text-foreground",
								children: [
									"Ready to Find Your ",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "text-accent-gradient",
										children: "Next Favorite"
									}),
									"?"
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-lg",
								children: "Explore our editorially curated rankings, comparison matrices, and signal-graded reviews."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-2",
								children: [/* @__PURE__ */ jsx(Link, {
									to: "/collections",
									children: /* @__PURE__ */ jsxs(ShimmerButton, {
										className: "btn-accent",
										children: ["Explore All Products", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
									})
								}), /* @__PURE__ */ jsx(Link, {
									to: "/best-of-2026",
									className: "btn-ghost-glow rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2",
									children: "View Editor's Picks"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-4 sm:gap-6 pb-4 pt-4 border-t border-[var(--hairline)]/50 pointer-events-auto",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "font-mono-tech text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "text-foreground font-semibold",
									children: ["0", activeSceneIndex + 1]
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx("span", { children: "04" })
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex-1 max-w-md h-1 rounded-full bg-[var(--surface-2)] overflow-hidden relative",
							children: /* @__PURE__ */ jsx("div", {
								className: "h-full bg-gradient-to-r from-[var(--emerald-accent)] to-[var(--cyan-accent)] transition-all duration-200 ease-out",
								style: { width: `${progressPercent}%` }
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground hidden sm:block",
							children: progressPercent >= 90 ? "SCROLL TO EXPLORE" : "SCROLL DOWN"
						})
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/data/productStories.ts
var productStories = [
	{
		id: "01",
		category: "COMPUTING",
		product: "genCART Laptop Air",
		slug: "genCART-laptop-air",
		image: "/assets/product-laptop.jpg",
		accent: "var(--emerald-accent)",
		chapters: [
			{
				title: "Built for ambitious workflows.",
				description: "M-class performance designed for developers, creators, and professionals who refuse to compromise."
			},
			{
				title: "Power that stays with you.",
				description: "22 hours of battery life — designed to keep up with demanding work without ever slowing you down."
			},
			{
				title: "A display built for detail.",
				description: "Edge-to-edge OLED at 120Hz. 100% DCI-P3 color — designed to make every detail look its absolute best."
			}
		]
	},
	{
		id: "02",
		category: "AUDIO",
		product: "genCART Buds Pro",
		slug: "genCART-buds-pro",
		image: "/assets/product-headphones.jpg",
		accent: "var(--cyan-accent)",
		chapters: [
			{
				title: "Sound that disappears around you.",
				description: "Reference-grade tuning with adaptive noise cancellation that adjusts 200 times per second."
			},
			{
				title: "Designed for everyday listening.",
				description: "5.2 grams per bud. 9.4 hours with ANC on. Comfortable, compact, and ready for wherever your day takes you."
			},
			{
				title: "Everything you need. Nothing you don't.",
				description: "LDAC codec support, multipoint connection, and IP55 water resistance — built around simplicity and clarity."
			}
		]
	},
	{
		id: "03",
		category: "WEARABLES",
		product: "genCART Watch X",
		slug: "genCART-watch-x",
		image: "/assets/product-watch.jpg",
		accent: "var(--emerald-accent)",
		chapters: [
			{
				title: "Quiet intelligence on your wrist.",
				description: "Medical-grade vitals tracking — SpO2, ECG, and body temperature — wrapped in Grade 5 titanium at 36 grams."
			},
			{
				title: "Built around your day.",
				description: "72-hour battery life and always-on AMOLED. Thoughtful features that help you stay informed without getting in the way."
			},
			{
				title: "Technology that feels effortless.",
				description: "10ATM water resistance, a refined wearable experience designed to become part of your routine — not disrupt it."
			}
		]
	}
];
//#endregion
//#region src/components/site/ProductStorytelling.tsx
gsap.registerPlugin(ScrollTrigger);
function ProductStorytelling() {
	return /* @__PURE__ */ jsxs("section", {
		ref: useRef(null),
		"data-no-batch": true,
		className: "relative",
		children: [
			/* @__PURE__ */ jsx(SectionIntro, {}),
			productStories.map((story, idx) => /* @__PURE__ */ jsx(StoryBlock, {
				story,
				index: idx,
				total: productStories.length
			}, story.id)),
			/* @__PURE__ */ jsx(SectionOutro, {})
		]
	});
}
function SectionIntro() {
	return /* @__PURE__ */ jsxs(motion.div, {
		className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 text-center space-y-5",
		initial: {
			opacity: 0,
			y: 40
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .7,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
				children: "Curated With Intention"
			}),
			/* @__PURE__ */ jsxs("h2", {
				className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
				children: [
					"Products Worth Your ",
					/* @__PURE__ */ jsx("span", {
						className: "text-accent-gradient",
						children: "Attention"
					}),
					"."
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed",
				children: "We research, compare, and test the details that matter — so you can spend less time searching and more time choosing."
			})
		]
	});
}
function SectionOutro() {
	return /* @__PURE__ */ jsxs(motion.div, {
		className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 text-center space-y-6",
		initial: {
			opacity: 0,
			y: 30
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
			duration: .6,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)]",
				children: "Discover More"
			}),
			/* @__PURE__ */ jsxs("h3", {
				className: "font-display text-3xl md:text-5xl font-bold tracking-tight",
				children: [
					"Find What Fits ",
					/* @__PURE__ */ jsx("span", {
						className: "text-accent-gradient",
						children: "Your World"
					}),
					"."
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed",
				children: "Explore the products, reviews, comparisons, and guides that make your next decision easier."
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center justify-center gap-4 pt-2",
				children: [/* @__PURE__ */ jsx(Link, {
					to: "/collections",
					children: /* @__PURE__ */ jsxs(ShimmerButton, {
						className: "btn-accent",
						children: ["Explore All Products", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
					})
				}), /* @__PURE__ */ jsx(Link, {
					to: "/best-of-2026",
					className: "btn-ghost-glow rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2",
					children: "View Editor's Picks"
				})]
			})
		]
	});
}
function StoryBlock({ story, total }) {
	const blockRef = useRef(null);
	const imageRef = useRef(null);
	const chapterRefs = useRef([]);
	const [viewportMode, setViewportMode] = useState("desktop");
	const numChapters = story.chapters.length;
	useEffect(() => {
		if (typeof window === "undefined") return;
		const getMode = () => {
			if (window.matchMedia("(max-width: 767px)").matches) return "mobile";
			if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) return "tablet";
			return "desktop";
		};
		setViewportMode(getMode());
		const mediaQuery = window.matchMedia("(max-width: 767px)");
		const tabletQuery = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
		const desktopQuery = window.matchMedia("(min-width: 1024px)");
		const handleChange = () => {
			setViewportMode(getMode());
		};
		mediaQuery.addEventListener("change", handleChange);
		tabletQuery.addEventListener("change", handleChange);
		desktopQuery.addEventListener("change", handleChange);
		return () => {
			mediaQuery.removeEventListener("change", handleChange);
			tabletQuery.removeEventListener("change", handleChange);
			desktopQuery.removeEventListener("change", handleChange);
		};
	}, []);
	useEffect(() => {
		const block = blockRef.current;
		const image = imageRef.current;
		if (!block || !image) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			chapterRefs.current.forEach((el, idx) => {
				if (el) gsap.set(el, {
					autoAlpha: 1,
					y: 0,
					filter: "blur(0px)"
				});
			});
			return;
		}
		const masterCtx = gsap.context(() => {
			const mm = gsap.matchMedia();
			mm.add("(min-width: 1024px)", () => {
				const desktopCtx = gsap.context(() => {
					chapterRefs.current.forEach((el, idx) => {
						if (el) gsap.set(el, {
							autoAlpha: idx === 0 ? 1 : 0,
							y: idx === 0 ? 0 : 40,
							filter: idx === 0 ? "blur(0px)" : "blur(8px)"
						});
					});
					const scrollEnd = numChapters * 100;
					const tl = gsap.timeline({ scrollTrigger: {
						trigger: block,
						start: "top top",
						end: `+=${scrollEnd}%`,
						pin: true,
						pinSpacing: true,
						scrub: .5
					} });
					const step = 1 / numChapters;
					const imageKeyframes = [
						{
							scale: 1,
							rotation: 0,
							x: 0,
							y: 0
						},
						{
							scale: 1.04,
							rotation: -.8,
							x: -6,
							y: 4
						},
						{
							scale: 1.07,
							rotation: .6,
							x: 4,
							y: -3
						}
					];
					story.chapters.forEach((_, i) => {
						if (i < imageKeyframes.length) tl.to(image, {
							scale: imageKeyframes[i].scale,
							rotation: imageKeyframes[i].rotation,
							x: imageKeyframes[i].x,
							y: imageKeyframes[i].y,
							duration: step,
							ease: "power1.inOut"
						}, i * step);
						if (i < numChapters - 1) {
							const curChapter = chapterRefs.current[i];
							const nextChapter = chapterRefs.current[i + 1];
							const transitionTime = (i + .7) * step;
							if (curChapter) tl.to(curChapter, {
								autoAlpha: 0,
								y: -30,
								filter: "blur(6px)",
								duration: step * .3,
								ease: "power2.in"
							}, transitionTime);
							if (nextChapter) tl.to(nextChapter, {
								autoAlpha: 1,
								y: 0,
								filter: "blur(0px)",
								duration: step * .35,
								ease: "power2.out"
							}, transitionTime + step * .32);
						}
					});
					return () => {
						tl.scrollTrigger?.kill(true);
						tl.kill();
					};
				}, block);
				return () => desktopCtx.revert();
			});
			mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
				const tabletCtx = gsap.context(() => {
					chapterRefs.current.forEach((el, idx) => {
						if (el) gsap.set(el, {
							autoAlpha: idx === 0 ? 1 : 0,
							y: idx === 0 ? 0 : 24,
							filter: idx === 0 ? "blur(0px)" : "blur(5px)"
						});
					});
					const scrollEnd = numChapters * 70;
					const tl = gsap.timeline({ scrollTrigger: {
						trigger: block,
						start: "top top",
						end: `+=${scrollEnd}%`,
						pin: true,
						pinSpacing: true,
						scrub: .6
					} });
					const step = 1 / numChapters;
					const imageKeyframes = [
						{
							scale: 1,
							rotation: 0,
							x: 0,
							y: 0
						},
						{
							scale: 1.02,
							rotation: -.4,
							x: -3,
							y: 2
						},
						{
							scale: 1.03,
							rotation: .3,
							x: 2,
							y: -2
						}
					];
					story.chapters.forEach((_, i) => {
						if (i < imageKeyframes.length) tl.to(image, {
							scale: imageKeyframes[i].scale,
							rotation: imageKeyframes[i].rotation,
							x: imageKeyframes[i].x,
							y: imageKeyframes[i].y,
							duration: step,
							ease: "power1.inOut"
						}, i * step);
						if (i < numChapters - 1) {
							const curChapter = chapterRefs.current[i];
							const nextChapter = chapterRefs.current[i + 1];
							const transitionTime = (i + .7) * step;
							if (curChapter) tl.to(curChapter, {
								autoAlpha: 0,
								y: -18,
								filter: "blur(4px)",
								duration: step * .25,
								ease: "power2.in"
							}, transitionTime);
							if (nextChapter) tl.to(nextChapter, {
								autoAlpha: 1,
								y: 0,
								filter: "blur(0px)",
								duration: step * .25,
								ease: "power2.out"
							}, transitionTime + step * .2);
						}
					});
					return () => {
						tl.scrollTrigger?.kill(true);
						tl.kill();
					};
				}, block);
				return () => tabletCtx.revert();
			});
			mm.add("(max-width: 767px)", () => {
				const mobileCtx = gsap.context(() => {
					chapterRefs.current.forEach((el, idx) => {
						if (el) gsap.set(el, {
							autoAlpha: 1,
							y: 0,
							filter: "blur(0px)"
						});
					});
					chapterRefs.current.forEach((el, idx) => {
						if (!el) return;
						gsap.fromTo(el, {
							autoAlpha: 0,
							y: 24
						}, {
							autoAlpha: 1,
							y: 0,
							duration: .7,
							ease: "power2.out",
							scrollTrigger: {
								trigger: el,
								start: "top 88%",
								once: true
							}
						});
					});
					if (imageRef.current) gsap.fromTo(imageRef.current, {
						scale: .98,
						y: 8
					}, {
						scale: 1,
						y: 0,
						duration: .8,
						ease: "power2.out",
						scrollTrigger: {
							trigger: imageRef.current,
							start: "top 90%",
							once: true
						}
					});
				}, block);
				return () => mobileCtx.revert();
			});
			return () => {
				mm.revert();
			};
		}, block);
		return () => {
			masterCtx.revert();
		};
	}, [numChapters, story.chapters]);
	const isMobile = viewportMode === "mobile";
	return /* @__PURE__ */ jsx("div", {
		ref: blockRef,
		className: "relative min-h-screen bg-background",
		children: /* @__PURE__ */ jsx("div", {
			className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 ${isMobile ? "" : "min-h-screen flex flex-col md:flex-row lg:flex-row items-center gap-8 md:gap-10 lg:gap-16"}`,
			children: !isMobile ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
				className: "w-full md:w-1/2 lg:w-1/2 flex items-center justify-center relative",
				children: [/* @__PURE__ */ jsxs("div", {
					ref: imageRef,
					className: "relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl bg-[var(--surface)]",
					children: [/* @__PURE__ */ jsx("img", {
						src: story.image,
						alt: story.product,
						loading: "lazy",
						className: "absolute inset-0 size-full object-cover"
					}), /* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none",
						style: { background: `radial-gradient(circle at 30% 70%, ${story.accent}, transparent 70%)` }
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "absolute top-4 left-4 md:top-6 md:left-0 font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-[var(--hairline)]",
					children: [
						story.id,
						" / ",
						String(total).padStart(2, "0")
					]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "w-full md:w-1/2 lg:w-1/2 relative min-h-[320px] sm:min-h-[360px] flex items-center",
				children: story.chapters.map((chapter, ci) => /* @__PURE__ */ jsxs("div", {
					ref: (el) => chapterRefs.current[ci] = el,
					className: "absolute inset-x-0 space-y-5 lg:space-y-6",
					style: {
						opacity: ci === 0 ? 1 : 0,
						visibility: ci === 0 ? "visible" : "hidden"
					},
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
							children: story.category
						}),
						/* @__PURE__ */ jsx("p", {
							className: "font-mono-tech text-xs uppercase tracking-widest text-muted-foreground",
							children: story.product
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground",
							children: chapter.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md",
							children: chapter.description
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: `/product/${story.slug}`,
							className: "group inline-flex items-center gap-2 text-sm font-semibold text-[var(--emerald-accent)] hover:gap-3 transition-all",
							children: ["Explore Product", /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex items-center gap-2 pt-4",
							children: story.chapters.map((_, di) => /* @__PURE__ */ jsx("span", { className: `block rounded-full transition-all duration-300 ${di === ci ? "w-8 h-1.5 bg-[var(--emerald-accent)]" : "w-1.5 h-1.5 bg-[var(--surface-2)]"}` }, di))
						})
					]
				}, ci))
			})] }) : /* @__PURE__ */ jsxs("div", {
				className: "w-full space-y-6 pb-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between rounded-full border border-[var(--hairline)] bg-background/70 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground backdrop-blur-sm",
					children: [/* @__PURE__ */ jsx("span", { children: story.category }), /* @__PURE__ */ jsxs("span", { children: [
						story.id,
						" / ",
						String(total).padStart(2, "0")
					] })]
				}), story.chapters.map((chapter, ci) => /* @__PURE__ */ jsxs("div", {
					ref: (el) => chapterRefs.current[ci] = el,
					className: "rounded-[2rem] border border-[var(--hairline)] bg-[var(--surface)]/80 p-5 sm:p-7 shadow-sm",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mb-5 overflow-hidden rounded-[1.5rem] border border-[var(--hairline)] bg-[var(--surface)]",
							children: /* @__PURE__ */ jsx("img", {
								src: story.image,
								alt: story.product,
								loading: "lazy",
								className: "aspect-[4/3] w-full object-cover"
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
							children: story.product
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground",
							children: chapter.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground",
							children: chapter.description
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 flex items-center justify-between",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: `/product/${story.slug}`,
								className: "inline-flex items-center gap-2 text-sm font-semibold text-[var(--emerald-accent)]",
								children: ["Explore Product", /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })]
							}), /* @__PURE__ */ jsx("div", {
								className: "flex items-center gap-2",
								children: story.chapters.map((_, di) => /* @__PURE__ */ jsx("span", { className: `block rounded-full ${di === ci ? "h-2 w-6 bg-[var(--emerald-accent)]" : "h-2 w-2 bg-[var(--surface-2)]"}` }, di))
							})]
						})
					]
				}, ci))]
			})
		})
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	const featuredCategories = categories.filter((c) => c.featured).slice(0, 3);
	const trendingProducts = products.filter((p) => p.isTrending).slice(0, 3);
	const editorPicks = products.filter((p) => p.isEditorsPick).slice(0, 3);
	const dealsList = products.filter((p) => p.originalPrice && p.originalPrice > p.price).slice(0, 3);
	const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 3);
	const latestReviews = reviews.slice(0, 3);
	const buyingGuides = guides.slice(0, 2);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(CinematicHero, {}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative overflow-hidden py-8 border-y border-[var(--hairline)] bg-[var(--surface)]/40",
			children: [
				/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" }),
				/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" }),
				/* @__PURE__ */ jsx(Marquee, {
					pauseOnHover: true,
					className: "[--duration:30s]",
					children: [
						"FUTURE COMMERCE",
						"·",
						"genCART 2026",
						"·",
						"ENGINEERED AS ONE",
						"·",
						"SIGNAL ABOVE NOISE",
						"·",
						"BUILT IN ORBIT",
						"·"
					].map((t, i) => /* @__PURE__ */ jsx("span", {
						className: "font-display text-2xl lg:text-3xl text-muted-foreground/60 tracking-wider whitespace-nowrap mx-4",
						children: t
					}, i))
				})
			]
		}),
		/* @__PURE__ */ jsx(ProductStorytelling, {}),
		/* @__PURE__ */ jsx(motion.section, {
			className: "px-6 lg:px-10 py-16",
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-60px"
			},
			transition: {
				duration: .6,
				ease: [
					.16,
					1,
					.3,
					1
				]
			}
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsxs(RevealOnScroll, {
					className: "space-y-4 mb-12",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
						children: "Browse by Category"
					}), /* @__PURE__ */ jsxs("h2", {
						className: "font-display text-4xl lg:text-5xl font-semibold",
						children: [
							"Curated ",
							/* @__PURE__ */ jsx("span", {
								className: "text-accent-gradient",
								children: "product worlds"
							}),
							"."
						]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: featuredCategories.map((c) => /* @__PURE__ */ jsx(CategoryCard, { category: c }, c.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-end justify-between mb-12 gap-8 flex-wrap",
					children: [/* @__PURE__ */ jsxs(RevealOnScroll, {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsx("p", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)]",
							children: "Trending Now"
						}), /* @__PURE__ */ jsxs("h2", {
							className: "font-display text-4xl lg:text-5xl font-semibold",
							children: [
								"Hot picks, ",
								/* @__PURE__ */ jsx(HandUnderline, { children: "rising fast" }),
								"."
							]
						})]
					}), /* @__PURE__ */ jsxs(Link, {
						to: "/trending",
						className: "btn-ghost-glow rounded-full px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2",
						children: ["View all trending ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: trendingProducts.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16 bg-[var(--surface)]/30 border-y border-[var(--hairline)]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-end justify-between mb-12 gap-8 flex-wrap",
					children: [/* @__PURE__ */ jsxs(RevealOnScroll, {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsx("p", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
							children: "Limited Offers"
						}), /* @__PURE__ */ jsxs("h2", {
							className: "font-display text-4xl lg:text-5xl font-semibold",
							children: [
								"Deals you ",
								/* @__PURE__ */ jsx("span", {
									className: "text-accent-gradient",
									children: "actually want"
								}),
								"."
							]
						})]
					}), /* @__PURE__ */ jsxs(Link, {
						to: "/deals",
						className: "btn-ghost-glow rounded-full px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2",
						children: ["All deals ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: dealsList.map((d, index) => /* @__PURE__ */ jsx(DealCard, {
						product: d,
						hours: [
							4,
							8,
							12
						][index % 3]
					}, d.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-6xl mx-auto",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center mb-16 space-y-4",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)]",
							children: "Ranked Collection"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "font-display text-4xl lg:text-6xl font-bold tracking-tight",
							children: ["Best Sellers ", /* @__PURE__ */ jsx("span", {
								className: "italic",
								children: "2026"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground text-sm max-w-md mx-auto",
							children: "Our editor's top three recommendations, ranked according to performance, value, and reliability."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-8",
					children: bestSellers.map((p, idx) => /* @__PURE__ */ jsxs(RevealOnScroll, {
						delay: idx * .1,
						className: "surface-card-2 p-8 lg:p-12 relative overflow-hidden group",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "absolute top-8 right-8 font-display text-7xl font-bold text-[var(--emerald-accent)]/15 group-hover:scale-110 transition-transform",
							children: ["0", idx + 1]
						}), /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-8 items-center",
							children: [/* @__PURE__ */ jsx("div", {
								className: "aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--surface)] border border-[var(--hairline)]",
								children: /* @__PURE__ */ jsx("img", {
									src: p.image,
									alt: p.name,
									loading: "lazy",
									decoding: "async",
									className: "size-full object-cover"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ jsxs("span", {
										className: "font-mono-tech text-[9px] uppercase tracking-widest text-[var(--emerald-accent)]",
										children: [
											"RANK ",
											idx + 1,
											" · ",
											p.category
										]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "font-display text-3xl font-semibold text-foreground",
										children: p.name
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-muted-foreground text-sm leading-relaxed",
										children: p.description
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "pt-4 border-t border-[var(--hairline)]/50 flex flex-wrap items-center gap-6",
										children: [
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
												className: "text-[10px] font-mono-tech uppercase text-muted-foreground",
												children: "Rating"
											}), /* @__PURE__ */ jsxs("p", {
												className: "font-display font-semibold text-lg text-foreground flex items-center gap-1",
												children: [/* @__PURE__ */ jsx(Star, { className: "size-4 fill-amber-400 text-amber-400" }), p.rating.toFixed(1)]
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
												className: "text-[10px] font-mono-tech uppercase text-muted-foreground",
												children: "Price"
											}), /* @__PURE__ */ jsxs("p", {
												className: "font-display font-semibold text-lg text-[var(--emerald-accent)]",
												children: ["$", p.price]
											})] }),
											/* @__PURE__ */ jsx("div", {
												className: "lg:ml-auto",
												children: /* @__PURE__ */ jsxs(Link, {
													to: `/product/${p.slug}`,
													className: "btn-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold",
													children: ["View details", /* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5" })]
												})
											})
										]
									})
								]
							})]
						})]
					}, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx("div", {
			className: "pb-16",
			children: /* @__PURE__ */ jsx(HorizontalShowcase, {
				header: {
					label: "Ecosystem Showcase",
					title: /* @__PURE__ */ jsxs(Fragment, { children: [
						"Every category, ",
						/* @__PURE__ */ jsx("span", {
							className: "text-accent-gradient",
							children: "elevated"
						}),
						"."
					] })
				},
				items: [
					{
						title: "Computing",
						description: "Pro silicon, ultraportable chassis, cinema-grade displays — for makers and builders.",
						stats: "120+ products · 4.9 avg rating",
						icon: /* @__PURE__ */ jsx(Laptop, { className: "size-6" })
					},
					{
						title: "Audio",
						description: "Reference-tuned headphones and immersive spatial speakers for sound that disappears.",
						stats: "84 products · 4.8 avg rating",
						icon: /* @__PURE__ */ jsx(Headphones, { className: "size-6" })
					},
					{
						title: "Wearables",
						description: "Quiet intelligence on your wrist — vitals, focus, and time, beautifully resolved.",
						stats: "42 products · 4.9 avg rating",
						icon: /* @__PURE__ */ jsx(Watch, { className: "size-6" })
					},
					{
						title: "Mobile",
						description: "Flagship phones engineered as one — silicon, software, and signal in perfect step.",
						stats: "36 products · 4.7 avg rating",
						icon: /* @__PURE__ */ jsx(Smartphone, { className: "size-6" })
					},
					{
						title: "Cameras",
						description: "Mirrorless cinema gear and tools designed to capture high-density creative detail.",
						stats: "58 products · 4.9 avg rating",
						icon: /* @__PURE__ */ jsx(Camera, { className: "size-6" })
					}
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-end justify-between mb-12 gap-8 flex-wrap",
					children: [/* @__PURE__ */ jsxs(RevealOnScroll, {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsx("p", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)]",
							children: "In-Depth Guides"
						}), /* @__PURE__ */ jsxs("h2", {
							className: "font-display text-4xl lg:text-5xl font-semibold",
							children: [
								"Buying guides for ",
								/* @__PURE__ */ jsx(HandUnderline, { children: "critical builders" }),
								"."
							]
						})]
					}), /* @__PURE__ */ jsxs(Link, {
						to: "/guides",
						className: "btn-ghost-glow rounded-full px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2",
						children: ["Browse all guides ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
					children: buyingGuides.map((g) => /* @__PURE__ */ jsx(GuideCard, { guide: g }, g.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16 bg-[var(--surface)]/20 border-y border-[var(--hairline)]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-end justify-between mb-12 gap-8 flex-wrap",
					children: [/* @__PURE__ */ jsxs(RevealOnScroll, {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsx("p", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
							children: "Tested & Graded"
						}), /* @__PURE__ */ jsxs("h2", {
							className: "font-display text-4xl lg:text-5xl font-semibold",
							children: [
								"Latest expert ",
								/* @__PURE__ */ jsx("span", {
									className: "text-accent-gradient",
									children: "lab reviews"
								}),
								"."
							]
						})]
					}), /* @__PURE__ */ jsxs(Link, {
						to: "/reviews",
						className: "btn-ghost-glow rounded-full px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2",
						children: ["All reviews ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: latestReviews.map((r) => /* @__PURE__ */ jsx(ReviewCard, { review: r }, r.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx(motion.section, {
			className: "px-6 lg:px-10 py-16",
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-60px"
			},
			transition: {
				duration: .6,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-4xl mx-auto",
				children: [
					/* @__PURE__ */ jsxs(RevealOnScroll, {
						className: "text-center mb-12 space-y-3",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)]",
								children: "Side by Side"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "font-display text-3xl lg:text-4xl font-semibold",
								children: "Laptop Air vs. Dell XPS 16"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground font-mono-tech",
								children: "A quick review of the defining specs."
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "surface-card-2 overflow-hidden border border-[var(--hairline)] rounded-2xl",
						children: [
							{
								spec: "Chip",
								a: "M-class · 12 core",
								b: "Intel Ultra 9",
								winner: "a"
							},
							{
								spec: "Display",
								a: "14.2\" OLED 120Hz",
								b: "16.3\" OLED 90Hz",
								winner: "a"
							},
							{
								spec: "Battery",
								a: "22h video run",
								b: "11.5h video run",
								winner: "a"
							},
							{
								spec: "Weight",
								a: "1.24 kg",
								b: "2.13 kg",
								winner: "a"
							},
							{
								spec: "Starting Price",
								a: "$999",
								b: "$1,899",
								winner: "a"
							}
						].map((row, i) => /* @__PURE__ */ jsxs(motion.div, {
							className: "grid grid-cols-[1.2fr_2fr_2fr] items-center px-6 py-4 border-t border-[var(--hairline)] first:border-t-0",
							initial: {
								opacity: 0,
								x: -12
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: {
								duration: .35,
								delay: i * .06,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
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
					}),
					/* @__PURE__ */ jsx("div", {
						className: "text-center mt-8",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/compare",
							className: "btn-ghost-glow rounded-full px-6 py-2.5 text-xs font-semibold inline-flex items-center gap-1.5",
							children: [/* @__PURE__ */ jsx(Scale, { className: "size-3.5" }), " Go to Comparison Hub"]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-16 bg-[var(--surface)]/30 border-y border-[var(--hairline)]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsxs(RevealOnScroll, {
					className: "space-y-3 mb-12 text-center",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
						children: "Curated shortlist"
					}), /* @__PURE__ */ jsxs("h2", {
						className: "font-display text-4xl lg:text-5xl font-semibold",
						children: [
							"Editor's ",
							/* @__PURE__ */ jsx("span", {
								className: "text-accent-gradient",
								children: "personal picks"
							}),
							"."
						]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: editorPicks.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 lg:px-10 py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-5xl mx-auto",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-16",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3",
						children: "How we curate"
					}), /* @__PURE__ */ jsxs("h2", {
						className: "font-display text-4xl lg:text-5xl font-semibold max-w-2xl",
						children: [
							"From signal to ",
							/* @__PURE__ */ jsx(HandUnderline, { children: "shortlist" }),
							"."
						]
					})]
				}), /* @__PURE__ */ jsx(JourneyLine, { steps: [
					{
						title: "Source",
						body: "We track 25,000+ launches a year. Only the ones with measurable, repeatable advantages move forward."
					},
					{
						title: "Test",
						body: "Long-loop, real-life testing — weeks, not unboxings. We grade against last year's best, not the marketing deck."
					},
					{
						title: "Edit",
						body: "Editorial review, comparison rigs, sample swaps. Anything that loses to its predecessor never gets recommended."
					},
					{
						title: "Recommend",
						body: "What's left earns a place in the collection — with the data, the why, and the alternatives, in writing."
					}
				] })]
			})
		}),
		/* @__PURE__ */ jsx(motion.section, {
			className: "px-6 lg:px-10 py-24",
			initial: {
				opacity: 0,
				scale: .97
			},
			whileInView: {
				opacity: 1,
				scale: 1
			},
			viewport: {
				once: true,
				margin: "-80px"
			},
			transition: {
				duration: .7,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-5xl mx-auto surface-card-2 p-10 lg:p-16 text-center relative overflow-hidden",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-50" }), /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-display text-2xl lg:text-3xl leading-snug max-w-3xl mx-auto block mb-6",
						children: "\"genCART is the only place I check before any tech purchase. The reviews are the reviews I'd write — if I had three weeks per product.\""
					}), /* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
						children: "Maya Chen — Director of Design, Loop Studio"
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx(motion.section, {
			className: "px-6 lg:px-10 py-24",
			initial: {
				opacity: 0,
				y: 40
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-80px"
			},
			transition: {
				duration: .7,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto rounded-3xl p-10 lg:p-20 text-center relative overflow-hidden shadow-2xl",
				style: { background: "var(--gradient-accent)" },
				children: [
					/* @__PURE__ */ jsxs("h2", {
						className: "font-display text-4xl lg:text-6xl font-bold text-[oklch(0.13_0.03_270)] tracking-tight",
						children: [
							"Ready to upgrade ",
							/* @__PURE__ */ jsx("span", {
								className: "italic",
								children: "everything"
							}),
							"?"
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[oklch(0.13_0.03_270)]/80 max-w-xl mx-auto mt-4 font-medium text-sm",
						children: "Browse the 2026 collection, or start with the editor's shortlist."
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						className: "flex gap-3 justify-center mt-8 flex-wrap",
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .5,
							delay: .2,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/collections",
							children: /* @__PURE__ */ jsxs(ShimmerButton, {
								className: "bg-background text-foreground hover:bg-[var(--surface)] shadow-md",
								children: ["Shop Collections", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
							})
						}), /* @__PURE__ */ jsx(Link, {
							to: "/best-of-2026",
							className: "rounded-full px-7 py-3.5 text-sm font-semibold border border-[oklch(0.13_0.03_270)] text-[oklch(0.13_0.03_270)] hover:bg-[oklch(0.13_0.03_270)] hover:text-background transition-colors",
							children: "Best of 2026"
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { Index as component };
