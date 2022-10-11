import React, { forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  primaryFadeAnimation,
  slideRightAnimation,
} from "./animations/animation";
import { useInView } from "react-intersection-observer";
// Images
import project1 from "./img/project1.png";
import project2 from "./img/project2.png";
import project3 from "./img/project3.png";
import project4 from "./img/project4.png";
import project5 from "./img/project5.png";

// Skills used
import html from "./icons/html.png";
import react from "./icons/react.png";
import docker from "./icons/docker.png";
import aws from "./icons/aws.png";
import css from "./icons/css.png";
import sass from "./icons/sass.png";
import js from "./icons/js.png";
import heroku from "./icons/heroku.png";
import netlify from "./icons/netlify.png";
import circleCi from "./icons/circCi.png";
import nextJS from "./icons/nextjs.png";
import charka from "./icons/chakraUI.png";
import graphql from "./icons/graphql.png";

const projectInfo = [
  {
    name: "Marcia's Boutique",
    desc: "A fully functioning NextJs ecommerce website. Consists of various features including log in authentication (Auth0), headless CMS (Strapi) for content management, and uses Stripe for managing payments and transactions. Styled using ChakraUI",
    tech: [react, nextJS, charka, aws, graphql],
    img: project5,
    githubLink: "https://github.com/nimaester/ecommerce",
    websiteLink: "https://marcias-boutique.vercel.app/",
  },

  {
    name: "Pokedex 2.0",
    desc: " An app that displays information on pokemon. This app uses the Pokemon API, sound is hosted on S3 and built using Javascript, HTML/CSS, React, and hosted using Heroku.",
    tech: [js, react, aws, heroku],
    img: project2,
    githubLink: "https://github.com/nimaester/mvp",
    websiteLink: "https://dexpoke2.herokuapp.com/",
  },
  {
    name: "Home Rentals Reviews",
    desc: "A component that displays ratings and reviews for a specific home rental. User's information is stored in MongoDB, images are hosted on S3 and the site is running on EC2 that uses Docker as a container.",
    tech: [js, react, aws, docker, circleCi],
    img: project3,
    githubLink: "https://github.com/7LuckyAirbnboiiz/reviews-section",
    websiteLink: "https://www.youtube.com/watch?v=GXMldvDJAKQ",
  },
  {
    name: "Nario",
    desc: "My take of the game Super Mario Bros from old console games. Still a work in progress but I am currently adding more levels and features. This application uses AWS to store files and music. Built using kaboom.js and deployed in Netlify",
    tech: [js, html, css, aws, netlify],
    img: project4,
    githubLink: "https://github.com/nimaester/kaboom/tree/main/mario",
    websiteLink: "https://ntmario.netlify.app/",
  },
  {
    name: "Lofi Player",
    desc: "A music player app that displays track art, responsive track duration bar, and the common music player commands. This app is built using Javascript, React, HTML, Sass and hosted using Netlify.",
    tech: [js, html, sass, react, netlify],
    img: project1,
    githubLink:
      "https://github.com/nimaester/musicPlayer/tree/main/music-player",
    websiteLink: "https://ntmplayer.netlify.app/",
  },
];

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
      <div className='section' ref={ref}></div>
      <motion.section
        className='projects'
        variants={primaryFadeAnimation}
        initial='hidden'
        animate={controls}
        exit='exit'
      >
        <motion.h2 variants={slideRightAnimation}>Projects</motion.h2>

        <div className='project-container'>
          {projectInfo.map((app, i) => (
            <div className={"project"} key={i}>
              <div className='project-img'>
                <img src={app.img} alt={app.name} />
              </div>

              <div className='project-desc'>
                <h3 className='project-name'>{app.name}</h3>
                <p>{app.desc}</p>
                <div className='project-links'>
                  <div className='links'>
                    <a href={app.websiteLink} target='_blank' rel='noreferrer'>
                      <button className='site-link'>
                        {app.name === "Home Rentals Reviews"
                          ? "Demo"
                          : "Website"}
                      </button>
                    </a>
                    <a href={app.githubLink} target='_blank' rel='noreferrer'>
                      <button className='github-link'>Github</button>
                    </a>
                  </div>
                  <div className='tech-skills'>
                    {app.tech.map((icon, i) => (
                      <img
                        className='skills-icon'
                        key={i}
                        src={icon}
                        alt={`tech_skill${i}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className='quotes'>“Build what you want to see in the world”</p>
        <p className='quotee'>-- Jack Dorsey</p>
      </motion.section>
    </div>
  );
});

export default Projects;
