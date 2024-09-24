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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="relative z-0 bg-gradient-to-r from-gray-900 via-gray-800 to-black">

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
                <Footer />
              </>
            }
          />
          <Route path="/works" element={<Works />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
