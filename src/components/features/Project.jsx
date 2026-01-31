import React from "react";
import { Github, ExternalLink } from "lucide-react";
import AdminDashboard from "../../assets/admin_dashboard.png";
import MyanmarLearning from "../../assets/myanmar-learning.png";
import Utility from "../../assets/utility.jpg";
import Yoga from "../../assets/yoga.jpg";

const Projects = () => {
  const projectList = [
    {
      title: "E-Commerce System",
      tech: "PHP / Laravel / MySQL",
      image: AdminDashboard,
      github: "https://github.com/AungMinKo-tech/E_commerce-system",
      demo: "https://independent-sean-onetechmm-e7f5fcb4.koyeb.app",
    },
    {
      title: "Utility Management System",
      tech: "PHP / Laravel / PostgreSQL",
      image: Utility,
      github:
        "https://github.com/AungMinKo-tech/Laravel-Utility-Management-System-",
    },
    {
      title: "Unlock Wealth Resort",
      tech: "PHP / Laravel / MySQL",
      image: Yoga,
      github: "https://github.com/AungMinKo-tech/laravel_yoga_api",
    },
  ];

  return (
    <section className="py-24 bg-slate-950" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-4">
            <span className="text-blue-500 font-mono text-2xl">02.</span>
            Projects
            <div className="h-px bg-slate-800 grow max-w-xs"></div>
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl group">
          <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-slate-900 to-transparent z-10"></div>

          <style>
            {`
              @keyframes loop-scroll {
                from { transform: translateX(0); }
                to { transform: translateX(-100%); }
              }
              .animate-marquee {
                display: flex;
                animation: loop-scroll 35s linear infinite;
              }
                .group:hover .animate-marquee {
                animation-play-state: paused;
              }
            `}
          </style>

          <div className="flex">
            <div className="animate-marquee flex gap-8 pr-8">
              {projectList.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>

            <div className="animate-marquee flex gap-8 pr-8" aria-hidden="true">
              {projectList.map((project, index) => (
                <ProjectCard key={`copy-${index}`} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="w-85 h-120 shrink-0 bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 group/card flex flex-col">
    <div className="h-[60%] bg-slate-800 relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover opacity-70 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700"
      />
    </div>

    <div className="p-6 flex flex-col justify-between grow bg-slate-900/60">
      <div>
        <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest">
          {project.tech}
        </span>
        <h3 className="text-xl font-bold text-white mt-2 group-hover/card:text-blue-400 transition-colors">
          {project.title}
        </h3>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            title="View Code"
          >
            <Github size={20} />
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
