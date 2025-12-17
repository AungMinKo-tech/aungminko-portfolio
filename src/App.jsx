import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}

export default App;
