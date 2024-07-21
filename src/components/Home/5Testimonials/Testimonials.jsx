import React from "react";
import TestimonialCard from "../../common/4TestimonialCard/TestimonialCard";
import "./testimonials.css";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={8}
        visibleSlides={5}
      >
        <Slider>
          <Slide index={0}>
            <TestimonialCard />
          </Slide>
        </Slider>
      </CarouselProvider>
      
    </section>
  );
};

export default Testimonials;
