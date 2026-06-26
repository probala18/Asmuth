import { createFileRoute } from "@tanstack/react-router";
import { SplitTextReveal } from "@/components/site/motion";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — AETHER" },
      { name: "description", content: "Details on how AETHER protects and handles user data." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-20 space-y-12">
      <div className="space-y-4">
        <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Legal</p>
        <SplitTextReveal text="Privacy Policy" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
        <p className="text-xl text-muted-foreground leading-relaxed">
          How AETHER handles user information. We collect minimal data, focusing entirely on a fast, telemetry-free experience.
        </p>
      </div>

      <div className="space-y-8 font-sans leading-relaxed text-foreground/80">
        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">Data Collection</h3>
          <p>
            We do not require accounts to browse AETHER. If you sign up for our newsletter, we collect only your email address. We do not use invasive tracking pixels or cross-site tracking scripts.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">Cookies</h3>
          <p>
            We use simple local storage values to persist user interface choices, such as your light/dark theme preference and active search filters. We do not sell this cookie data or share it with advertisers.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">Third-Party Links</h3>
          <p>
            When you click affiliate links to Amazon or partner brands, those external platforms will use cookies and track referrals in accordance with their own respective privacy policies.
          </p>
        </div>
      </div>
    </article>
  );
}
