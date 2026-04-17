import React, { useEffect, useState } from "react";
import "./Founders.css";
import founderImg from "../Images/Founders.png";
import currentTeam from "../Images/current_group.png";
import firstmeet from "../Images/firstmeet.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

const Founders = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
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
      {/* ================= LEGACY ================= */}
      <section className="founder-legacy">

        {/* HEADER */}
        <div className="legacy-header" data-aos="fade-up">
          <h1>Our Legacy</h1>
          <h2>Established in 1943</h2>
          <p>
            Established in 1943, our society was founded with a vision to promote
            education and uplift the community. What started as a small initiative
            has grown into a trusted institution dedicated to learning and progress.

            Over the years, we have remained committed to empowering students,
            supporting meaningful initiatives, and continuing a legacy built on
            dedication, unity, and purpose.
          </p>
        </div>

        {/* IMAGE */}
        <div className="legacy-image" data-aos="zoom-in">
          <img src={founderImg} alt="Founders 1943" />
        </div>

        {/* TITLE */}
        <h3 className="table-title" data-aos="fade-up">
          First Meeting Members (5th December 1943)
        </h3>

        {/* TABLE */}
        <div className="meeting-container" data-aos="fade-up">

          <div className="table-box">
            <table className="main-table">

              <thead>
                <tr>
                  <th className="col-sr">Sr No</th>
                  <th className="col-name">Name of Member</th>
                  <th className="col-doc">Document</th>
                </tr>
              </thead>

              <tbody>
                {names.map((name, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>

                    {index === 0 && (
                      <td rowSpan={names.length} className="doc-cell">
                        <img
                          src={firstmeet}
                          alt="Document"
                          onClick={() => setIsOpen(true)}
                        />
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>

      </section>

      {/* MODAL */}
      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <img
            src={firstmeet}
            alt="Full"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ================= CURRENT TEAM ================= */}
      <section className="current-team">

        <div className="team-header" data-aos="fade-up">
          <h1>Our Present Society Member</h1>
          <h2>Carrying Forward the Legacy</h2>

          <p>
            Our present members proudly carry forward the vision of our founders,
            working with dedication to promote education and community development.

            By combining experience with modern ideas, they ensure the organization
            continues to grow while staying true to its values and mission.
          </p>
        </div>

        <div className="team-image" data-aos="zoom-in">
          <img src={currentTeam} alt="Team" />
        </div>

      </section>
    </>
  );
};

export default Founders;