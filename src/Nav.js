import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "./customHooks/customHooks";

const Nav = ({ refs, showLinks, setShowLinks }) => {
  const scrollSmoothHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const windowSize = useWindowSize();

  const closeNavLinks = () => {
    setShowLinks(!showLinks);
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (windowSize.width > 865) {
      setShowLinks(false);
    }
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 0;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, [setShowLinks, scroll, windowSize]);

  return (
    <nav id='nav' className={scroll ? "sticky" : "normal"}>
      <ul className='nav-bar'>
        <li className='name'>
          <i>Nim Tayo</i>
        </li>
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
          <a href='https://drive.google.com/uc?export=download&id=1nqBlLxrKG5GPNl0f1cB8nq2LAkjdRm6z'>
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
