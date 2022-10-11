import React, { forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  primaryFadeAnimation,
  slideLeftAnimation,
} from "./animations/animation";
import { useInView } from "react-intersection-observer";
import { techSkills } from "./data/data";

const Skills = forwardRef((props, ref) => {
  const controls = useAnimation();
  const [element, view] = useInView();
  view ? controls.start("show") : controls.start("hidden");

  return (
    <section className='skills' ref={ref}>
      <div className='section' ref={ref}></div>
      <motion.section
        ref={element}
        variants={primaryFadeAnimation}
        initial='hidden'
        animate={controls}
        exit='exit'
      >
        <motion.h2 variants={slideLeftAnimation}>Technical Skills</motion.h2>
        <div className='skills-container'>
          {techSkills.map((skill) => (
            <div className='tech-skill' key={skill.name}>
              <img className='skill-img' src={skill.img} alt='' />
              <h3>{skill.name}</h3>
              <p className='skill-desc'>{skill.desc}</p>
            </div>
          ))}
        </div>

        <p className='quotes'>
          "Everybody should learn to program a computer, because it teaches you
          how to think."
        </p>
        <p className='quotee'>-- Steve Jobs</p>
      </motion.section>
    </section>
  );
});

export default Skills;
