import React, { forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  primaryFadeAnimation,
  slideRightAnimation,
  slideUpAnimation,
} from "./animations/animation";
import { useInView } from "react-intersection-observer";
// Project images
import project1 from "./img/project1.png";
import project2 from "./img/project2.png";
import project3 from "./img/project3.png";
// Project skills used
import html from "./icons/html.png";
import react from "./icons/react.png";
import docker from "./icons/docker.png";
import aws from "./icons/aws.png";
import css from "./icons/css.png";
import sass from "./icons/sass.png";
import js from "./icons/js.png";
import heroku from "./icons/heroku.png";
import netlify from "./icons/netlify.png";
import mongodb from "./icons/mongo.png";

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
              <img src={project1} alt='' />
            </div>
            <div className='project-desc'>
              <h3 className='project-name'>Lo-Fi Player</h3>
              <p>
                A music player app that displays track art, responsive track duration bar, and the common music player commands. This app is built using Javascript, React, HTML, Sass and hosted using Netlify.
              </p>
              <div className='project-links'>
                <div className='links'>
                  <a href='https://ntmplayer.netlify.app/' target='_blank'>
                    <button className='site-link'>Website</button>
                  </a>
                  <a
                    href='https://github.com/nimaester/musicPlayer/tree/main/music-player'
                    target='_blank'
                  >
                    <button className='github-link'>Github</button>
                  </a>
                </div>
                <div className='tech-skills'>
                  <img className='skills-icon' src={js} alt='' />
                  <img className='skills-icon' src={html} alt='' />
                  <img className='skills-icon' src={sass} alt='' />
                  <img className='skills-icon' src={react} alt='' />
                  <img className='skills-icon' src={netlify} alt='' />
                </div>
              </div>
            </div>
          </div>

          <div className='project second'>
            <div className='project-desc two'>
              <h3 className='project-name'>Pokedex 2.0</h3>
              <p>
                An app that displays information on pokemon. This app uses the Pokemon API, sound is hosted on S3 and built using Javascript, HTML/CSS, React, and hosted using Heroku.
              </p>
              <div className='project-links'>
                <div className='links'>
                  <a href='https://dexpoke2.herokuapp.com/' target='_blank'>
                    <button className='site-link'>Website</button>
                  </a>
                  <a href='https://github.com/nimaester/mvp' target='_blank'>
                    <button className='github-link'>Github</button>
                  </a>
                </div>
                <div className='tech-skills'>
                  <img className='skills-icon' src={js} alt='' />
                  <img className='skills-icon' src={html} alt='' />
                  <img className='skills-icon' src={css} alt='' />
                  <img className='skills-icon' src={react} alt='' />
                  <img className='skills-icon' src={aws} alt='' />
                  <img className='skills-icon' src={heroku} alt='' />
                </div>
              </div>
            </div>
            <div className='project-img'>
              <img src={project2} alt='' />
            </div>
          </div>

          <div className='project'>
            <div className='project-img'>
              <img src={project3} alt='' />
            </div>
            <div className='project-desc'>
              <h3 className='project-name'>Home Rentals Reviews</h3>
              <p>
              A component that displays ratings and reviews for a specific home rental. User's information is stored in MongoDB, images are hosted on S3 and the site is running on EC2 that uses Docker as a container.
              </p>
              <div className='project-links'>
                <div className='links'>
                  <a href='http://3.101.19.195:3003/rooms/88/' target='_blank'>
                    <button className='site-link'>Website</button>
                  </a>
                  <a
                    href='https://github.com/7LuckyAirbnboiiz/reviews-section'
                    target='_blank'
                  >
                    <button className='github-link'>Github</button>
                  </a>
                </div>
                <div className='tech-skills'>
                  <img className='skills-icon' src={js} alt='' />
                  <img className='skills-icon' src={html} alt='' />
                  <img className='skills-icon' src={css} alt='' />
                  <img className='skills-icon' src={react} alt='' />
                  <img className='skills-icon' src={aws} alt='' />
                  <img className='skills-icon' src={docker} alt='' />
                </div>
              </div>
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
