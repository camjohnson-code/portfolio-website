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
      <button className='hamburger-container' onClick={toggleMenu}>
        <motion.span
          animate={isOpen ? { rotate: 45, y: 3 } : { rotate: 0 }}
          transition={{ duration: 0.15, ease: 'linear' }}
          className={`hamburger-div ${isOpen ? 'open' : ''}`}
        ></motion.span>
        <motion.span
          animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0 }}
          transition={{ duration: 0.15, ease: 'linear' }}
          className={`hamburger-div ${isOpen ? 'open' : ''}`}
        ></motion.span>
      </button>
      <motion.ul
        initial={{ x: '100%' }}
        animate={isOpen ? { x: '0%' } : { x: '-100%' }}
        transition={{ duration: 0.5, ease: [0.15, 0.39, 0.28, 0.99] }}
        className={`menu ${isOpen ? 'open' : ''}`}
      >
        <motion.li
          initial={prefersReducedMotion ? {} : { opacity: 0, x: '-100%' }}
          animate={isOpen ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: 0.2,
            duration: 0.75,
            ease: [0.12, 0.25, 0.51, 0.99],
          }}
        >
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
        </motion.li>
        <motion.li
          initial={prefersReducedMotion ? {} : { opacity: 0, x: '-100%' }}
          animate={isOpen ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: 0.4,
            duration: 0.75,
            ease: [0.12, 0.25, 0.51, 0.99],
          }}
        >
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
        </motion.li>
        <motion.li
          initial={prefersReducedMotion ? {} : { opacity: 0, x: '-100%' }}
          animate={isOpen ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: 0.6,
            duration: 0.75,
            ease: [0.12, 0.25, 0.51, 0.99],
          }}
        >
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
        </motion.li>
        <motion.li
          initial={prefersReducedMotion ? {} : { opacity: 0, x: '-100%' }}
          animate={isOpen ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: 0.8,
            duration: 0.75,
            ease: [0.12, 0.25, 0.51, 0.99],
          }}
          className='mobile-nav-link'
        >
          <a href='https://www.github.com/camjohnson-code' target='_blank'>
            <img src={GitHubLogo} className='mobile-social-icon' />
          </a>
          <a href='https://www.linkedin.com/in/camjohnson-code' target='_blank'>
            <img src={LinkedInLogo} className='mobile-social-icon' />
          </a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default MobileNav;
