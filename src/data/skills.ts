import type { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "HTML/CSS", category: "frontend", proficiency: 80 },
  { name: "JavaScript", category: "frontend", proficiency: 70 },
  { name: "React", category: "frontend", proficiency: 60 },
  { name: "Bootstrap", category: "frontend", proficiency: 80 },
  { name: "Tailwind CSS", category: "frontend", proficiency: 70 },
  { name: "PHP", category: "backend", proficiency: 80 },
  { name: "Laravel", category: "backend", proficiency: 80 },
  { name: "CodeIgniter", category: "backend", proficiency: 70 },
  { name: "Node.js", category: "backend", proficiency: 60 },
  { name: "Express", category: "backend", proficiency: 60 },
  { name: "AdonisJS", category: "backend", proficiency: 60 },
  { name: "React Native", category: "mobile", proficiency: 55 },
  { name: "MySQL", category: "database", proficiency: 80 },
  { name: "PostgreSQL", category: "database", proficiency: 70 },
  { name: "MongoDB", category: "database", proficiency: 70 },
  { name: "Git", category: "tools", proficiency: 80 },
];

export const skillCategories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools" },
] as const;
