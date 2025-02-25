import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaArrowUp, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="copyright">
          <p>&copy; 2025 By Sagar Singh JP. All rights reserved.</p>
        </div>
        <div className="social-icons">
          <p>Follow me on:</p>
          <a href="https://www.linkedin.com/in/sagar-singh-developer/" target="_blank" rel="noopener noreferrer">
             <FaLinkedin className="icon" />
          </a>
          <a href="https://github.com/Sagarvs10" target="_blank" rel="noopener noreferrer">
             <FaGithub className="icon" />
          </a>
          <a href="https://www.instagram.com/mr.____s.a.g.a.r_s.i.n.g.h____" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com/sagar singh" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          
        </div>
        <div className="back-to-top-left">
          <div className="back-to-top" onClick={scrollToTop}>
            <FaArrowUp className="icon" />
            <span className="tooltip"> Top</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
