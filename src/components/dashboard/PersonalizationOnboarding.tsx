import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Laptop,
  Headphones,
  Smartphone,
  Watch,
  Camera,
  Home,
  Gamepad2,
  Briefcase,
  Check,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Zap,
  ShieldCheck,
  Compass,
  Cpu,
  Layers,
  Battery,
  Award,
} from "lucide-react";
import { saveUserPreferences, type UserPreferences } from "@/lib/preferences";

interface OnboardingProps {
  onComplete: (prefs: UserPreferences) => void;
  initialPreferences?: UserPreferences;
}

/* ── Step Options Definitions ── */
const step1Categories = [
  { id: "Computing", label: "Computing", icon: Laptop },
  { id: "Audio", label: "Audio", icon: Headphones },
  { id: "Mobile", label: "Mobile", icon: Smartphone },
  { id: "Wearables", label: "Wearables", icon: Watch },
  { id: "Cameras", label: "Cameras", icon: Camera },
  { id: "Smart Home", label: "Smart Home", icon: Home },
  { id: "Gaming", label: "Gaming", icon: Gamepad2 },
  { id: "Workspace", label: "Workspace", icon: Briefcase },
];

const step2Priorities = [
  { id: "Performance", label: "Performance", icon: Cpu },
  { id: "Design", label: "Design", icon: Layers },
  { id: "Value for money", label: "Value for money", icon: ShieldCheck },
  { id: "Battery life", label: "Battery life", icon: Battery },
  { id: "Camera quality", label: "Camera quality", icon: Camera },
  { id: "Audio quality", label: "Audio quality", icon: Headphones },
  { id: "Portability", label: "Portability", icon: Compass },
  { id: "Durability", label: "Durability", icon: ShieldCheck },
  { id: "Innovation", label: "Innovation", icon: Zap },
  { id: "Premium experience", label: "Premium experience", icon: Award },
];

const step3Usages = [
  "Work & Productivity",
  "Creative Work",
  "Programming & Development",
  "Content Creation",
  "Gaming",
  "Music & Audio",
  "Photography & Video",
  "Study & Learning",
  "Everyday Use",
];

const step3Budgets = [
  "Under $100",
  "$100–$300",
  "$300–$700",
  "$700–$1,500",
  "$1,500+",
  "No preference",
];

const step4Brands = [
  "Apple",
  "Samsung",
  "Sony",
  "Dell",
  "Lenovo",
  "ASUS",
  "Google",
  "Bose",
  "JBL",
  "Canon",
  "Nikon",
  "No preference",
];

const step4Exploration = [
  "MacBooks",
  "Windows Laptops",
  "Wireless Earbuds",
  "Headphones",
  "Smartphones",
  "Smartwatches",
  "Cameras",
  "Gaming Laptops",
  "Monitors",
  "Mechanical Keyboards",
];

