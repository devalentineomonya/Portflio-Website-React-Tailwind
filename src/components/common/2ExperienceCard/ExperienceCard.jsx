import React from "react";
import "./experiencecard.css";
const ExperienceCard = () => {
  return (
    <div className="experience-card">
      <div className="experience-card-container">
        <div className="experience-card-content">
          <div className="experience-card-icon"></div>
          <div className="experience-role">
            <p>2023 - 2021</p>
            <h3>Junior Frontend Engineer</h3>
          </div>
          <div className="company-info">
            <h3>Quick Pointe </h3>
            <div>
              <span>NodeJS</span> <span>ReactJS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
