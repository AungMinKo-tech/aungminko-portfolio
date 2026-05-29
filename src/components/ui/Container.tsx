import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  const classes = cn(
    "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
    className,
  );

  return <Tag className={classes}>{children}</Tag>;
}
