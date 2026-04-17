import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
      "Improved education in remote areas by building classrooms and providing resources.",
    image: SchoolProject,
    impact: "200+ children benefited",
    year: "2025",
  },
  {
    id: 2,
    title: "Medical Camps Outreach",
    description:
      "Free health checkups and medicine support for underserved families.",
    fullDescription:
      "Organized free medical camps for underserved communities.",
    image: medicalCampImage,
    impact: "500 families served",
    year: "2025",
  },
  {
    id: 3,
    title: "Scholarship Program",
    description: "Educational support for underprivileged students.",
    fullDescription:
      "Scholarships helping students pursue higher education.",
    image: Scholarship,
    impact: "200 students supported",
    year: "2026",
  },
  {
    id: 4,
    title: "Scholarship Program",
    description: "Educational support for underprivileged students.",
    fullDescription:
      "Scholarships helping students pursue higher education.",
    image: Scholarship,
    impact: "200 students supported",
    year: "2026",
  },
  {
    id: 5,
    title: "Scholarship Program",
    description: "Educational support for underprivileged students.",
    fullDescription:
      "Scholarships helping students pursue higher education.",
    image: Scholarship,
    impact: "200 students supported",
    year: "2026",
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
    <>
      <section className="projects-section">

        {/* HEADER OUTSIDE */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="main-title">Our Impactful Projects</h2>
          <p className="subtitle">
            Real impact across education, healthcare, and community development.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="container">
          <div className="projects-grid">
            {dummyProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card-wrapper"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} />
                  </div>

                  <div className="project-content">
                    <span className="project-year">{project.year}</span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-footer">
                      <span className="impact-number">
                        {project.impact}
                      </span>

                      <button
                        className="learn-more-btn"
                        onClick={() => openModal(project)}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedProject && (
        <div className="modal-overlay active" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            <img src={selectedProject.image} alt="" />

            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.fullDescription}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;