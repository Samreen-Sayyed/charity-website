import React, { useEffect } from "react";
import pictureThirdSection from "../../../Images/thirdsection.png";
import "../thirdSection/thirdSection.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function ThirdSection() {

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="home-third-section">
      <div className="third-container">

        {/* LEFT IMAGE */}
        <div className="left-third-section" data-aos="fade-right">

          {/* 🔶 SHAPES */}
          <div className="shape shape-green"></div>
          <div className="shape shape-orange"></div>

          <img src={pictureThirdSection} alt="About section" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="right-third-section" data-aos="fade-left">

          <h4 data-aos="fade-up">About Us</h4>

          {/* MISSION */}
          <h3 className="about-subheading" data-aos="fade-up">
            Our Mission
          </h3>
          <ul>
            <li data-aos="fade-up">
              <AiOutlineCheckCircle /> Establish schools, colleges, libraries, hostels.
            </li>
            <li data-aos="fade-up">
              <AiOutlineCheckCircle /> Support deserving students.
            </li>
            <li data-aos="fade-up">
              <AiOutlineCheckCircle /> Provide scholarships and financial aid.
            </li>
          </ul>

          {/* VISION */}
          <h3 className="about-subheading" data-aos="fade-up">
            Our Vision
          </h3>
          <p data-aos="fade-up">
            To build a community enriched with education and strong values.
          </p>

          {/* VALUES */}
          <h3 className="about-subheading" data-aos="fade-up">
            Our Values
          </h3>
          <div className="values-container">
            <span data-aos="zoom-in">Empathy</span>
            <span data-aos="zoom-in">Compassion</span>
            <span data-aos="zoom-in">Fairness</span>
            <span data-aos="zoom-in">Transparency</span>
            <span data-aos="zoom-in">Respect</span>
            <span data-aos="zoom-in">Generosity</span>
          </div>

          {/* BUTTON */}
          <button
            className="about-btn"
            data-aos="zoom-in"
            onClick={() => navigate("/about")}
          >
            More About
          </button>

        </div>

      </div>
    </div>
  );
}

export default ThirdSection;