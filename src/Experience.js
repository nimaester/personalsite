import React, { forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  fadeAnimation,
  primaryFadeAnimation,
  slideLeftAnimation,
} from "./animations/animation";

const Experience = forwardRef((props, ref) => {
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
        className='experience'
        ref={ref}
        variants={primaryFadeAnimation}
        initial='hidden'
        animate={controls}
        exit='exit'
      >
        <motion.h2 variants={slideLeftAnimation}>Experience</motion.h2>
        <div className='grid-container'>
          <div className='grid'>
            <h3 className='title'>Hack Reactor</h3>
            <p className='description'>
            Hack Reactor is an immersive coding school providing software engineering education, career placement services, and a lifelong network of professional peers.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
});

export default Experience;
