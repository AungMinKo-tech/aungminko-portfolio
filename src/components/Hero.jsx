import heroImg from "../assets/hero.png";
import TypewriterEffect from "./TypewriterEffect";

const codeLines = [
  "import React from 'react'; const Portfolio = () => { return <Dev name='AungMinKo' /> }",
  "export default function Hero() { const [state, setState] = useState(true); }",
  "npm install tailwindcss framer-motion lucide-react react-page-flip",
  "git commit -m 'feat: add awesome animation to portfolio' && git push",
  "const database = mongoose.connect(process.env.MONGO_URI);",
  "<div className='grid grid-cols-1 md:grid-cols-2 gap-8'> <Card /> </div>",
  "php artisan make:controller HelloWorldController",
  "User::with('role')->where('email', $request->email)->first;",
];

const CodeWave = () => {
  return (
    <div className="w-full py-3 bg-slate-800/50 overflow-hidden font-mono text-[10px] md:text-xs border-t border-slate-800/30 mt-5">
      {/* Row 1: Left to Right */}
      <div className="animate-scroll-left opacity-20">
        <div className="flex gap-10">
          {[...codeLines, ...codeLines].map((line, i) => (
            <span key={i} className="text-sky-100">
              {line}
            </span>
          ))}
        </div>
      </div>
      {/* Row 2: Right to Left */}
      <div className="animate-scroll-right opacity-10 mt-2">
        <div className="flex gap-10">
          {[...codeLines, ...codeLines].reverse().map((line, i) => (
            <span key={i} className="text-emerald-200">
              {line}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

function Hero() {
  const myWords = ["Web Developer"];

  return (
    <section
      id="home"
      // justify-center ပြောင်းလိုက်ရင် Content တွေ အလယ်မှာ စုသွားမယ်
      className="min-h-screen bg-slate-950 text-white flex flex-col justify-center relative overflow-hidden pt-10"
    >
      {/* Main Content Area */}
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

      {/* CodeWave ကို section ရဲ့ အောက်ခြေမှာ ကပ်ထားဖို့ absolute သုံးလိုက်မယ် */}
      <div className="absolute bottom-0 left-0 w-full">
        <CodeWave />
      </div>
    </section>
  );
}

export default Hero;
