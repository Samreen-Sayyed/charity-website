import React from 'react'
import { Link } from "react-router-dom"
import CharitioLogo from "../Images/CharitioLogo.png"
import { BiSearch } from "react-icons/bi"
import "../Navbar/Navbar.css"
import ScrollToTop from './scrollToTop'
import HamMenu from "./HamMenu"
function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='ham-menu'>
                    < HamMenu />
                </div>
                <div className='img-container'>
                    <img src={CharitioLogo} id="charitioLogo" alt="" />
                </div>
                <div className='center-buttons'>
                    <div class="dropdown">
                        <button className='dropbtn'> <Link to="home"> Home </Link> </button>
                        <div class="dropdown-content">
                            <ul className='dropdown-content-navbar'>
                                <li className='hover-underline-animation'>Home Charity</li>
                                <li className='hover-underline-animation'>Home Education</li>
                                <li className='hover-underline-animation'>Home Wildlife</li>
                                <li className='hover-underline-animation'>Home Ocean Polution</li>
                                <li className='hover-underline-animation'>Home World Pandemic</li>
                            </ul>
                        </div>
                    </div>
                    <button>
                        <Link to="about">
                            About
                        </Link>
                    </button>
                    <button><Link to="contact">
                        Contact
                    </Link>
                    </button>
                </div>
                <div className='right-buttons'>
                    <button id='donate-btn'><Link to="contact">
                        Donate Now
                    </Link>
                    </button>
                    <button id='search-nav'>
                        <Link to="contact">
                            <BiSearch />
                        </Link>
                    </button>
                </div>
            </div>
            < ScrollToTop />
        </nav>
    )
}
export default Navbar