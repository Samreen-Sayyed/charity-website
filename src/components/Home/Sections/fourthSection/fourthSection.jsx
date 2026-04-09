import React, { useEffect } from 'react'
import './fourthSection.css'

import Education from "../../../Images/education.png"
import money from "../../../Images/money.png"
import FourthMedicine from "../../../Images/medicine_fourth.png"

import AOS from "aos";
import "aos/dist/aos.css";

const FourthSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <section className='home-fourth-section'> 
            <div className='fourth-container'>

                {/* HEADER */}
                <div className='fourth-upper-container' data-aos="fade-up">
                    <h4>Our Work</h4>
                    <h2>Our Impact Areas</h2>
                    <p>
                        We are committed to improving lives through education, support,
                        and healthcare initiatives in our community.
                    </p>
                </div>

                {/* CARDS */}
                <div className='fourth-lower-container'>
                    <div className='fourth-lower-column-container'>

                        {/* EDUCATION */}
                        <div className='card' data-aos="fade-up" data-aos-delay="100">
                            <img 
                                src={Education} 
                                className="img-template" 
                                alt="students studying in classroom"  /* ✅ FIXED */
                            />
                            <h2>Student Education Support</h2>
                            <p>
                                Providing books, guidance, and support for students to build a better future.
                            </p>
                            <div className='impact'>
                                <span>25,000+ Students Supported</span>
                            </div>
                        </div>

                        {/* SCHOLARSHIP */}
                        <div className='card' data-aos="fade-up" data-aos-delay="200">
                            <img 
                                src={money} 
                                className="img-template" 
                                alt="students receiving scholarships"
                            />
                            <h2>Scholarship Programs</h2>
                            <p>
                                Financial assistance for deserving students to continue their education.
                            </p>
                            <div className='impact'>
                                <span>500+ Scholarships Given</span>
                            </div>
                        </div>

                        {/* MEDICAL */}
                        <div className='card' data-aos="fade-up" data-aos-delay="300">
                            <img 
                                src={FourthMedicine} 
                                className="img-template" 
                                alt="medical camp health checkup" 
                            />
                            <h2>Free Medical Camps</h2>
                            <p>
                                Organizing dental, eye checkups, and health awareness camps.
                            </p>
                            <div className='impact'>
                                <span>1000+ Patients Treated</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default FourthSection