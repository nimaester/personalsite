import React, { forwardRef } from "react";
import { useHistory } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import {
  slideLeftAnimation,
  fadeAnimation,
  primaryFadeAnimation,
  thirdFadeAnimation
} from "./animations/animation";
import { useInView } from "react-intersection-observer";

const Hero = forwardRef((props, ref) => {
  const controls = useAnimation();
  const [element, view] = useInView();

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  const scrollSmoothHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth"});
  };

  return (
    <div ref={ref}>
      <motion.section
      id="hero"
        ref={element}
        className='hero'
        variants={primaryFadeAnimation}
        initial='hidden'
        animate={controls}
      >
        <div className='description'>
          <motion.div className='title' variants={slideLeftAnimation}>
            <div className='hide'>
              <h2>
                I'm{" "}
                <motion.span
                  variants={fadeAnimation}
                  style={{ color: "#00adb5" }}
                >
                  Nim,
                </motion.span>
              </h2>
            </div>
            <div className='hide'>
              <h2>a software engineer.</h2>
              <br />
              <br />
            </div>
            <motion.button variants={fadeAnimation}>
              Contact Me
            </motion.button>
          </motion.div>
          <p className='quotes'>“Whatever good things we build end up building us.”</p>
        <p className='quotee'>-- Jim Rohn</p>
        </div>
      </motion.section>
    </div>
  );
});

export default Hero;

// fix line 50 onClick={} ??
// style={{ color: "#00adb5" }} line 39