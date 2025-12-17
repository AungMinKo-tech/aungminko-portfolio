import heroImg from "../assets/hero.png";
import TypewriterEffect from "./TypewriterEffect";

function Hero() {
  const myWords = ["Web Developer"];
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-6xl font-extrabold text-white mb-4">
            <span className="animate-bounce inline-block">I'm</span>
            <TypewriterEffect
              words={myWords}
              delay={150}
              eraseDelay={100}
              pause={2000}
              className="ml-3 text-blue-400"
            />
          </h1>
          <p className="text-slate-300 text-xl mt-4">
            Junior Web Developer specialized in PHP/Laravel. I build clean,
            responsive and user-friendly applications.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-lg font-medium"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white rounded-lg font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center animate-bounce">
          <img
            src={heroImg}
            alt="Developer illustration"
            className="w-72 md:w-96"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
