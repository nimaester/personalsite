import React from 'react';
import { useLocation, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavList = ({refs, setShowLinks, showLinks}) => {

  const pathname = useLocation();

  const closeNavLinks = () => {
    setShowLinks(false);
  }

  const scrollSmoothHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth"});
  };

  return (
    <div className={`nav-list ${showLinks ? "active": ""}`}>
      <ul>
      <li onClick={closeNavLinks} className='primary nav-list-link'>
          <NavLink onClick={()=>{scrollSmoothHandler(refs.heroRef)}} to='/' activeClassName='selected' replace>Home</NavLink>
          <motion.div
            transition={{ duration: 0.75 }}
            animate={{ width: pathname.pathname === "/" ? "100%" : 0 }}
            className='current-tab'
          />
        </li>
        <li onClick={closeNavLinks} className='nav-list-link'>
          <NavLink onClick={()=>{scrollSmoothHandler(refs.aboutRef)}} to='/about' activeClassName='selected' replace>About</NavLink>
          <motion.div
            transition={{ duration: 0.75 }}
            animate={{
              width: pathname.pathname === "/about" ? "100%" : 0,
            }}
            className='current-tab'
          />
        </li>
        <li onClick={closeNavLinks} className='nav-list-link'>
          <NavLink onClick={()=>{scrollSmoothHandler(refs.skillsRef)}} to='/skills' activeClassName='selected' replace>Skills</NavLink>
          <motion.div
            transition={{ duration: 0.75 }}
            animate={{
              width: pathname.pathname === "/skills" ? "100%" : 0,
            }}
            className='current-tab'
          />
        </li>
        <li onClick={closeNavLinks} className='nav-list-link'>
          <NavLink onClick={()=>{scrollSmoothHandler(refs.projectsRef)}} to='/projects' activeClassName='selected' replace>Projects</NavLink>
          <motion.div
            transition={{ duration: 0.75 }}
            animate={{
              width: pathname.pathname === "/projects" ? "100%" : 0,
            }}
            className='current-tab'
          />
        </li>
        <li onClick={closeNavLinks} className='nav-list-link'>
          <NavLink onClick={()=>{scrollSmoothHandler(refs.educationRef)}} to='/education' activeClassName='selected' replace>Background</NavLink>
          <motion.div
            transition={{ duration: 0.75 }}
            animate={{
              width: pathname.pathname === "/education" ? "100%" : 0,
            }}
            className='current-tab'
          />
        </li>
        <li onClick={closeNavLinks} className='nav-list-link'>
          <NavLink onClick={()=>{scrollSmoothHandler(refs.contactRef)}} to='/contact' activeClassName='selected' replace>Contact</NavLink>
          <motion.div
            transition={{ duration: 0.75 }}
            animate={{
              width: pathname.pathname === "/contact" ? "100%" : 0,
            }}
            className='current-tab'
          />
        </li>

        <li onClick={closeNavLinks} className='nav-list-link'>
          <a href='https://drive.google.com/uc?export=download&id=1QmfFCTRXDNGFqpLDS8E7jb1UsJ_tBXOi'>
            Resume
          </a>
          <motion.div
            transition={{ duration: 0.75 }}
            animate={{
              width: pathname.pathname === "/contact" ? "100%" : 0,
            }}
            className='current-tab'
          />
        </li>

      </ul>
    </div>
  );
};

export default NavList;