import React from 'react';
import { motion } from 'framer-motion';
import CharitioLogoFooter from '../Images/MSEFooterLogoo.png';
import pic1 from '../Images/pic1.png';
import pic2 from '../Images/pic2.png';
import pic3 from '../Images/pic3.png';
import pic4 from '../Images/pic4.png';
import pic5 from '../Images/pic5.png';
import pic6 from '../Images/pic6.png';

import '../Footer/Footer.css';
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhoneCall } from 'react-icons/fi';
import { TiSocialGooglePlus, TiLocation } from 'react-icons/ti';

const Footer = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <footer className="modern-footer">
            <div className="footer-background-glow"></div>

            <motion.div
                className="footer-upper-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* 1. Logo & Socials */}
                <motion.div className="footer-col logo-col" variants={itemVariants}>
                    <img src={CharitioLogoFooter} alt="Malegoan Education Society" className="footer-logo" />
                    <p className="footer-desc">Welcome to Malegoan Education Society. Empowering the community through knowledge, dedication, and impactful initiatives since 1943.</p>
                    <div className="social-buttons">
                        <motion.a whileHover={{ scale: 1.1, y: -3 }} href="#" className="social-icon"><FiFacebook size={20} /></motion.a>
                        <motion.a whileHover={{ scale: 1.1, y: -3 }} href="#" className="social-icon"><FiTwitter size={20} /></motion.a>
                        <motion.a whileHover={{ scale: 1.1, y: -3 }} href="#" className="social-icon"><FiInstagram size={20} /></motion.a>
                        <motion.a whileHover={{ scale: 1.1, y: -3 }} href="#" className="social-icon"><TiSocialGooglePlus size={24} /></motion.a>
                    </div>
                </motion.div>

                {/* 2. Services */}
                <motion.div className="footer-col links-col" variants={itemVariants}>
                    <h3 className="footer-heading">Services</h3>
                    <ul className="footer-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Causes</a></li>
                        <li><a href="#">Latest News</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Upcoming Events</a></li>
                    </ul>
                </motion.div>

                {/* 3. Contact Info */}
                <motion.div className="footer-col contact-col" variants={itemVariants}>
                    <h3 className="footer-heading">Contact</h3>
                    <p className="contact-text">Have any enquiries? Please feel free to reach out to us.</p>
                    <div className="contact-item">
                        <div className="contact-icon"><FiMail /></div>
                        <span>TheEducationSocietyofMalegoan@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon"><FiPhoneCall /></div>
                        <span>+888 (123) 869523</span>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon"><TiLocation size={20} /></div>
                        <span>New York – 1075 First Avenue</span>
                    </div>
                </motion.div>

                {/* 4. Projects Gallery */}
                <motion.div className="footer-col gallery-col" variants={itemVariants}>
                    <h3 className="footer-heading">Projects</h3>
                    <div className="footer-gallery">
                        {[pic1, pic2, pic3, pic4, pic5, pic6].map((pic, index) => (
                            <motion.div
                                key={index}
                                className="gallery-item-wrapper"
                                whileHover={{ scale: 1.05, rotate: 2 }}
                            >
                                <img src={pic} alt={`Project ${index + 1}`} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Bar */}
            <motion.div
                className="footer-lower-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="footer-bottom-content">
                    <p>© {new Date().getFullYear()} Charitio Theme. Design By wpOcean. All Rights Reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <span className="separator">|</span>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;