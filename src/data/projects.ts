import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "utility-bill-management-system",
    title: "Utility Bill Management System",
    description:
      "Application for managing utility bills for customers and staff with role-based dashboards and reporting.",
    image: "/images/projects/utility.jpg",
    technologies: ["PHP", "Laravel", "PostgreSQL"],
    githubUrl: "https://github.com/AungMinKo-tech/Laravel-Utility-Management-System-",
    featured: true,
  },
  {
    id: "ecommerce-system",
    title: "Ecommerce System",
    description:
      "Ecommerce system with inventory tracking, sales analytics, receipt printing, and multi-store support.",
    image: "/images/projects/admin_dashboard.png",
    technologies: ["PHP", "Laravel", "MySQL"],
    githubUrl: "https://github.com/AungMinKo-tech/E_commerce-system",
    featured: false,
  },
  {
    id: "thet-aung optical-shop",
    title: "Thet Aung Optical Shop",
    description:
      "Business management solution for optical shops featuring patient records, prescription tracking.",
    image: "/images/projects/thet_aung.png",
    technologies: ["React Native", "Expo", "SQLite"],
    featured: true,
    isPrivate: true
  },
  {
    id: "unlock-wealth",
    title: "Unlock Wealth Digital",
    description: 
      "Developed a modern and highly responsive corporate portfolio website for a startup company, built using React, Vite, and Tailwind CSS to ensure blazing-fast performance and a sleek user experience.",
    image: "/images/projects/unlockwdigital.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://unlockwealthdigital.online/",
    featured: true,
  },
];

export const projectFilterTags: string[] = [
  "All",
  "React",
  "Node.js",
  "TypeScript",
  "PHP",
  "React Native"
];
