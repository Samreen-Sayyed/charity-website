import React, { useEffect } from 'react'
import './fourthSection.css'
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
                    <h2>Our Work & Initiatives</h2>
                    <p>
                        For over 60 years, Malegaon Education Society has contributed
                        to education, community development, and social welfare.
                    </p>
                </div>

                {/* CARDS */}
                <div className='fourth-lower-container'>
                    <div className='fourth-lower-column-container'>

                        <div className='card' data-aos="fade-up">
                            <h3>Education & Scholarships</h3>
                            <p>
                                For over 60 years, scholarships have been provided to thousands
                                of students from Malegaon, helping them pursue higher education
                                and preventing talent from being wasted.
                            </p>
                        </div>

                        <div className='card' data-aos="fade-up" data-aos-delay="100">
                            <h3>Urdu Medium School</h3>
                            <p>
                                Established in 2013, the school offers modern classrooms,
                                labs, and facilities. Built on 10,000 sq. ft., it is one of
                                the most advanced educational institutions in the city.
                            </p>
                        </div>

                        <div className='card' data-aos="fade-up" data-aos-delay="200">
                            <h3>Book Fairs & Literary Events</h3>
                            <p>
                                Organized National Urdu Book Fairs in 2014 & 2021 and
                                supported international literary festival “Rashk-e-Baharan” in 2024.
                            </p>
                        </div>

                        <div className='card' data-aos="fade-up">
                            <h3>Skill Development</h3>
                            <p>
                                Conducted English coaching classes and established one of the
                                earliest computer centres in Malegaon.
                            </p>
                        </div>

                        <div className='card' data-aos="fade-up" data-aos-delay="100">
                            <h3>Relief Work</h3>
                            <p>
                                During lockdown, food supplies worth millions were distributed
                                to support families in need with dignity.
                            </p>
                        </div>

                        <div className='card' data-aos="fade-up" data-aos-delay="200">
                            <h3>Community Engagement</h3>
                            <p>
                                “Shaam-e-Mulaqat” events connect Malegaon community and honor
                                pioneers while continuing their legacy.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default FourthSection