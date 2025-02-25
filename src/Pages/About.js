import React from 'react';
import './About.css';
import myImage from '../images/animated 2.avif'; // Add your image path

const About = () => {
  return (
    <div id="about" className="about-container">
      <h2 className="bio-heading">𝔹𝕀𝕆</h2>
      <hr />
      
      <div className="about-content">
        {/* Left Section - Image */}
        <div className="about-left">
          <img src={myImage} alt="My Profile" className="about-image" />
        </div>

        {/* Right Section - Bio Text */}
        <div className="about-right">
          <p className="bio-text">
            Hey there! I'm Sagar, a 24-year-old software developer from Andhra Pradesh.Passionate professional with 2+ years of experience in crafting user-focused web applications using HTML, CSS, JavaScript, and React.js.
            Skilled in both front-end development and data analytics, with expertise in data analysis (Excel, SQL, Python), visualization (Power BI), and problem-solving.
            Strong communicator and collaborator with a track record of aligning technical and business goals to deliver impactful, data-driven insights and seamless user experiences.
            Open to opportunities in both data analytics and front-end development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
