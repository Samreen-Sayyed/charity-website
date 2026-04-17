import React, { useEffect } from "react";
import "./FifthSection.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Image
import volunteerPicture from "../../../Images/volunteer.png";

function FifthSection() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <div className="home-seventh-section">

      <div className="seventh-container" data-aos="fade-up">

        <div className="tablet-sevent-item">

          {/* TEXT */}
          <div className="seventh-first-item" data-aos="fade-right">
            <h1>Lets Change The World With Humanity</h1>
          </div>

          {/* BUTTON */}
          <div 
            className="seventh-second-item" 
            data-aos="fade-left" 
            data-aos-delay="200"
          >
            <button>Become A Volunteer</button>
          </div>

        </div>

        {/* IMAGE */}
        <div 
          className="seventh-third-item" 
          data-aos="zoom-in" 
          data-aos-delay="300"
        >
          <img
            src={volunteerPicture}
            alt="volunteer"
            id="volunteer-pic"
          />
        </div>

      </div>

    </div>
  );
}

export default FifthSection;