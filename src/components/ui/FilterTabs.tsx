"use client";

import { cn } from "@/lib/utils";

interface FilterTabsProps {
  tags: string[];
  activeTag: string;
  onChange: (tag: string) => void;
  className?: string;
}

export function FilterTabs({ tags, activeTag, onChange, className }: FilterTabsProps) {
  return (
    <div
      className={cn("flex flex-wrap gap-2", className)}
      role="tablist"
      aria-label="Filter projects by technology"
    >
      {tags.map((tag) => (
        <button
          key={tag}
          role="tab"
          aria-selected={activeTag === tag}
          onClick={() => onChange(tag)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus-ring",
            activeTag === tag
              ? "bg-accent text-accent-foreground shadow-md shadow-accent/25"
              : "bg-card text-muted border border-border hover:border-accent/40 hover:text-foreground"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
