import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import medicalCampImage from '../Images/medical-camp.jpg'
import SchoolProject from '../Images/school-project.jpg'
import Scholarship from '../Images/scholarship.png'

const dummyProjects = [
  {
    id: 1,
    title: 'School Built',
    description: 'Built classrooms and improved learning spaces for children.',
    fullDescription:
      'This project focused on improving education in remote areas bybuilding classrooms, providing books, installing desks and blackboards, and creating playground facilities. It created a safer, more engaging, and more supportive learning environment for children.',
    image: SchoolProject,
    impact: '200+ children benefited',
    year: '2025'
  },
  {
    id: 2,
    title: 'Medical Camps Outreach',
    description: 'Free health checkups and medicine support for underserved families.',
    fullDescription:
      'This initiative organized free medical camps for underserved communities, offering health checkups, medicine distribution, and specialized screenings for diabetes, maternal care, and child health. It improved access to basic healthcare for families who needed timely support.',
    image: medicalCampImage,
    impact: '500 families served',
    year: '2025'
  },
 
  {
    id: 3,
    title: 'Scholarship Program',
    description: 'Educational support for underprivileged students.',
    fullDescription:
      'This program provides scholarships and educational resources to underprivileged students, enabling them to pursue higher education and break the cycle of poverty. It has supported hundreds of students in achieving their academic goals.',
    image: Scholarship,
    impact: '200 students supported',
    year: '2026'
  },
  {
    id: 4,
    title: 'Orphanage Support Drive',
    description: 'Nutrition, school materials, and care support for orphaned children.',
    fullDescription:
      'This program supported orphaned children by providing nutrition, clothing, school supplies, toys, and educational resources. It also strengthened ongoing care through monthly sponsorship support for food, school fees, and daily needs.',
    image: '/images/orphanage.jpg',
    impact: '100 children supported',
    year: '2025'
  },
  {
    id: 6,
    title: 'Elderly Care Program',
    description: 'Regular aid and companionship support for senior citizens.',
    fullDescription:
      'This project focused on senior citizens in underserved areas by providing regular home visits, medical aid, health checkups, and emotional support. It aimed to improve both physical wellbeing and social care for elderly people living with limited support.',
    image: '/images/elderly-care.jpg',
    impact: '300 seniors assisted',
    year: '2024'
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <>
      <section className="projects-section">
        <div className="container">
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

          <div className="projects-grid">
            {dummyProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card-wrapper"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </div>

                  <div className="project-content">
                    <span className="project-year">{project.year}</span>

                    <h3 className="project-title">{project.title}</h3>

                    <p className="project-description">{project.description}</p>

                    <div className="project-footer">
                      <span className="impact-number">{project.impact}</span>

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

      {selectedProject && (
        <div className="modal-overlay active" onClick={closeModal}>
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            <div className="modal-image-wrapper">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
              />
            </div>

            <div className="modal-body">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <span className="modal-year">{selectedProject.year}</span>

              <p className="modal-description">
                {selectedProject.fullDescription}
              </p>

              <div className="modal-impact">
                <div className="impact-highlight">{selectedProject.impact}</div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;