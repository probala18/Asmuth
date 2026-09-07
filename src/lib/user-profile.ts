import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/supabase";

export interface UserProfile {
  id: string;
  name: string;
  firstName: string;
  email: string;
  avatarUrl?: string;
  createdAt: string;
}

function getText(metadata: User["user_metadata"], key: string) {
  const value = metadata?.[key];
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

export function getUserProfile(user: User): UserProfile {
  const name =
    getText(user.user_metadata, "full_name") ??
    getText(user.user_metadata, "name") ??
    getText(user.user_metadata, "username") ??
    user.email?.split("@")[0] ??
    "Member";

  return {
    id: user.id,
    name,
    firstName: name.split(/\s+/)[0] || "Member",
    email: user.email ?? "No email address",
    avatarUrl:
      getText(user.user_metadata, "avatar_url") ??
      getText(user.user_metadata, "picture"),
    createdAt: user.created_at,
  };
}

export function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "U";
}

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const setUser = (user: User | null) => {
      if (!isMounted) return;
      setProfile(user ? getUserProfile(user) : null);
      setIsLoading(false);
    };

    void supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data } = supabase.auth.onAuthStateChange((_event, session) => setUser(session?.user ?? null));

    return () => {
      isMounted = false;
      data.subscription.unsubscribe();
    };
  }, []);

  return { profile, isLoading };
}
