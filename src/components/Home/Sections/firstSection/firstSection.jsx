import React, { useEffect, useRef } from "react";
import "./firstSection.css";
import bg from "../../../Images/kid5.png";
import { FaBookOpen, FaUsers, FaGraduationCap, FaHeart } from "react-icons/fa";

function FirstSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    // 🌟 Parallax scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 🔥 Counter animation
    const counters = document.querySelectorAll(".count");

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const isPercent = counter.getAttribute("data-type") === "percent";
        const current = +counter.innerText;

        const increment = target / 80;

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="hero-wrapper"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* HERO TEXT */}
      <div className="hero-content">
        <h1 className="main-heading">
          Malegaon Education Society
        </h1>

        <h2 className="sub-heading">
          Empowering Minds,<span>Transforming Lives</span>
        </h2>

        
      </div>

      {/* MODERN STATS */}
      <div className="stats-container">

        <div className="modern-card">
          <div className="modern-icon"><FaBookOpen /></div>
          <div className="modern-content">
            <h2 className="count" data-target="25000">0</h2>
            <p>Students Supported</p>
          </div>
        </div>

        <div className="modern-card">
          <div className="modern-icon"><FaUsers /></div>
          <div className="modern-content">
            <h2 className="count" data-target="150">0</h2>
            <p>Schools Partnered</p>
          </div>
        </div>

        <div className="modern-card">
          <div className="modern-icon"><FaGraduationCap /></div>
          <div className="modern-content">
            <h2 className="count" data-target="500">0</h2>
            <p>Scholarships Given</p>
          </div>
        </div>

        <div className="modern-card">
          <div className="modern-icon"><FaHeart /></div>
          <div className="modern-content">
            <h2 className="count" data-target="100" data-type="percent">0</h2>
            <p>Committed to Education</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FirstSection;