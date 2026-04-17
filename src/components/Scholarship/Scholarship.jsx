import React from "react";
import { motion } from "framer-motion";
import "./Scholarship.css";

const Scholarship = () => {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const data = [
    {
      title: "Interest-Free Loan",
      desc: "Education support without financial stress.",
      img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
    },
    {
      title: "Merit Scholarship",
      desc: "Recognizing academic excellence.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
    },
    {
      title: "Need-Based Support",
      desc: "Helping students in need.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
    }
  ];

  return (
    <div className="scholarship-page">

      {/* HERO */}
      <motion.div
        className="hero"
        initial="hidden"
        animate="show"
        variants={fadeUp}
      >
        <h1>Scholarships</h1>
        <div className="underline"></div>
      </motion.div>

      {/* CARDS */}
      <div className="cards">
        {data.map((d, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
            <p>{d.desc}</p>

            <div className="capsules">
              <span className="cap green">Eligible</span>
              <span className="cap orange">Ongoing</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* STEPS */}
      <motion.div
        className="steps"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2>How It Works</h2>
        <div className="underline"></div>

        <div className="step-row">
          {["Apply", "Review", "Verify", "Approval"].map((s, i) => (
            <div key={i} className="step">
              <span>{i + 1}</span>
              <p>{s}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2>Apply Now</h2>
        <button>Start</button>
      </motion.div>

    </div>
  );
};

export default Scholarship;