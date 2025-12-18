import React from "react";
import { Mail, Github, Linkedin, Facebook, Send } from "lucide-react";
import CodeWave from "./CodeWave";

const Contact = () => {
  const email = "aungminko.dev@gmail.com";

  return (
    <section
      className="py-32 bg-slate-950 relative overflow-hidden"
      id="contact"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <span className="text-blue-500 font-mono mb-4 text-lg">
            04. What’s Next?
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Whether you have a question about my projects or just want to
            discuss potential opportunities, my inbox is always open. I'll do my
            best to get back to you as soon as possible!
          </p>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 p-10 rounded-3xl backdrop-blur-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all duration-300">
                <Mail size={24} />
              </div>
              <span className="text-sm font-mono text-slate-500">Email Me</span>
              <a
                href={`mailto:${email}`}
                className="text-white font-medium hover:text-blue-400 transition-colors"
              >
                {email}
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-4">
                <Send size={24} />
              </div>
              <span className="text-sm font-mono text-slate-500">
                Social Media
              </span>
              <div className="flex gap-4 mt-1 text-slate-300">
                <a
                  href="https://www.facebook.com/profile.php?id=61571911991566&mibexid=wwXlfr&mibexit=wwXlfr"
                  target="_blank"
                  className="hover:text-blue-500 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aung-min-ko-20b317346"
                  target="_blank"
                  className="hover:text-blue-500 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/AungMinKo-tech"
                  target="_blank"
                  className="hover:text-blue-500 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-4 text-slate-400">
                <span className="font-bold">📍</span>
              </div>
              <span className="text-sm font-mono text-slate-500">Location</span>
              <span className="text-white font-medium text-center">
                Yangon, Myanmar
              </span>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-slate-600 font-mono text-sm mt-20">
          Designed & Built by Aung Min Ko © 2025
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <CodeWave />
      </div>
    </section>
  );
};

export default Contact;
