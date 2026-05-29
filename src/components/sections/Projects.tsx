"use client";

import { FilterTabs } from "@/components/ui/FilterTabs";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectFilterTags, projects } from "@/data/projects";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useMemo, useState } from "react";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const revealRef = useGsapReveal<HTMLDivElement>({ stagger: 0.12 });

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) =>
      p.technologies.some(
        (t) => t.toLowerCase() === activeFilter.toLowerCase(),
      ),
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="section-padding"
      aria-labelledby="projects-heading"
    >
      <Container>
        <SectionHeading label="Portfolio" title="Featured Projects" />

        <FilterTabs
          tags={projectFilterTags}
          activeTag={activeFilter}
          onChange={setActiveFilter}
          className="mb-10"
        />

        <div
          ref={revealRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
          role="list"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} role="listitem">
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <p className="col-span-full py-12 text-center text-muted">
              No projects found for this technology.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
