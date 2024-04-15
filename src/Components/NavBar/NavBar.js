import React from 'react';
import './NavBar.css';
import { LuDownload } from 'react-icons/lu';

const NavBar = () => {
  return (
    <nav className='nav' >
      <p className='logo-name'>Cameron Johnson</p>
      <ul className='nav-links'>
        <li className='nav-link'>Work</li>
        <li className='nav-link'>Skills</li>
        <li className='nav-link'>Contact</li>
      </ul>
      <button className='resume-button'>
        Download Resume <LuDownload />
      </button>
    </nav>
  );
};

export default NavBar;
