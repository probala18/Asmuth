globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/exact-videos.json": {
		"type": "application/json",
		"etag": "\"48-5TisnFGJEmL3qwtTpeIK5ttjMsQ\"",
		"mtime": "2026-07-25T16:16:39.029Z",
		"size": 72,
		"path": "../public/exact-videos.json"
	},
	"/visuals-list.json": {
		"type": "application/json",
		"etag": "\"48-jl2cUVFyUDdnorjJr2yBDmYe7JE\"",
		"mtime": "2026-07-25T14:32:52.744Z",
		"size": 72,
		"path": "../public/visuals-list.json"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"19-yHADZo6lKl+mSNPU9098EiqzPCE\"",
		"mtime": "2026-06-26T12:23:03.269Z",
		"size": 25,
		"path": "../public/robots.txt"
	},
	"/assets/about-DBDDsstF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"819-WbwnImlUNWJxHHjLTvvxABGcVWg\"",
		"mtime": "2026-07-26T18:24:25.802Z",
		"size": 2073,
		"path": "../public/assets/about-DBDDsstF.js"
	},
	"/assets/affiliate-disclosure-CZoEVakc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"889-9Fxl52YtPZYHOEeZW6cGYGLnqQ0\"",
		"mtime": "2026-07-26T18:24:25.802Z",
		"size": 2185,
		"path": "../public/assets/affiliate-disclosure-CZoEVakc.js"
	},
	"/assets/best-of-2026-BfdFEnNi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f3d-irY69xlTl0jLZSARaUns4AXJ72s\"",
		"mtime": "2026-07-26T18:24:25.804Z",
		"size": 3901,
		"path": "../public/assets/best-of-2026-BfdFEnNi.js"
	},
	"/assets/best-products-DrTD4oQy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"101a-a9yuYvUuu2zUJcdiWaIsqZ6tCa0\"",
		"mtime": "2026-07-26T18:24:25.804Z",
		"size": 4122,
		"path": "../public/assets/best-products-DrTD4oQy.js"
	},
	"/assets/categories-BjrVFrQu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ab8-nWFkOunz34CY5r/xKNOGRM/IoHw\"",
		"mtime": "2026-07-26T18:24:25.808Z",
		"size": 2744,
		"path": "../public/assets/categories-BjrVFrQu.js"
	},
	"/assets/brands.index-BFtbmBs4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4dd-7I4lbMR/jBmYzXGWIlu4fIfhw7E\"",
		"mtime": "2026-07-26T18:24:25.807Z",
		"size": 1245,
		"path": "../public/assets/brands.index-BFtbmBs4.js"
	},
	"/assets/best._category-BmERhCLD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14fe-NLFT6basvf6CMs/UYyFIcHsRC5Q\"",
		"mtime": "2026-07-26T18:24:25.804Z",
		"size": 5374,
		"path": "../public/assets/best._category-BmERhCLD.js"
	},
	"/assets/brand._slug-DzKU-Dcc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7b-O+awdGAqgrhgvuD8UiijaVoWKdk\"",
		"mtime": "2026-07-26T18:24:25.805Z",
		"size": 3963,
		"path": "../public/assets/brand._slug-DzKU-Dcc.js"
	},
	"/assets/category._slug-BpAoUnGP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d39-yebVDHndj75NBtWVBshPjPaAPcg\"",
		"mtime": "2026-07-26T18:24:25.809Z",
		"size": 3385,
		"path": "../public/assets/category._slug-BpAoUnGP.js"
	},
	"/assets/compare._slug-C_Of7zdJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cad-7bxGbo2N0kj8RwnJWzBsc2/hK+Q\"",
		"mtime": "2026-07-26T18:24:25.810Z",
		"size": 11437,
		"path": "../public/assets/compare._slug-C_Of7zdJ.js"
	},
	"/assets/collections-DN_9sgVe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d23-ze8vXJa8eV193nJ1ZMtYFNJgfak\"",
		"mtime": "2026-07-26T18:24:25.809Z",
		"size": 3363,
		"path": "../public/assets/collections-DN_9sgVe.js"
	},
	"/assets/contact-CFjoQVN3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18ae-w18S85Lg7gHcZJGLgdBs3pk2Zqc\"",
		"mtime": "2026-07-26T18:24:25.811Z",
		"size": 6318,
		"path": "../public/assets/contact-CFjoQVN3.js"
	},
	"/assets/compare.index-C8ExlRzm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ab1-SLaPWikuHx3v7LyNOMsKLKCaliA\"",
		"mtime": "2026-07-26T18:24:25.810Z",
		"size": 6833,
		"path": "../public/assets/compare.index-C8ExlRzm.js"
	},
	"/assets/dmca-Cj_h0hoi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"927-npuwGdahnwpAttbIiik1bFxHj84\"",
		"mtime": "2026-07-26T18:24:25.814Z",
		"size": 2343,
		"path": "../public/assets/dmca-Cj_h0hoi.js"
	},
	"/assets/ContentCards-BgKe3Tx9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"177c-kqMKFRXzKvlgZ5+flngfiKVuUGo\"",
		"mtime": "2026-07-26T18:24:25.802Z",
		"size": 6012,
		"path": "../public/assets/ContentCards-BgKe3Tx9.js"
	},
	"/assets/dashboard-B1S5i9Mw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"977e-8Bf7EeKFq1nVsX0YcTm36ZbTuSE\"",
		"mtime": "2026-07-26T18:24:25.811Z",
		"size": 38782,
		"path": "../public/assets/dashboard-B1S5i9Mw.js"
	},
	"/assets/deals-CYSXjWq_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f83-XaeDf5Gu9jFKoKu9e4w7TVMUQeU\"",
		"mtime": "2026-07-26T18:24:25.813Z",
		"size": 3971,
		"path": "../public/assets/deals-CYSXjWq_.js"
	},
	"/assets/editorial-policy-Ctf5zeBz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d7-OKYLQNQiD+QVNoanbv2nZPaibeI\"",
		"mtime": "2026-07-26T18:24:25.814Z",
		"size": 2263,
		"path": "../public/assets/editorial-policy-Ctf5zeBz.js"
	},
	"/visuals/laptop.mp4": {
		"type": "video/mp4",
		"etag": "\"179c2d-ZLjWw8DSt1Gd4PQDS9aRKZWDiB8\"",
		"mtime": "2026-07-25T13:34:47.971Z",
		"size": 1547309,
		"path": "../public/visuals/laptop.mp4"
	},
	"/visuals/phone.mp4": {
		"type": "video/mp4",
		"etag": "\"1a8f4a-SAAxord0v7fgLRIfdI5NxSotTYo\"",
		"mtime": "2026-07-25T14:00:08.026Z",
		"size": 1740618,
		"path": "../public/visuals/phone.mp4"
	},
	"/visuals/headphones.mp4": {
		"type": "video/mp4",
		"etag": "\"1d3cce-SxLClhzJ/G34Jt/Gd/VtvnowX+I\"",
		"mtime": "2026-07-25T13:40:22.434Z",
		"size": 1916110,
		"path": "../public/visuals/headphones.mp4"
	},
	"/assets/faq-CZhRkgt4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b16-LQnpSlT+FBuD10TJ3aBRjchQqfs\"",
		"mtime": "2026-07-26T18:24:25.814Z",
		"size": 2838,
		"path": "../public/assets/faq-CZhRkgt4.js"
	},
	"/assets/guides._slug-2hTJppyB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1763-cUxkRWxic9uYBJ0KZIKu5So/NdM\"",
		"mtime": "2026-07-26T18:24:25.814Z",
		"size": 5987,
		"path": "../public/assets/guides._slug-2hTJppyB.js"
	},
	"/assets/guides.index-HJ6HS0Zd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4db-Aq5cYllFe66+2ATV3yAi72OzfWk\"",
		"mtime": "2026-07-26T18:24:25.814Z",
		"size": 1243,
		"path": "../public/assets/guides.index-HJ6HS0Zd.js"
	},
	"/assets/gsap-gEwF3CNN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11027-nIJTg4s3H28jyeSATEZcdpcuaJA\"",
		"mtime": "2026-07-26T18:24:25.814Z",
		"size": 69671,
		"path": "../public/assets/gsap-gEwF3CNN.js"
	},
	"/assets/lenis-DdrGTsEx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"478d-mZHPO7Pf1OkK6MydXdG+JjPcikM\"",
		"mtime": "2026-07-26T18:24:25.817Z",
		"size": 18317,
		"path": "../public/assets/lenis-DdrGTsEx.js"
	},
	"/assets/link-DFqM_2is.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"663b-edKMVTGOdLdGI3/9DQxcLBAElkk\"",
		"mtime": "2026-07-26T18:24:25.819Z",
		"size": 26171,
		"path": "../public/assets/link-DFqM_2is.js"
	},
	"/assets/how-we-review-D5oS4DbS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c24-ZOokONtH7aP2rmsMpdauKq7be6o\"",
		"mtime": "2026-07-26T18:24:25.817Z",
		"size": 3108,
		"path": "../public/assets/how-we-review-D5oS4DbS.js"
	},
	"/assets/login-CSxJgJ1n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c41-cMb+Z5X3WQlx+d0CAAEdlxFQoqA\"",
		"mtime": "2026-07-26T18:24:25.820Z",
		"size": 15425,
		"path": "../public/assets/login-CSxJgJ1n.js"
	},
	"/assets/new-arrivals-DWzc3M7p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56e-jLjVgnSvHvibPd9gJ7QKbEZ26vw\"",
		"mtime": "2026-07-26T18:24:25.820Z",
		"size": 1390,
		"path": "../public/assets/new-arrivals-DWzc3M7p.js"
	},
	"/assets/preload-helper-dUojpriO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26f0-I9bWkKhIlSlJ0quQTN7LNjri8zs\"",
		"mtime": "2026-07-26T18:24:25.820Z",
		"size": 9968,
		"path": "../public/assets/preload-helper-dUojpriO.js"
	},
	"/assets/privacy-policy-BsYkrYFC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7b0-LsMHIZmGftKU77SjMwYFhBCGuQM\"",
		"mtime": "2026-07-26T18:24:25.821Z",
		"size": 1968,
		"path": "../public/assets/privacy-policy-BsYkrYFC.js"
	},
	"/visuals/wearables.mp4": {
		"type": "video/mp4",
		"etag": "\"1c9d21-Rq+Ab3OYbYmpm0ugFlDBRaR6t6c\"",
		"mtime": "2026-07-25T14:00:16.931Z",
		"size": 1875233,
		"path": "../public/visuals/wearables.mp4"
	},
	"/assets/product-headphones-CduSVDKW.jpg": {
		"type": "image/jpeg",
		"etag": "\"84b6-7lHyw/mNai3wqOG1Ll4QLU1qhWo\"",
		"mtime": "2026-07-26T18:24:25.831Z",
		"size": 33974,
		"path": "../public/assets/product-headphones-CduSVDKW.jpg"
	},
	"/assets/product-laptop-DjHxqni6.jpg": {
		"type": "image/jpeg",
		"etag": "\"9597-4l4zpmHFr0mZtO9zQpU4icmt9z8\"",
		"mtime": "2026-07-26T18:24:25.831Z",
		"size": 38295,
		"path": "../public/assets/product-laptop-DjHxqni6.jpg"
	},
	"/assets/product-phone-B8JfHFGt.jpg": {
		"type": "image/jpeg",
		"etag": "\"b43a-UVDMKq0inomPzqF1NehgZOFS29Q\"",
		"mtime": "2026-07-26T18:24:25.833Z",
		"size": 46138,
		"path": "../public/assets/product-phone-B8JfHFGt.jpg"
	},
	"/assets/product-phone-BqRLmAyu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a-jOb1t9BYxh5x7ebaepoj8gZqMmY\"",
		"mtime": "2026-07-26T18:24:25.822Z",
		"size": 58,
		"path": "../public/assets/product-phone-BqRLmAyu.js"
	},
	"/assets/index-ChufjRPp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"148489-aEuN5Os6g7Lcg8odayIByxn2ltc\"",
		"mtime": "2026-07-26T18:24:25.799Z",
		"size": 1344649,
		"path": "../public/assets/index-ChufjRPp.js"
	},
	"/assets/product-hub.png": {
		"type": "image/png",
		"etag": "\"1427f0-zHQL9LBF393L8J1faCds4DPag78\"",
		"mtime": "2026-07-24T17:36:30.068Z",
		"size": 1320944,
		"path": "../public/assets/product-hub.png"
	},
	"/assets/logo.png": {
		"type": "image/png",
		"etag": "\"1e47c7-Kin/fTPLMMzKEOyVkh+s9vjFyX4\"",
		"mtime": "2026-06-27T12:40:43.032Z",
		"size": 1984455,
		"path": "../public/assets/logo.png"
	},
	"/assets/product-watch-CudBJRL7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"68-aAGamsp4rQvnOjKBwV/xWwNxm3Q\"",
		"mtime": "2026-07-26T18:24:25.822Z",
		"size": 104,
		"path": "../public/assets/product-watch-CudBJRL7.js"
	},
	"/assets/product._slug-D9iGhWQn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e85-VouZFiwdVB2t4rCawt7+jRIxQpY\"",
		"mtime": "2026-07-26T18:24:25.823Z",
		"size": 7813,
		"path": "../public/assets/product._slug-D9iGhWQn.js"
	},
	"/assets/ProductCards-Gr9C1oa0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2675-Ck1DHfZEl/M6zLAuaaBgPdwA2gE\"",
		"mtime": "2026-07-26T18:24:25.802Z",
		"size": 9845,
		"path": "../public/assets/ProductCards-Gr9C1oa0.js"
	},
	"/assets/products.laptop-air-CDzNygnN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c5-1umw4Mz5L9vA0wtxECfduxhCW1g\"",
		"mtime": "2026-07-26T18:24:25.824Z",
		"size": 5061,
		"path": "../public/assets/products.laptop-air-CDzNygnN.js"
	},
	"/assets/recently-viewed-C3SJOrfp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2b-cPN6NqSeKvAbHJF0MPne7a8IWQE\"",
		"mtime": "2026-07-26T18:24:25.824Z",
		"size": 2859,
		"path": "../public/assets/recently-viewed-C3SJOrfp.js"
	},
	"/assets/product-watch-9FC3LxEx.jpg": {
		"type": "image/jpeg",
		"etag": "\"10571-+5TOXGS4THf1aV3JzPn7XrKG8Rs\"",
		"mtime": "2026-07-26T18:24:25.834Z",
		"size": 66929,
		"path": "../public/assets/product-watch-9FC3LxEx.jpg"
	},
	"/assets/reviews.index-BlLNCK18.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"499-LEeWL1ltzKjoEEHDkt4DCgz9S5g\"",
		"mtime": "2026-07-26T18:24:25.825Z",
		"size": 1177,
		"path": "../public/assets/reviews.index-BlLNCK18.js"
	},
	"/assets/reviews._slug-D5uiR5a8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"266c-nxXbTezpX60/IXGMj5Ay82zcG8A\"",
		"mtime": "2026-07-26T18:24:25.825Z",
		"size": 9836,
		"path": "../public/assets/reviews._slug-D5uiR5a8.js"
	},
	"/assets/routes-DPg-ezBP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8067-JeHGaWSNFe5BQ9jQ7tWNZ3RUfG4\"",
		"mtime": "2026-07-26T18:24:25.827Z",
		"size": 32871,
		"path": "../public/assets/routes-DPg-ezBP.js"
	},
	"/assets/reviews.macbook-pro-Bfm2ixbU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1949-G9Z5rUeyKKgR93QG6s9iURoRp5Y\"",
		"mtime": "2026-07-26T18:24:25.825Z",
		"size": 6473,
		"path": "../public/assets/reviews.macbook-pro-Bfm2ixbU.js"
	},
	"/assets/search-BI5bBuCg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a76-gbIZOB10RefizJJWGkLdkautwIM\"",
		"mtime": "2026-07-26T18:24:25.827Z",
		"size": 19062,
		"path": "../public/assets/search-BI5bBuCg.js"
	},
	"/assets/shimmer-button-CyOXlUqf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f77-gk03Rs02J37r+1TdjPed/34WcBQ\"",
		"mtime": "2026-07-26T18:24:25.828Z",
		"size": 28535,
		"path": "../public/assets/shimmer-button-CyOXlUqf.js"
	},
	"/assets/ScrollTrigger-DddFoFor.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a75a-Rn8rj1gwvoBa5jPmRCNFKZr3WCQ\"",
		"mtime": "2026-07-26T18:24:25.802Z",
		"size": 42842,
		"path": "../public/assets/ScrollTrigger-DddFoFor.js"
	},
	"/assets/terms-BTxoZJd3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e7-Xd37SZ0FjpjLmVn111oSYUch7EA\"",
		"mtime": "2026-07-26T18:24:25.829Z",
		"size": 2023,
		"path": "../public/assets/terms-BTxoZJd3.js"
	},
	"/assets/trending-Dj-R5__j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"52e-6lZyuatUhvQD9kgDujd1IBNPZWk\"",
		"mtime": "2026-07-26T18:24:25.829Z",
		"size": 1326,
		"path": "../public/assets/trending-Dj-R5__j.js"
	},
	"/assets/useRouter-DiFt4bH2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b5-Uryd7mt4+6BXvtKlYxF39A3xAX0\"",
		"mtime": "2026-07-26T18:24:25.829Z",
		"size": 693,
		"path": "../public/assets/useRouter-DiFt4bH2.js"
	},
	"/assets/wishlist-DQAAyOe5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b49-vVreM75XcX/0LX757Z0Ek+eaxOU\"",
		"mtime": "2026-07-26T18:24:25.831Z",
		"size": 2889,
		"path": "../public/assets/wishlist-DQAAyOe5.js"
	},
	"/assets/styles-BA_4NhCj.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"209af-zbBvu3xJeRI83tciAnLDlE/4jXI\"",
		"mtime": "2026-07-26T18:24:25.834Z",
		"size": 133551,
		"path": "../public/assets/styles-BA_4NhCj.css"
	},
	"/assets/product-gaming.png": {
		"type": "image/png",
		"etag": "\"1e4b6a-w/TpQTzFU5drGon2l6j/DjKrrbg\"",
		"mtime": "2026-07-24T17:37:19.644Z",
		"size": 1985386,
		"path": "../public/assets/product-gaming.png"
	},
	"/assets/product-studio-monitor.png": {
		"type": "image/png",
		"etag": "\"1c31ac-MgBZ9R2g8jT7WEJ0aXM4uoM1dUA\"",
		"mtime": "2026-07-24T17:35:40.023Z",
		"size": 1847724,
		"path": "../public/assets/product-studio-monitor.png"
	},
	"/assets/product-camera.png": {
		"type": "image/png",
		"etag": "\"1f53c5-Izr5jLnDkVSJ7WXD/GSVeJuaxf8\"",
		"mtime": "2026-07-24T17:33:34.913Z",
		"size": 2053061,
		"path": "../public/assets/product-camera.png"
	},
	"/assets/product-tablet.png": {
		"type": "image/png",
		"etag": "\"151e04-UQwMuZjgqYWDGWl/Dzp+xiTtt94\"",
		"mtime": "2026-07-24T17:34:45.527Z",
		"size": 1383940,
		"path": "../public/assets/product-tablet.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_0iBWxH = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_0iBWxH
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
