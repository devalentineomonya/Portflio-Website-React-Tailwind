import React from "react";
import "./testimonialcard.css";
import { BsStarFill } from "react-icons/bs";
const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">
        <BsStarFill size={20} />
        <BsStarFill size={20} />
        <BsStarFill size={20} />
        <BsStarFill size={20} />
        <BsStarFill size={20} />
      </div>
      <div className="testimonial-message">
        <p>
          Laborum aliqua officia pariatur sunt adipisicing ea culpa aute
          cupidatat anim. Amet dolore qui reprehenderit nulla id officia commodo
          irure ex commodo. Ad amet dolor ad consectetur dolore ullamco laborum
          esse eiusmod laboris reprehenderit ad consectetur minim. Velit
          voluptate ipsum sit dolore quis proident.
        </p>
      </div>
      <div className="user-info">
        <img src="" alt="dd" />
        <p>Vaentine omonya</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
