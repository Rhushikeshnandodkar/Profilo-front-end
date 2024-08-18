import React, { useState } from 'react'
import { NavbarStyle } from './Molecules.style'
import { Link } from 'react-router-dom'
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  return (
    <div>
      <NavbarStyle>
        <div className="navbar-section">
            <div className="navbar">
                <div className="logo-section">
                    <h1><b>Pro</b>filo</h1>
                </div>
                <div className="menu-section">
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/'}>Product</Link></li>
                        <li><Link to={'/'}>Features</Link></li>
                        <li><Link to={'/'}>Customers</Link></li>
                    </ul>
                </div>
                <div className="button-section">
                    <Link to={'/'}> <button className="btn">Connect us</button> </Link>
                </div>
                <div className={`burger ${isMenuOpen ? 'remove' : ''}`}>
                  <button onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h18M3 12h18M3 7h18"/></svg></button>
                </div>
                <div className={`burger-cut ${isMenuOpen ? 'cuticon' : ''}`}>
                  <button onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/></svg></button>
                </div>
            </div>
        </div>

        <div className={`response-bar ${isMenuOpen ? 'open' : ''}`}>
                  <div className="bar-section">
                  {/* <div className="logo-section">
                  <h1><b>Pro</b>filo</h1>
                </div> */}
              <ul>
              <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/'}>Product</Link></li>
                        <li><Link to={'/'}>Features</Link></li>
                        <li><Link to={'/'}>Customers</Link></li>
                    <div className="button-section">
                    <Link to={'/'}> <button className="btn">Create profile</button> </Link>
                </div>
              </ul>
                  </div>
                  {/* <div className="transparent-section">

                  </div> */}
                </div>

      </NavbarStyle>
    </div>
  )
}

export default Navbar
