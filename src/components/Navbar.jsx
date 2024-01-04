import React, { useState } from 'react';
import Logo from '../assets/auto-group-8tey.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <div className='img-part'>
        <img className='img' src={Logo} alt="" />
      </div>
      <button className='menu-button' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-list ${menuOpen ? 'menu-open' : ''}`}>
        <div className='circle'></div>
        <div className='circle-2'></div>
        <li className='home'>Home</li>
        <li>About Us</li>
        <li>Work</li>
        <li>Services</li>
        <li>Clients</li>
        <li>Team</li>
        <li className='contect'>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
