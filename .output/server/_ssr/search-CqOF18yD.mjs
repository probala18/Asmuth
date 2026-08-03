import { a as __toESM } from "../_runtime.mjs";
import { r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as SplitTextReveal } from "./motion-CSNJjo3r.mjs";
import { P as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as products } from "./products-DK41-WSW.mjs";
import { A as Inbox, L as Funnel, f as Sparkles, r as X, v as Search } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { r as ProductCard } from "./ProductCards-DO0DKzl3.mjs";
import { n as GuideCard, r as ReviewCard } from "./ContentCards-BPnars1F.mjs";
import { n as guides } from "./guides-DB9TZ9M8.mjs";
import { n as reviews } from "./reviews-CbTxooB7.mjs";
import { t as Route } from "./search-CFjYWRLI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-CqOF18yD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const searchState = Route.useSearch();
	const navigate = useNavigate();
	const [activeTab, setActiveTab] = (0, import_react.useState)("all");
	const [localQuery, setLocalQuery] = (0, import_react.useState)(searchState.q || "");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [mobileFiltersOpen, setMobileFiltersOpen] = (0, import_react.useState)(false);
	const [compareSelection, setCompareSelection] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setLocalQuery(searchState.q || "");
	}, [searchState.q]);
	(0, import_react.useEffect)(() => {
		setLoading(true);
		const timer = window.setTimeout(() => setLoading(false), 300);
		return () => window.clearTimeout(timer);
	}, [
		searchState.q,
		searchState.category,
		searchState.brand,
		searchState.sort,
		searchState.minPrice,
		searchState.maxPrice,
		searchState.rating,
		searchState.availability,
		searchState.feature
	]);
	const query = localQuery.trim().toLowerCase();
	const updateSearch = (updates) => {
		navigate({
			to: "/search",
			search: {
				q: searchState.q || "",
				sort: searchState.sort || "relevance",
				category: searchState.category || "",
				brand: searchState.brand || "",
				minPrice: searchState.minPrice || "",
				maxPrice: searchState.maxPrice || "",
				rating: searchState.rating || "",
				availability: searchState.availability || "",
				feature: searchState.feature || "",
				...updates
			}
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const value = localQuery.trim();
		if (!value) return;
		updateSearch({ q: value });
	};
	const clearFilters = () => {
		updateSearch({
			category: "",
			brand: "",
			minPrice: "",
			maxPrice: "",
			rating: "",
			availability: "",
			feature: ""
		});
	};
	const toggleCompare = (slug) => {
		setCompareSelection((current) => current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug].slice(-2));
	};
	const categoryOptions = (0, import_react.useMemo)(() => Array.from(new Set(products.map((product) => product.category))), []);
	const brandOptions = (0, import_react.useMemo)(() => Array.from(new Set(products.map((product) => product.brand))), []);
	const featureOptions = [
		"OLED",
		"ANC",
		"Battery",
		"Titanium",
		"120Hz",
		"Wi-Fi",
		"Camera",
		"Storage"
	];
	const rankedProducts = (0, import_react.useMemo)(() => {
		const normalizedQuery = query;
		const scored = products.filter((product) => {
			const haystack = `${product.name} ${product.brand} ${product.category} ${product.shortDescription} ${product.description}`.toLowerCase();
			const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery);
			const matchesCategory = !searchState.category || product.category.toLowerCase() === searchState.category.toLowerCase() || product.categorySlug === searchState.category.toLowerCase();
			const matchesBrand = !searchState.brand || product.brand.toLowerCase() === searchState.brand.toLowerCase();
			const matchesMinPrice = !searchState.minPrice || product.price >= Number(searchState.minPrice);
			const matchesMaxPrice = !searchState.maxPrice || product.price <= Number(searchState.maxPrice);
			const matchesRating = !searchState.rating || product.rating >= Number(searchState.rating);
			const matchesAvailability = !searchState.availability || (searchState.availability === "in-stock" ? product.reviewCount > 1800 : true);
			const matchesFeature = !searchState.feature || product.specs.some((spec) => spec.label.toLowerCase().includes(searchState.feature.toLowerCase())) || product.description.toLowerCase().includes(searchState.feature.toLowerCase());
			return matchesQuery && matchesCategory && matchesBrand && matchesMinPrice && matchesMaxPrice && matchesRating && matchesAvailability && matchesFeature;
		}).map((product) => {
			let score = product.rating * 8 + product.reviewCount / 200;
			if (normalizedQuery) {
				const haystack = `${product.name} ${product.brand} ${product.category} ${product.shortDescription}`.toLowerCase();
				if (product.name.toLowerCase().includes(normalizedQuery)) score += 40;
				if (product.brand.toLowerCase().includes(normalizedQuery)) score += 20;
				if (product.category.toLowerCase().includes(normalizedQuery)) score += 15;
				if (haystack.includes(normalizedQuery)) score += 10;
			}
			if (product.isTrending) score += 8;
			if (product.isBestSeller) score += 6;
			if (product.isEditorsPick) score += 5;
			return {
				product,
				score
			};
		});
		const sortOrder = searchState.sort || "relevance";
		return [...scored].sort((a, b) => {
			if (sortOrder === "popular") return b.product.reviewCount - a.product.reviewCount || b.score - a.score;
			if (sortOrder === "rated") return b.product.rating - a.product.rating || b.score - a.score;
			if (sortOrder === "price-asc") return a.product.price - b.product.price || b.score - a.score;
			if (sortOrder === "price-desc") return b.product.price - a.product.price || b.score - a.score;
			if (sortOrder === "newest") return Number(b.product.createdAt.slice(0, 4)) - Number(a.product.createdAt.slice(0, 4));
			if (sortOrder === "deals") return Number(Boolean(b.product.originalPrice && b.product.originalPrice > b.product.price)) - Number(Boolean(a.product.originalPrice && a.product.originalPrice > a.product.price)) || b.score - a.score;
			return b.score - a.score;
		}).map((item) => item.product);
	}, [
		query,
		searchState.category,
		searchState.brand,
		searchState.minPrice,
		searchState.maxPrice,
		searchState.rating,
		searchState.availability,
		searchState.feature,
		searchState.sort
	]);
	const matchingReviews = (0, import_react.useMemo)(() => {
		if (!query) return [];
		return reviews.filter((review) => `${review.title} ${review.excerpt} ${review.productName}`.toLowerCase().includes(query));
	}, [query]);
	const matchingGuides = (0, import_react.useMemo)(() => {
		if (!query) return [];
		return guides.filter((guide) => `${guide.title} ${guide.excerpt} ${guide.category}`.toLowerCase().includes(query));
	}, [query]);
	const totalResults = rankedProducts.length + matchingReviews.length + matchingGuides.length;
	const activeFilterCount = [
		searchState.category,
		searchState.brand,
		searchState.minPrice,
		searchState.maxPrice,
		searchState.rating,
		searchState.availability,
		searchState.feature
	].filter(Boolean).length;
	const hasErrorState = query.includes("error") || query.includes("fail");
	const selectedProducts = products.filter((product) => compareSelection.includes(product.slug));
	const renderFilterChips = () => {
		const chips = [];
		if (searchState.category) chips.push({
			label: searchState.category,
			key: "category"
		});
		if (searchState.brand) chips.push({
			label: searchState.brand,
			key: "brand"
		});
		if (searchState.minPrice || searchState.maxPrice) chips.push({
			label: `Price ${searchState.minPrice || "0"}-${searchState.maxPrice || "2000"}`,
			key: "price"
		});
		if (searchState.rating) chips.push({
			label: `${searchState.rating}+ rating`,
			key: "rating"
		});
		if (searchState.availability) chips.push({
			label: searchState.availability === "in-stock" ? "In stock" : "Limited",
			key: "availability"
		});
		if (searchState.feature) chips.push({
			label: searchState.feature,
			key: "feature"
		});
		return chips;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative pt-36 pb-12 px-6 lg:px-10 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-6xl mx-auto space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
						children: "Search Matrix"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitTextReveal, {
						text: "Discover with precision",
						className: "font-display text-4xl lg:text-6xl font-bold tracking-tight"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-sm text-muted-foreground",
						children: "Search products, reviews, guides, and buying stories with a premium, editorial search experience built for modern product discovery."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						onSubmit: handleSubmit,
						className: "mx-auto max-w-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: localQuery,
									onChange: (event) => setLocalQuery(event.target.value),
									placeholder: "Search products, brands, categories...",
									className: "w-full rounded-full border border-[var(--hairline)] bg-[var(--surface)]/90 py-4 pl-12 pr-16 text-sm shadow-md outline-none transition-all focus:border-[var(--emerald-accent)]"
								}),
								localQuery ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLocalQuery(""),
									className: "absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-[var(--surface-2)] hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
								}) : null
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[var(--hairline)] bg-background/60 px-4 py-3 text-sm backdrop-blur-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-[var(--emerald-accent)]" }), query ? `Showing ${totalResults} curated results for “${query}”` : "Start with a broad query to uncover products, reviews, and guides."]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setMobileFiltersOpen(true),
								className: "inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground lg:hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-3.5" }), " Filter"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: searchState.sort || "relevance",
								onChange: (event) => updateSearch({ sort: event.target.value }),
								className: "rounded-full border border-[var(--hairline)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "relevance",
										children: "Relevance"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "popular",
										children: "Most Popular"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "rated",
										children: "Top Rated"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "price-asc",
										children: "Price: Low to High"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "price-desc",
										children: "Price: High to Low"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "newest",
										children: "Newest"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "deals",
										children: "Best Deals"
									})
								]
							})]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 pb-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "hidden w-80 shrink-0 rounded-3xl border border-[var(--hairline)] bg-background/70 p-5 shadow-sm lg:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: "Filters"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: clearFilters,
							className: "text-xs font-semibold text-[var(--emerald-accent)]",
							children: "Clear all"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground",
								children: "Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: categoryOptions.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "category",
										checked: searchState.category === category.toLowerCase(),
										onChange: () => updateSearch({ category: category.toLowerCase() }),
										className: "accent-[var(--emerald-accent)]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: category })]
								}, category))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground",
								children: "Brand"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: brandOptions.map((brand) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "brand",
										checked: searchState.brand === brand.toLowerCase(),
										onChange: () => updateSearch({ brand: brand.toLowerCase() }),
										className: "accent-[var(--emerald-accent)]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: brand })]
								}, brand))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground",
								children: "Price"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs text-muted-foreground",
									children: ["Up to $", searchState.maxPrice || "2000"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: "200",
									max: "2000",
									step: "100",
									value: Number(searchState.maxPrice || 2e3),
									onChange: (event) => updateSearch({ maxPrice: event.target.value }),
									className: "w-full accent-[var(--emerald-accent)]"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground",
								children: "Rating"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: [
									4.5,
									4,
									3.5
								].map((rating) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "rating",
										checked: searchState.rating === String(rating),
										onChange: () => updateSearch({ rating: String(rating) }),
										className: "accent-[var(--emerald-accent)]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [rating.toFixed(1), "+ stars"] })]
								}, rating))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground",
								children: "Availability"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "availability",
										checked: searchState.availability === "in-stock",
										onChange: () => updateSearch({ availability: "in-stock" }),
										className: "accent-[var(--emerald-accent)]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "In stock" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "availability",
										checked: searchState.availability === "limited",
										onChange: () => updateSearch({ availability: "limited" }),
										className: "accent-[var(--emerald-accent)]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Limited drops" })]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground",
								children: "Features"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: featureOptions.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "feature",
										checked: searchState.feature === feature.toLowerCase(),
										onChange: () => updateSearch({ feature: feature.toLowerCase() }),
										className: "accent-[var(--emerald-accent)]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feature })]
								}, feature))
							})] })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-6",
					children: [activeFilterCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: renderFilterChips().map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => updateSearch({
								category: chip.key === "category" ? "" : searchState.category,
								brand: chip.key === "brand" ? "" : searchState.brand,
								minPrice: chip.key === "price" ? "" : searchState.minPrice,
								maxPrice: chip.key === "price" ? "" : searchState.maxPrice,
								rating: chip.key === "rating" ? "" : searchState.rating,
								availability: chip.key === "availability" ? "" : searchState.availability,
								feature: chip.key === "feature" ? "" : searchState.feature
							}),
							className: "rounded-full border border-[var(--hairline)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-foreground",
							children: [chip.label, " ×"]
						}, chip.key))
					}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
						children: Array.from({ length: 6 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-80 animate-pulse rounded-3xl border border-[var(--hairline)] bg-[var(--surface)]" }, index))
					}) : hasErrorState ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-dashed border-[var(--hairline)] bg-[var(--surface)]/70 p-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-semibold",
								children: "Something went wrong while searching."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Try again with a broader query or clear the filters."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => updateSearch({
									q: "",
									category: "",
									brand: "",
									minPrice: "",
									maxPrice: "",
									rating: "",
									availability: "",
									feature: ""
								}),
								className: "mt-6 btn-accent rounded-full px-5 py-2.5 text-sm font-semibold",
								children: "Try again"
							})
						]
					}) : query || activeFilterCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8",
						children: [
							rankedProducts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-[var(--hairline)] pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-semibold",
										children: "Products"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm text-muted-foreground",
										children: [rankedProducts.length, " results"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
									children: rankedProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
										product,
										compareSelected: compareSelection.includes(product.slug),
										onCompareToggle: toggleCompare
									}, product.slug))
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-dashed border-[var(--hairline)] bg-[var(--surface)]/70 p-10 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "mx-auto mb-4 size-10 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-2xl font-semibold",
										children: [
											"No results found for “",
											query,
											"”"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground",
										children: "Try a broader category, simpler wording, or clear a filter."
									})
								]
							}),
							matchingReviews.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-[var(--hairline)] pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-semibold",
										children: "Reviews"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm text-muted-foreground",
										children: [matchingReviews.length, " matches"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-6 md:grid-cols-2",
									children: matchingReviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, { review }, review.slug))
								})]
							}),
							matchingGuides.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-[var(--hairline)] pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-semibold",
										children: "Buying Guides"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm text-muted-foreground",
										children: [matchingGuides.length, " matches"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-6 md:grid-cols-2",
									children: matchingGuides.map((guide) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuideCard, { guide }, guide.slug))
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-[var(--hairline)] bg-[var(--surface)]/70 p-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "mx-auto mb-4 size-10 text-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-semibold",
								children: "Use the search bar to start exploring"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Try “laptop”, “headphones”, “review”, or “guide” to surface curated products and content."
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mobileFiltersOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed inset-0 z-50 bg-background/85 backdrop-blur-xl lg:hidden",
			onClick: () => setMobileFiltersOpen(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { y: "100%" },
				animate: { y: 0 },
				exit: { y: "100%" },
				transition: {
					duration: .25,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "absolute inset-x-0 bottom-0 rounded-t-[2rem] border border-[var(--hairline)] bg-background p-5 shadow-2xl",
				onClick: (event) => event.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)]",
							children: "Filters"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: "Refine by"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setMobileFiltersOpen(false),
							className: "rounded-full p-2 text-muted-foreground hover:bg-[var(--surface)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground",
								children: "Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: categoryOptions.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => updateSearch({ category: category.toLowerCase() }),
									className: `rounded-full px-3 py-2 ${searchState.category === category.toLowerCase() ? "bg-[var(--emerald-accent)] text-background" : "bg-[var(--surface)] text-foreground"}`,
									children: category
								}, category))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground",
								children: "Brand"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: brandOptions.map((brand) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => updateSearch({ brand: brand.toLowerCase() }),
									className: `rounded-full px-3 py-2 ${searchState.brand === brand.toLowerCase() ? "bg-[var(--emerald-accent)] text-background" : "bg-[var(--surface)] text-foreground"}`,
									children: brand
								}, brand))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground",
								children: "Top rated"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									4.5,
									4,
									3.5
								].map((rating) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => updateSearch({ rating: String(rating) }),
									className: `rounded-full px-3 py-2 ${searchState.rating === String(rating) ? "bg-[var(--emerald-accent)] text-background" : "bg-[var(--surface)] text-foreground"}`,
									children: [rating.toFixed(1), "+"]
								}, rating))
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center justify-between border-t border-[var(--hairline)] pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: clearFilters,
							className: "text-sm text-muted-foreground",
							children: "Clear all"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setMobileFiltersOpen(false),
							className: "btn-accent rounded-full px-4 py-2 text-sm font-semibold",
							children: "Apply"
						})]
					})
				]
			})
		}) }),
		selectedProducts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				y: 24,
				opacity: 0
			},
			animate: {
				y: 0,
				opacity: 1
			},
			className: "fixed inset-x-4 bottom-4 z-40 rounded-full border border-[var(--hairline)] bg-background/90 p-3 shadow-2xl backdrop-blur-xl lg:inset-x-auto lg:right-6 lg:w-[360px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-mono-tech uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
					children: "Compare queue"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-semibold",
					children: [
						selectedProducts.length,
						" product",
						selectedProducts.length > 1 ? "s" : "",
						" selected"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/compare",
						className: "btn-accent rounded-full px-4 py-2 text-xs font-semibold",
						children: "Compare"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCompareSelection([]),
						className: "rounded-full border border-[var(--hairline)] px-3 py-2 text-xs font-semibold text-muted-foreground",
						children: "Clear"
					})]
				})]
			})
		})
	] });
}
//#endregion
export { SearchPage as component };
