"use client";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Download, X } from "lucide-react";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
  <>
    <div
      className={cn(
        "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      onClick={onClose}
      aria-hidden={!isOpen}
    />
    <nav
      id="mobile-menu"
      className={cn(
        "fixed right-0 top-0 z-50 flex h-full w-[min(100%,320px)] flex-col border-l border-border bg-card p-6 transition-transform duration-300 lg:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="text-lg font-bold gradient-text">{siteConfig.name.split(" ")[0]}</span>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border focus-ring"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <ul className="flex flex-col gap-1">
        {navLinks.map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className={cn(
                  "block rounded-lg px-4 py-3 text-base font-medium transition-colors focus-ring",
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:bg-background hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto flex flex-col gap-4 pt-8">
        <ThemeToggle />
        <Button href={siteConfig.resumeUrl} variant="primary" className="w-full">
          <Download className="h-4 w-4" />
          Download Resume
        </Button>
      </div>
    </nav>
  </>
  );
}
