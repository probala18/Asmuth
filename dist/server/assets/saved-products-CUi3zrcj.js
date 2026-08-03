import { n as getProduct } from "./products-DK41-WSW.js";
import { useEffect, useState } from "react";
//#region src/lib/preferences.ts
var DEFAULT_PREFERENCES = {
	onboardingCompleted: false,
	interests: [],
	priorities: [],
	usage: [],
	budget: "No preference",
	preferredBrands: [],
	currentInterests: []
};
var STORAGE_KEY$1 = "genCART-user-preferences";
function getUserPreferences() {
	if (typeof window === "undefined") return DEFAULT_PREFERENCES;
	try {
		const raw = localStorage.getItem(STORAGE_KEY$1);
		if (!raw) return DEFAULT_PREFERENCES;
		return {
			...DEFAULT_PREFERENCES,
			...JSON.parse(raw)
		};
	} catch (err) {
		console.error("Failed to read genCART user preferences", err);
		return DEFAULT_PREFERENCES;
	}
}
function saveUserPreferences(prefs) {
	const updated = {
		...getUserPreferences(),
		...prefs
	};
	try {
		if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY$1, JSON.stringify(updated));
	} catch (err) {
		console.error("Failed to save genCART user preferences", err);
	}
	return updated;
}
function resetOnboardingPreferences() {
	const updated = {
		...DEFAULT_PREFERENCES,
		onboardingCompleted: false
	};
	if (typeof window !== "undefined") try {
		localStorage.setItem(STORAGE_KEY$1, JSON.stringify(updated));
	} catch {}
	return updated;
}
//#endregion
//#region src/lib/saved-products.ts
var STORAGE_KEY = "genCART-saved-products";
var SAVED_PRODUCTS_CHANGED = "genCART:saved-products-changed";
function getSavedProductSlugs() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed.filter((slug) => typeof slug === "string") : [];
	} catch {
		return [];
	}
}
function getSavedProducts() {
	return getSavedProductSlugs().map((slug) => getProduct(slug)).filter((product) => Boolean(product));
}
function toggleSavedProduct(slug, product) {
	const current = getSavedProductSlugs();
	const isSaved = current.includes(slug);
	const next = isSaved ? current.filter((item) => item !== slug) : [...current, slug];
	if (typeof window !== "undefined") {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
		window.dispatchEvent(new Event(SAVED_PRODUCTS_CHANGED));
	}
	if (product) {
		const prefs = getUserPreferences();
		const interestSet = /* @__PURE__ */ new Set([...prefs.interests, product.category]);
		const currentInterestSet = /* @__PURE__ */ new Set([
			...prefs.currentInterests,
			product.name,
			product.category
		]);
		saveUserPreferences({
			interests: Array.from(interestSet),
			currentInterests: Array.from(currentInterestSet)
		});
	}
	return !isSaved;
}
function removeSavedProduct(slug) {
	const current = getSavedProductSlugs().filter((item) => item !== slug);
	if (typeof window !== "undefined") {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
		window.dispatchEvent(new Event(SAVED_PRODUCTS_CHANGED));
	}
	return current;
}
function clearSavedProducts() {
	if (typeof window !== "undefined") {
		window.localStorage.removeItem(STORAGE_KEY);
		window.dispatchEvent(new Event(SAVED_PRODUCTS_CHANGED));
	}
	return [];
}
function useSavedProducts() {
	const [savedProducts, setSavedProducts] = useState([]);
	useEffect(() => {
		const syncSavedProducts = () => {
			setSavedProducts(getSavedProducts());
		};
		syncSavedProducts();
		if (typeof window !== "undefined") {
			window.addEventListener(SAVED_PRODUCTS_CHANGED, syncSavedProducts);
			return () => window.removeEventListener(SAVED_PRODUCTS_CHANGED, syncSavedProducts);
		}
	}, []);
	return savedProducts;
}
//#endregion
export { getUserPreferences as a, useSavedProducts as i, removeSavedProduct as n, resetOnboardingPreferences as o, toggleSavedProduct as r, saveUserPreferences as s, clearSavedProducts as t };
