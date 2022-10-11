import React, { forwardRef } from "react";
import ExperienceEntry from "./ExperienceEntry";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  fadeAnimation,
  primaryFadeAnimation,
  slideLeftAnimation,
} from "./animations/animation";
import { schoolData, workData } from "./data/data";

const Experience = forwardRef((props, ref) => {
  const controls = useAnimation();
  const [element, view] = useInView();
  view ? controls.start("show") : controls.start("hidden");

  return (
    <div ref={element}>
      <motion.section
        className='experience'
        variants={primaryFadeAnimation}
        initial='hidden'
        animate={controls}
        exit='exit'
      >
        <div className='section' ref={ref}></div>
        <motion.h2 variants={slideLeftAnimation}>Education</motion.h2>

        {schoolData.map((data) => (
          <motion.div variants={fadeAnimation} key={data[0]}>
            <ExperienceEntry data={data} />
          </motion.div>
        ))}

        <motion.h2 variants={slideLeftAnimation}>Work Experience</motion.h2>

        {workData.map((data) => (
          <motion.div key={data[0]} variants={fadeAnimation}>
            <ExperienceEntry data={data} />
          </motion.div>
        ))}

        <p className='quotes'>“The only source of knowledge is experience”</p>
        <p className='quotee'>-- Albert Einstein</p>
      </motion.section>
    </div>
  );
});

export default Experience;
