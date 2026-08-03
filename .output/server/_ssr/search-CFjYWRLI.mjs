import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-CFjYWRLI.js
var $$splitComponentImporter = () => import("./search-CqOF18yD.mjs");
var Route = createFileRoute("/search")({
	validateSearch: (search) => ({
		q: typeof search.q === "string" ? search.q : "",
		sort: typeof search.sort === "string" ? search.sort : "relevance",
		category: typeof search.category === "string" ? search.category : "",
		brand: typeof search.brand === "string" ? search.brand : "",
		minPrice: typeof search.minPrice === "string" ? search.minPrice : "",
		maxPrice: typeof search.maxPrice === "string" ? search.maxPrice : "",
		rating: typeof search.rating === "string" ? search.rating : "",
		availability: typeof search.availability === "string" ? search.availability : "",
		feature: typeof search.feature === "string" ? search.feature : ""
	}),
	head: ({ search }) => ({ meta: [{ title: search.q ? `Search results for "${search.q}" — genCART` : "Search — genCART" }, {
		name: "description",
		content: "Search premium tech reviews, specifications, and buying guides on genCART."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
