import React from "react";
import { motion } from "framer-motion";
import "./sixthSectionAbout.css";

const SixthSectionAbout = () => {
  const stats = [
    { number: "10,000+", label: "Students Supported" },
    { number: "60+", label: "Years of Service" },
    { number: "1", label: "School Established" },
    { number: "Multiple", label: "Community Events" },
  ];

  return (
    <section className="impact-section">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        Our Impact
      </motion.h2>

      <div className="underline"></div>

      {/* STATS */}
      <div className="stats-grid">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: false }}
          >
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default SixthSectionAbout;