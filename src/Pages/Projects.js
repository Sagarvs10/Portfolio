import React from 'react';
import './Projects.css';
import ProjectImage1 from '../images/Project 1.jpg';
import ProjectImage2 from '../images/Project 2.png';

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-heading">ℙℝ𝕆𝕁𝔼ℂ𝕋𝕊</h2>
      <hr />
      <br />
      <div className="projects-grid">
        {/* Amazon Dashboard Project */}
        <div className="project-card">
          <div className="project-image">
            <a href="https://app.powerbi.com/groups/me/reports/b483626b-9381-4620-978e-7c80a53a62fe/85ee4908979bdecc4807?experience=power-bi" target="_blank" rel="noopener noreferrer">
              <img src={ProjectImage2} alt="Amazon Dashboard Project" />
            </a>
          </div>
          <div className="project-description">
            <h3>Amazon Dashboard - 2024</h3>
            <hr />
            <p>
              <span>• Interactive Power BI dashboard analyzing Amazon sales metrics, trends, and performance indicators.</span>
              <br /><br />
              <span>• Region & Time-Based Filtering – Users can filter sales data by region, time, and product categories.</span>
              <br /><br />
              <span>• Performance Optimization – Identifies sales bottlenecks, customer preferences, and business growth opportunities.</span>
            </p>
          </div>
        </div>

        {/* Subio Foods Project */}
        <div className="project-card">
          <div className="project-image">
            <a href="https://subiofoods.com/" target="_blank" rel="noopener noreferrer">
              <img src={ProjectImage1} alt="Subio Foods Project" />
            </a>
          </div>
          <div className="project-description">
            <h3>Subio Foods - Online Groceries</h3>
            <hr />
            <p>
              <span>• Subiofoods emphasizes innovation and efficiency in its spice-related venture.</span>
              <br /><br />
              <span>• Developed using the MERN Stack with MongoDB as a key NoSQL database.</span>
              <br /><br />
              <span>• Ensures smooth collaboration among four different project teams.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
