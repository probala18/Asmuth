"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Briefcase, Settings2 } from "lucide-react";
import { getUserPreferences, type UserPreferences } from "@/lib/preferences";
import { supabase } from "@/supabase";

export default function ProfilePage() {
  const [prefs, setPrefs] = useState<UserPreferences | null>(null);
  const [email, setEmail] = useState("Signed in user");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      const { data } = await supabase.auth.getSession();
      const userEmail = data.session?.user?.email ?? "Signed in user";
      setEmail(userEmail);
      setPrefs(getUserPreferences());
      setLoading(false);
    };

    void loadProfile();
  }, []);

  if (loading || !prefs) {
    return null;
  }

  const sections = [
    { label: "Interests", value: prefs.interests.length ? prefs.interests.join(", ") : "No selections yet" },
    { label: "Priorities", value: prefs.priorities.length ? prefs.priorities.join(", ") : "No priorities selected" },
    { label: "Usage", value: prefs.usage.length ? prefs.usage.join(", ") : "No usage selected" },
    { label: "Budget", value: prefs.budget || "No preference" },
    { label: "Preferred Brands", value: prefs.preferredBrands.length ? prefs.preferredBrands.join(", ") : "No preferences yet" },
    { label: "Current Interests", value: prefs.currentInterests.length ? prefs.currentInterests.join(", ") : "No exploration interests yet" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <div className="flex items-center justify-between gap-3">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" />
            Back to dashboard
          </Link>
          <div className="rounded-full border border-[var(--hairline)] bg-[var(--surface)]/80 px-3 py-1.5 text-xs font-mono-tech uppercase tracking-[0.25em] text-[var(--emerald-accent)]">
            Profile
          </div>
        </div>

        <section className="rounded-3xl border border-[var(--hairline)] bg-[var(--surface)]/70 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--hairline)] bg-background/80 px-3 py-1.5 text-[10px] font-mono-tech uppercase tracking-[0.3em] text-[var(--cyan-accent)]">
                <Sparkles className="size-3.5" />
                Your personal workspace
              </div>
              <div>
                <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
                  Welcome back
                </h1>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                  {email}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--hairline)] bg-background/70 px-4 py-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <Settings2 className="size-4 text-[var(--emerald-accent)]" />
                Onboarding status: {prefs.onboardingCompleted ? "Completed" : "Pending"}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section.label} className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface)]/70 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Briefcase className="size-4 text-[var(--cyan-accent)]" />
                {section.label}
              </div>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.value}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
