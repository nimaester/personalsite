import React, { forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  slideLeftAnimation,
  fadeAnimation,
  primaryFadeAnimation,
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

  const handleClick = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={ref}>
      <motion.section
        id='hero'
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
                  style={{ color: "#ef8d32" }}
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
            <motion.button onClick={handleClick} variants={fadeAnimation}>
              Contact Me
            </motion.button>
          </motion.div>
          <p className='quotes quote-hero'>
            “Whatever good things we build end up building us.”
          </p>
          <p className='quotee quote-hero'>-- Jim Rohn</p>
        </div>
      </motion.section>
    </div>
  );
});

export default Hero;
