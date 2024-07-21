import React, { useState } from "react";
import { CgShare } from "react-icons/cg";
import socialIcons from "../../../assets/data/SocialIcons";
import { Link } from "react-router-dom";

const HeroRight = () => {
  const [active, setActive] = useState(false);
  return (
    <div
      className="hero-right-container"
      onClick={() => setActive((prev) => !prev)}
    >
      <div className={`social-link-menu ${active ? "active" : ""}`}>
        <div className="social-links-toggle">
          <CgShare size={44} />
        </div>
        {socialIcons?.map(({ color, name, href, icon = null }, i) => (
          <li style={{"--i":i , "--clr":color}} key={`${i}-${name}`}>
            <Link to={href}>{icon}</Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default HeroRight;
