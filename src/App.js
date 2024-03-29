import React, { useRef, useState } from "react";
import { HashRouter } from "react-router-dom";
import "./styles/app.scss";

import Nav from "./Nav";
import NavList from "./NavList";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

import { AnimatePresence } from "framer-motion";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='App'>
      <HashRouter>
        <Nav
          refs={{
            heroRef,
            aboutRef,
            skillsRef,
            projectsRef,
            educationRef,
            contactRef,
          }}
          setShowLinks={setShowLinks}
          showLinks={showLinks}
        />
        <NavList
          setShowLinks={setShowLinks}
          showLinks={showLinks}
          refs={{
            heroRef,
            aboutRef,
            skillsRef,
            projectsRef,
            educationRef,
            contactRef,
          }}
        />
        <AnimatePresence>
          <Hero key='hero' ref={heroRef} />
          <About key='about' ref={aboutRef} />
          <Skills key='skills' ref={skillsRef} />
          <Projects key='projects' ref={projectsRef} />
          <Experience key='education ' ref={educationRef} />
          <Contact key='contact' ref={contactRef} />
        </AnimatePresence>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
