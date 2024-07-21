import React from "react";
import HeroMain from "../components/Home/1Hero/HeroMain";
import Experience from "../components/Home/2Experience/Experience";
import SoftSkills from "../components/Home/3SoftSkills/SoftSkills";
import Values from "../components/Home/4Values/Values";
import Testimonials from "../components/Home/5Testimonials/Testimonials";
const Home = () => {
  return (
    <>
      <HeroMain />
      <Experience />
      <SoftSkills />
      <Values />
      <Testimonials/>
      
    </>
  );
};

export default Home;
