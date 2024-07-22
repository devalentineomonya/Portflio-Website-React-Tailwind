import React from "react";
import "./projectcard.css"
const ProjectCard = ({ pos,img }) => {
  return (
    <>
      <input type="radio" name="slide" id={`c${pos}`} checked />
      <label htmlFor={`c${pos}`} className="project-card" style={{"--img":`url(${img})`}}>
        <div className="row">
          <div className="icon">{pos}</div>
          <div className="description">
            <h4>Winter</h4>
            <p>Witer is te best weather i know</p>
          </div>
        </div>
      </label>
    </>
  );
};

export default ProjectCard;
