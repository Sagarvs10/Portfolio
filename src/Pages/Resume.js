import React, { useEffect } from 'react';
import './Resume.css';
import myImage from '../images/resume.png';
import myResume from '../CV_Sagar.pdf'; // Place your PDF file in the `src` folder or `public`

import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  useEffect(() => {
    const resumeContainer = document.getElementById('resume');
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 500;
      if (scrollPosition > threshold) {
        resumeContainer.classList.add('unfolded');
      } else {
        resumeContainer.classList.remove('unfolded');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = myResume;
    link.download = 'JP_Sagar_Singh_Resume.pdf'; // Change the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="resume" className="resume-container folded">
      <h2 className="resume-heading">ℝ𝔼𝕊𝕌𝕄𝔼</h2>
      <hr />
      <br />
      <div className="image">
        <img src={myImage} alt="Resume Preview" />
        <button className="download-btn" onClick={downloadResume}>
          <FaDownload /> Download Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
