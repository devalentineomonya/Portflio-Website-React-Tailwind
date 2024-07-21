import React from "react";
import ProjectCard from "../../common/5ProjectCard/ProjectCard";
import "./projects.css"
const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        <ProjectCard pos={1} />
        <ProjectCard pos={2} />
        <ProjectCard pos={3} />
        <ProjectCard pos={4} />
        <ProjectCard pos={5} />
        <ProjectCard pos={6} />
        <ProjectCard pos={7} />
        <ProjectCard pos={8} />
        <ProjectCard pos={9} />
      </div>
    </div>
  );
};

export default Projects;
