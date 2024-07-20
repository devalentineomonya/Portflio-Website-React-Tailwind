import React from "react";
import ExperienceCard from "../../common/2ExperienceCard/ExperienceCard";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./experience.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
const Experience = () => {
  return (
    <section className="experience-section">
      <div className="section-title">My Experience</div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={8}
        visibleSlides={5}
        className="carousel-provider"
      >
        <Slider>
          <Slide index={0}>
            <ExperienceCard />
          </Slide>
          <Slide index={1}>
            <ExperienceCard />
          </Slide>
          <Slide index={3}>
            <ExperienceCard />
          </Slide>
          <Slide index={4}>
            <ExperienceCard />
          </Slide>
          <Slide index={5}>
            <ExperienceCard />
          </Slide>
          <Slide index={6}>
            <ExperienceCard />
          </Slide>
          <Slide index={7}>
            <ExperienceCard />
          </Slide>
        </Slider>
        <ButtonBack className="button-back">
          <BiChevronLeft size={44} />
        </ButtonBack>
        <ButtonNext className="button-next">
          <BiChevronRight size={44} />
        </ButtonNext>
      </CarouselProvider>
    </section>
  );
};

export default Experience;
