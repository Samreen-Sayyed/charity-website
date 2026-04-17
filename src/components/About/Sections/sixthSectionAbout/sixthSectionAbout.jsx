import React from "react";
import { motion } from "framer-motion";
import "./sixthSectionAbout.css";

const SixthSectionAbout = () => {
  const stats = [
    { number: "10,000+", label: "Students Supported", icon: "👨‍🎓" },
    { number: "80+", label: "Years of Service", icon: "⭐" },
    { number: "1", label: "School Established", icon: "🏫" },
    { number: "50+", label: "Community Events", icon: "🤝" },
  ];

  return (
    <section className="impact-section">
      <div className="impact-overlay"></div>
      <div className="impact-container">

        {/* TITLE */}
        <motion.div
          className="impact-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2>Our Impact</h2>
          <div className="impact-underline"></div>
          <p>Decades of dedication, countless lives changed</p>
        </motion.div>

        {/* STATS GRID */}
        <div className="stats-grid">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6, type: "spring", bounce: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="stat-icon">{item.icon}</div>
              <h3 className="stat-number">{item.number}</h3>
              <p className="stat-label">{item.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SixthSectionAbout;