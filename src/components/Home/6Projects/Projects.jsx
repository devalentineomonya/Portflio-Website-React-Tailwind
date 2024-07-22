import React from "react";
import ProjectCard from "../../common/5ProjectCard/ProjectCard";
import "./projects.css"
import test from "../../../assets/images/test.png";
import test2 from "../../../assets/images/test2.png";
import test3 from "../../../assets/images/test3.png";
import test4 from "../../../assets/images/test4.png";
const Projects = () => {
  return (
    <section className="projects-section">
      <div className="section-title">Recent Projects</div>
      <div className="projects-wrapper">
        <div className="projects-container">
          <ProjectCard pos={1} img={test} />
          <ProjectCard pos={2} img={test2} />
          <ProjectCard pos={3} img={test3} />
          <ProjectCard pos={4} img={test4} />
          <ProjectCard pos={5} img={test} />
          <ProjectCard pos={6} img={test2} />
          <ProjectCard pos={7} img={test3} />
          <ProjectCard pos={8} img={test4} />
          <ProjectCard pos={9} img={test} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
