import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavList = ({ refs, setShowLinks, showLinks }) => {
  const closeNavLinks = () => {
    setShowLinks(false);
  };

  const scrollSmoothHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`nav-list ${showLinks ? "active" : ""}`}>
      <ul>
        <li onClick={closeNavLinks} className='primary nav-list-link'>
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

        <li onClick={closeNavLinks} className='nav-list-link'>
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

        <li onClick={closeNavLinks} className='nav-list-link'>
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

        <li onClick={closeNavLinks} className='nav-list-link'>
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

        <li onClick={closeNavLinks} className='nav-list-link'>
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

        <li onClick={closeNavLinks} className='nav-list-link'>
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

        <li onClick={closeNavLinks} className='nav-list-link'>
          <a href='https://drive.google.com/uc?export=download&id=1g3yxkGZLQSeSRjVEsUhQjPzj32J5bMJDhLVydXZHJxU'>
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
