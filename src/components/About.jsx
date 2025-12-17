import React from "react";
import MyProfile from "../assets/my-profile-image.jpg";

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
              I am a developer who loves crafting visually appealing and
              user-centric web applications.
            </p>
            <p>
              My journey started in <span className="text-white">2024</span>,
              and today I specialize in modern technologies like{" "}
              <span className="text-blue-300">
                PHP, Laravel, React, Node.js and Tailwind CSS
              </span>
              .
            </p>
            <p>
              I am committed to{" "}
              <span className="italic text-slate-200">continuous learning</span>
              , writing <span className="text-white">clean code</span> and
              prioritizing
              <span className="text-white"> User Experience (UX)</span> in every
              project.
            </p>

            {/* Skills List အတိုလေး */}
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-slate-300 mt-6">
              <li className="flex items-center gap-2">
                <span className="text-blue-500">▹</span> PHP
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">▹</span> Laravel
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">▹</span> Adonis.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">▹</span> JavaScript (ES6+)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">▹</span> React.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">▹</span> Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">▹</span> Node.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">▹</span> Git & GitHub
              </li>
            </ul>
          </div>

          {/* Right Side - Profile Image Container */}
          <div className="flex-1 relative group w-full max-w-100">
            {/* Blue Frame (Decorative) */}
            {/* top-4 left-4 ကနေ ပုံရဲ့အနောက်မှာ နေရာယူထားတာပါ */}
            <div className="absolute top-4 left-4 w-full aspect-4/5 border-2 border-blue-500 rounded-2xl transition-all duration-300 group-hover:top-2 group-hover:left-2"></div>

            {/* Actual Image Card */}
            <div className="relative aspect-4/5 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img
                src={MyProfile} // သင့်ပုံ Path
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
