import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/icons/SocialIcons";
import { siteConfig } from "@/data/site";
import { Mail } from "lucide-react";
import Link from "next/link";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  email: Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted" suppressHydrationWarning>
          © <span>2025 - {new Date().getFullYear()}</span>{" "}
          <span className="font-medium text-foreground">{siteConfig.name}</span>
          . All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {siteConfig.social.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent focus-ring"
                aria-label={social.label}
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
