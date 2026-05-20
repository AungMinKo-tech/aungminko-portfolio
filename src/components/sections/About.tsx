"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutParagraphs, siteConfig } from "@/data/site";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { MapPin } from "lucide-react";
import Image from "next/image";

export function About() {
  const revealRef = useGsapReveal<HTMLDivElement>({ stagger: 0.15 });

  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <Container>
        <SectionHeading
          label="About Me"
          title="Crafting Digital Experiences"
        />

        <div ref={revealRef} className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <div className="gradient-border relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/my-profile-image.jpg"
                alt="About me"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>

          <div className="space-y-6">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted md:text-lg">
                {paragraph}
              </p>
            ))}

            <div className="flex items-center gap-2 text-muted">
              <MapPin className="h-5 w-5 text-accent" aria-hidden />
              <span>{siteConfig.location}</span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Problem Solver", "Team Player", "Fast Learner"].map((trait) => (
                <span
                  key={trait}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
