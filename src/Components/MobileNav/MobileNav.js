import './MobileNav.css';
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import GitHubLogo from '../../Images/github-mark-white.png';
import LinkedInLogo from '../../Images/In-White-96@2x.png';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const MobileNav = ({ prefersReducedMotion }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <motion.nav
      animate={prefersReducedMotion ? {} : { opacity: 1 }}
      initial={prefersReducedMotion ? {} : { opacity: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className='mobile-nav'
    >
      <div className='hamburger-container'>
        <RxHamburgerMenu
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        />
      </div>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <Link
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={toggleMenu}
          className='mobile-nav-link'
        >
          Home
        </Link>
        <Link
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={toggleMenu}
          className='mobile-nav-link'
        >
          Projects
        </Link>
        <Link
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={toggleMenu}
          className='mobile-nav-link'
        >
          Contact
        </Link>
        <li className='mobile-nav-link'>
          <a href='https://www.github.com/camjohnson-code' target='#'>
            <img src={GitHubLogo} className='mobile-social-icon' />
          </a>
          <a href='https://www.linkedin.com/in/camjohnson-code' target='#'>
            <img src={LinkedInLogo} className='mobile-social-icon' />
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default MobileNav;
