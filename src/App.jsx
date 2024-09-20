import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Feedback from "./components/Feedback";
import Works from "./components/Works";
import { Gallery } from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#FFFFFF]">
        <Navbar />
        <Element name="home" className="element">
          <Hero />
        </Element>
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="experience" className="element">
          <Experience />
        </Element>
        <Element name="works" className="element">
          <Works />
        </Element>
        <Element name="gallery" className="element">
          <Gallery />
        </Element>
        <Feedback />
        <Contact />
        <Element name="contact" className="element">
          <Footer />
        </Element>
      </div>
    </BrowserRouter>
  );
}

export default App;
