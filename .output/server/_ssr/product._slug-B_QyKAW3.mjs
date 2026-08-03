import { A as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getProduct } from "./products-DK41-WSW.mjs";
import { t as getReview } from "./reviews-CbTxooB7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-B_QyKAW3.js
var $$splitComponentImporter = () => import("./product._slug-DDpDs-5Q.mjs");
var Route = createFileRoute("/product/$slug")({
	parseParams: (params) => ({ slug: params.slug }),
	head: ({ params }) => {
		const product = getProduct(params.slug);
		return { meta: [{ title: product ? `${product.name} — genCART` : "Product — genCART" }, {
			name: "description",
			content: product ? product.shortDescription : "Browse product details."
		}] };
	},
	loader: ({ params }) => {
		const product = getProduct(params.slug);
		if (!product) throw notFound();
		return {
			product,
			review: getReview(product.slug)
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
