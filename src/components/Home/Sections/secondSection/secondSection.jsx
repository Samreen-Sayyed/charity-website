import React, { useEffect } from "react";
import medicine from "../../../Images/medicine.png";
import faucet from "../../../Images/water-tap.png";
import vegetable from "../../../Images/vegetable.png";
import hat from "../../../Images/hat.png";
import "./secondSection.css";

import AOS from "aos";
import "aos/dist/aos.css";

function SecondSection() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once:false,
    });
  }, []);

  return (
    <div className="home-second-section">

      <h2 className="section-heading" data-aos="fade-up">
        Our Mission
      </h2>

      <div className="icon-div">

        <div className="box" data-aos="zoom-in" data-aos-delay="100">
          <div className="image-box-container">
            <img src={vegetable} alt="Healthy Food" />
          </div>
          <h3>Healthy Food</h3>
        </div>

        <div className="box" data-aos="zoom-in" data-aos-delay="200">
          <div className="image-box-container">
            <img src={faucet} alt="Clean Water" />
          </div>
          <h3>Clean Water</h3>
        </div>

        <div className="box" data-aos="zoom-in" data-aos-delay="300">
          <div className="image-box-container">
            <img src={medicine} alt="Medical Care" />
          </div>
          <h3>Medical Care</h3>
        </div>

        <div className="box" data-aos="zoom-in" data-aos-delay="400">
          <div className="image-box-container">
            <img src={hat} alt="Child Education" />
          </div>
          <h3>Child Education</h3>
        </div>

      </div>
    </div>
  );
}

export default SecondSection;