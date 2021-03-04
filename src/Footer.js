import React from "react";

const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        <li className='first'>
          <a href='https://www.linkedin.com/in/nimtayo/' target='_blank'>
            <i className='fab fa-linkedin fa-2x'></i>
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/nim.tayo.12' target='_blank'>
            <i className='fab fa-facebook-square fa-2x'></i>
          </a>
        </li>
        <li>
          <a href='https://github.com/nimaester' target='_blank'>
            <i className='fab fa-github-square fa-2x'></i>
          </a>
        </li>
        <li>
          <a href='https://twitter.com/nim_tayo' target='_blank'>
            <i className='fab fa-twitter-square fa-2x'></i>
          </a>
        </li>
      </ul>
      <div className='foot'>
        <p>Nim Tayo &copy; 2021</p>
      </div>
    </div>
  );
};

export default Footer;
