import React, { useState } from 'react';
import './NavBar.css';
import { LuDownload } from 'react-icons/lu';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const NavBar = ({prefersReducedMotion}) => {
  const [downloadMessage, setDownloadMessage] = useState('Download Resume');

  const handleDownload = () => {
    setDownloadMessage('Downloaded!');
    setTimeout(() => {
      setDownloadMessage('Download Resume');
    }, 3000);
  };

  return (
    <motion.nav
      animate={prefersReducedMotion ? {} : { opacity: 1 }}
      initial={prefersReducedMotion ? {} : { opacity: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className='nav'
    >
      <p className='logo-name'>Cameron Johnson</p>
      <ul className='nav-links'>
        <Link
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className='nav-link'
        >
          Work
        </Link>
        <Link
          activeClass='active'
          to='skills'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='nav-link'
        >
          Skills
        </Link>
        <Link
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='nav-link'
        >
          Contact
        </Link>
      </ul>
      <a
        onClick={handleDownload}
        download
        href='https://docs.google.com/document/d/1BI8LlPgUVaegaGtnUVCliXjBjVazeJMdAFI1U3NPuK4/export?format=pdf'
      >
        <button className='resume-button'>
          {downloadMessage} <LuDownload />
        </button>
      </a>
    </motion.nav>
  );
};

export default NavBar;
