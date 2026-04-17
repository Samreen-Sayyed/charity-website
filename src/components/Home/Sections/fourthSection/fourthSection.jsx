import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaBookOpen, FaLaptopCode, FaHandsHelping, FaUsers } from 'react-icons/fa';
import './fourthSection.css';

const FourthSection = () => {

    const initiatives = [
        {
            title: "Education & Scholarships",
            icon: <FaGraduationCap />,
            desc: "For over 60 years, scholarships have been provided to thousands of students from Malegaon, helping them pursue higher education and preventing talent from being wasted.",
            color: "#38bdf8" // Light Blue
        },
        {
            title: "Urdu Medium School",
            icon: <FaSchool />,
            desc: "Established in 2013, the school offers modern classrooms, labs, and facilities. Built on 10,000 sq. ft., it is one of the most advanced educational institutions in the city.",
            color: "#34d399" // Emerald
        },
        {
            title: "Book Fairs & Literary Events",
            icon: <FaBookOpen />,
            desc: "Organized National Urdu Book Fairs in 2014 & 2021 and supported international literary festival “Rashk-e-Baharan” in 2024.",
            color: "#fbbf24" // Amber
        },
        {
            title: "Skill Development",
            icon: <FaLaptopCode />,
            desc: "Conducted English coaching classes and established one of the earliest computer centres in Malegaon.",
            color: "#a78bfa" // Violet
        },
        {
            title: "Relief Work",
            icon: <FaHandsHelping />,
            desc: "During lockdown, food supplies worth millions were distributed to support families in need with dignity.",
            color: "#f472b6" // Pink
        },
        {
            title: "Community Engagement",
            icon: <FaUsers />,
            desc: "“Shaam-e-Mulaqat” events connect Malegaon community and honor pioneers while continuing their legacy.",
            color: "#fb923c" // Orange
        }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 60, rotateX: -20 },
        visible: {
            opacity: 1, y: 0, rotateX: 0,
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

        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    return (
        <section className='home-fourth-section'>

            {/* Deep Dynamic Background */}
            <div className="fourth-bg-blob blob-1"></div>
            <div className="fourth-bg-blob blob-2"></div>
            <div className="fourth-bg-blob blob-3"></div>

            <div className='fourth-container'>

                {/* HEADER */}
                <motion.div
                    className='fourth-upper-container'
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, margin: "-50px" }}
                >
                    <span className="fourth-badge">Our Work & Initiatives</span>

                    <p>
                        For over 60 years, Malegaon Education Society has contributed
                        to education, community development, and social welfare.
                    </p>
                </motion.div>

                {/* CARDS */}
                <motion.div
                    className='fourth-lower-container'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-50px" }}
                >
                    <div className='fourth-lower-column-container'>

                        {initiatives.map((item, index) => (
                            <motion.div
                                key={index}
                                className='fourth-card'
                                variants={cardVariants}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{ '--accent-color': item.color }}
                            >
                                <div className="fourth-card-glow"></div>

                                <div className="fourth-card-icon-wrapper">
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>

                                <div className="fourth-card-bottom-line"></div>
                            </motion.div>
                        ))}

                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default FourthSection;