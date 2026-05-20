"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { heroStats, siteConfig } from "@/data/site";
import { ArrowDown, Download, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.6 })
        .from(".hero-title", { opacity: 0, y: 30, duration: 0.8 }, "-=0.3")
        .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(".hero-desc", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".hero-cta", { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, "-=0.2")
        .from(".hero-image", { opacity: 0, scale: 0.9, duration: 0.8 }, "-=0.6")
        .from(".hero-stat", { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 }, "-=0.4");
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      <div className="glow-orb -left-32 top-20 h-96 w-96" aria-hidden />
      <div className="glow-orb right-0 top-1/3 h-80 w-80 bg-accent-secondary/10" aria-hidden />

      <Container className="relative z-10 py-20">
        <div ref={contentRef} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <span className="hero-badge mb-4 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              {siteConfig.role}
            </span>

            <h1 className="hero-title text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{siteConfig.name}</span>
            </h1>

            <p className="hero-subtitle mt-4 text-xl font-medium text-muted md:text-2xl">
              {siteConfig.title}
            </p>

            <p className="hero-desc mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              {siteConfig.tagline}
            </p>

            <div className="hero-cta mt-8 flex flex-wrap gap-4">
              <Button href="#contact" variant="primary" size="lg">
                <Mail className="h-5 w-5" />
                Get In Touch
              </Button>
              <Button href={siteConfig.resumeUrl} variant="secondary" size="lg" download>
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="hero-stat text-center sm:text-left">
                  <dt className="text-2xl font-bold text-foreground md:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </dt>
                  <dd className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero-image relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-lg">
            <div className="gradient-border relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src="/images/my-photo.png"
                alt={`Portrait of ${siteConfig.name}`}
                fill
                priority
                sizes="(max-width: 768px) 80vw, 60vw"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-accent/30 to-accent-secondary/30 blur-2xl"
              aria-hidden
            />
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted transition-colors hover:text-accent lg:flex focus-ring rounded"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </Container>
    </section>
  );
}
