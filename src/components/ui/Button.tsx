import { cn } from "@/lib/utils";
import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25",
  secondary:
    "bg-card text-foreground border border-border hover:border-accent/50 hover:bg-accent/5",
  ghost: "text-muted hover:text-foreground hover:bg-card",
  outline:
    "border border-accent text-accent hover:bg-accent hover:text-accent-foreground",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-12 px-8 text-base gap-2",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps | LinkButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-ring",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    const isAnchor =
      href.startsWith("http") ||
      href.startsWith("mailto") ||
      href.startsWith("#") ||
      href.startsWith("/");
    if (
      isAnchor &&
      (href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto") ||
        href.endsWith(".pdf"))
    ) {
      return (
        <a
          href={href}
          className={styles}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={styles}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={styles}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
