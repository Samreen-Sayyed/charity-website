import React, { useEffect, useState } from "react";
import "./Founders.css";
import founderImg from "../Images/Founders.png";
import currentTeam from "../Images/current_group.png";
import firstmeet from "../Images/firstmeet.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

const Founders = () => {

  const [isOpen, setIsOpen] = useState(false);

  // 3D Tilt Effect Handlers
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;

    // Calculate rotation (-10 to 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

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
      {/* ================= LEGACY ================= */}
      <section className="founder-legacy relative-section">
        {/* Decorative Background Blobs */}
        <div className="shape-blob shape-blob-1"></div>
        <div className="shape-blob shape-blob-2"></div>

        {/* HEADER */}
        <div className="legacy-header" data-aos="fade-up" data-aos-duration="1200">
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
        <div className="legacy-image" data-aos="zoom-in" data-aos-duration="1500">
          <div
            className="tilt-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="glowing-backdrop"></div>
            <img src={founderImg} alt="Founders 1943" className="animated-image" />
          </div>
        </div>

        {/* TITLE */}
        <h3 className="table-title" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
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
                  <tr
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={(index % 10) * 50}
                    className="animated-row"
                  >
                    <td>{index + 1}</td>
                    <td>{name}</td>

                    {index === 0 && (
                      <td rowSpan={names.length} className="doc-cell">
                        <img
                          src={firstmeet}
                          alt="Document"
                          onClick={() => setIsOpen(true)}
                          className="pulsing-doc"
                          data-aos="zoom-in"
                          data-aos-delay="500"
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
      <section className="current-team relative-section">
        <div className="shape-blob shape-blob-3"></div>

        <div className="team-header" data-aos="fade-up" data-aos-duration="1200">
          <h1>Our Present Society Member</h1>
          <h2>Carrying Forward the Legacy</h2>

          <p>
            Our present members proudly carry forward the vision of our founders,
            working with dedication to promote education and community development.

            By combining experience with modern ideas, they ensure the organization
            continues to grow while staying true to its values and mission.
          </p>
        </div>

        <div className="team-image" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
          <div
            className="tilt-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="glowing-backdrop"></div>
            <img src={currentTeam} alt="Team" className="animated-image" />
          </div>
        </div>

      </section>
    </>
  );
};

export default Founders;