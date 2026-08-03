"use client";

import { useEffect } from "react";
import Link from "next/link";
import { reportAppError } from "@/lib/app-error-reporting";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    reportAppError(error, { boundary: "next_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went sideways. Try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => reset()}
            className="btn-accent rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Try again
          </button>
          <Link href="/" className="btn-ghost-glow rounded-full px-5 py-2.5 text-sm font-semibold">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
