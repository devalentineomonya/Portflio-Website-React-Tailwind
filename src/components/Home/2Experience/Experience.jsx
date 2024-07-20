import React from "react";
import ExperienceCard from "../../common/2ExperienceCard/ExperienceCard";
import { CarouselProvider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./experience.css"
const Experience = () => {
  return (
    <section className="experience-section">
      <div className="section-title">My Experience</div>
      <div>
        <ExperienceCard />
      </div>
    </section>
  );
};

export default Experience;
