import type { SiteConfig, Stat } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Aung Min Ko",
  title: "Junior FullStack Developer",
  role: "Junior FullStack Developer",
  tagline:
    "I craft scalable web applications with clean code, intuitive UX, and modern technologies.",
  email: "aungminko.dev@gmail.com",
  phone: "+95 9 252 4944 54",
  location: "Yangon, Myanmar",
  resumeUrl: "/Aung_Min_Ko_CV.pdf",
  siteUrl: "https://aungminko-portfolio.vercel.app/",
  social: [
    { label: "GitHub", href: "https://github.com/AungMinKo-tech", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aung-min-ko-20b317346/", icon: "linkedin" },
    { label: "Email", href: "mailto:aungminko.dev@gmail.com", icon: "email" },
  ],
};

export const heroStats: Stat[] = [
  { label: "Years Experience", value: 1, suffix: "+" },
  { label: "Projects Completed", value: 7, suffix: "+" },
  // { label: "Technologies", value: 15, suffix: "+" },
  // { label: "Happy Clients", value: 12, suffix: "+" },
];

export const aboutParagraphs: string[] = [
  "I'm a passionate Junior FullStack Developer with expertise in building end-to-end web applications. I specialize in React, Node.js, PHP with Laravel & CodeIgniter and React Native that are both performant and user-friendly.",
  "I have a strong passion for building robust web applications and continually enhancing my expertise in both frontend and backend technologies.",
  "My professional journey took a significant step forward in 2024 when I started working as a Junior FullStack Developer at MoniSoft Development System in Yangon, Myanmar.",
];
