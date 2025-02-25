import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaInfoCircle, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <p> 𝕊𝔸𝔾𝔸ℝ'𝕊 ℙ𝕆ℝ𝕋𝔽𝕆𝕃𝕀𝕆</p>
      </div>
      <div className="navbar-right">
        <ul>
          <li><Link to="about" smooth={true} duration={500} offset={-50}><FaHome /> Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} offset={-50}><FaInfoCircle /> About</Link></li>
          <li><Link to="contact" smooth={true} duration={500} offset={-50}><FaEnvelope /> Contact</Link></li>
          <li><Link to="projects" smooth={true} duration={500} offset={-50}><FaProjectDiagram /> Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
