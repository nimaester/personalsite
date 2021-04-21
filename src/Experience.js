import React, { forwardRef } from "react";
import ExperienceEntry from "./ExperienceEntry";
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
  view ? controls.start("show") : controls.start("hidden");

  const schoolData = [
    [
      "Hack Reactor",
      "(2020-2020)",
      [
        "An immersive coding school thats has a ~3% acceptance rate that provides software engineering education, career placement services, and a network of professional peers. After 1000+ hours of curriculum, students graduate as full-stack software engineers and JavaScript programmers",
      ],
    ],
    [
      "Modern Javascript Bootcamp",
      "(2020-2020)",
      [
        "A comprehensive course covers the modern ES6 and ES7 JavaScript features used in the real world. You’ll gain an understanding of the latest cutting-edge language features and use those features together to create applications",
      ],
    ],
    [
      "Learn to code Ruby",
      "(2020-2020)",
      [
        "A comprehensive Ruby course that gives you an in-depth overview of coding with Ruby, a popular programming language renowned for its simplicity and elegance. This course teaches you to master common Ruby objects, solve algorithms, and object-oriented progamming including classes and more",
      ],
    ],
    [
      "City Collge SF",
      "(2011-2013)",
      [
        "Associates in Business Management. Prepares students to work as loan officers, sales representatives, insurance underwriters, business intelligence analysts, insurance agents, assistant buyers, marketing coordinators, human resources staff and financial analysts.",
      ],
    ],
  ];

  const workData = [
    [
      "Personal Projects, Software Engineer",
      "(2020-Current)",
      [
        "- Designed an interactive UX/UI using React and Redux to display ratings and reviews for homes and maximizing code reusability",
        "- Built and deployed Docker containers to EC2 by configuring monolithic apps into microservices for improved developer workflow",
        "- Built a home rentals reviews component that displays a user’s rating and review for a specific rental house using React.js, MongoDB Express.js and Node.js",
        "- Managed and optimized the backend for a home rentals image gallery component from 200RPS to over 1000RPS+ by horizontally scaling and using a load balancer to achieve faster querying times",
      ],
    ],
    [
      "Dominos Pizza, Manager/ Assistant Manager",
      "(2006-2018)",
      [
        "- Achieved monthly sales record twice in the same year in my first year as a mananger",
        "- Maintained food and labor costs at ~25% of the store’s total sales weekly",
        "- Provided guidance, advice and training to help hardworking individuals to become store managers",
      ],
    ],
  ];

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
