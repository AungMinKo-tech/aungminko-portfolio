"use client";

import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";
import { GitHubIcon } from "@/components/icons/SocialIcons";
import { ExternalLink, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group gradient-border overflow-hidden rounded-2xl bg-card transition-all duration-500 hover:shadow-xl hover:shadow-accent/10">
      <div className="relative aspect-video overflow-hidden bg-background">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-card/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
            {project.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-muted line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="accent">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent focus-ring rounded"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitHubIcon className="h-4 w-4" aria-hidden />
              GitHub
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent focus-ring rounded"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              Live Demo
            </Link>
          )}
          {project.isPrivate && (
            <Badge variant="private" className="shrink-0 gap-1">
              <Lock className="h-3 w-3" aria-hidden />
              Private
            </Badge>
          )}
        </div>
      </div>
    </article>
  );
}
