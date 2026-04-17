import React, { useEffect } from 'react'
import './SeventhSection.css'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Images
import UpperPic1 from "../../../Images/ninthSection-pic1.jpg"
import UpperPic2 from "../../../Images/ninthSection-pic2.jpg"
import UpperPic3 from "../../../Images/ninthSection-pic3.jpg"
import LowerPic1 from "../../../Images/brad.jfif"
import LowerPic2 from "../../../Images/konal.jfif"
import LowerPic3 from "../../../Images/jenefer.jfif"

// Icon
import { BsChatText } from 'react-icons/bs'

function SeventhSection() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        })
    }, [])

    return (
        <div className='home-ninth-section'>

            {/* HEADER */}
            <div className='ninth-container' data-aos="fade-up">
                <div className='ninth-upper-container'>
                    <h4 data-aos="fade-down">Our Blog</h4>
                    <h2 data-aos="fade-up">Latest News & Update</h2>
                    <p data-aos="fade-up" data-aos-delay="200">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form,
                    </p>
                </div>
            </div>

            {/* CARDS */}
            <div className='ninth-lower-container'>
                <div className='ninth-lower-column-container'>

                    {/* CARD 1 */}
                    <div className='ninth-lower-first-div' data-aos="zoom-in">
                        <img src={UpperPic1} alt="blog" />
                        <h2>
                            <a href="/">Giving The Poor Is A Great Satisfaction Of heart.</a>
                        </h2>
                        <hr />
                        <div className='ninth-section-comments'>
                            <img src={LowerPic1} alt="author" />
                            <p><a href="/">Jenefer Willy</a></p>
                            <p id='ninth-section-comments-template'>
                                <BsChatText /> 35
                            </p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className='ninth-lower-second-div' data-aos="zoom-in" data-aos-delay="200">
                        <img src={UpperPic2} alt="blog" />
                        <h2>
                            <a href="/">Your Help Can Make Someone’s life Easier.</a>
                        </h2>
                        <hr />
                        <div className='ninth-section-comments'>
                            <img src={LowerPic2} alt="author" />
                            <p><a href="/">Laura Falary</a></p>
                            <p id='ninth-section-comments-template'>
                                <BsChatText /> 80
                            </p>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className='ninth-lower-third-div' data-aos="zoom-in" data-aos-delay="400">
                        <img src={UpperPic3} alt="blog" />
                        <h2>
                            <a href="/">Give Education, It’s The Best Gift Ever.</a>
                        </h2>
                        <hr />
                        <div className='ninth-section-comments'>
                            <img src={LowerPic3} alt="author" />
                            <p><a href="/">Laura Falary</a></p>
                            <p id='ninth-section-comments-template'>
                                <BsChatText /> 95
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default SeventhSection