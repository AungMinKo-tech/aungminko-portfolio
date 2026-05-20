export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDateRange(start: string, end: string): string {
  const endLabel = end.trim() || "Present";
  return `${start} — ${endLabel}`;
}
