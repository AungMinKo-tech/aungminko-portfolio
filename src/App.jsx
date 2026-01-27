import About from "./components/features/About";
import Certificates from "./components/features/Certificates";
import Chatbot from "./components/features/ChatBot";
import Contact from "./components/features/Contact";
import Hero from "./components/features/Hero";
import Navbar from "./components/features/Navbar";
import Projects from "./components/features/Project";
import SnakeGame from "./components/features/SnakeGame";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <section className="py-10 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <SnakeGame />
        </div>
      </section>
      <Certificates />
      <Contact />
      <Chatbot />
    </>
  );
}

export default App;
