import React, { forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  primaryFadeAnimation,
  slideRightAnimation,
  slideUpAnimation,
} from "./animations/animation";
import { useInView } from "react-intersection-observer";
import project1 from "./img/project1.png";
import project2 from "./img/project2.png";
import project3 from "./img/project3.png";

const Projects = forwardRef((props, ref) => {
  const controls = useAnimation();
  const [element, view] = useInView();

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return (
    <div ref={element}>
      <motion.section
        ref={ref}
        className='projects'
        variants={primaryFadeAnimation}
        initial='hidden'
        animate={controls}
        exit='exit'
      >
        <motion.h2 variants={slideRightAnimation}>Projects</motion.h2>

        <div className='project-container'>
          <div className='project'>
            <div className='project-img'>
              <img src={project1} alt="" />
            </div>
            <div className='project-desc'>
            <h3 className='project-name'>Lo-Fi Player</h3>
              <p>
                A music player app that displays track art, responsive track duration bar and the common music player commands. I built this app so I have something to listen to when I'm in the zone while coding.
              </p>
              <a href="https://ntmplayer.netlify.app/">
                <button className='site-link'>
                  Live Site
                </button>
              </a>
              <a href="https://github.com/nimaester/musicPlayer/tree/main/music-player">
                <button className='github-link'>
                  Github
                </button>
              </a>
            </div>
          </div>

          <div className='project second'>


            <div className='project-desc two'>
            <h3 className='project-name'>Pokedex 2.0</h3>
              <p>
                An app that displays information on pokemon. When I was younger and before learning to code, I've always wanted to make a pokedex. This is my take on it.
              </p>
              <a href="https://dexpoke2.herokuapp.com/">
                <button className='site-link'>
                  Live Site
                </button>
              </a>
              <a href="https://github.com/nimaester/mvp">
                <button className='github-link'>
                  Github
                </button>
              </a>

          </div>
          <div className='project-img'>
              <img src={project2} alt="" />
            </div>
          </div>

          <div className='project'>
            <div className='project-img'>
              <img src={project3} alt="" />
            </div>
            <div className='project-desc'>
            <h3 className='project-name'>Home Rentals Reviews</h3>
              <p>
                A component that displays ratings and reviews for a specific home rental. Images are on S3 and this site is hosted on EC2 and it uses Docker as its container.
              </p>
              <a href="http://3.101.19.195:3003/rooms/88/">
                <button className='site-link'>
                  Live Site
                </button>
              </a>
              <a href="https://github.com/7LuckyAirbnboiiz/reviews-section">
                <button className='github-link'>
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
      <p className='quotes'>“Build what you want to see in the world”</p>
        <p className='quotee'>-- Jack Dorsey</p>
    </div>
  );
});

export default Projects;
