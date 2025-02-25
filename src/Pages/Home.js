import React from 'react';
import '../Pages/Home.css';


const Home = () => {
  return (
    <div id="about" className="about-container">
      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="shape circle"></div>
        <div className="shape hexagon"></div>
        <div className="shape triangle"></div>
        <div className="shape small-circle"></div>
        <div className="shape big-circle"></div>
        <div className="shape small-triangle"></div>
      </div>

      {/* Main Content */}
      <div className="about-content">
        <h2 className="bio-heading">JP SAGAR SINGH</h2>
        <p className="bio-subtext">
          I'm a Software Developer. Passionate about Frontend & Data Science.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-down">
      <a href="#projects">
        <p>SEE MY WORK</p> </a>
        <div className="scroll-icon"></div>
      </div>
    </div>
  );
};

export default Home;
