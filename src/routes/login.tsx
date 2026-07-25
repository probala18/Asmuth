import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { supabase } from "@/supabase";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login · genCART" },
      { name: "description", content: "Sign in or create an account to access your genCART experience." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [authMessage, setAuthMessage] = useState<string | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuthMessage(null);
    setAuthError(null);
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
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

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuthMessage(null);
    setAuthError(null);
    setIsLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
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
      options: {
        redirectTo,
      },
    });

    if (error) {
      console.error("Google sign-in failed:", error.message);
    }
  };

  return (
    <div className="auth-page">
      <style>{`
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
      `}</style>

      <div className="auth-container">
        <div className="auth-left">
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">
            {isSignUp 
              ? "Create your account to get started with genCART"
              : "Sign in to your account to continue"
            }
          </p>

          {authError && <div className="auth-message auth-message-error"><XCircle className="size-5" />{authError}</div>}
          {authMessage && <div className="auth-message auth-message-success"><CheckCircle2 className="size-5" />{authMessage}</div>}

          <form className="auth-form" onSubmit={isSignUp ? handleSignUp : handleSignIn}>
            {isSignUp && (
              <div className="form-group">
                <label className="form-label" htmlFor="username">Username</label>
                <div className="form-input-wrapper">
                  <User className="form-input-icon size-5" />
                  <input
                    id="username"
                    type="text"
                    className="form-input"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    autoComplete="username"
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <div className="form-input-wrapper">
                <Mail className="form-input-icon size-5" />
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete={isSignUp ? "email" : "username"}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <div className="form-input-wrapper">
                <Lock className="form-input-icon size-5" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="form-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete={isSignUp ? "new-password" : "current-password"}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="form-options">
                <label className="form-checkbox">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="form-link">Forgot password?</a>
              </div>
            )}

            <button
              type="submit"
              className="submit-btn"
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? (
                <span>Processing...</span>
              ) : (
                <>
                  <span>{isSignUp ? "Create account" : "Sign in"}</span>
                  <ArrowRight className="size-5" />
                </>
              )}
            </button>

            <div className="auth-divider">
              <span>Or continue with</span>
            </div>

            <div className="social-buttons">
              <button type="button" className="social-btn" onClick={handleGoogleSignIn}>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>
            </div>

            <div className="auth-toggle">
              {isSignUp ? (
                <span>Already have an account? <button type="button" className="auth-toggle-link" onClick={() => setIsSignUp(false)}>Sign in</button></span>
              ) : (
                <span>Don't have an account? <button type="button" className="auth-toggle-link" onClick={() => setIsSignUp(true)}>Sign up</button></span>
              )}
            </div>
          </form>
        </div>

        <div className="auth-right">
          <div className="right-content">
            <h2 className="right-title">
              {isSignUp ? "Join genCART" : "Welcome Back"}
            </h2>
            <p className="right-description">
              {isSignUp
                ? "Create your account and discover a world of possibilities. Get started in seconds."
                : "Access your account and continue your journey with us. Experience the best of genCART."
              }
            </p>
            <div className="right-features">
              <div className="right-feature">
                <div className="right-feature-icon">✓</div>
                <span>Secure and private</span>
              </div>
              <div className="right-feature">
                <div className="right-feature-icon">✓</div>
                <span>Fast and reliable</span>
              </div>
              <div className="right-feature">
                <div className="right-feature-icon">✓</div>
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
