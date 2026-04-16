import React, { useEffect, useState, useRef } from 'react';
import './thirdSectionAbout.css';

const TimelineJourney = () => {
  const journeyData = [
    { year: "1943", title: "Founded", icon: "🌱", description: "Charity organization established" },
    { year: "1953", title: "Registered", icon: "📋", description: "Official registration completed" },
    { year: "2013", title: "School Established", icon: "🎓", description: "Educational initiative launched" },
    { year: "2016", title: "Land Purchased", icon: "🏗️", description: "New campus foundation secured" },
    { year: "2019", title: "Construction Started", icon: "🏢", description: "Building development initiated" },
    { year: "2024", title: "Literary Festival", icon: "📚", description: "Community engagement milestone" },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      //  normalized scroll
      const total = rect.height - windowHeight;
      const scrolled = -rect.top;

      let progress = scrolled / total;

      // clamp 0 → 1
      progress = Math.max(0, Math.min(progress, 1));

      const index = Math.min(
        journeyData.length - 1,
        Math.floor(progress * journeyData.length)
      );

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="thirdSectionAbout" ref={sectionRef}>
      <div className="timeline-container">

        <h2 className="timeline-title">Our Journey Through Time</h2>
        <p className="timeline-subtitle">
          A legacy of growth and community service
        </p>

        <div className="timeline-wrapper">

          {/* LINE */}
          <div className="timeline-line active"></div>

          <div className="milestones-container">
            {journeyData.map((milestone, index) => (
              <div
                key={index}
                className={`milestone-item 
                  ${index <= activeIndex ? "show" : ""} 
                  ${index === activeIndex ? "active" : ""} 
                  ${index < activeIndex ? "faded" : ""}`}
              >
                {/* DOT */}
                <div className="milestone-dot"></div>

                {/* CARD */}
                <div className="milestone-content">
                  <div className="milestone-year">{milestone.year}</div>
                  <div className="milestone-icon">{milestone.icon}</div>
                  <h3 className="milestone-title">{milestone.title}</h3>
                  <p className="milestone-description">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TimelineJourney;