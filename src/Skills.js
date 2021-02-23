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
      <motion.h2 variants={slideUpAnimation}>Technical Skills</motion.h2>
      <div className='section'>
        <motion.div variants={slideLeftAnimation} className='section-1'>
          <ul>
            <li className='tech-skills'>
              <span className='skills-type'>Javascript</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type'>React.js</span>
              <span className='skills-rating'>
                <StarRatings
                  className='StarRatings'
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type'>HTML</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type'>CSS</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type'>Node.js</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>

            <li className='tech-skills'>
              <span className='skills-type'>Express</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>

            <li className='tech-skills'>
              <span className='skills-type'>MySQL</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type'>MongoDB</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type'>Docker</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={4.5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={slideRightAnimation} className='section-2'>
          <ul>
            <li className='tech-skills'>
              <span className='skills-type2'>AWS</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={4}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>

            <li className='tech-skills'>
              <span className='skills-type2'>Mocha/Chai</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={4}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>

            <li className='tech-skills'>
              <span className='skills-type2'>Ruby</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={4}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>

            <li className='tech-skills'>
              <span className='skills-type2'>JQuery</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={3.8}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type2'>Jest/Enzyme</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={3.5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type2'>CircleCI</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={3.5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type2'>New Relic</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={3.5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type2'>Nginx</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={3.2}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type2'>Loader.io</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={3}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
          </ul>
        </motion.div>
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
