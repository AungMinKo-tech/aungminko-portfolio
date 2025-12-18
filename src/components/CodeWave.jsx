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
    <div className="w-full py-3 bg-white dark:bg-slate-800/50 overflow-hidden font-mono text-[10px] md:text-xs border-t border-slate-800/30 mt-5">
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

export default CodeWave;
