import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Feedback from "./components/Feedback"
import Works from "./components/Works"
import { Gallery } from "./components/Gallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-[#FFFFFF] ">
          <div className=" bg-no-repeat bg-center">
            <Navbar />
            <Hero />

          </div>
          <About />
          <Experience />
          <Works />
          <Gallery />
          <Feedback />
          <div className="relative z-0">
            <Contact />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
