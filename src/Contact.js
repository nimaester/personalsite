import React, { forwardRef } from "react";
import emailjs from "emailjs-com";
import {
  fadeAnimation,
  primaryFadeAnimation,
  slideRightAnimation,
} from "./animations/animation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollTop from "./animations/scrollTop";

const Contact = forwardRef((props, ref) => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_1fnqpcr",
        event.target,
        "user_7q9goxLOYdywpMLHQQLe3"
      )
      .then(
        (result) => {
          console.log(result.text);
          // setSent(true); for animation later
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  // <ScrollTop /> line 39

  const controls = useAnimation();
  const [element, view] = useInView();

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return (
    <div>
      <div id='contact' className='section' ref={ref}></div>
      <motion.section
        ref={element}
        className='contact'
        variants={primaryFadeAnimation}
        initial='hidden'
        animate={controls}
        exit='exit'
      >
        <form className='contact-form' onSubmit={sendEmail}>
          <div className='name'>
            <motion.h2 variants={slideRightAnimation}>Contact Me</motion.h2>
            <input
              className='input-name'
              spellCheck='false'
              placeholder='Your Name'
              type='text'
              name='name'
              required
            />
          </div>

          <div className='email'>
            <input
              className='input-email'
              spellCheck='false'
              placeholder='Your Email'
              type='email'
              name='email'
              required
            />
          </div>

          <div className='message'>
            <textarea
              className='input-message'
              spellCheck='false'
              placeholder='Your Message'
              name='message'
              required
            />
          </div>
          <div>
            <input className='send' type='submit' value='Send' />
          </div>
        </form>

        <p className='quotes'>“You expecting a quote here?”</p>
      </motion.section>
    </div>
  );
});

export default Contact;