export function PersonalizationOnboarding({ onComplete, initialPreferences }: OnboardingProps) {
  const [step, setStep] = useState(1); // 1 to 4, 5 = completion
  const [selectedInterests, setSelectedInterests] = useState<string[]>(initialPreferences?.interests || []);
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>(initialPreferences?.priorities || []);
  const [selectedUsage, setSelectedUsage] = useState<string[]>(initialPreferences?.usage || []);
  const [selectedBudget, setSelectedBudget] = useState<string>(initialPreferences?.budget || "No preference");
  const [selectedBrands, setSelectedBrands] = useState<string[]>(initialPreferences?.preferredBrands || []);
  const [selectedExploration, setSelectedExploration] = useState<string[]>(initialPreferences?.currentInterests || []);

  const containerRef = useRef<HTMLDivElement>(null);

  // Toggle multi-select item
  const toggleSelection = (list: string[], setList: (v: string[]) => void, item: string) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  // Handle completion
  const handleFinish = () => {
    const finalPrefs: UserPreferences = {
      onboardingCompleted: true,
      interests: selectedInterests.length > 0 ? selectedInterests : ["Computing", "Audio"],
      priorities: selectedPriorities.length > 0 ? selectedPriorities : ["Performance", "Design"],
      usage: selectedUsage.length > 0 ? selectedUsage : ["Everyday Use"],
      budget: selectedBudget,
      preferredBrands: selectedBrands,
      currentInterests: selectedExploration.length > 0 ? selectedExploration : ["Laptops", "Headphones"],
    };

    saveUserPreferences(finalPrefs);
    setStep(5); // Show completion screen
  };

  const handleFinalExplore = () => {
    const saved = saveUserPreferences({ onboardingCompleted: true });
    onComplete(saved);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-2xl px-4 py-8 overflow-y-auto"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-3xl surface-card-2 border border-[var(--hairline)] rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden my-auto z-10">
        {/* Step Indicator Header (Steps 1-4) */}
        {step <= 4 && (
          <div className="flex items-center justify-between pb-6 border-b border-[var(--hairline)] mb-8">
            <div className="flex items-center gap-2">
              <div
                className="size-7 rounded-lg flex items-center justify-center font-display text-xs font-bold text-[oklch(0.13_0.03_270)]"
                style={{ background: "var(--gradient-accent)" }}
              >
                Æ
              </div>
              <span className="font-display text-sm font-semibold tracking-tight text-foreground">
                genCART<span className="text-[var(--emerald-accent)] text-[10px] align-top ml-0.5">®</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono-tech text-xs uppercase tracking-widest text-[var(--emerald-accent)]">
                0{step} / 04
              </span>
              <div className="w-24 h-1.5 rounded-full bg-[var(--surface-2)] overflow-hidden">
                <div
                  className="h-full transition-all duration-500 ease-out"
                  style={{ width: `${(step / 4) * 100}%`, background: "var(--accent)" }}
                />
              </div>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* ── STEP 01 — INTERESTS ── */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  What are you interested in?
                </h2>
                <p className="text-sm text-muted-foreground">
                  Choose the worlds you'd like to explore. Select all that apply.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {step1Categories.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedInterests.includes(cat.id);
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => toggleSelection(selectedInterests, setSelectedInterests, cat.id)}
                      className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between aspect-square group ${
                        isSelected
                          ? "border-[var(--emerald-accent)] bg-[var(--emerald-accent)]/10 shadow-lg"
                          : "border-[var(--hairline)] bg-[var(--surface)] hover:bg-[var(--surface-2)]"
                      }`}
                    >
                      <div className="flex justify-between items-start w-full">
                        <Icon
                          className={`size-6 transition-colors ${
                            isSelected ? "text-[var(--emerald-accent)]" : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        />
                        {isSelected && (
                          <div className="size-5 rounded-full bg-[var(--emerald-accent)] text-background flex items-center justify-center">
                            <Check className="size-3 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <span className="font-display text-sm font-semibold text-foreground">
                        {cat.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold"
                >
                  Continue <ArrowRight className="size-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 02 — PRIORITIES ── */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  What matters most to you?
                </h2>
                <p className="text-sm text-muted-foreground">
                  Choose the qualities you value most (3–5 recommended).
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {step2Priorities.map((item) => {
                  const Icon = item.icon;
                  const isSelected = selectedPriorities.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleSelection(selectedPriorities, setSelectedPriorities, item.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between min-h-[96px] group ${
                        isSelected
                          ? "border-[var(--emerald-accent)] bg-[var(--emerald-accent)]/10"
                          : "border-[var(--hairline)] bg-[var(--surface)] hover:bg-[var(--surface-2)]"
                      }`}
                    >
                      <div className="flex justify-between items-start w-full">
                        <Icon
                          className={`size-4 ${
                            isSelected ? "text-[var(--emerald-accent)]" : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        />
                        {isSelected && <Check className="size-3.5 text-[var(--emerald-accent)]" />}
                      </div>
                      <span className="font-display text-xs font-semibold text-foreground leading-snug">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="size-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="btn-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold"
                >
                  Continue <ArrowRight className="size-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 03 — USAGE + BUDGET ── */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Usage & Budget
                </h2>
                <p className="text-sm text-muted-foreground">
                  Tell us how you intend to use your tech and your typical budget range.
                </p>
              </div>

              {/* Section A: How do you use your tech? */}
              <div className="space-y-3">
                <label className="font-mono-tech text-xs uppercase tracking-wider text-[var(--emerald-accent)]">
                  How do you use your tech?
                </label>
                <div className="flex flex-wrap gap-2">
                  {step3Usages.map((use) => {
                    const isSelected = selectedUsage.includes(use);
                    return (
                      <button
                        key={use}
                        type="button"
                        onClick={() => toggleSelection(selectedUsage, setSelectedUsage, use)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                          isSelected
                            ? "border-[var(--emerald-accent)] bg-[var(--emerald-accent)]/15 text-[var(--emerald-accent)]"
                            : "border-[var(--hairline)] bg-[var(--surface)] text-foreground/80 hover:text-foreground hover:bg-[var(--surface-2)]"
                        }`}
                      >
                        {use}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Section B: What's your typical budget? */}
              <div className="space-y-3 pt-2">
                <label className="font-mono-tech text-xs uppercase tracking-wider text-[var(--cyan-accent)]">
                  What's your typical budget?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {step3Budgets.map((b) => {
                    const isSelected = selectedBudget === b;
                    return (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setSelectedBudget(b)}
                        className={`p-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                          isSelected
                            ? "border-[var(--cyan-accent)] bg-[var(--cyan-accent)]/15 text-[var(--cyan-accent)]"
                            : "border-[var(--hairline)] bg-[var(--surface)] text-foreground/80 hover:text-foreground hover:bg-[var(--surface-2)]"
                        }`}
                      >
                        {b}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="size-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="btn-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold"
                >
                  Continue <ArrowRight className="size-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 04 — BRANDS + CURRENT INTERESTS ── */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Brands & First Exploration
                </h2>
                <p className="text-sm text-muted-foreground">
                  Choose your favorite brands and what you'd like to explore first.
                </p>
              </div>

              {/* Brands */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-mono-tech text-xs uppercase tracking-wider text-[var(--emerald-accent)]">
                    Any brands you prefer? (Optional)
                  </label>
                  <span className="text-[10px] text-muted-foreground">Optional</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {step4Brands.map((b) => {
                    const isSelected = selectedBrands.includes(b);
                    return (
                      <button
                        key={b}
                        type="button"
                        onClick={() => toggleSelection(selectedBrands, setSelectedBrands, b)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          isSelected
                            ? "border-[var(--emerald-accent)] bg-[var(--emerald-accent)]/15 text-[var(--emerald-accent)]"
                            : "border-[var(--hairline)] bg-[var(--surface)] text-foreground/80 hover:text-foreground"
                        }`}
                      >
                        {b}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Exploration */}
              <div className="space-y-2 pt-2">
                <label className="font-mono-tech text-xs uppercase tracking-wider text-[var(--cyan-accent)]">
                  What would you like to explore first?
                </label>
                <div className="flex flex-wrap gap-2">
                  {step4Exploration.map((item) => {
                    const isSelected = selectedExploration.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleSelection(selectedExploration, setSelectedExploration, item)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          isSelected
                            ? "border-[var(--cyan-accent)] bg-[var(--cyan-accent)]/15 text-[var(--cyan-accent)]"
                            : "border-[var(--hairline)] bg-[var(--surface)] text-foreground/80 hover:text-foreground"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="size-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={handleFinish}
                  className="btn-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold"
                >
                  Finish Setup <Sparkles className="size-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 5 — ELEGANT COMPLETION SCREEN ── */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="py-12 text-center space-y-6"
            >
              <div className="inline-flex p-4 rounded-3xl bg-[var(--emerald-accent)]/15 text-[var(--emerald-accent)] border border-[var(--emerald-accent)]/30">
                <Sparkles className="size-10" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h2 className="font-display text-4xl font-bold tracking-tight text-foreground">
                  You're all set.
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your personalized genCART product discovery workspace is ready.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleFinalExplore}
                  className="btn-accent inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold shadow-xl"
                >
                  Explore genCART <ArrowRight className="size-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
