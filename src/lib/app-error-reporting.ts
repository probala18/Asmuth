type ErrorContext = Record<string, unknown>;

export function reportAppError(error: unknown, context: ErrorContext = {}) {
  if (typeof window === "undefined") return;

  console.error("App error", error, context);
}
