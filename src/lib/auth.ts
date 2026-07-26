import { useEffect, useState } from "react";
import { supabase } from "@/supabase";

export function useAuthSession() {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    isAuthLoading: true,
  });

  useEffect(() => {
    let isMounted = true;

    const syncSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!isMounted) return;
      setAuthState({
        isAuthenticated: Boolean(data.session),
        isAuthLoading: false,
      });
    };

    void syncSession();

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!isMounted) return;
      setAuthState({
        isAuthenticated: Boolean(session),
        isAuthLoading: false,
      });
    });

    return () => {
      isMounted = false;
      data.subscription.unsubscribe();
    };
  }, []);

  return authState;
}
