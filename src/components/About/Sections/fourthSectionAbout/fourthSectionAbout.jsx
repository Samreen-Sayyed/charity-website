import React from "react";
import { motion } from "framer-motion";   // ✅ added
import "./fourthSectionAbout.css";

const fourthSectionAbout = () => {
  const items = [
    { title: "Vision🌱", text: "Building an educated and ethical society." },
    { title: "Mission🎯", text: "Support education through institutions and scholarships." },
    { title: "Goal🚀", text: "Enable every student to achieve their dream education." },
    { title: "Values🤝", text: "Integrity, compassion, and excellence." },
  ];

  return (
    <section className="purpose-section">

      {/* HEADING */}
      <motion.div
        className="purpose-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h2>Our Purpose</h2>
        <div className="heading-underline"></div>
      </motion.div>

      {/* CARDS */}
      <div className="vision-grid">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="box"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15   // 🔥 stagger effect
            }}
            viewport={{ once: false }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default fourthSectionAbout;