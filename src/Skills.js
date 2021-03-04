import React, { forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  primaryFadeAnimation,
  slideLeftAnimation,
  slideUpAnimation,
} from "./animations/animation";
import { useInView } from "react-intersection-observer";
//logos
import cssLogo from "./icons/css.png";
import awsLogo from "./icons/aws.png";
import circleLogo from "./icons/circCi.png";
import dockerLogo from "./icons/docker.png";
import htmlLogo from "./icons/html.png";
import jestLogo from "./icons/jest.png";
import jqueryLogo from "./icons/jquery.png";
import jsLogo from "./icons/js.png";
import mochaLogo from "./icons/mocha.png";
import mongoLogo from "./icons/mongo.png";
import mysqlLogo from "./icons/mysql.png";
import nginxLogo from "./icons/nginx.png";
import nodeLogo from "./icons/node.png";
import reactLogo from "./icons/react.png";
import rubyLogo from "./icons/ruby.png";
import sassLogo from "./icons/sass.png";
import gitLogo from "./icons/git.png";
import postmanLogo from "./icons/postman.png";
import netlifyLogo from "./icons/netlify.png";
import herokuLogo from "./icons/heroku.png";

import Skill from "./Skill";

const Skills = forwardRef((props, ref) => {
  const controls = useAnimation();
  const [element, view] = useInView();

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  let techSkills = [
    [
      "Javascript",
      jsLogo,
      "A programming language that allows you to implement complex features on web pages",
    ],
    [
      "HTML",
      htmlLogo,
      "Hyper Text Markup Language, the standard markup language for Web pages",
    ],
    [
      "CSS",
      cssLogo,
      "Cascading Style Sheets, describes how HTML elements are to be displayed on screen",
    ],
    [
      "Sass",
      sassLogo,
      "A preprocessor scripting language that is interpreted or compiled into CSS",
    ],
    [
      "React",
      reactLogo,
      "Allows developers to create large web applications that can change data, without reloading the page",
    ],
    [
      "Git",
      gitLogo,
      "Software for tracking changes in any set of files, usually used for coordinating work among programmers ",
    ],
    [
      "Postman",
      postmanLogo,
      "Postman is a collaboration platform for API development. It simplifies each step of building an API",
    ],
    [
      "Ruby",
      rubyLogo,
      "A programming language with a focus on simplicity and productivity that is natural to read and write.",
    ],
    [
      "Node.js",
      nodeLogo,
      "A platform built on Chrome's JavaScript runtime for easily building scalable network apps",
    ],
    [
      "MySQL",
      mysqlLogo,
      "A Relational Database Management System that uses Structured Query Language",
    ],
    [
      "MongoDB",
      mongoLogo,
      "Document-oriented database which stores data in JSON-like documents with dynamic schema",
    ],
    [
      "AWS",
      awsLogo,
      "Provides servers, storage, networking, remote computing, mobile development, and security",
    ],
    [
      "Jquery",
      jqueryLogo,
      "A lightweight library to use Javascript on your website much easier",
    ],
    [
      "Docker",
      dockerLogo,
      "A tool designed to make it easier to create, deploy, and run applications by using containers.",
    ],
    [
      "NGINX",
      nginxLogo,
      "An open source software for web serving, reverse proxying, caching and load balancing",
    ],
    [
      "CircleCI",
      circleLogo,
      "A modern continuous integration and continuous delivery (CI/CD) platform.",
    ],
    ["Jest", jestLogo, "A testing framework to test javascript and React code"],
    [
      "Mocha",
      mochaLogo,
      "A testing library for Node. js, created to be a simple, extensible, and fast.",
    ],
    [
      "Heroku",
      herokuLogo,
      "Enables developers to build, run, and operate apps entirely in the cloud.",
    ],
    [
      "Netlify",
      netlifyLogo,
      "Enables a faster path to much more performant, secure, and scalable websites and app.",
    ],
  ];

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
        <motion.h2 variants={slideLeftAnimation}>Technical Skills</motion.h2>
        <div className='skills-container'>
          {techSkills.map((techSkill) => (
            <Skill key={techSkill[0]} techSkill={techSkill} />
          ))}
        </div>

        <p className='quotes'>
          "Everybody should learn to program a computer, because it teaches you
          how to think."
        </p>
        <p className='quotee'>-- Steve Jobs</p>
      </motion.section>
    </div>
  );
});

export default Skills;
