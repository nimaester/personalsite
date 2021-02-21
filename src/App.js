import React, { useRef } from "react";
import { HashRouter, NavLink, useLocation } from "react-router-dom";
import "./styles/app.scss";

import Nav from "./Nav";
import NavList from "./NavList";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

import { AnimatePresence } from "framer-motion";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='App'>

      <HashRouter>
        <Nav
          refs={
            {heroRef,
            aboutRef,
            skillsRef,
            projectsRef,
            educationRef,
            contactRef}
          }
        />
        <NavList />

          <Hero key='hero' ref={heroRef} />
          <About key='about' ref={aboutRef} />
          <Skills key='skills' ref={skillsRef} />
          <Projects key='projects' ref={projectsRef} />
          <Education key='education ' ref={educationRef} />
          <Contact key='contact' ref={contactRef} />

      </HashRouter>

    </div>
  );
}

export default App;
