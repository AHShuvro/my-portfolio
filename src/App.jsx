import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Feedback from "./components/Feedback";
import Works from "./components/Works";
import { Gallery } from "./components/Gallery";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Skills from "./components/Skills";
import ProjectDetail from "./components/ProjectDetail";
import Navbar2 from "./components/Navbar2";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="relative z-0 bg-primary">

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Element name="home" className="element">
                  <Hero />
                </Element>
                <Element name="about" className="element">
                  <About />
                </Element>
                <Element name="skills" className="element">
                  <Skills />
                </Element>
                <Element name="experience" className="element">
                  <Experience />
                </Element>
                <Element name="works" className="element">
                  <Works />
                </Element>
                <Gallery />
                <Feedback />
                <Element name="contact" className="element">
                  <Footer />
                </Element>
              </>
            }
          />
          <Route path="/projectDetail/:id" element={
            <>
              < Navbar2 />
              <ProjectDetail />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
