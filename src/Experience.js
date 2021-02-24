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

        <div className='exp-container'>



        </div>
      </motion.section>
    </div>
  );
});

export default Experience;

// <h3>Education</h3>
//           <div className='education'>
//             <ul>
//               <li>
//                 <p className="school-name">Hack Reactor</p><br />
//                 <p className='year'>2020-2020</p>
//               </li>
//             </ul>
//           </div>



//           <div className='work'>
//             <h3>Work</h3>
//             <div>Stuff</div>
//             <div>Stuff</div>
//             <div>Stuff</div>
//             <div>Stuff</div>
//           </div>
