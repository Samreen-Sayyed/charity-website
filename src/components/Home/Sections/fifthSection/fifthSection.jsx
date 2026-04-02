import React from 'react'
import '../fifthSection/fifthSection.css'
import FifthSectionSlider from '../../../Sliders/FifthSectionSlider.jsx'
function fifthSection() {
    return (
        <div className='home-fifth-section'>
            <div className='fifth-container'>
                <div className='fifth-upper-container'>
                    <h4>Expert Team</h4>
                    <h2>Meet Our Volunteer Team</h2>
                    <p>There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form,</p>
                </div>
                <div className='fifth-lower-container'>
                    < FifthSectionSlider />
                </div>
            </div>
        </div>
    )
}
export default fifthSection