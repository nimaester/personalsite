import React, { forwardRef } from "react";
import StarRatings from "react-star-ratings";
import { motion,useAnimation } from "framer-motion";
import {
  primaryFadeAnimation,
  slideLeftAnimation,
  slideRightAnimation,
  slideUpAnimation
} from "./animations/animation";
import { useInView } from "react-intersection-observer";

const Skills = forwardRef((props, ref) => {
  const controls = useAnimation();
  const [element, view] = useInView();

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return (
    <div ref={ref}>
    <motion.section
      ref={element}
      className='skills'
      variants={primaryFadeAnimation}
      initial='hidden'
      animate={controls}
      exit='exit'
    >
      <motion.h2 variants={slideRightAnimation}>Technical Skills</motion.h2>
      <div className="skills-containter">

      </div>


    </motion.section>
    </div>
  );
});

export default Skills;

// <p className='quotes'>
//         "Everybody should learn to program a computer, because it teaches you
//         how to think."
//       </p>
//       <p className='quotee'>-- Steve Jobs</p>
//       <hr />