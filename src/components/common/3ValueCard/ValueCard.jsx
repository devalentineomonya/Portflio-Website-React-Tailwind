import React from "react";
import "./valuecard.css";
import { RiStockLine } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
const ValueCard = () => {
  return (
    <div className="value-card-container">
      <div className="value-card-description">
        <div className="value-card-description-icon">
          <GrGraphQl />
        </div>
        <div className="value-card-description-title">Continuos Improvement</div>
        <div className="value-card-description-content">
        Irure dolor enim eiusmod labore. In Lorem voluptate minim eiusmod
          elit. Adipisicing nisi labore amet esse. Consectetur voluptate veniam
          et ullamco aute adipisicing irure magna Lorem.
        </div>
      </div>
      <div className="value-card-image">
        <img src="" alt="rrr" />
      </div>
    </div>
  );
};

export default ValueCard;
