import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { lineAnimation } from "./animations/animation";

const Nav = ({ refs, showLinks, setShowLinks }) => {
  const location = useLocation();

  const scrollSmoothHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const closeNavLinks = () => {
    setShowLinks(!showLinks);
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 0;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  const animates = (loc) => {
    if (loc === location.pathname) {
      return "100%";
    } else {
      return "";
    }
  };

  return (
    <nav id='nav' className={scroll ? "sticky" : "normal"}>
      <h3></h3>
      <ul className='nav-bar'>
        <li className='primary nav-link'>
          <NavLink
            onClick={() => {
              scrollSmoothHandler(refs.heroRef);
            }}
            to='/'
            activeClassName='selected'
            replace
          >
            Home
          </NavLink>
        </li>
        <li className='nav-link'>
          <NavLink
            onClick={() => {
              scrollSmoothHandler(refs.aboutRef);
            }}
            to='/about'
            activeClassName='selected'
            replace
          >
            About
          </NavLink>
        </li>
        <li className='nav-link'>
          <NavLink
            onClick={() => {
              scrollSmoothHandler(refs.skillsRef);
            }}
            to='/skills'
            activeClassName='selected'
            replace
          >
            Skills
          </NavLink>
        </li>
        <li className='nav-link'>
          <NavLink
            onClick={() => {
              scrollSmoothHandler(refs.projectsRef);
            }}
            to='/projects'
            activeClassName='selected'
            replace
          >
            Projects
          </NavLink>
        </li>
        <li className='nav-link'>
          <NavLink
            onClick={() => {
              scrollSmoothHandler(refs.educationRef);
            }}
            to='/education'
            activeClassName='selected'
            replace
          >
            Background
          </NavLink>
        </li>
        <li className='nav-link'>
          <NavLink
            onClick={() => {
              scrollSmoothHandler(refs.contactRef);
            }}
            to='/contact'
            activeClassName='selected'
            replace
          >
            Contact
          </NavLink>
        </li>

        <li className='nav-link'>
          <a href='https://drive.google.com/uc?export=download&id=1QmfFCTRXDNGFqpLDS8E7jb1UsJ_tBXOi'>
            Resume
          </a>
        </li>
        <i
          className={`${
            showLinks ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"
          }`}
          onClick={closeNavLinks}
        ></i>
      </ul>
    </nav>
  );
};

export default Nav;
