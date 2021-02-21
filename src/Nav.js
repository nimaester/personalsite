import React, { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";

const Nav = ({ refs }) => {
  const location = useLocation();

  const scrollSmoothHandler = (ref) => {
    // console.log("Triggered.");
    ref.current.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    // console.log("location", location.pathname);
    console.log(location.pathname)
    switch (location.pathname) {
      case "/hero":
        scrollSmoothHandler(refs.heroRef);
        location.pathname = '/'
        break;
      case "/about":
        scrollSmoothHandler(refs.aboutRef);
        location.pathname = '/'
        break;
      case "/skills":
        scrollSmoothHandler(refs.skillsRef);
        location.pathname = '/'
        break;
        case "/projects":
        scrollSmoothHandler(refs.projectsRef);
        location.pathname = '/'
        break;
        case "/education":
        scrollSmoothHandler(refs.educationRef);
        location.pathname = '/'
        break;
        case "/contact":
        scrollSmoothHandler(refs.contactRef);
        location.pathname = '/'
        break;
      default:
      // ignore
    }
  }, [location, refs]);

  return (
    <div>
      <NavLink to='/hero' activeClassName='selected' replace>
        Hero
      </NavLink>
      <NavLink to='/about' activeClassName='selected' replace>
        About
      </NavLink>
      <NavLink to='/skills' activeClassName='selected' replace>
        Skills
      </NavLink>
      <NavLink to='/projects' activeClassName='selected' replace>
        Projects
      </NavLink>
      <NavLink to='/education' activeClassName='selected' replace>
        Education
      </NavLink>
      <NavLink to='/contact' activeClassName='selected' replace>
        Contact
      </NavLink>
    </div>
  );
};

export default Nav;
