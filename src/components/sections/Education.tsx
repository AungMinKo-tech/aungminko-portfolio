"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { formatDateRange } from "@/lib/utils";
import { GraduationCap, MapPin } from "lucide-react";

export function Education() {
  const revealRef = useGsapReveal<HTMLDivElement>({ stagger: 0.15 });

  return (
    <section
      id="education"
      className="section-padding"
      aria-labelledby="education-heading"
    >
      <Container>
        <SectionHeading label="Education" title="Academic Background" />

        <div ref={revealRef} className="mx-auto grid max-w-3xl gap-6">
          {education.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 md:p-8"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground md:text-xl">
                    {item.degree}
                  </h3>
                  <p className="text-accent">{item.institution}</p>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden />
                  {item.location}
                </span>
                <time>{formatDateRange(item.startDate, item.endDate)}</time>
              </div>

              <p className="text-sm leading-relaxed text-muted md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
