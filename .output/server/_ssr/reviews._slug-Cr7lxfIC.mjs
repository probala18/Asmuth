import { A as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getProduct } from "./products-DK41-WSW.mjs";
import { n as getComparison } from "./comparisons-CETU7BC4.mjs";
import { t as getReview } from "./reviews-CbTxooB7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews._slug-Cr7lxfIC.js
var $$splitComponentImporter = () => import("./reviews._slug-BgDGoufS.mjs");
var Route = createFileRoute("/reviews/$slug")({
	parseParams: (params) => ({ slug: params.slug }),
	head: ({ params }) => {
		const review = getReview(params.slug);
		return { meta: [
			{ title: review ? `${review.title} · genCART` : "Expert Review · genCART" },
			{
				name: "description",
				content: review ? review.excerpt : "In-depth expert review and benchmarks."
			},
			{
				property: "og:title",
				content: review ? `${review.title} · genCART` : "Expert Review · genCART"
			},
			{
				property: "og:description",
				content: review ? review.excerpt : "In-depth expert review."
			},
			{
				property: "og:image",
				content: review?.image
			}
		] };
	},
	loader: ({ params }) => {
		const review = getReview(params.slug);
		if (!review) throw notFound();
		return {
			review,
			product: getProduct(review.productSlug),
			comparison: getComparison(`${review.productSlug}-vs-dell-xps-16`) || getComparison(`${review.productSlug}-vs-competitors`)
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
