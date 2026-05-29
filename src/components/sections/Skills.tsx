"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories, skills } from "@/data/skills";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function Skills() {
  const revealRef = useGsapReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <section
      id="skills"
      className="section-padding bg-card/30"
      aria-labelledby="skills-heading"
    >
      <Container>
        <SectionHeading label="Skills" title="Technologies I Work With" />

        <div ref={revealRef} className="grid gap-10 md:grid-cols-2">
          {skillCategories.map((category) => {
            const categorySkills = skills.filter(
              (s) => s.category === category.id,
            );
            return (
              <div
                key={category.id}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30"
              >
                <h3 className="mb-6 text-lg font-semibold text-foreground">
                  {category.label}
                </h3>
                <ul className="space-y-4">
                  {categorySkills.map((skill) => (
                    <li key={skill.name}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-muted">{skill.proficiency}%</span>
                      </div>
                      <div
                        className="h-2 overflow-hidden rounded-full bg-background"
                        role="progressbar"
                        aria-valuenow={skill.proficiency}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency`}
                      >
                        <div
                          className="h-full rounded-full bg-linear-to-r from-accent to-accent-secondary transition-all duration-1000"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
