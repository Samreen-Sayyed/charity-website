import React from 'react'
import { Link } from "react-router-dom"
import MSELogo from "../Images/MSELogo.jpeg"
import "../Navbar/Navbar.css"
import ScrollToTop from './scrollToTop'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>

        {/* LEFT: LOGO */}
        <div className='img-container'>
          <img src={MSELogo} id="charitioLogo" alt="logo" />
        </div>

        {/* CENTER: MENU */}
        <div className='center-buttons'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/founders">Founders & Office Bearers</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/scholarship">Scholarship</Link>
          <Link to="/member-type">Member Type</Link>
          <Link to="/member-data">Member Data</Link>
        </div>

        {/* RIGHT: BUTTONS */}
        <div className='right-buttons'>
          <Link to="/login" className='login-btn'>Log in</Link>
          <Link to="/signup" className='signup-btn'>Sign up</Link>
        </div>

      </div>

      <ScrollToTop />
    </nav>
  )
}

export default Navbar