import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./fifthSectionAbout.css";

const FifthSectionAbout = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const works = [
    {
      title: "Established an Urdu Medium School",
      desc: "A high-standard educational institution established to nurture the potential of Urdu-medium students.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      fullDesc: "Continuing its educational mission, the Society established a school in 2013 in the heart of Malegaon, at School No. 1 Compound on Qidwai Road, Malegaon. Due to its high standard of education, the school quickly became one of the most preferred institutions in the city, and soon the existing premises began to feel inadequate.\n\nTherefore, in 2016, a valuable plot of land—reserved specifically for educational purposes was purchased along Agra Road. Construction began in 2019 on approximately 10,000 square feet of land, and by the grace of God, teaching activities have been ongoing in this new building for the past two years. Spacious classrooms, wide corridors, up-to-date computer and science laboratories, and clean sanitation facilities are among the key features of this building. Once completed, God willing, it will be one of the most distinctive educational buildings in the city.\n\nTeachers in the school are selected purely on merit, which makes it easier to maintain high educational standards. The Society has deliberately chosen to run an Urdu-medium school so that the language may flourish and the potential of Urdu-medium students can be nurtured effectively."
    },
    {
      title: "National Book Fairs",
      desc: "Organizing national-level Urdu book fairs and literary events to preserve culture.",
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop",
      fullDesc: "To promote the Urdu language, the Society organized National Urdu Book Fairs in Malegaon in 2014 and 2021 in collaboration with the National Council for Promotion of Urdu Language, New Delhi. These fairs significantly raised the standards, organization, and cultural value of book fairs in the country and were regarded among the most successful events of their kind.\n\nIn 2024, the Society also fully supported Malegaon’s first international literary festival, “Rashk-e-Baharan.”"
    },
    {
      title: "Summer English Classes",
      desc: "Coaching classes to emphasize the importance of English and computer literacy.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      fullDesc: "Understanding the importance of the English language as well, the Society conducted coaching classes for several years during the summer vacations. Its computer centre is also counted among the earliest computer centres in the city."
    },
    {
      title: "Relief Work",
      desc: "Distributed food and essentials during crises and lockdown to those in desperate need.",
      image: "https://images.unsplash.com/photo-1593113563332-f1440d99dcbb?q=80&w=800&auto=format&fit=crop",
      fullDesc: "In addition, the Society has actively participated in various educational and welfare activities in the city. During the lockdown, it quietly collaborated with other organizations to distribute food supplies worth millions of rupees to those in need—especially to individuals who, due to self-respect, could not ask for help."
    },
    {
      title: "Sham-e-Mulaqat",
      desc: "Community gatherings connecting Malegaon natives and honoring our pioneers.",
      image: "https://images.unsplash.com/photo-1511632765486-a01c80cf8cb4?q=80&w=800&auto=format&fit=crop",
      fullDesc: "Furthermore, to bring together people from Malegaon residing in Mumbai, the Society initiated a series of gatherings titled “Shaam-e-Mulaqat” in 2011. The second event was held in 2014, and the third in 2018, marking the completion of 75 years of the Society and fourth Shame-e-Mulaqat was held on Saturday 13th December 2025. The enthusiasm of people connected to Malegaon in these gatherings was truly remarkable.\n\nDuring these events, we remember our pioneers—those who made it possible for us to reach where we are today. We believe the best tribute to them is to carry forward their mission. Today, when we are greater in number and resources, it is our responsibility to continue their legacy."
    }
  ];

  return (
    <section className="work-section">
      <div className="work-container">

        {/* TITLE */}
        <motion.div
          className="work-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2>Our Work</h2>
          <div className="work-underline"></div>
          <p>Impactful initiatives transforming lives every day</p>
        </motion.div>

        {/* GRID */}
        <div className="work-grid">
          {works.map((item, index) => (
            <motion.div
              key={index}
              className="work-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
            >
              <div className="work-image-container">
                <img src={item.image} alt={item.title} className="work-img" />
                <div className="work-overlay">
                  <div className="work-overlay-content">
                    <button className="learn-more-btn" onClick={() => setSelectedWork(item)}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="work-content">
                <h3 className="work-title">{item.title}</h3>
                <p className="work-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedWork && (
            <motion.div
              className="work-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWork(null)}
            >
              <motion.div
                className="work-modal-content"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-modal-btn" onClick={() => setSelectedWork(null)}>×</button>
                <img src={selectedWork.image} alt={selectedWork.title} className="modal-img" />
                <div className="modal-text-content">
                  <h3 className="modal-title">{selectedWork.title}</h3>
                  <div className="modal-desc">
                    {selectedWork.fullDesc.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default FifthSectionAbout;