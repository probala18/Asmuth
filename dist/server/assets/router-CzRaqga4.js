import { t as supabase } from "./supabase-Ckt6j23M.js";
import { i as products } from "./products-DK41-WSW.js";
import { t as categories } from "./categories-BkPZMTJV.js";
import { t as brands } from "./brands-BwVAGUhx.js";
import { n as reviews } from "./reviews-CbTxooB7.js";
import { n as guides } from "./guides-DB9TZ9M8.js";
import { i as useSavedProducts, o as resetOnboardingPreferences } from "./saved-products-CUi3zrcj.js";
import { t as dashboardData } from "./personalizedDashboardData-B57S7eqJ.js";
import { r as Newsletter, t as Route$29 } from "./category._slug-DfSuaZfQ.js";
import { t as Route$30 } from "./search-CFjYWRLI.js";
import { t as product_laptop_default } from "./product-laptop-Dodj_pHU.js";
import { t as Route$31 } from "./reviews._slug-Cr7lxfIC.js";
import { t as Route$32 } from "./product._slug-B_QyKAW3.js";
import { t as Route$33 } from "./guides._slug-M3SiHEhZ.js";
import { t as Route$34 } from "./compare._slug-DKDeDVF7.js";
import { t as Route$35 } from "./brand._slug-B1AeH0yE.js";
import { t as Route$36 } from "./best._category-BFOFFtQl.js";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, redirect, useNavigate, useRouter, useRouterState } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ArrowRight, ArrowUpRight, Bell, BookOpen, Bookmark, Camera, Check, ChevronDown, Clock3, Headphones, Laptop, LogOut, Menu, Moon, Scale, Search, Settings, SlidersHorizontal, Smartphone, Sparkles, Sun, Tag, User, Watch, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
//#region src/styles.css?url
var styles_default = "/assets/styles-Dv12-PTM.css";
//#endregion
//#region src/lib/app-error-reporting.ts
function reportAppError(error, context = {}) {
	if (typeof window === "undefined") return;
	console.error("App error", error, context);
}
//#endregion
//#region src/lib/auth.ts
function useAuthSession() {
	const [authState, setAuthState] = useState({
		isAuthenticated: false,
		isAuthLoading: true
	});
	useEffect(() => {
		let isMounted = true;
		const syncSession = async () => {
			const { data } = await supabase.auth.getSession();
			if (!isMounted) return;
			setAuthState({
				isAuthenticated: Boolean(data.session),
				isAuthLoading: false
			});
		};
		syncSession();
		const { data } = supabase.auth.onAuthStateChange((_event, session) => {
			if (!isMounted) return;
			setAuthState({
				isAuthenticated: Boolean(session),
				isAuthLoading: false
			});
		});
		return () => {
			isMounted = false;
			data.subscription.unsubscribe();
		};
	}, []);
	return authState;
}
//#endregion
//#region src/components/site/SmoothScroll.tsx
var lenisInstance = null;
var gsapTickerCallback = null;
var localRafId = 0;
function SmoothScroll({ children }) {
	useEffect(() => {
		if (typeof window === "undefined") return void 0;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return void 0;
		if (lenisInstance) return void 0;
		let isActive = true;
		let instance = null;
		const init = async () => {
			const { default: Lenis } = await import("lenis");
			instance = new Lenis({
				duration: 1.2,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
				smoothWheel: true
			});
			if (!isActive) {
				instance.destroy();
				return;
			}
			lenisInstance = instance;
			try {
				const { gsap } = await import("gsap");
				const { ScrollTrigger } = await import("gsap/ScrollTrigger");
				gsap.registerPlugin(ScrollTrigger);
				instance.on("scroll", () => {
					ScrollTrigger.update();
				});
				gsapTickerCallback = (time) => {
					instance.raf(time * 1e3);
				};
				gsap.ticker.add(gsapTickerCallback);
				gsap.ticker.lagSmoothing(0);
			} catch {
				const loop = (time) => {
					instance.raf(time);
					localRafId = window.requestAnimationFrame(loop);
				};
				localRafId = window.requestAnimationFrame(loop);
			}
		};
		init();
		return () => {
			isActive = false;
			if (instance && lenisInstance === instance) {
				instance.destroy();
				lenisInstance = null;
			}
			if (localRafId) {
				window.cancelAnimationFrame(localRafId);
				localRafId = 0;
			}
			if (gsapTickerCallback) import("gsap").then(({ gsap }) => {
				if (gsapTickerCallback) gsap.ticker.remove(gsapTickerCallback);
				gsapTickerCallback = null;
			}).catch(() => {});
		};
	}, []);
	return /* @__PURE__ */ jsx(Fragment, { children });
}
//#endregion
//#region src/components/site/ThemeProvider.tsx
var ThemeCtx = createContext(null);
var STORAGE_KEY = "genCART-theme";
function applyTheme(t) {
	if (typeof document === "undefined") return;
	const root = document.documentElement;
	root.classList.toggle("dark", t === "dark");
	root.style.colorScheme = t;
	const meta = document.querySelector("meta[name=\"theme-color\"]");
	if (meta) meta.setAttribute("content", t === "dark" ? "#050816" : "#F5FAF7");
}
function ThemeProvider({ children }) {
	const [theme, setThemeState] = useState("light");
	useEffect(() => {
		const initial = (typeof localStorage !== "undefined" && localStorage.getItem(STORAGE_KEY)) ?? "light";
		setThemeState(initial);
		applyTheme(initial);
	}, []);
	const setTheme = (t) => {
		setThemeState(t);
		applyTheme(t);
		try {
			localStorage.setItem(STORAGE_KEY, t);
		} catch {}
	};
	const toggle = () => setTheme(theme === "dark" ? "light" : "dark");
	return /* @__PURE__ */ jsx(ThemeCtx.Provider, {
		value: {
			theme,
			toggle,
			setTheme
		},
		children
	});
}
function useTheme() {
	const ctx = useContext(ThemeCtx);
	if (!ctx) return {
		theme: "light",
		toggle: () => {},
		setTheme: () => {}
	};
	return ctx;
}
//#endregion
//#region src/components/site/ThemeToggle.tsx
function ThemeToggle({ className = "" }) {
	const { theme, toggle } = useTheme();
	const isDark = theme === "dark";
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		onClick: toggle,
		"aria-label": `Switch to ${isDark ? "light" : "dark"} theme`,
		"aria-pressed": isDark,
		className: "relative inline-flex items-center justify-center size-10 rounded-full border border-[var(--hairline)] bg-[var(--surface)]/60 backdrop-blur transition-all duration-300 hover:border-[var(--emerald-accent)] hover:shadow-[0_0_20px_color-mix(in_oklab,var(--emerald-accent)_30%,transparent)] " + className,
		children: [/* @__PURE__ */ jsx(Sun, { className: `absolute size-4 transition-all duration-500 ${isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}` }), /* @__PURE__ */ jsx(Moon, { className: `absolute size-4 transition-all duration-500 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}` })]
	});
}
//#endregion
//#region src/lib/search.ts
var storageKey = "gencart-recent-searches";
var trendingSearches = [
	"MacBook Air",
	"Wireless headphones",
	"Gaming laptops",
	"Best monitors",
	"Smartwatches",
	"Mechanical keyboards",
	"Studio audio",
	"Creator laptops"
];
function normalize(value) {
	return value.trim().toLowerCase();
}
function getStoredRecentSearches() {
	if (typeof window === "undefined") return [];
	try {
		const stored = window.localStorage.getItem(storageKey);
		return stored ? JSON.parse(stored) : [];
	} catch {
		return [];
	}
}
function saveRecentSearches(items) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(storageKey, JSON.stringify(items));
}
function getRecentSearches() {
	return getStoredRecentSearches();
}
function persistRecentSearch(term) {
	const normalized = term.trim();
	if (!normalized) return;
	saveRecentSearches([normalized, ...getStoredRecentSearches().filter((item) => item.toLowerCase() !== normalized.toLowerCase())].slice(0, 6));
}
function clearRecentSearches() {
	saveRecentSearches([]);
}
function getTrendingSearchTerms() {
	return trendingSearches;
}
function getSearchSuggestions(query, recentSearches = [], savedProducts = []) {
	const term = normalize(query);
	const groups = [];
	if (term) {
		const productMatches = products.filter((product) => {
			return `${product.name} ${product.brand} ${product.category} ${product.shortDescription}`.toLowerCase().includes(term);
		}).slice(0, 4).map((product) => ({
			id: `product-${product.slug}`,
			label: product.name,
			kind: "product",
			detail: `${product.brand} · ${product.category}`,
			href: "/product/$slug",
			params: { slug: product.slug }
		}));
		const categoryMatches = categories.filter((category) => normalize(category.name).includes(term) || normalize(category.slug).includes(term)).slice(0, 3).map((category) => ({
			id: `category-${category.slug}`,
			label: category.name,
			kind: "category",
			detail: category.description,
			href: "/category/$slug",
			params: { slug: category.slug }
		}));
		const brandMatches = brands.filter((brand) => normalize(brand.name).includes(term) || normalize(brand.slug).includes(term)).slice(0, 3).map((brand) => ({
			id: `brand-${brand.slug}`,
			label: brand.name,
			kind: "brand",
			detail: brand.description,
			href: "/brand/$slug",
			params: { slug: brand.slug }
		}));
		const reviewMatches = reviews.filter((review) => {
			return `${review.title} ${review.excerpt} ${review.productName}`.toLowerCase().includes(term);
		}).slice(0, 3).map((review) => ({
			id: `review-${review.slug}`,
			label: review.title,
			kind: "review",
			detail: review.productName,
			href: "/reviews/$slug",
			params: { slug: review.slug }
		}));
		const guideMatches = guides.filter((guide) => {
			return `${guide.title} ${guide.excerpt} ${guide.category}`.toLowerCase().includes(term);
		}).slice(0, 3).map((guide) => ({
			id: `guide-${guide.slug}`,
			label: guide.title,
			kind: "guide",
			detail: guide.category,
			href: "/guides/$slug",
			params: { slug: guide.slug }
		}));
		if (productMatches.length) groups.push({
			title: "Products",
			items: productMatches
		});
		if (categoryMatches.length) groups.push({
			title: "Categories",
			items: categoryMatches
		});
		if (brandMatches.length) groups.push({
			title: "Brands",
			items: brandMatches
		});
		if (reviewMatches.length) groups.push({
			title: "Reviews",
			items: reviewMatches
		});
		if (guideMatches.length) groups.push({
			title: "Guides",
			items: guideMatches
		});
		if (!groups.length) groups.push({
			title: "Suggestions",
			items: getTrendingSearchTerms().slice(0, 6).map((item) => ({
				id: item,
				label: item,
				kind: "trend",
				detail: "Trending discovery"
			}))
		});
	} else {
		const recentItems = recentSearches.slice(0, 4).map((item) => ({
			id: item,
			label: item,
			kind: "recent",
			detail: "Recent search"
		}));
		const trendingItems = getTrendingSearchTerms().slice(0, 6).map((item) => ({
			id: item,
			label: item,
			kind: "trend",
			detail: "Trending discovery"
		}));
		if (recentItems.length) groups.push({
			title: "Recent searches",
			items: recentItems
		});
		if (savedProducts.length) groups.push({
			title: "Saved picks",
			items: savedProducts.slice(0, 4).map((product) => ({
				id: product.slug,
				label: product.name,
				kind: "product",
				detail: `${product.brand} saved`,
				href: "/product/$slug",
				params: { slug: product.slug }
			}))
		});
		groups.push({
			title: "Trending searches",
			items: trendingItems
		});
	}
	return groups;
}
//#endregion
//#region src/components/site/SearchBar.tsx
function GlobalSearch({ className = "", placeholder = "Search products, brands, categories..." }) {
	const [query, setQuery] = useState("");
	const [open, setOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const inputRef = useRef(null);
	const navigate = useNavigate();
	const savedProducts = useSavedProducts();
	const [recentSearches, setRecentSearches] = useState([]);
	useEffect(() => {
		setRecentSearches(getRecentSearches());
	}, []);
	useEffect(() => {
		if (!open) return;
		const handleKeyDown = (event) => {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
				event.preventDefault();
				inputRef.current?.focus();
				setOpen(true);
			}
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [open]);
	const suggestionGroups = useMemo(() => getSearchSuggestions(query, recentSearches, savedProducts), [
		query,
		recentSearches,
		savedProducts
	]);
	const flattenedItems = useMemo(() => suggestionGroups.flatMap((group) => group.items), [suggestionGroups]);
	useEffect(() => {
		setActiveIndex(0);
	}, [query]);
	const handleSubmit = (event) => {
		event.preventDefault();
		const value = query.trim();
		if (!value) return;
		persistRecentSearch(value);
		setRecentSearches(getRecentSearches());
		navigate({
			to: "/search",
			search: { q: value }
		});
		setOpen(false);
		setQuery("");
	};
	const selectSuggestion = (item) => {
		if (item.href) {
			if (item.params) navigate({
				to: item.href,
				params: item.params
			});
			else navigate({ to: item.href });
			setOpen(false);
			setQuery("");
			return;
		}
		const term = item.label.trim();
		persistRecentSearch(term);
		setRecentSearches(getRecentSearches());
		navigate({
			to: "/search",
			search: { q: term }
		});
		setOpen(false);
		setQuery("");
	};
	const handleKeyDown = (event) => {
		if (!flattenedItems.length) return;
		if (event.key === "ArrowDown") {
			event.preventDefault();
			setActiveIndex((prev) => (prev + 1) % flattenedItems.length);
			setOpen(true);
		}
		if (event.key === "ArrowUp") {
			event.preventDefault();
			setActiveIndex((prev) => (prev - 1 + flattenedItems.length) % flattenedItems.length);
			setOpen(true);
		}
		if (event.key === "Enter") {
			const current = flattenedItems[activeIndex];
			if (current) {
				event.preventDefault();
				selectSuggestion(current);
			}
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: `relative ${className}`,
		children: [
			/* @__PURE__ */ jsxs("button", {
				type: "button",
				onClick: () => {
					setOpen(true);
					setTimeout(() => inputRef.current?.focus(), 50);
				},
				className: "inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-[var(--surface)]/80 px-3 py-2 text-sm text-muted-foreground shadow-sm transition-all hover:border-[var(--emerald-accent)] hover:text-foreground lg:hidden",
				children: [/* @__PURE__ */ jsx(Search, { className: "size-4" }), "Search"]
			}),
			/* @__PURE__ */ jsxs("form", {
				onSubmit: handleSubmit,
				className: "hidden lg:flex relative flex-1 min-w-0 max-w-[360px]",
				children: [
					/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }),
					/* @__PURE__ */ jsx("input", {
						ref: inputRef,
						value: query,
						onChange: (event) => {
							setQuery(event.target.value);
							setOpen(true);
						},
						onFocus: () => setOpen(true),
						onKeyDown: handleKeyDown,
						placeholder,
						className: "w-full min-w-0 rounded-full border border-[var(--hairline)] bg-[var(--surface)]/80 py-2.5 pl-10 pr-10 text-sm text-foreground shadow-sm outline-none transition-all focus:border-[var(--emerald-accent)] focus:bg-[var(--surface)]"
					}),
					query ? /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setQuery(""),
						className: "absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-[var(--surface-2)] hover:text-foreground",
						children: /* @__PURE__ */ jsx(X, { className: "size-3.5" })
					}) : /* @__PURE__ */ jsx("kbd", {
						className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded border border-[var(--hairline)] bg-[var(--surface-2)] px-1.5 py-0.5 text-[10px] font-mono-tech text-muted-foreground",
						children: "⌘K"
					})
				]
			}),
			/* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 10,
					scale: .98
				},
				animate: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				exit: {
					opacity: 0,
					y: 8,
					scale: .98
				},
				transition: {
					duration: .2,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "fixed inset-x-4 top-24 z-[70] max-w-2xl rounded-3xl border border-[var(--hairline)] bg-background/95 p-4 shadow-2xl backdrop-blur-xl lg:absolute lg:inset-x-0 lg:top-full lg:mt-3 lg:max-w-2xl lg:p-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-[10px] font-mono-tech uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
							children: "Search intelligence"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground",
							children: "Discover products, stories, comparisons, and guides in one place."
						})] }), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setOpen(false),
							className: "rounded-full p-2 text-muted-foreground transition-colors hover:bg-[var(--surface)] hover:text-foreground",
							children: /* @__PURE__ */ jsx(X, { className: "size-4" })
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mb-3 lg:hidden",
						children: /* @__PURE__ */ jsxs("form", {
							onSubmit: handleSubmit,
							className: "relative",
							children: [
								/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }),
								/* @__PURE__ */ jsx("input", {
									ref: inputRef,
									value: query,
									onChange: (event) => {
										setQuery(event.target.value);
										setOpen(true);
									},
									onFocus: () => setOpen(true),
									onKeyDown: handleKeyDown,
									placeholder,
									className: "w-full rounded-full border border-[var(--hairline)] bg-[var(--surface)]/80 py-3 pl-10 pr-10 text-sm text-foreground shadow-sm outline-none transition-all focus:border-[var(--emerald-accent)]"
								}),
								query ? /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => setQuery(""),
									className: "absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-[var(--surface-2)] hover:text-foreground",
									children: /* @__PURE__ */ jsx(X, { className: "size-3.5" })
								}) : null
							]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "max-h-[60vh] overflow-y-auto pr-1",
						children: [suggestionGroups.map((group, groupIndex) => /* @__PURE__ */ jsxs("div", {
							className: "mb-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "mb-2 flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground",
								children: [/* @__PURE__ */ jsx(Sparkles, { className: "size-3 text-[var(--emerald-accent)]" }), group.title]
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-1",
								children: group.items.map((item, index) => {
									return /* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: () => selectSuggestion(item),
										className: `flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left text-sm transition-all ${suggestionGroups.slice(0, groupIndex).reduce((sum, current) => sum + current.items.length, 0) + index === activeIndex ? "bg-[var(--surface)] text-foreground" : "text-muted-foreground hover:bg-[var(--surface)] hover:text-foreground"}`,
										children: [/* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-2.5",
											children: [item.kind === "recent" ? /* @__PURE__ */ jsx(Clock3, { className: "size-3.5" }) : /* @__PURE__ */ jsx(Search, { className: "size-3.5" }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
												className: "block",
												children: item.label
											}), item.detail ? /* @__PURE__ */ jsx("span", {
												className: "block text-[11px] text-muted-foreground",
												children: item.detail
											}) : null] })]
										}), /* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5 text-muted-foreground" })]
									}, `${group.title}-${item.id}`);
								})
							})]
						}, group.title)), !suggestionGroups.length && /* @__PURE__ */ jsx("div", {
							className: "rounded-2xl border border-dashed border-[var(--hairline)] bg-[var(--surface)]/70 px-4 py-6 text-center text-sm text-muted-foreground",
							children: "Start typing to discover curated products and editorial content."
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--hairline)] pt-3 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ jsx("span", { children: "Press Enter to search, Esc to close." }), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => {
								clearRecentSearches();
								setRecentSearches([]);
							},
							className: "text-[var(--emerald-accent)] transition-colors hover:text-foreground",
							children: "Clear recent searches"
						})]
					})
				]
			}) })
		]
	});
}
//#endregion
//#region src/components/site/Navbar.tsx
var megaCategories = [
	{
		icon: Laptop,
		label: "Computing",
		desc: "Laptops & tablets",
		href: "/category/computing"
	},
	{
		icon: Headphones,
		label: "Audio",
		desc: "Monitors & buds",
		href: "/category/audio"
	},
	{
		icon: Smartphone,
		label: "Mobile",
		desc: "Flagship phones",
		href: "/category/mobile"
	},
	{
		icon: Watch,
		label: "Wearables",
		desc: "Vitals & smartwatch",
		href: "/category/wearables"
	},
	{
		icon: Camera,
		label: "Cameras",
		desc: "Cinema & creative imaging",
		href: "/category/cameras"
	}
];
var navItems = [
	{
		label: "Products",
		href: "/categories",
		hasMega: true
	},
	{
		label: "Collections",
		href: "/collections"
	},
	{
		label: "Reviews",
		href: "/reviews"
	},
	{
		label: "Deals",
		href: "/deals"
	},
	{
		label: "Guides",
		href: "/guides"
	},
	{
		label: "Compare",
		href: "/compare"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mega, setMega] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	useReducedMotion();
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useEffect(() => {
		if (mobileMenuOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileMenuOpen]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-xl border-b border-[var(--hairline)] ${scrolled || mobileMenuOpen ? "bg-background/90" : ""}`,
		onMouseLeave: () => setMega(false),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex min-h-20 max-w-7xl flex-nowrap items-center justify-between gap-3 px-6 py-3 lg:px-10 lg:py-0",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "z-50 flex flex-shrink-0 items-center gap-3 group",
					onClick: () => setMobileMenuOpen(false),
					children: [/* @__PURE__ */ jsx("img", {
						src: "/assets/logo.png",
						alt: "genCART logo",
						className: "h-9 w-9 rounded-full border border-hairline bg-surface object-cover"
					}), /* @__PURE__ */ jsxs("span", {
						className: "font-display text-xl font-semibold tracking-tight",
						children: ["genCART", /* @__PURE__ */ jsx("span", {
							className: "text-emerald-accent text-xs align-top ml-0.5",
							children: "®"
						})]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden lg:flex items-center gap-8 flex-1 justify-center",
					children: navItems.map((item) => item.hasMega ? /* @__PURE__ */ jsxs("button", {
						onMouseEnter: () => setMega(true),
						className: "nav-link text-sm font-medium flex items-center gap-1 cursor-pointer",
						children: [item.label, /* @__PURE__ */ jsx(ChevronDown, { className: `size-3.5 transition-transform ${mega ? "rotate-180" : ""}` })]
					}, item.label) : /* @__PURE__ */ jsx(Link, {
						to: item.href,
						onMouseEnter: () => setMega(false),
						className: "nav-link text-sm font-medium",
						children: item.label
					}, item.label))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "z-50 ml-auto flex min-w-0 items-center justify-end gap-2 lg:gap-3",
					children: [
						/* @__PURE__ */ jsx(GlobalSearch, { className: "flex-1 min-w-0 max-w-[520px] sm:max-w-[420px]" }),
						/* @__PURE__ */ jsx(ThemeToggle, {}),
						/* @__PURE__ */ jsx(Link, {
							to: "/login",
							className: "hidden lg:inline-flex items-center rounded-full border border-[var(--hairline)] px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-[var(--surface-2)]",
							children: "Login"
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/collections",
							className: "btn-accent hidden xl:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold",
							children: ["Shop Now", /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })]
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setMobileMenuOpen(!mobileMenuOpen),
							className: "cursor-pointer rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-[var(--surface-2)] hover:text-foreground lg:hidden",
							"aria-label": "Toggle menu",
							children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsx(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: mega && /* @__PURE__ */ jsx(motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			transition: {
				duration: .3,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "absolute inset-x-0 top-full overflow-hidden hidden lg:block border-b border-[var(--hairline)] bg-background/95 backdrop-blur-xl",
			onMouseLeave: () => setMega(false),
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-10 pb-8 pt-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "surface-card-2 p-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8",
					style: { boxShadow: "var(--shadow-elegant)" },
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-4",
						children: "Categories"
					}), /* @__PURE__ */ jsx(motion.ul, {
						initial: "hidden",
						animate: "visible",
						variants: {
							hidden: {},
							visible: { transition: { staggerChildren: .04 } }
						},
						className: "space-y-1",
						children: megaCategories.map((c) => /* @__PURE__ */ jsx(motion.li, {
							variants: {
								hidden: {
									opacity: 0,
									y: 10
								},
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										ease: "easeOut",
										duration: .25
									}
								}
							},
							children: /* @__PURE__ */ jsxs(Link, {
								to: c.href,
								className: "group flex items-center gap-4 rounded-xl px-3 py-3 hover:bg-[color-mix(in_oklab,var(--emerald-accent)_8%,transparent)] transition-colors",
								onClick: () => setMega(false),
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "grid place-items-center size-10 rounded-lg bg-[var(--surface-2)] border border-[var(--hairline)] text-[var(--emerald-accent)] group-hover:ring-emerald transition",
										children: /* @__PURE__ */ jsx(c.icon, { className: "size-5" })
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "flex-1",
										children: [/* @__PURE__ */ jsx("span", {
											className: "block text-sm font-medium",
											children: c.label
										}), /* @__PURE__ */ jsx("span", {
											className: "block text-xs text-muted-foreground",
											children: c.desc
										})]
									}),
									/* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4 text-muted-foreground group-hover:text-[var(--emerald-accent)] transition" })
								]
							})
						}, c.label))
					})] }), /* @__PURE__ */ jsxs("div", {
						className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--surface-2)] via-[var(--surface)] to-[color-mix(in_oklab,var(--emerald-accent)_15%,var(--background))] border border-[var(--hairline)] p-8",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-60" }),
							/* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-accent)] mb-3",
										children: "Featured · 2026"
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "font-display text-3xl font-semibold mb-2",
										children: "genCART Laptop Air"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground max-w-sm mb-6",
										children: "M-class silicon, edge-to-edge OLED, all-day battery. Engineered as one."
									}),
									/* @__PURE__ */ jsx(Link, {
										to: "/product/$slug",
										params: { slug: "genCART-laptop-air" },
										className: "btn-ghost-glow inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide",
										onClick: () => setMega(false),
										children: "Explore →"
									})
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute -right-10 -bottom-10 size-60 rounded-full blur-3xl",
								style: {
									background: "var(--gradient-accent)",
									opacity: .25
								}
							})
						]
					})]
				})
			})
		}) })]
	}), /* @__PURE__ */ jsx(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ jsx(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .25 },
		className: "fixed inset-0 z-40 bg-background/80 backdrop-blur-xl lg:hidden",
		onClick: () => setMobileMenuOpen(false),
		children: /* @__PURE__ */ jsxs(motion.div, {
			initial: { x: "100%" },
			animate: { x: 0 },
			exit: { x: "100%" },
			transition: {
				type: "spring",
				damping: 26,
				stiffness: 220
			},
			className: "fixed inset-y-0 right-0 w-full sm:max-w-md bg-background border-l border-[var(--hairline)] pt-28 pb-8 px-8 flex flex-col justify-between",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-6 overflow-y-auto max-h-[calc(100vh-250px)] pr-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)]",
						children: "Navigation"
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 gap-2",
						children: [navItems.map((item) => /* @__PURE__ */ jsxs(Link, {
							to: item.href,
							onClick: () => setMobileMenuOpen(false),
							className: "text-2xl font-display font-semibold hover:text-[var(--emerald-accent)] transition-colors py-2 flex items-center justify-between",
							children: [item.label, /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-5 text-muted-foreground" })]
						}, item.label)), /* @__PURE__ */ jsxs(Link, {
							to: "/login",
							onClick: () => setMobileMenuOpen(false),
							className: "text-2xl font-display font-semibold hover:text-[var(--emerald-accent)] transition-colors py-2 flex items-center justify-between",
							children: ["Login", /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-5 text-muted-foreground" })]
						})]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "border-t border-[var(--hairline)] pt-6 space-y-4",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-accent)]",
						children: "Product Categories"
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
						children: megaCategories.map((c) => /* @__PURE__ */ jsxs(Link, {
							to: c.href,
							onClick: () => setMobileMenuOpen(false),
							className: "flex items-center gap-3 p-3 rounded-xl surface-card-2 hover:bg-[color-mix(in_oklab,var(--emerald-accent)_8%,transparent)] transition-colors",
							children: [/* @__PURE__ */ jsx("span", {
								className: "grid place-items-center size-8 rounded-lg bg-background border border-[var(--hairline)] text-[var(--emerald-accent)]",
								children: /* @__PURE__ */ jsx(c.icon, { className: "size-4" })
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium",
								children: c.label
							})]
						}, c.label))
					})]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-4 border-t border-[var(--hairline)] pt-6",
				children: [/* @__PURE__ */ jsxs(Link, {
					to: "/collections",
					className: "btn-accent w-full flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold",
					onClick: () => setMobileMenuOpen(false),
					children: ["Shop All Collections", /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })]
				}), /* @__PURE__ */ jsx("p", {
					className: "text-center text-xs text-muted-foreground",
					children: "genCART Affiliate E-Commerce Platform · 2026"
				})]
			})]
		})
	}) })] });
}
//#endregion
//#region src/components/dashboard/NotificationPanel.tsx
function NotificationPanel({ isOpen, onClose }) {
	return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-40",
		onClick: onClose
	}), /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 10,
			scale: .95
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 10,
			scale: .95
		},
		transition: {
			duration: .18,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "absolute right-0 top-full mt-3 w-80 sm:w-96 surface-card-2 border border-[var(--hairline)] rounded-2xl shadow-2xl overflow-hidden z-50 p-4 space-y-3",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between pb-2 border-b border-[var(--hairline)]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(Bell, { className: "size-4 text-[var(--emerald-accent)]" }), /* @__PURE__ */ jsx("span", {
						className: "font-display text-sm font-semibold text-foreground",
						children: "Notifications"
					})]
				}), /* @__PURE__ */ jsxs("span", {
					className: "font-mono-tech text-[10px] uppercase tracking-wider text-[var(--emerald-accent)] bg-[var(--surface-2)] px-2 py-0.5 rounded-full",
					children: [dashboardData.user.unreadNotifications, " NEW"]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "space-y-2 max-h-80 overflow-y-auto",
				children: dashboardData.notifications.map((item) => {
					const Icon = item.type === "deal" ? Tag : item.type === "compare" ? Scale : BookOpen;
					return /* @__PURE__ */ jsx(Link, {
						to: item.link,
						onClick: onClose,
						className: "block p-3 rounded-xl hover:bg-[var(--surface)] transition-all relative group",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "p-2 rounded-lg bg-[var(--surface-2)] text-[var(--emerald-accent)] shrink-0 mt-0.5",
								children: /* @__PURE__ */ jsx(Icon, { className: "size-4" })
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-1 pr-2",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-xs font-semibold text-foreground group-hover:text-[var(--emerald-accent)] transition-colors leading-snug",
										children: item.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[11px] text-muted-foreground leading-normal line-clamp-2",
										children: item.description
									}),
									/* @__PURE__ */ jsx("span", {
										className: "font-mono-tech text-[10px] text-muted-foreground/60 block pt-0.5",
										children: item.time
									})
								]
							})]
						})
					}, item.id);
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "pt-2 border-t border-[var(--hairline)] text-center",
				children: /* @__PURE__ */ jsxs("button", {
					onClick: onClose,
					className: "text-xs font-mono-tech text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1",
					children: [/* @__PURE__ */ jsx(Check, { className: "size-3 text-[var(--emerald-accent)]" }), " Mark all as read"]
				})
			})
		]
	})] }) });
}
//#endregion
//#region src/components/dashboard/ProfileDropdown.tsx
function ProfileDropdown({ isOpen, onClose }) {
	const navigate = useNavigate();
	const handleSignOut = async () => {
		onClose();
		await supabase.auth.signOut();
		navigate({ to: "/" });
	};
	const handleEditPreferences = () => {
		onClose();
		resetOnboardingPreferences();
		window.location.reload();
	};
	const menuItems = [
		{
			icon: User,
			label: "Profile",
			href: "/dashboard"
		},
		{
			icon: Sparkles,
			label: "My Interests",
			href: "/dashboard"
		},
		{
			icon: Bookmark,
			label: "Saved Products",
			href: "/wishlist"
		},
		{
			icon: Scale,
			label: "My Comparisons",
			href: "/compare"
		},
		{
			icon: Settings,
			label: "Settings",
			href: "/dashboard"
		}
	];
	return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-40",
		onClick: onClose
	}), /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 10,
			scale: .95
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 10,
			scale: .95
		},
		transition: {
			duration: .18,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "absolute right-0 top-full mt-3 w-64 surface-card-2 border border-[var(--hairline)] rounded-2xl shadow-2xl overflow-hidden z-50 p-2 space-y-1",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "p-3 border-b border-[var(--hairline)] mb-1",
				children: [/* @__PURE__ */ jsx("p", {
					className: "font-display text-sm font-semibold text-foreground",
					children: dashboardData.user.name
				}), /* @__PURE__ */ jsx("p", {
					className: "font-mono-tech text-[11px] text-muted-foreground truncate",
					children: dashboardData.user.email
				})]
			}),
			menuItems.map((item, idx) => {
				const Icon = item.icon;
				return /* @__PURE__ */ jsxs(Link, {
					to: item.href,
					onClick: onClose,
					className: "flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-foreground/80 hover:text-foreground hover:bg-[var(--surface)] transition-all group",
					children: [/* @__PURE__ */ jsx(Icon, { className: "size-4 text-muted-foreground group-hover:text-[var(--emerald-accent)] transition-colors" }), item.label]
				}, idx);
			}),
			/* @__PURE__ */ jsx("div", {
				className: "pt-1 border-t border-[var(--hairline)]",
				children: /* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: handleEditPreferences,
					className: "w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-foreground/80 hover:text-[var(--cyan-accent)] hover:bg-[var(--surface)] transition-all",
					children: [/* @__PURE__ */ jsx(SlidersHorizontal, { className: "size-4" }), "Edit Preferences"]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "pt-1 border-t border-[var(--hairline)]",
				children: /* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: handleSignOut,
					className: "w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-rose-500 hover:bg-rose-500/10 transition-all",
					children: [/* @__PURE__ */ jsx(LogOut, { className: "size-4" }), "Log Out"]
				})
			})
		]
	})] }) });
}
//#endregion
//#region src/components/dashboard/LoggedInNavbar.tsx
var loggedInNavItems = [
	{
		label: "Discover",
		href: "/dashboard",
		active: true
	},
	{
		label: "Collections",
		href: "/collections"
	},
	{
		label: "Reviews",
		href: "/reviews"
	},
	{
		label: "Deals",
		href: "/deals"
	},
	{
		label: "Guides",
		href: "/guides"
	},
	{
		label: "Compare",
		href: "/compare"
	}
];
function LoggedInNavbar() {
	const navRef = useRef(null);
	const [notificationsOpen, setNotificationsOpen] = useState(false);
	const [profileOpen, setProfileOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const currentPath = useRouterState({ select: (s) => s.location.pathname });
	const savedProducts = useSavedProducts();
	useEffect(() => {
		let cleanup;
		let isMounted = true;
		(async () => {
			const { gsap } = await import("gsap");
			const { ScrollTrigger } = await import("gsap/ScrollTrigger");
			gsap.registerPlugin(ScrollTrigger);
			const nav = navRef.current;
			if (!nav || !isMounted) return;
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
			const scrollTween = gsap.to(nav, {
				paddingTop: "0.5rem",
				paddingBottom: "0.5rem",
				boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
				borderColor: "var(--hairline)",
				ease: "none",
				scrollTrigger: {
					start: "top+=20 top",
					end: "top+=80 top",
					scrub: .3
				}
			});
			cleanup = () => {
				scrollTween.scrollTrigger?.kill();
				scrollTween.kill();
			};
		})();
		return () => {
			isMounted = false;
			cleanup?.();
		};
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("header", {
		className: "fixed top-0 inset-x-0 z-40 px-4 sm:px-8 pt-4 pointer-events-none",
		children: /* @__PURE__ */ jsxs(motion.div, {
			ref: navRef,
			initial: {
				opacity: 0,
				y: -20
			},
			animate: {
				opacity: 1,
				y: 0
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
			className: "pointer-events-auto mx-auto flex max-w-7xl flex-nowrap items-center justify-between gap-3 rounded-full border border-[var(--hairline)] bg-background/85 px-4 py-3 shadow-xl backdrop-blur-xl transition-all sm:px-5 sm:py-2.5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 shrink-0 items-center gap-3",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/dashboard",
						className: "flex items-center gap-2 group",
						children: [/* @__PURE__ */ jsx("div", {
							className: "relative w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105",
							style: { background: "var(--gradient-accent)" },
							children: /* @__PURE__ */ jsx("span", {
								className: "font-display text-sm font-bold text-background",
								children: "Æ"
							})
						}), /* @__PURE__ */ jsxs("span", {
							className: "font-display text-lg font-semibold tracking-tight text-foreground",
							children: ["genCART", /* @__PURE__ */ jsx("span", {
								className: "text-[var(--emerald-accent)] text-[10px] align-top ml-0.5",
								children: "®"
							})]
						})]
					}), /* @__PURE__ */ jsxs("span", {
						className: "hidden md:inline-flex items-center gap-1.5 rounded-full border border-[var(--hairline)] bg-[var(--surface)] px-2.5 py-0.5 text-[10px] font-mono-tech uppercase tracking-widest text-[var(--emerald-accent)]",
						children: [/* @__PURE__ */ jsx(Sparkles, { className: "size-3" }), " Workspace"]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden md:flex items-center gap-1 flex-1 justify-center",
					children: loggedInNavItems.map((item, idx) => {
						const isActive = item.href === "/dashboard" ? currentPath === "/dashboard" : currentPath.startsWith(item.href);
						return /* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								y: -8
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .3,
								delay: .1 + idx * .05
							},
							children: /* @__PURE__ */ jsxs(Link, {
								to: item.href,
								className: `px-3.5 py-1.5 rounded-full text-xs font-medium transition-all relative ${isActive ? "text-foreground bg-[var(--surface-2)] font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-[var(--surface)]"}`,
								children: [item.label, isActive && /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 inset-x-3 h-0.5 rounded-full bg-[var(--emerald-accent)]" })]
							})
						}, item.label);
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "ml-auto flex min-w-0 items-center justify-end gap-2 sm:gap-3",
					children: [
						/* @__PURE__ */ jsx(GlobalSearch, { className: "flex-1 min-w-0 max-w-[520px] sm:max-w-[420px]" }),
						/* @__PURE__ */ jsx(Link, {
							to: "/wishlist",
							children: /* @__PURE__ */ jsxs(motion.div, {
								whileHover: { scale: 1.05 },
								whileTap: { scale: .95 },
								className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface)] text-xs font-medium text-foreground border border-[var(--hairline)] transition-all hover:border-[var(--emerald-accent)]",
								children: [
									/* @__PURE__ */ jsx(Bookmark, { className: "size-3.5 text-[var(--emerald-accent)]" }),
									/* @__PURE__ */ jsx("span", {
										className: "hidden sm:inline",
										children: "Saved"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "inline-flex items-center justify-center px-1.5 py-0.5 rounded-full bg-[var(--emerald-accent)]/20 text-[10px] font-mono-tech text-[var(--emerald-accent)] font-bold",
										children: savedProducts.length
									})
								]
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsxs(motion.button, {
								whileHover: { scale: 1.05 },
								whileTap: { scale: .95 },
								onClick: () => setNotificationsOpen(!notificationsOpen),
								className: "relative p-2 rounded-full bg-[var(--surface)] text-foreground border border-[var(--hairline)] hover:border-[var(--emerald-accent)] transition-all",
								children: [/* @__PURE__ */ jsx(Bell, { className: "size-4" }), dashboardData.user.unreadNotifications > 0 && /* @__PURE__ */ jsx("span", { className: "absolute top-1 right-1 size-2 rounded-full bg-[var(--emerald-accent)] animate-pulse" })]
							}), /* @__PURE__ */ jsx(NotificationPanel, {
								isOpen: notificationsOpen,
								onClose: () => setNotificationsOpen(false)
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsxs(motion.button, {
								whileHover: { scale: 1.03 },
								whileTap: { scale: .97 },
								onClick: () => setProfileOpen(!profileOpen),
								className: "flex items-center gap-2 p-1 pl-1.5 pr-2.5 rounded-full bg-[var(--surface)] border border-[var(--hairline)] hover:border-[var(--emerald-accent)] transition-all",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "size-6 rounded-full overflow-hidden bg-[var(--surface-2)] border border-[var(--hairline)] shrink-0 flex items-center justify-center",
										children: /* @__PURE__ */ jsx("img", {
											src: dashboardData.user.avatar,
											alt: dashboardData.user.name,
											className: "size-full object-cover"
										})
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-xs font-semibold text-foreground hidden sm:inline",
										children: dashboardData.user.firstName
									}),
									/* @__PURE__ */ jsx(ChevronDown, { className: "size-3 text-muted-foreground" })
								]
							}), /* @__PURE__ */ jsx(ProfileDropdown, {
								isOpen: profileOpen,
								onClose: () => setProfileOpen(false)
							})]
						}),
						/* @__PURE__ */ jsx(ThemeToggle, {}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setMobileMenuOpen(!mobileMenuOpen),
							className: "p-2 rounded-full surface-card border border-[var(--hairline)] md:hidden text-foreground",
							children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "size-4" }) : /* @__PURE__ */ jsx(Menu, { className: "size-4" })
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ jsx(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: -10
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: -10
		},
		className: "fixed inset-x-4 top-20 z-30 surface-card-2 border border-[var(--hairline)] rounded-3xl p-6 shadow-2xl space-y-4 md:hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3 pb-3 border-b border-[var(--hairline)]",
			children: [/* @__PURE__ */ jsx("div", {
				className: "size-10 rounded-full overflow-hidden bg-[var(--surface-2)]",
				children: /* @__PURE__ */ jsx("img", {
					src: dashboardData.user.avatar,
					alt: dashboardData.user.name,
					className: "size-full object-cover"
				})
			}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "text-sm font-semibold",
				children: dashboardData.user.name
			}), /* @__PURE__ */ jsx("p", {
				className: "text-xs text-muted-foreground",
				children: dashboardData.user.email
			})] })]
		}), /* @__PURE__ */ jsx("nav", {
			className: "space-y-1",
			children: loggedInNavItems.map((item) => /* @__PURE__ */ jsxs(Link, {
				to: item.href,
				onClick: () => setMobileMenuOpen(false),
				className: "flex items-center justify-between p-3 rounded-xl text-sm font-medium hover:bg-[var(--surface)] transition-all",
				children: [item.label, /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4 text-muted-foreground" })]
			}, item.label))
		})]
	}) })] });
}
//#endregion
//#region src/components/site/Footer.tsx
var cols = [
	{
		title: "Hubs",
		items: [
			{
				label: "All Categories",
				href: "/categories"
			},
			{
				label: "Curated Collections",
				href: "/collections"
			},
			{
				label: "Live Deals",
				href: "/deals"
			},
			{
				label: "Compare Hub",
				href: "/compare"
			}
		]
	},
	{
		title: "Content",
		items: [
			{
				label: "Editorial Reviews",
				href: "/reviews"
			},
			{
				label: "Buying Guides",
				href: "/guides"
			},
			{
				label: "Best of 2026",
				href: "/best-of-2026"
			},
			{
				label: "Brand Directory",
				href: "/brands"
			}
		]
	},
	{
		title: "Editorial & Trust",
		items: [
			{
				label: "About Us",
				href: "/about"
			},
			{
				label: "How We Review",
				href: "/how-we-review"
			},
			{
				label: "Editorial Policy",
				href: "/editorial-policy"
			},
			{
				label: "Common FAQs",
				href: "/faq"
			}
		]
	},
	{
		title: "Legal & Support",
		items: [
			{
				label: "Contact Specialist",
				href: "/contact"
			},
			{
				label: "Affiliate Disclosure",
				href: "/affiliate-disclosure"
			},
			{
				label: "Privacy Policy",
				href: "/privacy-policy"
			},
			{
				label: "Terms of Service",
				href: "/terms"
			}
		]
	}
];
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative mt-32 border-t border-[var(--hairline)] bg-[var(--surface)] overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-px hairline-x" }), /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10 py-20",
			children: [
				/* @__PURE__ */ jsx(motion.div, {
					className: "mb-20",
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .5 },
					children: /* @__PURE__ */ jsx(Newsletter, {})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-16 mb-16 items-start",
					children: [/* @__PURE__ */ jsxs(motion.div, {
						className: "space-y-4",
						initial: {
							opacity: 0,
							x: -20
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: { once: true },
						transition: {
							duration: .5,
							delay: .1
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "relative w-8 h-8 rounded-lg flex items-center justify-center",
									style: { background: "var(--gradient-accent)" },
									children: /* @__PURE__ */ jsx("span", {
										className: "font-display text-sm font-bold text-[oklch(0.13_0.03_270)]",
										children: "Æ"
									})
								}), /* @__PURE__ */ jsxs("span", {
									className: "font-display text-lg font-semibold tracking-tight",
									children: ["genCART", /* @__PURE__ */ jsx("span", {
										className: "text-[var(--emerald-accent)] text-[10px] align-top ml-0.5",
										children: "®"
									})]
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground text-xs leading-relaxed max-w-xs",
								children: "genCART-powered editorial shopping platform. Independent testing, expert reviews, and reference performance picks."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "text-[10px] text-muted-foreground font-mono-tech flex flex-wrap gap-x-3 gap-y-1",
								children: [
									/* @__PURE__ */ jsx(Link, {
										to: "/dmca",
										className: "hover:text-[var(--emerald-accent)] transition-colors",
										children: "DMCA Notice"
									}),
									/* @__PURE__ */ jsx("span", { children: "·" }),
									/* @__PURE__ */ jsx(Link, {
										to: "/editorial-policy",
										className: "hover:text-[var(--emerald-accent)] transition-colors",
										children: "Editorial Integrity"
									})
								]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-8",
						children: cols.map((col, idx) => /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .4,
								delay: .1 * idx
							},
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4",
								children: col.title
							}), /* @__PURE__ */ jsx("ul", {
								className: "space-y-3",
								children: col.items.map((it) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
									to: it.href,
									className: "group inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-[var(--emerald-accent)] transition-colors",
									children: [/* @__PURE__ */ jsx(motion.span, {
										whileHover: { x: 3 },
										transition: {
											type: "spring",
											stiffness: 400
										},
										children: it.label
									}), /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" })]
								}) }, it.label))
							})]
						}, col.title))
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "relative overflow-hidden border-t border-[var(--hairline)] pt-10",
					children: /* @__PURE__ */ jsx("p", {
						className: "font-display font-bold text-[clamp(4rem,18vw,16rem)] leading-none tracking-tighter select-none text-accent-gradient opacity-90 text-center lg:text-left",
						children: "genCART"
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-10 flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--hairline)]",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground font-mono-tech text-center md:text-left",
						children: "© 2026 genCART Industries — Future Commerce. All rights reserved."
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-xs text-muted-foreground font-mono-tech flex items-center justify-center",
						children: [/* @__PURE__ */ jsx("span", { className: "inline-block size-1.5 rounded-full bg-[var(--emerald-accent)] mr-2 align-middle animate-pulse" }), "All systems nominal"]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/site/PageTransition.tsx
function PageTransition({ children }) {
	const location = useRouterState({ select: (s) => s.location.pathname });
	const shouldReduceMotion = useReducedMotion();
	useEffect(() => {
		if (typeof window === "undefined") return;
		const frame = window.requestAnimationFrame(() => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "auto"
			});
		});
		return () => window.cancelAnimationFrame(frame);
	}, [location]);
	return /* @__PURE__ */ jsx(motion.div, {
		initial: shouldReduceMotion ? { opacity: 0 } : {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: shouldReduceMotion ? .05 : .2,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "min-h-screen",
		children
	}, location);
}
//#endregion
//#region src/components/site/ScrollChoreography.tsx
/**
* Cinematic ScrollChoreography
* - Global scroll progress bar (top of viewport)
* - GSAP ScrollTrigger.batch fade/slide-up reveals for headings, sections and cards
* - Subtle parallax for elements tagged data-parallax
* - Re-initializes on route change
*/
function ScrollChoreography({ children }) {
	useEffect(() => {
		if (typeof window === "undefined") return void 0;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return void 0;
		let cancelled = false;
		let cleanup = () => {};
		const init = async () => {
			const { gsap } = await import("gsap");
			const { ScrollTrigger } = await import("gsap/ScrollTrigger");
			gsap.registerPlugin(ScrollTrigger);
			if (cancelled) return;
			const ctx = gsap.context(() => {
				const bar = document.querySelector(".cine-progress");
				const progressST = bar ? ScrollTrigger.create({
					start: 0,
					end: () => document.documentElement.scrollHeight - window.innerHeight,
					onUpdate: (self) => {
						bar.style.transform = `scaleX(${self.progress})`;
					}
				}) : null;
				const selectors = [
					"[data-cine]",
					"main section > h1",
					"main section > h2",
					"main section > h3",
					"main section > p",
					"main .surface-card",
					"main .surface-card-2"
				].join(",");
				const targets = gsap.utils.toArray(selectors).filter((el) => {
					return !el.closest("[data-cine-handled]") && !el.closest("[data-no-batch]");
				});
				targets.forEach((el) => el.setAttribute("data-cine-handled", ""));
				gsap.set(targets, {
					y: 36,
					opacity: 0
				});
				const batch = ScrollTrigger.batch(targets, {
					start: "top 88%",
					once: true,
					onEnter: (els) => gsap.to(els, {
						y: 0,
						opacity: 1,
						duration: .9,
						ease: "power3.out",
						stagger: .08,
						overwrite: true
					})
				});
				const parallaxST = gsap.utils.toArray("[data-parallax]").map((el) => {
					const speed = parseFloat(el.dataset.parallax || "0.2");
					return gsap.to(el, {
						yPercent: -20 * speed,
						ease: "none",
						scrollTrigger: {
							trigger: el,
							start: "top bottom",
							end: "bottom top",
							scrub: true
						}
					});
				});
				cleanup = () => {
					progressST?.kill();
					batch.forEach((t) => t.kill());
					parallaxST.forEach((t) => t.scrollTrigger?.kill());
					targets.forEach((el) => {
						el.removeAttribute("data-cine-handled");
						gsap.set(el, { clearProps: "all" });
					});
					if (bar) bar.style.transform = "scaleX(0)";
				};
			});
			if (!cancelled) await new Promise((resolve) => requestAnimationFrame(() => resolve(void 0)));
			if (cancelled) {
				cleanup();
				ctx.revert();
				return;
			}
		};
		init();
		return () => {
			cancelled = true;
			cleanup();
		};
	}, [useRouterState({ select: (s) => s.location.pathname })]);
	return /* @__PURE__ */ jsx(Fragment, { children });
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-8xl font-bold text-accent-gradient",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Signal lost"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "That route isn't on the grid. Head back home."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "btn-accent inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold",
						children: "Return home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportAppError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-2xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went sideways. Try again or head home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-accent rounded-full px-5 py-2.5 text-sm font-semibold",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "btn-ghost-glow rounded-full px-5 py-2.5 text-sm font-semibold",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$28 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "genCART — Future Commerce" },
			{
				name: "description",
				content: "Curated premium tech. Editorial reviews, in-depth buying guides, and signal-grade product picks."
			},
			{
				name: "author",
				content: "genCART"
			},
			{
				name: "theme-color",
				content: "#FAFBFC"
			},
			{
				property: "og:title",
				content: "genCART — Future Commerce"
			},
			{
				property: "og:description",
				content: "Curated premium tech. Editorial reviews, in-depth buying guides, and signal-grade product picks."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@genCART"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", {
			className: "min-h-screen bg-background text-foreground antialiased",
			children: [children, /* @__PURE__ */ jsx(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$28.useRouteContext();
	const location = useRouterState({ select: (s) => s.location.pathname });
	const { isAuthenticated, isAuthLoading } = useAuthSession();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsxs(SmoothScroll, { children: [
			/* @__PURE__ */ jsx("div", {
				className: "cine-progress",
				"aria-hidden": true
			}),
			!isAuthLoading && isAuthenticated ? /* @__PURE__ */ jsx(LoggedInNavbar, {}, "logged-in") : /* @__PURE__ */ jsx(Navbar, {}, "public"),
			/* @__PURE__ */ jsx(ScrollChoreography, { children: /* @__PURE__ */ jsx(PageTransition, { children: /* @__PURE__ */ jsx("main", {
				className: "relative",
				"data-route": location,
				children: /* @__PURE__ */ jsx(Outlet, {})
			}) }) }),
			/* @__PURE__ */ jsx(Footer, {})
		] }) })
	});
}
//#endregion
//#region src/routes/wishlist.tsx
var $$splitComponentImporter$26 = () => import("./wishlist-BGGonccy.js");
var Route$27 = createFileRoute("/wishlist")({
	head: () => ({ meta: [{ title: "Your Wishlist — genCART" }, {
		name: "description",
		content: "View and manage your bookmarked premium tech products on genCART."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
//#endregion
//#region src/routes/trending.tsx
var $$splitComponentImporter$25 = () => import("./trending-BPEsrZIi.js");
var Route$26 = createFileRoute("/trending")({
	head: () => ({ meta: [{ title: "Trending Premium Tech — genCART" }, {
		name: "description",
		content: "Explore the most popular and highly sought-after premium tech gear trending right now."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
//#endregion
//#region src/routes/terms.tsx
var $$splitComponentImporter$24 = () => import("./terms-DNesPG4p.js");
var Route$25 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms of Service — genCART" }, {
		name: "description",
		content: "Terms of use and guidelines when browsing genCART."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$24 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/categories",
			changefreq: "weekly",
			priority: "0.8"
		},
		{
			path: "/collections",
			changefreq: "weekly",
			priority: "0.8"
		},
		{
			path: "/products/laptop-air",
			changefreq: "weekly",
			priority: "0.7"
		},
		{
			path: "/reviews/macbook-pro",
			changefreq: "weekly",
			priority: "0.7"
		},
		{
			path: "/deals",
			changefreq: "weekly",
			priority: "0.6"
		},
		{
			path: "/best-of-2026",
			changefreq: "weekly",
			priority: "0.9"
		},
		{
			path: "/contact",
			changefreq: "monthly",
			priority: "0.5"
		}
	].map((e) => `  <url><loc>${BASE_URL}${e.path}</loc>${e.changefreq ? `<changefreq>${e.changefreq}</changefreq>` : ""}${e.priority ? `<priority>${e.priority}</priority>` : ""}</url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/recently-viewed.tsx
var $$splitComponentImporter$23 = () => import("./recently-viewed-BjBWhEiy.js");
var Route$23 = createFileRoute("/recently-viewed")({
	head: () => ({ meta: [{ title: "Recently Viewed — genCART" }, {
		name: "description",
		content: "View products you have recently browsed on genCART."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
//#endregion
//#region src/routes/privacy-policy.tsx
var $$splitComponentImporter$22 = () => import("./privacy-policy-BqCWEW5y.js");
var Route$22 = createFileRoute("/privacy-policy")({
	head: () => ({ meta: [{ title: "Privacy Policy — genCART" }, {
		name: "description",
		content: "Details on how genCART protects and handles user data."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
//#endregion
//#region src/routes/new-arrivals.tsx
var $$splitComponentImporter$21 = () => import("./new-arrivals-I_QpOUwq.js");
var Route$21 = createFileRoute("/new-arrivals")({
	head: () => ({ meta: [{ title: "New Arrivals — genCART" }, {
		name: "description",
		content: "Discover the latest premium tech releases added to genCART's catalog."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
//#endregion
//#region src/routes/login.tsx
var $$splitComponentImporter$20 = () => import("./login-849w9yJE.js");
var Route$20 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Login · genCART" }, {
		name: "description",
		content: "Sign in or create an account to access your genCART experience."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
//#endregion
//#region src/routes/how-we-review.tsx
var $$splitComponentImporter$19 = () => import("./how-we-review-CV1XJQpA.js");
var Route$19 = createFileRoute("/how-we-review")({
	head: () => ({ meta: [{ title: "How We Review — genCART" }, {
		name: "description",
		content: "Our laboratory testing standards, benchmarks, and editorial guidelines."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
//#endregion
//#region src/routes/faq.tsx
var $$splitComponentImporter$18 = () => import("./faq-DJHu39st.js");
var Route$18 = createFileRoute("/faq")({
	head: () => ({ meta: [{ title: "Frequently Asked Questions — genCART" }, {
		name: "description",
		content: "Answers to common questions about genCART, reviews, affiliate links, and editorial process."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
//#endregion
//#region src/routes/editorial-policy.tsx
var $$splitComponentImporter$17 = () => import("./editorial-policy-C9LTCMRn.js");
var Route$17 = createFileRoute("/editorial-policy")({
	head: () => ({ meta: [{ title: "Editorial Policy — genCART" }, {
		name: "description",
		content: "Learn about the standards of accuracy, independence, and transparency that guide genCART."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
//#endregion
//#region src/routes/dmca.tsx
var $$splitComponentImporter$16 = () => import("./dmca-ChgatObL.js");
var Route$16 = createFileRoute("/dmca")({
	head: () => ({ meta: [{ title: "DMCA Notice — genCART" }, {
		name: "description",
		content: "Details on how to submit copyright and DMCA take-down notices to genCART."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
//#endregion
//#region src/routes/deals.tsx
var $$splitComponentImporter$15 = () => import("./deals-Bva_VIT0.js");
var Route$15 = createFileRoute("/deals")({
	head: () => ({ meta: [
		{ title: "Deals & Offers — genCART" },
		{
			name: "description",
			content: "Hand-vetted deals on premium tech. Editor-approved discounts you'll actually want."
		},
		{
			property: "og:title",
			content: "Deals & Offers — genCART"
		},
		{
			property: "og:description",
			content: "Hand-vetted deals on premium tech."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
//#endregion
//#region src/routes/dashboard.tsx
var $$splitComponentImporter$14 = () => import("./dashboard-BUhQAmFN.js");
var Route$14 = createFileRoute("/dashboard")({
	beforeLoad: async () => {
		const { data } = await supabase.auth.getSession();
		if (!data.session) throw redirect({ to: "/login" });
	},
	head: () => ({ meta: [{ title: "Personalized Workspace · genCART" }, {
		name: "description",
		content: "Your personal product discovery workspace on genCART."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$13 = () => import("./contact-cLhxui2B.js");
var Route$13 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — genCART" },
		{
			name: "description",
			content: "Get in touch with genCART. Concierge service, editorial inquiries, partnerships."
		},
		{
			property: "og:title",
			content: "Contact — genCART"
		},
		{
			property: "og:description",
			content: "Get in touch with the genCART team."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
//#endregion
//#region src/routes/collections.tsx
var $$splitComponentImporter$12 = () => import("./collections-D7hpn54_.js");
var Route$12 = createFileRoute("/collections")({
	head: () => ({ meta: [
		{ title: "Curated Collections — genCART" },
		{
			name: "description",
			content: "Editor-curated genCART collections: workstations, immersive audio, ambient living, and more."
		},
		{
			property: "og:title",
			content: "Curated Collections — genCART"
		},
		{
			property: "og:description",
			content: "Editor-curated genCART collections for every workflow."
		},
		{
			property: "og:image",
			content: "/og-collections.jpg"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
//#endregion
//#region src/routes/categories.tsx
var $$splitComponentImporter$11 = () => import("./categories-Cn5hQsNH.js");
var Route$11 = createFileRoute("/categories")({
	head: () => ({ meta: [
		{ title: "Categories — genCART" },
		{
			name: "description",
			content: "Browse every premium tech category at genCART: computing, audio, wearables, mobile, gaming, smart home."
		},
		{
			property: "og:title",
			content: "Categories — genCART"
		},
		{
			property: "og:description",
			content: "Browse every premium tech category at genCART."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
//#endregion
//#region src/routes/best-products.tsx
var $$splitComponentImporter$10 = () => import("./best-products-BNPWW3zq.js");
var Route$10 = createFileRoute("/best-products")({
	head: () => ({ meta: [{ title: "Best Products & Editorial Picks — genCART" }, {
		name: "description",
		content: "The absolute best tech products across computing, audio, wearables, and mobile. Tested in our labs."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
//#endregion
//#region src/routes/best-of-2026.tsx
var $$splitComponentImporter$9 = () => import("./best-of-2026-38OAPj3J.js");
var Route$9 = createFileRoute("/best-of-2026")({
	head: () => ({ meta: [
		{ title: "Best Products of 2026 — genCART" },
		{
			name: "description",
			content: "The definitive genCART ranking of the best premium tech of 2026 — laptops, audio, phones, wearables, and more."
		},
		{
			property: "og:title",
			content: "Best Products of 2026 — genCART"
		},
		{
			property: "og:description",
			content: "The definitive ranking of the best premium tech of 2026."
		},
		{
			property: "og:image",
			content: product_laptop_default
		},
		{
			property: "twitter:image",
			content: product_laptop_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/affiliate-disclosure.tsx
var $$splitComponentImporter$8 = () => import("./affiliate-disclosure-BPgEeNOU.js");
var Route$8 = createFileRoute("/affiliate-disclosure")({
	head: () => ({ meta: [{ title: "Affiliate Disclosure — genCART" }, {
		name: "description",
		content: "Details on how genCART uses affiliate links to fund our lab and testing team."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$7 = () => import("./about-CzOcoBZj.js");
var Route$7 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About Us — genCART" }, {
		name: "description",
		content: "Learn about the mission, values, and editorial process behind genCART."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$6 = () => import("./routes-CLZZtnDY.js");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "genCART — Premium Tech, Editorially Curated" },
		{
			name: "description",
			content: "Future Commerce. Editorial reviews, in-depth buying guides, and signal-grade tech picks for 2026."
		},
		{
			property: "og:title",
			content: "genCART — Premium Tech, Editorially Curated"
		},
		{
			property: "og:description",
			content: "Future Commerce. Editorial reviews and signal-grade tech picks."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/reviews.index.tsx
var $$splitComponentImporter$5 = () => import("./reviews.index-WU1YfqnX.js");
var Route$5 = createFileRoute("/reviews/")({
	head: () => ({ meta: [{ title: "Expert Reviews — genCART" }, {
		name: "description",
		content: "In-depth, lab-tested expert reviews on premium tech. Independent editorial, zero sponsors."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/guides.index.tsx
var $$splitComponentImporter$4 = () => import("./guides.index-DG_nP-xn.js");
var Route$4 = createFileRoute("/guides/")({
	head: () => ({ meta: [{ title: "Buying Guides & Manuals — genCART" }, {
		name: "description",
		content: "Expert buying guides, workspaces breakdowns, and hardware manuals for builders and developers."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/compare.index.tsx
var $$splitComponentImporter$3 = () => import("./compare.index-DUVJSctS.js");
var Route$3 = createFileRoute("/compare/")({
	head: () => ({ meta: [{ title: "Compare Tech side-by-side — genCART" }, {
		name: "description",
		content: "Compare premium laptops, headphones, monitors, and wearables side-by-side. Unbiased specs, clear winner."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/brands.index.tsx
var $$splitComponentImporter$2 = () => import("./brands.index-Cc53I7fj.js");
var Route$2 = createFileRoute("/brands/")({
	head: () => ({ meta: [{ title: "Partner Brands — genCART" }, {
		name: "description",
		content: "Discover the premium hardware and software brands curated on genCART."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/reviews.macbook-pro.tsx
var $$splitComponentImporter$1 = () => import("./reviews.macbook-pro-YDMmu66Z.js");
var Route$1 = createFileRoute("/reviews/macbook-pro")({
	head: () => ({ meta: [
		{ title: "MacBook Pro M3 Max — Expert Review · genCART" },
		{
			name: "description",
			content: "Three weeks with the MacBook Pro M3 Max. Performance benchmarks, battery, display, value — and how it compares."
		},
		{
			property: "og:title",
			content: "MacBook Pro M3 Max — Expert Review · genCART"
		},
		{
			property: "og:description",
			content: "Three weeks with the MacBook Pro M3 Max — the editor's full review."
		},
		{
			property: "og:image",
			content: product_laptop_default
		},
		{
			property: "twitter:image",
			content: product_laptop_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/products.laptop-air.tsx
var $$splitComponentImporter = () => import("./products.laptop-air-B51RTz8T.js");
var Route = createFileRoute("/products/laptop-air")({
	head: () => ({ meta: [
		{ title: "genCART Laptop Air — genCART" },
		{
			name: "description",
			content: "genCART Laptop Air: M-class silicon, edge-to-edge OLED, 22-hour battery. Engineered as one."
		},
		{
			property: "og:title",
			content: "genCART Laptop Air — genCART"
		},
		{
			property: "og:description",
			content: "M-class silicon, edge-to-edge OLED, 22-hour battery."
		},
		{
			property: "og:image",
			content: product_laptop_default
		},
		{
			property: "twitter:image",
			content: product_laptop_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var WishlistRoute = Route$27.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$28
});
var TrendingRoute = Route$26.update({
	id: "/trending",
	path: "/trending",
	getParentRoute: () => Route$28
});
var TermsRoute = Route$25.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$28
});
var SitemapDotxmlRoute = Route$24.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$28
});
var SearchRoute = Route$30.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$28
});
var RecentlyViewedRoute = Route$23.update({
	id: "/recently-viewed",
	path: "/recently-viewed",
	getParentRoute: () => Route$28
});
var PrivacyPolicyRoute = Route$22.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$28
});
var NewArrivalsRoute = Route$21.update({
	id: "/new-arrivals",
	path: "/new-arrivals",
	getParentRoute: () => Route$28
});
var LoginRoute = Route$20.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$28
});
var HowWeReviewRoute = Route$19.update({
	id: "/how-we-review",
	path: "/how-we-review",
	getParentRoute: () => Route$28
});
var FaqRoute = Route$18.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$28
});
var EditorialPolicyRoute = Route$17.update({
	id: "/editorial-policy",
	path: "/editorial-policy",
	getParentRoute: () => Route$28
});
var DmcaRoute = Route$16.update({
	id: "/dmca",
	path: "/dmca",
	getParentRoute: () => Route$28
});
var DealsRoute = Route$15.update({
	id: "/deals",
	path: "/deals",
	getParentRoute: () => Route$28
});
var DashboardRoute = Route$14.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$28
});
var ContactRoute = Route$13.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$28
});
var CollectionsRoute = Route$12.update({
	id: "/collections",
	path: "/collections",
	getParentRoute: () => Route$28
});
var CategoriesRoute = Route$11.update({
	id: "/categories",
	path: "/categories",
	getParentRoute: () => Route$28
});
var BestProductsRoute = Route$10.update({
	id: "/best-products",
	path: "/best-products",
	getParentRoute: () => Route$28
});
var BestOf2026Route = Route$9.update({
	id: "/best-of-2026",
	path: "/best-of-2026",
	getParentRoute: () => Route$28
});
var AffiliateDisclosureRoute = Route$8.update({
	id: "/affiliate-disclosure",
	path: "/affiliate-disclosure",
	getParentRoute: () => Route$28
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$28
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$28
});
var ReviewsIndexRoute = Route$5.update({
	id: "/reviews/",
	path: "/reviews/",
	getParentRoute: () => Route$28
});
var GuidesIndexRoute = Route$4.update({
	id: "/guides/",
	path: "/guides/",
	getParentRoute: () => Route$28
});
var CompareIndexRoute = Route$3.update({
	id: "/compare/",
	path: "/compare/",
	getParentRoute: () => Route$28
});
var BrandsIndexRoute = Route$2.update({
	id: "/brands/",
	path: "/brands/",
	getParentRoute: () => Route$28
});
var ReviewsMacbookProRoute = Route$1.update({
	id: "/reviews/macbook-pro",
	path: "/reviews/macbook-pro",
	getParentRoute: () => Route$28
});
var ReviewsSlugRoute = Route$31.update({
	id: "/reviews/$slug",
	path: "/reviews/$slug",
	getParentRoute: () => Route$28
});
var ProductsLaptopAirRoute = Route.update({
	id: "/products/laptop-air",
	path: "/products/laptop-air",
	getParentRoute: () => Route$28
});
var ProductSlugRoute = Route$32.update({
	id: "/product/$slug",
	path: "/product/$slug",
	getParentRoute: () => Route$28
});
var GuidesSlugRoute = Route$33.update({
	id: "/guides/$slug",
	path: "/guides/$slug",
	getParentRoute: () => Route$28
});
var CompareSlugRoute = Route$34.update({
	id: "/compare/$slug",
	path: "/compare/$slug",
	getParentRoute: () => Route$28
});
var CategorySlugRoute = Route$29.update({
	id: "/category/$slug",
	path: "/category/$slug",
	getParentRoute: () => Route$28
});
var BrandSlugRoute = Route$35.update({
	id: "/brand/$slug",
	path: "/brand/$slug",
	getParentRoute: () => Route$28
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AffiliateDisclosureRoute,
	BestOf2026Route,
	BestProductsRoute,
	CategoriesRoute,
	CollectionsRoute,
	ContactRoute,
	DashboardRoute,
	DealsRoute,
	DmcaRoute,
	EditorialPolicyRoute,
	FaqRoute,
	HowWeReviewRoute,
	LoginRoute,
	NewArrivalsRoute,
	PrivacyPolicyRoute,
	RecentlyViewedRoute,
	SearchRoute,
	SitemapDotxmlRoute,
	TermsRoute,
	TrendingRoute,
	WishlistRoute,
	BestCategoryRoute: Route$36.update({
		id: "/best/$category",
		path: "/best/$category",
		getParentRoute: () => Route$28
	}),
	BrandSlugRoute,
	CategorySlugRoute,
	CompareSlugRoute,
	GuidesSlugRoute,
	ProductSlugRoute,
	ProductsLaptopAirRoute,
	ReviewsSlugRoute,
	ReviewsMacbookProRoute,
	BrandsIndexRoute,
	CompareIndexRoute,
	GuidesIndexRoute,
	ReviewsIndexRoute
};
var routeTree = Route$28._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
