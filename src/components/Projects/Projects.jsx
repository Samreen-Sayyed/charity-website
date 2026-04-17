import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

import medicalCampImage from "../Images/medical-camp.jpg";
import SchoolProject from "../Images/school-project.jpg";
import Scholarship from "../Images/Scholarship.png";

const dummyProjects = [
  {
    id: 1,
    title: "School Built",
    description: "Built classrooms and improved learning spaces for children.",
    fullDescription:
      "Improved education in remote areas by building state-of-the-art classrooms, providing essential learning materials, and ensuring a safe, inspiring environment for the next generation of students.",
    image: SchoolProject,
    impact: "200+ children benefited",
    year: "2025",
    color: "#4facfe",
  },
  {
    id: 2,
    title: "Medical Camps Outreach",
    description:
      "Free health checkups and medicine support for underserved families.",
    fullDescription:
      "Organized free medical camps in rural and underserved communities, bringing specialized doctors, free medicine, and essential health checkups directly to those who need it most.",
    image: medicalCampImage,
    impact: "500 families served",
    year: "2025",
    color: "#ff0844",
  },
  {
    id: 3,
    title: "Scholarship Program",
    description: "Educational support for underprivileged students.",
    fullDescription:
      "Launched a comprehensive scholarship fund aimed at helping bright, underprivileged students pursue higher education without the burden of financial stress.",
    image: Scholarship,
    impact: "200 students supported",
    year: "2026",
    color: "#f83600",
  },
  {
    id: 4,
    title: "Vocational Training",
    description: "Skill development for sustainable livelihoods.",
    fullDescription:
      "Providing hands-on vocational training programs for youth and adults, empowering them with the skills needed to secure sustainable jobs and start their own businesses.",
    image: Scholarship, // Using existing image as placeholder
    impact: "150 individuals trained",
    year: "2026",
    color: "#43e97b",
  },
  {
    id: 5,
    title: "Clean Water Initiative",
    description: "Installing clean water pumps in remote villages.",
    fullDescription:
      "Ensuring access to safe, clean drinking water by installing deep-water pumps and filtration systems in villages that previously lacked reliable water sources.",
    image: medicalCampImage, // Using existing image as placeholder
    impact: "30 villages supplied",
    year: "2026",
    color: "#00c6fb",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <div className="projects-page-wrapper">
      {/* Decorative Animated Background */}
      <div className="proj-blob proj-blob-1"></div>
      <div className="proj-blob proj-blob-2"></div>
      <div className="proj-blob proj-blob-3"></div>

      <section className="projects-section">
        {/* HEADER */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="proj-badge">Our Work</span>
          <h2 className="proj-title">Impactful Projects</h2>
          <p className="proj-subtitle">
            Driving real change across education, healthcare, and community development.
            Discover the stories behind our initiatives.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="proj-container">
          <div className="modern-projects-grid">
            {dummyProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="proj-card-wrapper"
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="proj-card" style={{ "--hover-color": project.color }}>

                  {/* Image Container */}
                  <div className="proj-image-container">
                    <div className="proj-image-overlay"></div>
                    <img src={project.image} alt={project.title} />
                    <div className="proj-year-badge">{project.year}</div>
                  </div>

                  {/* Content Container */}
                  <div className="proj-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="proj-footer">
                      <div className="proj-impact">
                        <span className="impact-icon">🌟</span>
                        <span>{project.impact}</span>
                      </div>

                      <button
                        className="proj-learn-btn"
                        onClick={() => openModal(project)}
                      >
                        Explore
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="proj-card-glow"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODERN GLASS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="proj-modal-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={closeModal}
          >
            <motion.div
              className="proj-modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button className="proj-modal-close" onClick={closeModal}>✕</button>

              <div className="proj-modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className="proj-modal-year">{selectedProject.year}</div>
              </div>

              <div className="proj-modal-text">
                <h3>{selectedProject.title}</h3>
                <div className="proj-modal-impact">
                  <span className="impact-icon">🌟</span> {selectedProject.impact}
                </div>
                <p>{selectedProject.fullDescription}</p>
                <button className="proj-modal-action-btn" onClick={closeModal}>Close Project</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsSection;