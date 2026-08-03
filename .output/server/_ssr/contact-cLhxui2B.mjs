import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as SplitTextReveal, n as HandUnderline } from "./motion-CSNJjo3r.mjs";
import { J as CircleCheckBig, S as MessageCircle, T as Mail, Y as CircleAlert, _ as Send, w as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-cLhxui2B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [formData, setFormData] = (0, import_react.useState)({
		firstName: "",
		lastName: "",
		email: "",
		subject: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [submitStatus, setSubmitStatus] = (0, import_react.useState)("idle");
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
		if (errors[name]) setErrors((prev) => ({
			...prev,
			[name]: void 0
		}));
	};
	const validate = () => {
		const newErrors = {};
		if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
		if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
		if (!formData.email.trim()) newErrors.email = "Email is required";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address";
		if (!formData.subject.trim()) newErrors.subject = "Subject is required";
		if (!formData.message.trim()) newErrors.message = "Message is required";
		else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters long";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validate()) return;
		setIsSubmitting(true);
		setSubmitStatus("idle");
		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));
			setSubmitStatus("success");
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				subject: "",
				message: ""
			});
		} catch (err) {
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-w-6xl mx-auto text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3",
					children: "Open channel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitTextReveal, {
					text: "Talk to us",
					className: "font-display text-6xl lg:text-8xl font-bold tracking-tight"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-muted-foreground max-w-xl mx-auto",
					children: ["Concierge, editorial, partnerships. We ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandUnderline, { children: "actually respond." })]
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 lg:px-10 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: [
					{
						Icon: Mail,
						label: "Email",
						value: "hello@genCART.co"
					},
					{
						Icon: MessageCircle,
						label: "Concierge",
						value: "+1 (800) genCART-9"
					},
					{
						Icon: MapPin,
						label: "Studio",
						value: "San Francisco · New York · Berlin"
					}
				].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card-2 p-6 flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-12 grid place-items-center rounded-xl bg-[var(--surface)] border border-[var(--emerald-accent)]/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.Icon, { className: "size-5 text-[var(--emerald-accent)]" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
						children: it.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg",
						children: it.value
					})] })]
				}, it.label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card-2 p-8 lg:p-10 relative",
				children: [submitStatus === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 bg-background/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10 animate-fade-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "size-16 text-[var(--success)] mb-6 animate-bounce" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl font-semibold mb-2",
							children: "Message Sent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground max-w-sm mb-6",
							children: "Thank you for reaching out. A product specialist or editorial lead will contact you within 24 hours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSubmitStatus("idle"),
							className: "btn-accent rounded-full px-6 py-2.5 text-xs font-semibold",
							children: "Send another message"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-4",
					children: [
						submitStatus === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-[var(--danger)] text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "An error occurred while sending your message. Please try again." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "First name",
								name: "firstName",
								value: formData.firstName,
								onChange: handleChange,
								error: errors.firstName,
								disabled: isSubmitting
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Last name",
								name: "lastName",
								value: formData.lastName,
								onChange: handleChange,
								error: errors.lastName,
								disabled: isSubmitting
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							name: "email",
							type: "email",
							value: formData.email,
							onChange: handleChange,
							error: errors.email,
							disabled: isSubmitting
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Subject",
							name: "subject",
							value: formData.subject,
							onChange: handleChange,
							error: errors.subject,
							disabled: isSubmitting
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground block mb-2",
								children: "Message"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								rows: 5,
								value: formData.message,
								onChange: handleChange,
								disabled: isSubmitting,
								className: `w-full rounded-xl bg-[var(--surface)] border ${errors.message ? "border-[var(--danger)]" : "border-[var(--hairline)]"} px-4 py-3 text-sm focus:border-[var(--emerald-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--emerald-accent)]/30 transition resize-none`
							}),
							errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-[var(--danger)] mt-1.5 flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3.5" }),
									" ",
									errors.message
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: isSubmitting,
							className: "btn-accent w-full rounded-full py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
							children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-spin inline-block size-4 border-2 border-current border-t-transparent rounded-full" }), "Sending..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), " Send message"] })
						})
					]
				})]
			})]
		})
	})] });
}
function Field({ label, name, type = "text", value, onChange, error, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground block mb-2",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			name,
			value,
			onChange,
			disabled,
			className: `w-full h-12 rounded-xl bg-[var(--surface)] border ${error ? "border-[var(--danger)]" : "border-[var(--hairline)]"} px-4 text-sm focus:border-[var(--emerald-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--emerald-accent)]/30 transition`
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-xs text-[var(--danger)] mt-1.5 flex items-center gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3.5" }),
				" ",
				error
			]
		})
	] });
}
//#endregion
export { ContactPage as component };
