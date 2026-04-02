import React from 'react'
import CharitioLogoFooter from '../Images/charitio-logo-footer.png'
import pic1 from '../Images/pic1.png'
import pic2 from '../Images/pic2.png'
import pic3 from '../Images/pic3.png'
import pic4 from '../Images/pic4.png'
import pic5 from '../Images/pic5.png'
import pic6 from '../Images/pic6.png'
import '../Footer/Footer.css'
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhoneCall, FiTarget } from 'react-icons/fi'
import { TiSocialGooglePlus, TiLocation } from 'react-icons/ti'
function Footer() {
    return (
        <footer>
            <div className='upper-container'>
                <div className='logo-container'>
                    <img src={CharitioLogoFooter} alt="" className='logo-footer' />
                    <p>Welcome and open yourself to your truest love this year with us! With the Release Process</p>
                    <div className='button-container'>
                        <button> <FiFacebook size={20} /> </button>
                        <button> <FiTwitter size={20} /> </button>
                        <button> <FiInstagram size={20} /> </button>
                        <button> <TiSocialGooglePlus size={20} /> </button>
                    </div>
                </div>
                <div className='services-container'>
                    <h2>Services</h2>
                    <ul>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Causes</a></li>
                        <li><a href='#'>Latest News</a></li>
                        <li><a href='#'>Contact us</a></li>
                        <li><a href='#'>Events</a></li>
                    </ul>
                </div>
                <div className='contact-container'>
                    <h2>Contact</h2>
                    <p>Would you have any enquiries. Please feel free to contuct us</p>
                    <p><FiMail /> &nbsp;charitio@gmail.com</p>
                    <p> <FiPhoneCall /> &nbsp;+888 (123) 869523</p>
                    <p> <TiLocation /> &nbsp;New York – 1075 Firs Avenue</p>
                </div>
                <div className='projects-container'>
                    <h2>Projects</h2>
                    <div className='project-grid-container'>
                        <img src={pic1} id='first-project' alt="" />
                        <img src={pic2} id='secound-project' alt="" />
                        <img src={pic3} id='third-project' alt="" />
                        <img src={pic4} id='fourth-project' alt="" />
                        <img src={pic5} id='fifth-project' alt="" />
                        <img src={pic6} id='sixth-project' alt="" />
                    </div>
                </div>
            </div>
            <div className='lower-container'>
                <p>© 2021 charitio Theme. Design By wpOcean. All Rights Reserved</p>
            </div>
        </footer>
    )
}
export default Footer