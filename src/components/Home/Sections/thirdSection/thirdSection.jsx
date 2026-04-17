import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import pictureThirdSection from "../../../Images/thirdsection.png";
import "./thirdSection.css";

const ThirdSection = () => {
  const navigate = useNavigate();

  // 3D Tilt Effect Handlers for the image
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { type: "spring", stiffness: 80 }
    }
  };

  return (
    <section className="home-third-section">
      {/* Decorative Background Elements */}
      <div className="third-blob blob-orange"></div>
      <div className="third-blob blob-green"></div>

      <div className="third-container">

        {/* LEFT IMAGE GALLERY */}
        <motion.div
          className="left-third-section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: false, margin: "-50px" }}
        >
          <div
            className="third-image-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Glowing Backdrop */}
            <div className="image-glowing-backdrop"></div>

            {/* Floating Geometric Shapes */}
            <motion.div
              className="floating-shape shape-green"
              animate={{ y: [0, -15, 0], rotate: [8, 12, 8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <motion.div
              className="floating-shape shape-orange"
              animate={{ y: [0, 20, 0], rotate: [-8, -15, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <img src={pictureThirdSection} alt="About our charity" className="main-about-img" />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="right-third-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
        >
          <motion.div variants={itemVariants} className="about-badge">About Us</motion.div>

          {/* MISSION */}
          <motion.div variants={itemVariants} className="about-content-block">
            <h3 className="about-heading">Our Mission</h3>
            <ul className="about-list">
              <li>
                <span className="check-icon"><AiOutlineCheckCircle /></span>
                <span>Establish schools, colleges, libraries, hostels.</span>
              </li>
              <li>
                <span className="check-icon"><AiOutlineCheckCircle /></span>
                <span>Support deserving students.</span>
              </li>
              <li>
                <span className="check-icon"><AiOutlineCheckCircle /></span>
                <span>Provide scholarships and financial aid.</span>
              </li>
            </ul>
          </motion.div>

          {/* VISION */}
          <motion.div variants={itemVariants} className="about-content-block">
            <h3 className="about-heading">Our Vision</h3>
            <p className="about-text">
              To build a community enriched with education and strong values, ensuring every individual has the opportunity to thrive and succeed.
            </p>
          </motion.div>

          {/* VALUES */}
          <motion.div variants={itemVariants} className="about-content-block">
            <h3 className="about-heading">Our Values</h3>
            <div className="values-container">
              {["Empathy", "Compassion", "Fairness", "Transparency", "Respect", "Generosity"].map((value, index) => (
                <motion.span
                  key={index}
                  className="value-pill"
                  whileHover={{ scale: 1.1, backgroundColor: "#ef5f34", color: "#ffffff" }}
                >
                  {value}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* BUTTON */}
          <motion.div variants={itemVariants}>
            <button
              className="modern-about-btn"
              onClick={() => navigate("/about")}
            >
              Discover More
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default ThirdSection;