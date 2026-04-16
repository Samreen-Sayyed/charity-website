import React from "react";
import { motion } from "framer-motion";
import "./fifthSectionAbout.css";

const FifthSectionAbout = () => {
  const works = [
    {
      title: "Education Scholarships",
      desc: "Providing financial support to students for higher education.",
      icon: "🎓",
    },
    {
      title: "Urdu Medium School",
      desc: "Established a quality school to promote education in Malegaon.",
      icon: "🏫",
    },
    {
      title: "Book Fairs & Events",
      desc: "Organizing national-level Urdu book fairs and literary events.",
      icon: "📚",
    },
    {
      title: "Relief Work",
      desc: "Distributed food and essentials during lockdown to those in need.",
      icon: "🤝",
    },
  ];

  return (
    <section className="work-section">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        Our Work
      </motion.h2>

      <div className="underline"></div>

      {/* GRID */}
      <div className="work-grid">
        {works.map((item, index) => (
          <motion.div
            key={index}
            className="work-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: false }}
          >
            <div className="work-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default FifthSectionAbout;