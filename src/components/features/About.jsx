import React from "react";
import LanyardCard from "../ui/Card";
import TechStack from "../ui/Techstack";

function About() {
  const experiences = [
    {
      company: "Monisoft Development System",
      role: "Intern Web Developer",
      period: "23 Feb 2026 - Present",
      points: [
        "Assisting in the development of web applications using PHP.",
        "Learning and contributing to backend development and database management.",
        "Collaborating with senior developers to implement responsive frontend designs.",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white px-8" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-blue-500 font-mono text-2xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-slate-800 grow max-w-md"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-[1.5] space-y-5 text-slate-400 text-lg leading-relaxed">
            <p>
              Hello! I'm{" "}
              <span className="text-blue-400 font-semibold">Aung Min Ko</span>.
              I’m a Junior Web Developer currently contributing my skills at{" "}
              <span className="text-white font-semibold">
                Monisoft Development System
              </span>
              . I have a strong passion for building robust web applications and
              continually enhancing my expertise in both frontend and backend
              technologies.
            </p>
            <p>
              My professional journey took a significant step forward in{" "}
              <span className="text-white">2024</span>, and today I specialize
              in modern technologies like{" "}
              <span className="text-blue-300">
                PHP, Laravel, React, and Tailwind CSS
              </span>
              . In my current role, I focus on developing responsive,
              user-friendly interfaces and building efficient backend systems.
            </p>

            {/* Job Experience Sub-section */}
            <div className="pt-8 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Professional Experience
              </h3>

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-blue-500/30 pl-6 py-2"
                >
                  <div className="flex flex-col mb-4">
                    <span className="text-lg font-bold text-slate-200">
                      {exp.role}{" "}
                      <span className="text-blue-400">@ {exp.company}</span>
                    </span>
                    <span className="text-sm font-mono text-slate-500">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[16px] text-slate-400"
                      >
                        <span className="text-blue-500 mt-1.5 text-xs">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Skills List */}
            <div className="pt-4">
              <TechStack />
            </div>
          </div>

          <div className="sticky top-24">
            <LanyardCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
