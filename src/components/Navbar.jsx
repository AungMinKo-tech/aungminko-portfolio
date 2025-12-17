import { useState } from "react";
import Logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md text-white shadow-sm z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <a href="#home" className="flex items-center py-1">
          <img
            src={Logo}
            alt="AungMinKo Logo"
            className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </a>

        <ul className="hidden md:flex gap-8 text-[13px] font-semibold uppercase tracking-wider">
          <li>
            <a
              href="#home"
              className="text-slate-300 hover:text-sky-400 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-slate-300 hover:text-sky-400 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-slate-300 hover:text-sky-400 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-slate-300 hover:text-sky-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl p-2 focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900 border-t border-white/5 px-6 py-6 space-y-4 text-sm font-medium animate-in fade-in slide-in-from-top-4">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="block hover:text-sky-400"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block hover:text-sky-400"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setOpen(false)}
            className="block hover:text-sky-400"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="block hover:text-sky-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block hover:text-sky-400"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
