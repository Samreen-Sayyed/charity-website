import React from "react";
import "../About/About.css";

import FirstSectionAbout from "../About/Sections/firstSectionAbout/firstSectionAbout.jsx";
import SecondSectionAbout from "./Sections/secondSectionAbout/secondSectionAbout";
import ThirdSectionAbout from "./Sections/thirdSectionAbout/thirdSectionAbout";

import FifthSectionAbout from "./Sections/fifthSectionAbout/fifthSectionAbout.jsx";
import SixthSectionAbout from "./Sections/sixthSectionAbout/sixthSectionAbout";

const About = () => {
  return (
    <div className="about-container">
      <FirstSectionAbout />
      <SecondSectionAbout />
      <ThirdSectionAbout />

      <FifthSectionAbout />
      <SixthSectionAbout />
    </div>
  );
};

export default About;
