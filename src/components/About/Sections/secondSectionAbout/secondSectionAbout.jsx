import React from "react";
import { motion } from "framer-motion";
import "./secondSectionAbout.css";

const SecondSectionAbout = () => {
  return (
    <section className="about-story">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Our Story
      </motion.h2>

      {/* UNDERLINE */}
      <motion.div
        className="underline"
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      ></motion.div>

      {/* CARD */}
      <motion.div
        className="story-card"
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
        duration: 0.7,
        ease: "easeOut"
      }}
      viewport={{ once: false }}
      >
        <p>
          Mumbai, often called the city of dreams, attracts millions striving for a better future. 
          In 1943, a group of young professionals from Malegaon came together to support students 
          facing hardships in education and employment. Since then, the Malegaon Society of Education 
          has empowered thousands through scholarships, schools, and community initiatives.
        </p>
      </motion.div>

    </section>
  );
};

export default SecondSectionAbout;