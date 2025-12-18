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
