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
    "Muhammad Ismail Ansari", "Muhammad Hasan B.A", "Muhammad Saleem", "Muhammad Saleem Siddiqui",
    "Master Muhammad Suleman Ansari", "Muhammad Usman", "Chirag Ahmed", "Muhammad Siddiq Farani",
    "Muhammad Sadique", "Hakeem Muhammad Ayyub", "Muhammad Siddeeque", "Abdul Rashid",
    "Muhammad Yaqub", "Muhammad Ishaq", "Muhammad Yahya Zubair", "Muhammad Hassan Noori",
    "Shams Al-Dhaha Ansari", "Muhammad Hanif Shorush", "Ghulam Momin Shah", "Pir Muhammad",
    "Muhammad Sabir Momin", "Abdul Aziz Azimuddeen"
  ];

  return (
    <div className="founders-page-wrapper">
      {/* Decorative Blobs */}
      <div className="modern-blob blob-orange top-left"></div>
      <div className="modern-blob blob-blue bottom-right"></div>
      <div className="modern-blob blob-light right-center"></div>

      {/* ================= LEGACY HERO ================= */}
      <section className="legacy-hero">
        <div className="hero-content" data-aos="fade-right" data-aos-duration="1200">
          <div className="section-badge">Established in 1943</div>
          <h1 className="modern-heading">Our Legacy</h1>
          <p className="modern-text">
            Founded with a vision to promote education and uplift the community, what started as a small initiative
            has grown into a trusted institution dedicated to learning and progress.
          </p>
          <p className="modern-text">
            Over the years, we have remained committed to empowering students, supporting meaningful initiatives,
            and continuing a legacy built on dedication, unity, and purpose.
          </p>
        </div>

        <div className="hero-visual" data-aos="fade-left" data-aos-duration="1500">
          <div className="tilt-wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="glowing-backdrop"></div>
            <img src={founderImg} alt="Founders 1943" className="modern-hero-img" />
          </div>
        </div>
      </section>

      {/* ================= FIRST MEETING MEMBERS ================= */}
      <section className="meeting-members-section">
        <div className="members-header" data-aos="fade-up">
          <h2>Members of First Meeting</h2>

          <p>Held on 5th December 1943</p>
        </div>

        <div className="members-layout">
          {/* Members Grid (Replaces old table) */}
          <div className="members-grid-container">
            <div className="members-grid">
              {names.map((name, index) => (
                <div
                  key={index}
                  className="member-card"
                  data-aos="fade-up"
                  data-aos-delay={(index % 8) * 50}
                >
                  <span className="member-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="member-name">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Document + Extra Info */}
          <div className="right-column-container" data-aos="zoom-in" data-aos-delay="200">
            {/* Featured Document */}
            <div className="featured-doc-container">
              <div className="doc-presentation">
                <h3>Minutes of First Meeting</h3>
                <div className="doc-frame pulse-frame" onClick={() => setIsOpen(true)}>
                  <img src={firstmeet} alt="First Meeting Document" />
                  <div className="doc-hover-overlay">
                    <span className="view-text">Click to View</span>
                  </div>
                </div>
                <div className="doc-description">
                  <p>
                    The historical manuscript recording the minutes of the inaugural meeting, bearing the signatures of the founding members.
                  </p>
                  <div className="doc-decorative-line"></div>
                </div>
              </div>
            </div>

            {/* Decorative Quote Card to fill space */}
            <div className="mission-quote-card">
              <div className="quote-icon">❝</div>
              <p>
                "A journey of a thousand miles begins with a single step.
                Our founders took that step in 1943, creating a lasting legacy of education, unity, and empowerment."
              </p>
              <div className="quote-author">— The Founding Vision</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CURRENT TEAM ================= */}
      <section className="current-team-hero">
        <div className="hero-visual" data-aos="fade-right" data-aos-duration="1500">
          <div className="tilt-wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="glowing-backdrop"></div>
            <img src={currentTeam} alt="Current Team" className="modern-hero-img" />
          </div>
        </div>

        <div className="hero-content" data-aos="fade-left" data-aos-duration="1200">
          <div className="section-badge">Present Society</div>
          <h1 className="modern-heading">Carrying Forward the Legacy</h1>
          <p className="modern-text">
            Our present members proudly carry forward the vision of our founders,
            working with dedication to promote education and community development.
          </p>
          <p className="modern-text">
            By combining experience with modern ideas, they ensure the organization
            continues to grow while staying true to its values and mission.
          </p>
        </div>
      </section>

      {/* MODAL */}
      {isOpen && (
        <div className="glass-modal" onClick={() => setIsOpen(false)}>
          <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setIsOpen(false)}>✕</button>
            <img src={firstmeet} alt="First Meeting Document Full" className="modal-image-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Founders;