"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  start?: string;
}

export function useGsapReveal<T extends HTMLElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null);
  const { y = 40, duration = 0.8, stagger = 0.1, delay = 0, start = "top 85%" } =
    options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.children.length > 0 ? el.children : [el];

    gsap.set(targets, { opacity: 0, y });

    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [y, duration, stagger, delay, start]);

  return ref;
}
