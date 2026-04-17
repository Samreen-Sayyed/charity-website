import React, { useEffect, useRef } from 'react';
import './thirdSectionAbout.css';

const TimelineJourney = () => {
  const journeyData = [
    { 
      year: "1943", 
      title: "Founded", 
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&auto=format&fit=crop&q=80", 
      description: "Our charity organization was established with a small group of passionate volunteers dedicated to making a difference.",
      alignment: "left"
    },
    { 
      year: "1953", 
      title: "Registered", 
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80", 
      description: "We completed our official registration, allowing us to expand our reach and impact more communities globally.",
      alignment: "right"
    },
    { 
      year: "2013", 
      title: "School Established", 
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80", 
      description: "Our first educational initiative was launched, providing free education to hundreds of underprivileged children.",
      alignment: "left"
    },
    { 
      year: "2016", 
      title: "Land Purchased", 
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80", 
      description: "A major milestone was reached when we secured the foundation for our new campus, ensuring long-term sustainability.",
      alignment: "right"
    },
    { 
      year: "2019", 
      title: "Construction Started", 
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80", 
      description: "Building development was initiated to create state-of-the-art facilities for our growing community programs.",
      alignment: "left"
    },
    { 
      year: "2024", 
      title: "Literary Festival", 
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&auto=format&fit=crop&q=80", 
      description: "We hosted our largest community engagement event, bringing together thousands to celebrate literature and learning.",
      alignment: "right"
    },
  ];

  const observerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.25,
      rootMargin: "0px 0px -50px 0px"
    });

    const elements = document.querySelectorAll('.milestone-card-wrapper');
    elements.forEach(el => observerRef.current.observe(el));

    let pathLength = 0;
    
    // Dynamic wave path generation
    const updateWave = () => {
      if (!containerRef.current) return;
      const height = containerRef.current.offsetHeight;
      const waveLine = document.querySelector('.animated-wave-path');
      const svgEl = document.querySelector('.wave-svg');
      
      if (waveLine && svgEl) {
        // Set the proper SVG viewBox dynamically
        svgEl.setAttribute('viewBox', `0 0 100 ${height}`);
        
        // Calculate a nice smooth repeating wave
        const points = [];
        const segmentHeight = 200;
        const amplitude = 30;
        const totalSegments = Math.ceil(height / segmentHeight);
        
        points.push(`M 50 0`);
        for (let i = 0; i < totalSegments; i++) {
          const y1 = i * segmentHeight + segmentHeight / 2;
          const y2 = (i + 1) * segmentHeight;
          const sign = i % 2 === 0 ? 1 : -1;
          points.push(`Q ${50 + (amplitude * sign)} ${y1}, 50 ${y2}`);
        }
        waveLine.setAttribute('d', points.join(' '));
        
        // Update path length for scroll animation
        pathLength = waveLine.getTotalLength();
        waveLine.style.strokeDasharray = pathLength;
        waveLine.style.strokeDashoffset = pathLength;
      }
    };

    updateWave();

    // Scroll sync
    const handleScroll = () => {
      if (!containerRef.current) return;
      const waveLine = document.querySelector('.animated-wave-path');
      const orb = document.querySelector('.glowing-orb');
      if (!waveLine || !orb || pathLength === 0) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Distance scrolled into the container
      // Start drawing when the top of the container reaches the middle of the screen
      const startOffset = windowHeight / 1.5;
      const scrollPosition = startOffset - rect.top;
      
      // Calculate progress (0 to 1)
      let progress = scrollPosition / rect.height;
      progress = Math.max(0, Math.min(progress, 1));
      
      // Update wave drawing
      waveLine.style.strokeDashoffset = pathLength * (1 - progress);
      
      // Update glowing orb position to follow the path perfectly
      const point = waveLine.getPointAtLength(progress * pathLength);
      // point.x is relative to viewBox (100 width, centered at 50)
      // point.y is the exact pixel height
      orb.style.transform = `translate(calc(-50% + ${point.x - 50}px), ${point.y}px)`;
    };

    window.addEventListener('resize', updateWave);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call to set correct position
    handleScroll();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('resize', updateWave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="thirdSectionAbout">
      <div className="bg-wavy-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="timeline-container">
        <div className="timeline-header">
          <h2 className="timeline-title">Our Journey Through Time</h2>
          <p className="timeline-subtitle">A legacy of growth and community service</p>
          <div className="header-underline"></div>
        </div>

        <div className="timeline-wrapper" ref={containerRef}>
          {/* Central Wavy Line */}
          <div className="central-wave-container">
            <svg className="wave-svg" preserveAspectRatio="none" viewBox="0 0 100 100%" width="100%" height="100%">
              <path 
                className="animated-wave-path" 
                fill="none" 
                stroke="url(#waveGradient)" 
                strokeWidth="4" 
              />
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4caf50" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#81c784" stopOpacity="1" />
                  <stop offset="100%" stopColor="#2e7d32" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
            <div className="glowing-orb"></div>
          </div>

          <div className="milestones-container">
            {journeyData.map((milestone, index) => (
              <div key={index} className={`milestone-card-wrapper ${milestone.alignment}`}>
                {/* Connecting Dot */}
                <div className="milestone-connection-dot">
                  <div className="dot-pulse"></div>
                </div>

                <div className="milestone-card">
                  <div className="milestone-image-container">
                    <img src={milestone.image} alt={milestone.title} className="milestone-img" loading="lazy" />
                    <div className="milestone-year-floating">{milestone.year}</div>
                    <div className="image-overlay"></div>
                  </div>
                  
                  <div className="milestone-info">
                    <h3 className="milestone-heading">{milestone.title}</h3>
                    <p className="milestone-desc">{milestone.description}</p>
                    <button className="milestone-btn">Discover More</button>
                  </div>
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