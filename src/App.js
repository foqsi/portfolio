import React from "react";
import { Link, Element } from "react-scroll";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        {/* Define each section as an "Element" for smooth scrolling */}
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="work">
          <Work />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
}

export default App;
