import React, { useEffect } from 'react'
import './SixthSection.css'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Images
import EigthPic1 from "../../../Images/pic1-eightSection.jpg"
import EigthPic2 from "../../../Images/pic2-eightSection.jpg"
import EigthPic3 from "../../../Images/pic3-eightSection.jpg"

const SixthSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        })
    }, [])

    return (
        <section className='home-eigth-section'>
            <div className='eigth-container' data-aos="fade-up">

                {/* HEADER */}
                <div className='eigth-upper-container'>
                    <h4 data-aos="fade-down">Events</h4>
                    <h2 data-aos="fade-up">Our Recent Activities</h2>
                    <p data-aos="fade-up" data-aos-delay="200">
                        Take a look at some of our recent initiatives and efforts
                        to support education and community well-being.
                    </p>
                </div>

                {/* CARDS */}
                <div className='eigth-lower-container'>
                    <div className='eigth-lower-column-container'>

                        {/* CARD 1 */}
                        <div className='card' data-aos="zoom-in">
                            <img 
                                src={EigthPic1} 
                                alt="students receiving school supplies" 
                            />
                            <h4>10 Jan, 2026</h4>
                            <h2>School Kit Distribution Drive</h2>
                            <p>
                                Distributed books, bags, and essentials to students in need.
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div className='card' data-aos="zoom-in" data-aos-delay="200">
                            <img 
                                src={EigthPic2} 
                                alt="free medical camp checkup" 
                            />
                            <h4>25 Feb, 2026</h4>
                            <h2>Free Dental & Eye Camp</h2>
                            <p>
                                Organized health checkups and awareness programs for the community.
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div className='card' data-aos="zoom-in" data-aos-delay="400">
                            <img 
                                src={EigthPic3} 
                                alt="students receiving scholarships" 
                            />
                            <h4>15 Mar, 2026</h4>
                            <h2>Scholarship Award Program</h2>
                            <p>
                                Provided financial aid to deserving students for higher education.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default SixthSection