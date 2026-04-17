import React from "react";
import { motion } from "framer-motion";
import "./firstSectionAbout.css";

const FirstSectionAbout = () => {
  return (
    <section className="about-hero">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Discover Our Mission
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          Empowering the <span className="highlight">Future</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Empowering students through education, opportunity, and community support.
        </motion.p>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1, duration: 1 }, y: { repeat: Infinity, duration: 2 } }}
      >
        <div className="mouse"></div>
      </motion.div>
    </section>
  );
};

export default FirstSectionAbout;