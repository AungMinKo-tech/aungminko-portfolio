import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Junior Full Stack Developer",
    company: "MoniSoft Development System",
    location: "Yangon, Myanmar",
    startDate: "Jun 2026",
    endDate: "Present",
    description: [
      "Develop and maintain full-stack web applications for client and in-house products using React, TypeScript and Laravel.",
      "Build RESTful APIs, manage PostgreSQL/MySQL databases and integrate frontend interfaces with backend services.",
      "Collaborate with the team on feature delivery, bug fixes, code reviews and deployment-ready releases.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PHP", "Laravel", "React Native"],
  },
  {
    id: "exp-2",
    role: "Web Developer Intern",
    company: "MoniSoft Development System",
    location: "Yangon, Myanmar",
    startDate: "Mar 2026",
    endDate: "May 2026",
    description: [
      "Supported development of web applications by implementing UI components, fixing bugs and testing features under senior guidance.",
      "Assisted with Laravel and PHP backend tasks, including CRUD operations, form handling and basic API endpoints.",
      "Gained hands-on experience with Git workflows, team communication and delivering tasks in an agile development environment.",
    ],
    technologies: ["React", "Node.js", "PHP", "Laravel"],
  },
];
