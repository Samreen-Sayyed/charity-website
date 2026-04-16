import React from "react";
import { motion } from "framer-motion";
import "./firstSectionAbout.css";

const FirstSectionAbout = () => {
  return (
    <section className="about-hero">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        About Us
      </motion.h1>

      <motion.div
        className="underline"
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      ></motion.div>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
      >
        Empowering students through education, opportunity, and community support.
      </motion.p>

    </section>
  );
};

export default FirstSectionAbout;