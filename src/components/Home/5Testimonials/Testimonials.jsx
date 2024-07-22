import React from "react";
import TestimonialCard from "../../common/4TestimonialCard/TestimonialCard";
import "./testimonials.css";
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={8}
        visibleSlides={2}
      >
        <Slider>
          <Slide index={0}>
            <TestimonialCard />
          </Slide>
          <Slide index={1}>
            <TestimonialCard />
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next </ButtonNext>
      </CarouselProvider>
      
    </section>
  );
};

export default Testimonials;
