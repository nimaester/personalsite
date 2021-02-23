import React, { Fragment, forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideUpAnimation, fadeAnimation, primaryFadeAnimation, slideRightAnimation } from "./animations/animation";
import fbLogo from "./img/fb.png";
import linkLogo from "./img/linkin.png";
import face from "./img/face.png";

const AboutMe = forwardRef((props, ref) => {
  const controls = useAnimation();
  const [element, view] = useInView();

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return (
    <section ref={ref}>
      <motion.div
        ref={element}
        className='about-me'
        variants={slideRightAnimation}
        initial='hidden'
        animate={controls}
        exit='exit'
      >
        <motion.h2>About Me</motion.h2>
        <div className='cards'>
          <div className='bio'>
            <p>
              Hello there! I am a full-stack software engineer with a background
              in management. I have a keen eye for details and I am versatile
              that can adapt to any situation. I love learning new things about
              coding. It's amazing that you can build things on a computer that
              you can imagine. My hobbies outside coding are taking walks,
              trying out new types of food, and learning photography.
            </p>
          </div>
          <div className='about-me-pic'>
            <img className='my-pic' src={face} alt='' />
          </div>
          <div className='full-bio'>
            <h4>Name:</h4>
            <p>Nim Tayo</p>

            <h4>Date of Birth:</h4>
            <p>07/26/1987</p>

            <h4>Location:</h4>
            <p>Hayward CA, USA</p>
          </div>
        </div>
        <p className='foot'>Let's connect! Can't wait to hear from you.</p>
        <div className='links'>
          <a href='https://www.facebook.com/nim.tayo.12'>
            <img className='primary-icon' src={fbLogo} alt='' />
          </a>
          <a href='https://www.linkedin.com/in/nimtayo/'>
            <img src={linkLogo} alt='' />
          </a>
        </div>
        <p className='quotes'>“Be yourself; everyone else is already taken.”</p>
        <p className='quotee'>-- Oscar Wilde</p>
        <hr className='ab' />
      </motion.div>
    </section>
  );
});

export default AboutMe;
