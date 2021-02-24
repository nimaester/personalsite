import React, { Fragment, forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeAnimation, primaryFadeAnimation, slideRightAnimation } from "./animations/animation";

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
        variants={primaryFadeAnimation}
        initial='hidden'
        animate={controls}
        exit='exit'
      >
        <motion.h2 variants={slideRightAnimation}>About Me</motion.h2>
        <div className='cards'>
          <div className='bio'>
            <p>
            I am a full-stack software engineer with a keen eye for details and I am versatile that can adapt to any situation. I am a firm believer in structure and teamwork. I love learning new things about coding. It's amazing that you can build things that you can imagine.

            </p>
          </div>
          <div className='about-me-pic'>
            <img className='my-pic' src={face} alt='' />
          </div>
          <div className='full-bio'>
            <span className="entry-type">Name:</span>
            <p className="entry">Nim Tayo</p>

            <span className="entry-type">Location:</span>
            <p className="entry">Hayward CA, USA</p>

            <span className="entry-type">Hobbies:</span>
            <p className="entry">- Listening to music</p>
            <p className="entry">- Trying new foods</p>
            <p className="entry">- Photography</p>
          </div>
        </div>
        <p>Let's connect! Can't wait to hear from you.</p>
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
      </motion.div>
    </section>
  );
});

export default AboutMe;
