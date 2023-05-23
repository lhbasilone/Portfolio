import React, { useState } from 'react';
import logo from '../assets/logo.png';
import hamburguer from '../assets/menu.svg';
import close from '../assets/close.svg';
import { motion} from 'framer-motion'

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className='header-navbar'>
      <div className='navbar'>
        <a href="/">
          <img src={logo} className='navbar-logo' />
        </a>
        <ul id='navbar-hamburguer' className={clicked ? "active" : "close"}>
          <li>
            <a href="#about-me-section" className='navbar-link active'>Sobre mí</a>
          </li>
          <li>
            <a href="#projects-section" className='navbar-link'>Proyectos</a>
          </li>
          <li>
            <a href="#footer-section" className='navbar-link'>Redes</a>
          </li>
        </ul>
      </div>

      <div className='mobile'>
        <img id='bar' src={clicked ? close : hamburguer} onClick={handleClick} />
      </div>
    </nav>
  );
};

export default NavBar;

