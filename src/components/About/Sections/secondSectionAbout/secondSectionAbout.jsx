import React from "react";
import { motion } from "framer-motion";
import "./secondSectionAbout.css";

const SecondSectionAbout = () => {
  return (
    <section className="about-story">
      <div className="story-container">

        <motion.div
          className="story-image-side"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="image-wrapper">
            <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1000&auto=format&fit=crop" alt="Our Story" className="story-main-img" />
            <div className="image-accent"></div>
          </div>
          <motion.div
            className="floating-year-badge"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <span className="year-text">Since 1943</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="story-text-side"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="section-title-wrapper">
            <h2 className="section-heading">Our Story</h2>
            <div className="heading-underline-left"></div>
          </div>

          <p className="story-paragraph lead">
            Mumbai, often called the city of dreams, attracts millions striving for a better future.
          </p>
          <p className="story-paragraph">
            In 1943, a group of young professionals from Malegaon came together to support students
            facing hardships in education and employment. Since then, the Malegaon Society of Education
            has empowered thousands through scholarships, schools, and community initiatives.
          </p>
          <p className="story-paragraph">
            Our commitment is to create a society where opportunities are accessible to all, irrespective of their background.
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default SecondSectionAbout;