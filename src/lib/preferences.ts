/* ─── genCART — User Preferences Storage & Model ─────────────────── */

export interface UserPreferences {
  onboardingCompleted: boolean;
  interests: string[];        // Step 1: Computing, Audio, Mobile, Wearables, Cameras, Smart Home, Gaming, Workspace
  priorities: string[];       // Step 2: Performance, Design, Value for money, Battery life, Camera quality, Audio quality, Portability, Durability, Innovation, Premium experience
  usage: string[];            // Step 3A: Work & Productivity, Creative Work, Programming & Development, Content Creation, Gaming, Music & Audio, Photography & Video, Study & Learning, Everyday Use
  budget: string;             // Step 3B: Under $100, $100–$300, $300–$700, $700–$1,500, $1,500+, No preference
  preferredBrands: string[];  // Step 4A: Apple, Samsung, Sony, Dell, Lenovo, ASUS, Google, Bose, JBL, Canon, Nikon, No preference
  currentInterests: string[]; // Step 4B: MacBooks, Windows Laptops, Wireless Earbuds, Headphones, Smartphones, Smartwatches, Cameras, Gaming Laptops, Monitors, Mechanical Keyboards
}

export const DEFAULT_PREFERENCES: UserPreferences = {
  onboardingCompleted: false,
  interests: [],
  priorities: [],
  usage: [],
  budget: "No preference",
  preferredBrands: [],
  currentInterests: [],
};

const STORAGE_KEY = "genCART-user-preferences";

export function getUserPreferences(): UserPreferences {
  if (typeof window === "undefined") return DEFAULT_PREFERENCES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PREFERENCES;
    return { ...DEFAULT_PREFERENCES, ...JSON.parse(raw) };
  } catch (err) {
    console.error("Failed to read genCART user preferences", err);
    return DEFAULT_PREFERENCES;
  }
}

export function saveUserPreferences(prefs: Partial<UserPreferences>): UserPreferences {
  const current = getUserPreferences();
  const updated: UserPreferences = { ...current, ...prefs };
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  } catch (err) {
    console.error("Failed to save genCART user preferences", err);
  }
  return updated;
}

export function resetOnboardingPreferences(): UserPreferences {
  const updated: UserPreferences = { ...DEFAULT_PREFERENCES, onboardingCompleted: false };
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  }
  return updated;
}
