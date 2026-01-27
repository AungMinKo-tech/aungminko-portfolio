import React from "react";
import LanyardCard from "../ui/Card";
import TechStack from "../ui/Techstack";

function About() {
  return (
    <section className="py-20 bg-slate-950 text-white px-8" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-blue-500 font-mono text-2xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-slate-800 grow max-w-md"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-[1.5] space-y-5 text-slate-400 text-lg leading-relaxed">
            <p>
              Hello! I'm{" "}
              <span className="text-blue-400 font-semibold">Aung Min Ko</span>.
              I’m a Junior Web Developer with a strong passion for web
              development and a growing skill set in both frontend and backend
              technologies. I’ve been learning and building projects using HTML,
              CSS, JavaScript for the frontend and PHP with Laravel for the
              backend.
            </p>
            <p>
              My journey started in <span className="text-white">2024</span>,
              and today I specialize in modern technologies like{" "}
              <span className="text-blue-300">
                PHP, Laravel, React and Tailwind CSS
              </span>
              .I enjoy the challenge of developing responsive, user-friendly
              interfaces using React, as well as creating efficient backend
              systems with Laravel. I’m familiar with MySQL database, API and
              version control using Git. Through personal projects and
              continuous learning, I’m improving my full stack development
              skills every day.
            </p>

            {/* Skills List */}
            <TechStack />
          </div>
          <LanyardCard />
        </div>
      </div>
    </section>
  );
}

export default About;
