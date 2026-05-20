export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "email";
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  siteUrl: string;
  social: SocialLink[];
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "mobile" | "database" | "tools" | "other";
  icon?: string;
  proficiency: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}
