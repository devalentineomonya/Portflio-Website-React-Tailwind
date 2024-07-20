import React from "react";
import "./softskills.css";

const SoftSkills = () => {
  const softSkills = ["Communication", "Problem-Solving", "Team Leader", "", "5", "6", "7", "8", "9", "10"];
  return (
    <section className="soft-skills-section">
      <div className="soft-skill-container">
        <div className="section-title">Soft Skills</div>
        <div className="soft-skills-content">
          {softSkills.map((skill, i) => (
            <div className="soft-skill-card" key={i}>
              <div className="soft-skill-icon"></div>
              <div className="soft-skill-title">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
