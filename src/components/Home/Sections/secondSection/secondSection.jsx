import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiUsers, FiAward } from "react-icons/fi";
import "./secondSection.css";

const MissionSection = () => {
  const missions = [
    {
      id: 1,
      icon: <FiBookOpen size={40} />,
      title: "Infrastructure & Training",
      description: "To inculcate Education and Training by way of establishing Schools, Colleges, Libraries, Hostels and arranging Seminars and Workshops.",
      color: "#34d399" // Emerald
    },
    {
      id: 2,
      icon: <FiUsers size={40} />,
      title: "Supporting Deserving Students",
      description: "To help the deserving students of Malegaon Society of Education's School in Malegaon to pursue their education without obstacles.",
      color: "#f87171" // Red
    },
    {
      id: 3,
      icon: <FiAward size={40} />,
      title: "Higher Education & Scholarships",
      description: "To help the students of Malegaon obtain higher education of their choice in the field of Arts, Science, Commerce, Technical or any other professional course in India which is not available in Malegaon by way of Interest Free Loan Scholarships, Freeship Scholarships, stipends etc.",
      color: "#c084fc" // Purple
    }
  ];

  return (
    <section className="home-mission-section">
      {/* Decorative Animated Background */}
      <div className="mission-blob blob-1"></div>
      <div className="mission-blob blob-2"></div>

      <div className="mission-container">

        {/* HEADER */}
        <motion.div
          className="mission-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <span className="mission-badge">Our Mission</span>
          <p className="mission-subtitle">
            Empowering the community through education, training, and continuous support for a brighter future.
          </p>
        </motion.div>

        {/* MISSION CARDS GRID */}
        <div className="mission-grid">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              className="mission-card-wrapper"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 80 }}
              viewport={{ once: false, margin: "-50px" }}
            >
              <div className="mission-card" style={{ '--card-color': mission.color }}>

                {/* Number Badge */}
                <div className="mission-number">0{mission.id}</div>

                {/* Icon */}
                <div className="mission-icon-container">
                  {mission.icon}
                </div>

                {/* Content */}
                <div className="mission-content">
                  <h3>{mission.title}</h3>
                  <p>{mission.description}</p>
                </div>

                {/* Hover Glow Effect */}
                <div className="mission-card-glow"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MissionSection;