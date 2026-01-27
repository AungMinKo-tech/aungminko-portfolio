import heroImg from "../../assets/hero.png";
import TypewriterEffect from "../ui/TypewriterEffect";
import CodeWave from "../ui/CodeWave";
import Snowfall from "react-snowfall";

function Hero() {
  const myWords = ["Web Developer"];

  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex flex-col justify-center relative overflow-hidden pt-10"
    >
      {/* Main Content Area */}
      <Snowfall color="white" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            <span className="animate-bounce inline-block text-sky-500">
              I'm
            </span>
            <TypewriterEffect
              words={myWords}
              delay={150}
              eraseDelay={100}
              pause={2000}
              className="ml-3 text-white"
            />
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mt-4 max-w-lg">
            Junior Web Developer specialized in PHP/Laravel. I build clean,
            responsive and user-friendly applications.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-lg font-medium transition-all shadow-lg shadow-sky-500/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white rounded-lg font-medium transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center animate-soft-float animate-bounce">
          <img
            src={heroImg}
            alt="Developer illustration"
            className="w-72 md:w-96 drop-shadow-[0_0_25px_rgba(14,165,233,0.3)]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <CodeWave />
      </div>
    </section>
  );
}

export default Hero;
