import React from "react";
import pictureThirdSection from "../../../Images/third-section-picture.png";
import "../thirdSection/thirdSection.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
function thirdSection() {
  return (
    <div className="home-third-section">
      <div className="third-container">
        <div className="left-third-section">
          <img src={pictureThirdSection} alt="picture third section" />
        </div>
        <div className="right-third-section">
          <h4>About Us</h4>
          <h2>We Can Save More Lifes With Your Helping Hand.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <ul>
            <li>
              <AiOutlineCheckCircle /> The standard chunk of Lorem Ipsum used
              since.
            </li>
            <li>
              <AiOutlineCheckCircle /> Randomised words which don't look even
              slightly believable.
            </li>
            <li>
              <AiOutlineCheckCircle /> Making this the first true generator on
              the Internet.
            </li>
          </ul>
          <button>More About</button>
        </div>
      </div>
    </div>
  );
}
export default thirdSection;
