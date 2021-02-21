import React, { useEffect } from "react";
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

  // useEffect(() => {
  //   console.log(location.pathname);
  //   switch (location.pathname) {
  //     case "/":
  //       scrollSmoothHandler(refs.heroRef);
  //       break;
  //     case "/about":
  //       scrollSmoothHandler(refs.aboutRef);
  //       break;
  //     case "/skills":
  //       scrollSmoothHandler(refs.skillsRef);
  //       break;
  //     case "/projects":
  //       scrollSmoothHandler(refs.projectsRef);
  //       break;
  //     case "/education":
  //       scrollSmoothHandler(refs.educationRef);
  //       break;
  //     case "/contact":
  //       scrollSmoothHandler(refs.contactRef);
  //       break;
  //     default:
  //     // ignore
  //   }
  // }, [location, refs]);

  return (
    <nav>
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
