import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { P as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as EyeOff, D as Lock, G as CircleX, T as Mail, a as User, q as CircleCheck, ut as ArrowRight, z as Eye } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./supabase-Ckt6j23M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-849w9yJE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const navigate = useNavigate();
	const [isSignUp, setIsSignUp] = (0, import_react.useState)(false);
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [username, setUsername] = (0, import_react.useState)("");
	const [authMessage, setAuthMessage] = (0, import_react.useState)(null);
	const [authError, setAuthError] = (0, import_react.useState)(null);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const handleSignIn = async (event) => {
		event.preventDefault();
		setAuthMessage(null);
		setAuthError(null);
		setIsLoading(true);
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		setIsLoading(false);
		if (error) {
			setAuthError(error.message);
			return;
		}
		setAuthMessage("Signed in successfully. Redirecting to workspace...");
		setTimeout(() => {
			navigate({ to: "/dashboard" });
		}, 500);
	};
	const handleSignUp = async (event) => {
		event.preventDefault();
		setAuthMessage(null);
		setAuthError(null);
		setIsLoading(true);
		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: { data: { username } }
		});
		setIsLoading(false);
		if (error) {
			setAuthError(error.message);
			return;
		}
		setAuthMessage("Account created. Check your email to confirm your signup.");
	};
	const handleGoogleSignIn = async () => {
		const redirectTo = `${window.location.origin}/`;
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: { redirectTo }
		});
		if (error) console.error("Google sign-in failed:", error.message);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "auth-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 1rem 2rem;
          background: var(--background);
          font-family: var(--font-sans);
        }

        .auth-container {
          width: 100%;
          max-width: 1000px;
          min-height: 600px;
          background: var(--surface);
          border-radius: 24px;
          box-shadow: var(--shadow-elegant);
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid var(--hairline);
        }

        .auth-left {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .auth-right {
          background: linear-gradient(135deg, var(--emerald-accent) 0%, var(--cyan-accent) 100%);
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .auth-right::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .auth-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          font-family: var(--font-display);
          color: var(--foreground);
        }

        .auth-subtitle {
          color: var(--muted-foreground);
          margin-bottom: 2rem;
          font-size: 1rem;
          line-height: 1.5;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--foreground);
        }

        .form-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .form-input-icon {
          position: absolute;
          left: 1rem;
          color: var(--muted-foreground);
          pointer-events: none;
        }

        .form-input {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 3rem;
          border: 1px solid var(--hairline);
          border-radius: 12px;
          font-size: 1rem;
          background: var(--surface-2);
          color: var(--foreground);
          transition: all 0.2s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--emerald-accent);
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
          background: var(--surface);
        }

        .form-input::placeholder {
          color: var(--muted-foreground);
        }

        .password-toggle {
          position: absolute;
          right: 0.75rem;
          background: none;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          color: var(--muted-foreground);
          border-radius: 8px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .password-toggle:hover {
          background: var(--surface-2);
          color: var(--foreground);
        }

        .password-toggle:focus-visible {
          outline: 2px solid var(--emerald-accent);
          outline-offset: 2px;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
        }

        .form-checkbox {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          color: var(--muted-foreground);
        }

        .form-checkbox input {
          accent-color: var(--emerald-accent);
          width: 18px;
          height: 18px;
        }

        .form-link {
          color: var(--emerald-accent);
          text-decoration: none;
          font-weight: 500;
        }

        .form-link:hover {
          text-decoration: underline;
        }

        .form-link:focus-visible {
          outline: 2px solid var(--emerald-accent);
          outline-offset: 2px;
          border-radius: 2px;
        }

        .submit-btn {
          width: 100%;
          padding: 0.875rem;
          background: linear-gradient(135deg, var(--emerald-accent), var(--cyan-accent));
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.25);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .submit-btn:focus-visible {
          outline: 2px solid var(--emerald-accent);
          outline-offset: 2px;
        }

        .auth-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1.5rem 0;
          color: var(--muted-foreground);
          font-size: 0.875rem;
        }

        .auth-divider::before,
        .auth-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--hairline);
        }

        .social-buttons {
          display: flex;
          gap: 1rem;
        }

        .social-btn {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid var(--hairline);
          border-radius: 12px;
          background: var(--surface);
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: var(--foreground);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .social-btn:hover {
          background: var(--surface-2);
          border-color: var(--emerald-accent);
        }

        .social-btn:focus-visible {
          outline: 2px solid var(--emerald-accent);
          outline-offset: 2px;
        }

        .auth-toggle {
          text-align: center;
          margin-top: 1.5rem;
          color: var(--muted-foreground);
          font-size: 0.875rem;
        }

        .auth-toggle-link {
          color: var(--emerald-accent);
          text-decoration: none;
          font-weight: 600;
          cursor: pointer;
        }

        .auth-toggle-link:hover {
          text-decoration: underline;
        }

        .auth-toggle-link:focus-visible {
          outline: 2px solid var(--emerald-accent);
          outline-offset: 2px;
          border-radius: 2px;
        }

        .auth-message {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .auth-message-error {
          background: rgba(239, 68, 68, 0.1);
          color: var(--danger);
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .auth-message-success {
          background: rgba(16, 185, 129, 0.1);
          color: var(--success);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .right-content {
          position: relative;
          z-index: 1;
        }

        .right-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          font-family: var(--font-display);
          line-height: 1.1;
        }

        .right-description {
          font-size: 1.125rem;
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 2rem;
        }

        .right-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .right-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1rem;
        }

        .right-feature-icon {
          width: 24px;
          height: 24px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .auth-container {
            grid-template-columns: 1fr;
            max-width: 500px;
          }

          .auth-right {
            display: none;
          }

          .auth-left {
            padding: 2rem;
          }
        }
      ` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "auth-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "auth-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "auth-title",
						children: "Welcome back"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "auth-subtitle",
						children: isSignUp ? "Create your account to get started with genCART" : "Sign in to your account to continue"
					}),
					authError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "auth-message auth-message-error",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-5" }), authError]
					}),
					authMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "auth-message auth-message-success",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5" }), authMessage]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "auth-form",
						onSubmit: isSignUp ? handleSignUp : handleSignIn,
						children: [
							isSignUp && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "form-group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "form-label",
									htmlFor: "username",
									children: "Username"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "form-input-wrapper",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "form-input-icon size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "username",
										type: "text",
										className: "form-input",
										placeholder: "Enter your username",
										value: username,
										onChange: (e) => setUsername(e.target.value),
										required: true,
										autoComplete: "username"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "form-group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "form-label",
									htmlFor: "email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "form-input-wrapper",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "form-input-icon size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "email",
										type: "email",
										className: "form-input",
										placeholder: "Enter your email",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										required: true,
										autoComplete: isSignUp ? "email" : "username"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "form-group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "form-label",
									htmlFor: "password",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "form-input-wrapper",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "form-input-icon size-5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "password",
											type: showPassword ? "text" : "password",
											className: "form-input",
											placeholder: "Enter your password",
											value: password,
											onChange: (e) => setPassword(e.target.value),
											required: true,
											autoComplete: isSignUp ? "new-password" : "current-password"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "password-toggle",
											onClick: () => setShowPassword(!showPassword),
											"aria-label": showPassword ? "Hide password" : "Show password",
											children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-5" })
										})
									]
								})]
							}),
							!isSignUp && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "form-options",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "form-checkbox",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Remember me" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "form-link",
									children: "Forgot password?"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "submit-btn",
								disabled: isLoading,
								"aria-busy": isLoading,
								children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Processing..." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isSignUp ? "Create account" : "Sign in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5" })] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "auth-divider",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Or continue with" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "social-buttons",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "social-btn",
									onClick: handleGoogleSignIn,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										width: "20",
										height: "20",
										viewBox: "0 0 24 24",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
												fill: "#4285F4"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
												fill: "#34A853"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
												fill: "#FBBC05"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
												fill: "#EA4335"
											})
										]
									}), "Google"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "auth-toggle",
								children: isSignUp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Already have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "auth-toggle-link",
									onClick: () => setIsSignUp(false),
									children: "Sign in"
								})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Don't have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "auth-toggle-link",
									onClick: () => setIsSignUp(true),
									children: "Sign up"
								})] })
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "auth-right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "right-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "right-title",
							children: isSignUp ? "Join genCART" : "Welcome Back"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "right-description",
							children: isSignUp ? "Create your account and discover a world of possibilities. Get started in seconds." : "Access your account and continue your journey with us. Experience the best of genCART."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "right-features",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "right-feature",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "right-feature-icon",
										children: "✓"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Secure and private" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "right-feature",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "right-feature-icon",
										children: "✓"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Fast and reliable" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "right-feature",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "right-feature-icon",
										children: "✓"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "24/7 support" })]
								})
							]
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { LoginPage as component };
