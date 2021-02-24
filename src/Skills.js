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
//logos
import cssLogo from "./icons/css.png";
import awsLogo from "./icons/aws.png";
import circleLogo from "./icons/circCi.png";
import dockerLogo from "./icons/docker.png";
import htmlLogo from "./icons/html.png";
import jestLogo from "./icons/jest.png";
import jqueryLogo from "./icons/jquery.png"
import jsLogo from "./icons/js.png"
import mochaLogo from "./icons/mocha.png";
import mongoLogo from "./icons/mongo.png";
import mysqlLogo from "./icons/mysql.png";
import nginxLogo from "./icons/nginx.png";
import nodeLogo from "./icons/node.png";
import reactLogo from "./icons/react.png";
import rubyLogo from "./icons/ruby.png";

import Skill from "./Skill"

const Skills = forwardRef((props, ref) => {
  const controls = useAnimation();
  const [element, view] = useInView();

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  let techSkills = [["Javascript", jsLogo], ["HTML", htmlLogo], ["CSS", cssLogo], ["React", reactLogo], ["Ruby", rubyLogo], ["Node.js", nodeLogo], ["MySQL", mysqlLogo], ["MongoDB", mongoLogo], ["Amazon Web Services", awsLogo], ["Jquery", jqueryLogo], ["Docker", dockerLogo], ["NGINX", nginxLogo], ["CircleCI", circleLogo], ["Jest", jestLogo], ["Mocha", mochaLogo] ]

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
      <div className="skills-container">
        {techSkills.map(techSkill => (
          <Skill techSkill={techSkill} />
        ))}
      </div>

      <p className='quotes'>
      "Everybody should learn to program a computer, because it teaches you
      how to think."
    </p>
    <p className='quotee'>-- Steve Jobs</p>
    <hr />
    </motion.section>
    </div>
  );
});

export default Skills;

