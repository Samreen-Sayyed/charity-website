import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBookOpen, FaUsers, FaGraduationCap, FaHeart } from "react-icons/fa";
import bg from "../../../Images/kid5.png";
import "./firstSection.css";

const FirstSection = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "50%"]);

  useEffect(() => {
    // Counter animation with slight delay to sync with Framer Motion entrance
    setTimeout(() => {
      const counters = document.querySelectorAll(".count");
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const isPercent = counter.getAttribute("data-type") === "percent";
          const current = +counter.innerText.replace(/[^0-9]/g, '');

          // Slower increment for a premium feel
          const increment = target / 120;

          if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 20);
          } else {
            if (isPercent) {
              counter.innerText = target + "%";
            } else {
              counter.innerText = target.toLocaleString() + "+";
            }
          }
        };
        updateCount();
      });
    }, 800); // Wait for the cards to pop up
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="hero-wrapper">
      {/* Animated Parallax Background */}
      <motion.div
        className="hero-bg"
        style={{
          backgroundImage: `url(${bg})`,
          y: backgroundY
        }}
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* HERO TEXT */}
      <div className="hero-content">
        <motion.h1
          className="main-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Malegaon Education Society
        </motion.h1>

        <motion.h2
          className="sub-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Empowering Minds, <span>Transforming Lives</span>
        </motion.h2>
      </div>

      {/* MODERN STATS */}
      <motion.div
        className="stats-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="modern-card card-orange" variants={cardVariants}>
          <div className="modern-icon"><FaBookOpen /></div>
          <div className="modern-content">
            <h2 className="count" data-target="25000">0</h2>
            <p>Students Supported</p>
          </div>
          <div className="card-glow"></div>
        </motion.div>

        <motion.div className="modern-card card-blue" variants={cardVariants}>
          <div className="modern-icon"><FaUsers /></div>
          <div className="modern-content">
            <h2 className="count" data-target="150">0</h2>
            <p>Schools Partnered</p>
          </div>
          <div className="card-glow"></div>
        </motion.div>

        <motion.div className="modern-card card-green" variants={cardVariants}>
          <div className="modern-icon"><FaGraduationCap /></div>
          <div className="modern-content">
            <h2 className="count" data-target="500">0</h2>
            <p>Scholarships Given</p>
          </div>
          <div className="card-glow"></div>
        </motion.div>

        <motion.div className="modern-card card-pink" variants={cardVariants}>
          <div className="modern-icon"><FaHeart /></div>
          <div className="modern-content">
            <h2 className="count" data-target="100" data-type="percent">0</h2>
            <p>Committed to Education</p>
          </div>
          <div className="card-glow"></div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default FirstSection;