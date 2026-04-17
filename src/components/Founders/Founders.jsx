import React, { useEffect } from "react";
import "./Founders.css";
import founderImg from "../Images/Founders.png";
import currentTeam from "../Images/current_group.png";
import firstmeet from "../Images/firstmeet.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

const Founders = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  const names = [
    "Muhammad Ismail Ansari",
    "Muhammad Hasan B.A",
    "Muhammad Saleem",
    "Muhammad Saleem Siddiqui",
    "Master Muhammad Suleman Ansari",
    "Muhammad Usman",
    "Chirag Ahmed",
    "Muhammad Siddiq Farani",
    "Muhammad Sadique",
    "Hakeem Muhammad Ayyub",
    "Muhammad Siddeeque",
    "Abdul Rashid",
    "Muhammad Yaqub",
    "Muhammad Ishaq",
    "Muhammad Yahya Zubair",
    "Muhammad Hassan Noori",
    "Shams Al-Dhaha Ansari",
    "Muhammad Hanif Shorush",
    "Ghulam Momin Shah",
    "Pir Muhammad",
    "Muhammad Sabir Momin",
    "Abdul Aziz Azimuddeen"
  ];

  return (
    <>
      {/* LEGACY SECTION */}
      <section className="founder-legacy">

        <div className="legacy-header" data-aos="fade-up">
          <h1>Our Legacy</h1>
          <h2>Established in 1943</h2>
          <p>
            Our foundation was laid by visionary leaders dedicated to education,
            empowerment, and community development.
          </p>
        </div>

        <div className="legacy-image" data-aos="zoom-in">
          <img src={founderImg} alt="Founders 1943" />
          <div className="image-overlay"></div>
          <div className="year-badge">Since 1943</div>
        </div>

       <div className="meeting-table-wrapper" data-aos="fade-up">

  {/* LEFT SIDE - TABLE */}
  <div className="table-left">
    <h3>First Meeting Members (5th December 1943)</h3>

    <table>
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Name of Member</th>
        </tr>
      </thead>

      <tbody>
        {names.map((name, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* RIGHT SIDE - IMAGE */}
  <div className="table-right">
    <img src={firstmeet} alt="First Meeting Document" />
  </div>

</div>

      </section>

      {/* CURRENT TEAM */}
      <section className="current-team">

        <div className="team-header" data-aos="fade-up">
          <h1>Our Present Society Member</h1>
          <h2>Carrying Forward the Legacy</h2>
          <p>
            Our current members continue the vision of our founders.
          </p>
        </div>

        <div className="team-image" data-aos="zoom-in">
          <img src={currentTeam} alt="Current Team" />
        </div>

      </section>
    </>
  );
};

export default Founders;