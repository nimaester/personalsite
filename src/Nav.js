import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = ({ refs, showLinks, setShowLinks }) => {
  const location = useLocation();

  const scrollSmoothHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth"});
  };

  const closeNavLinks = () => {
    setShowLinks(!showLinks);
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 0
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })


  return (
    <nav className={scroll ? "sticky" : ""}>
      <NavLink to='/' activeClassName='selected' replace>
        <i onClick={()=>{scrollSmoothHandler(refs.heroRef)}} className='fas fa-home fa-2x'></i>
      </NavLink>
      <ul className='nav-bar'>
        <li className='primary nav-link'>
          <NavLink onClick={()=>{scrollSmoothHandler(refs.aboutRef)}} to='/about' activeClassName='selected' replace>
            About
          </NavLink>
        <motion.div
          transition={{ duration: 0.75 }}
          animate={{ width: location.pathname === "/about" ? "100%" : 0 }}
          className='current-tab'
        />
        </li>
        <li className='nav-link'>
        <NavLink onClick={()=>{scrollSmoothHandler(refs.skillsRef)}} to='/skills' activeClassName='selected' replace>
          Skills
        </NavLink>
        <motion.div
          transition={{ duration: 0.75 }}
          animate={{ width: location.pathname === "/skills" ? "100%" : 0 }}
          className='current-tab'
        />
        </li>
        <li className='nav-link'>
        <NavLink onClick={()=>{scrollSmoothHandler(refs.projectsRef)}} to='/projects' activeClassName='selected' replace>
          Projects
        </NavLink>
        <motion.div
          transition={{ duration: 0.75 }}
          animate={{ width: location.pathname === "/projects" ? "100%" : 0 }}
          className='current-tab'
        />
        </li>
        <li className='nav-link'>
        <NavLink onClick={()=>{scrollSmoothHandler(refs.educationRef)}} to='/education' activeClassName='selected' replace>
          Education
        </NavLink>
        <motion.div
          transition={{ duration: 0.75 }}
          animate={{ width: location.pathname === "/education" ? "100%" : 0 }}
          className='current-tab'
        />
        </li>
        <li className='nav-link'>
        <NavLink onClick={()=>{scrollSmoothHandler(refs.contactRef)}} to='/contact' activeClassName='selected' replace>
          Contact
        </NavLink>
        <motion.div
          transition={{ duration: 0.75 }}
          animate={{ width: location.pathname === "/contact" ? "100%" : 0 }}
          className='current-tab'
        />
        </li>
        <div className='burger-icon'>
          <i
            className={`${
              showLinks ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"
            }`}
            onClick={closeNavLinks}
          ></i>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
