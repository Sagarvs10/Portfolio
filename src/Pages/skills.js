import React from "react";
import "../Pages/skills.css"; // Import your existing CSS file

const skills = [
  { name: "Power BI", icon: "/assets/Powerbi.jpg" },  
  { name: "Python", icon: "/assets/python.svg" },
  { name: "ReactJS", icon: "/assets/react.svg" },
  { name: "JavaScript", icon: "/assets/js.svg" },
  { name: "CSS", icon: "/assets/css.svg" },
  { name: "GIT", icon: "/assets/git.svg" },
  { name: "HTML", icon: "/assets/html.svg" },
  { name: "MongoDB", icon: "/assets/mongodb.svg" },
  { name: "MySQL", icon: "/assets/mysql.svg" },
  { name: "NodeJS", icon: "/assets/nodejs.svg" },
];

const Skills = () => {
  return (
    <section className="skills">
      <h1>𝕄𝕪 𝕊𝕜𝕚𝕝𝕝𝕤</h1>
      <hr />
      <div className="cards">
        <div className="scroll-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.icon} alt={skill.name} loading="lazy" />
              <h2>{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
