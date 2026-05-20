"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function Experience() {
  const revealRef = useGsapReveal<HTMLDivElement>({ stagger: 0.2 });

  return (
    <section
      id="experience"
      className="section-padding bg-card/30"
      aria-labelledby="experience-heading"
    >
      <Container>
        <SectionHeading
          label="Experience"
          title="Professional Journey"
        />

        <div ref={revealRef} className="mx-auto max-w-3xl">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
