"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold text-accent-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Signal lost</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That route isn't on the grid. Head back home.
        </p>
        <div className="mt-6">
          <Link href="/" className="btn-accent inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
