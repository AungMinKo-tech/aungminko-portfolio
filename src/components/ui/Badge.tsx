import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "private" | "outline";
  className?: string;
}

const variants = {
  default: "bg-card text-muted border border-border",
  accent: "bg-accent/10 text-accent border border-accent/20",
  private: "bg-amber-500/10 text-amber-500 border border-amber-500/20",
  outline: "bg-transparent text-muted border border-border",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
