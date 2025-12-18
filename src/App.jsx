import About from "./components/About";
import Certificates from "./components/Certificates";
import Chatbot from "./components/ChatBot";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import SnakeGame from "./components/SnakeGame";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <section className="py-10 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <SnakeGame />
        </div>
      </section>

      <Certificates />
      <Contact />
      <Chatbot />
    </div>
  );
}

export default App;
