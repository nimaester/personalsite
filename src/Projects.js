import React, { forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  primaryFadeAnimation,
  slideRightAnimation,
  slideUpAnimation,
} from "./animations/animation";
import { useInView } from "react-intersection-observer";

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
      </motion.section>
    </div>
  );
});

export default Projects;
