import React, { useEffect } from 'react';
import './sixthSection.css';

import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";

// Images
import EigthPic1 from "../../../Images/pic1-eightSection.jpg";
import EigthPic2 from "../../../Images/pic2-eightSection.jpg";
import EigthPic3 from "../../../Images/pic3-eightSection.jpg";

const SixthSection = () => {

    // Data for mapping
    const events = [
        {
            id: 1,
            date: "10 Jan, 2026",
            title: "School Kit Distribution Drive",
            desc: "Distributed books, bags, and essentials to students in need to prepare them for success.",
            img: EigthPic1,
            color: "#3b82f6" // Blue
        },
        {
            id: 2,
            date: "25 Feb, 2026",
            title: "Free Dental & Eye Camp",
            desc: "Organized health checkups and awareness programs ensuring health for the community.",
            img: EigthPic2,
            color: "#10b981" // Green
        },
        {
            id: 3,
            date: "15 Mar, 2026",
            title: "Scholarship Award Program",
            desc: "Provided financial aid to deserving students for higher education and bright futures.",
            img: EigthPic3,
            color: "#8b5cf6" // Purple
        }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1, y: 0, scale: 1,
            transition: { type: "spring", stiffness: 70, damping: 15 }
        }
    };

    // 3D Tilt Effect
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const box = card.getBoundingClientRect();
        const x = e.clientX - box.left;
        const y = e.clientY - box.top;
        const centerX = box.width / 2;
        const centerY = box.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    };

    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    return (
        <section className='home-sixth-section'>

            {/* Static Lighter Background Graphics */}
            <div className="sixth-bg-graphics">
                <div className="graphic-circle circle-1" />
                <div className="graphic-circle circle-2" />
                <div className="graphic-square square-1" />
            </div>

            <div className='sixth-container'>

                {/* HEADER */}
                <motion.div
                    className='sixth-upper-container'
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, margin: "-50px" }}
                >
                    <div className="sixth-header-accent">
                        <span className="sixth-badge">Events</span>
                    </div>
                    <h2 className="sixth-main-title">Our Recent Activities</h2>
                    <p className="sixth-subtitle">
                        Take a look at some of our recent initiatives and efforts
                        to support education and community well-being.
                    </p>
                </motion.div>

                {/* CARDS */}
                <motion.div
                    className='sixth-lower-container'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                >
                    <div className='sixth-grid'>
                        {events.map((event) => (
                            <motion.div
                                key={event.id}
                                className='sixth-card-wrapper'
                                variants={cardVariants}
                            >
                                <div
                                    className='sixth-card'
                                    style={{ '--theme-color': event.color }}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {/* Image Container */}
                                    <div className="sixth-card-img-wrapper">
                                        <div className="sixth-card-overlay"></div>
                                        <img
                                            src={event.img}
                                            alt={event.title}
                                            className="sixth-card-img"
                                        />
                                        <div className="sixth-date-badge">
                                            <FiCalendar className="calendar-icon" /> {event.date}
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="sixth-card-content">
                                        <div className="card-theme-dot"></div>
                                        <h3>{event.title}</h3>
                                        <p>{event.desc}</p>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="sixth-card-glow"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default SixthSection;