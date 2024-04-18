import React, { useState } from 'react';
import './NavBar.css';
import { LuDownload } from 'react-icons/lu';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [downloadMessage, setDownloadMessage] = useState('Download Resume');
  const handleDownload = () => {
    setDownloadMessage('Downloaded!');
    setTimeout(() => {
      setDownloadMessage('Download Resume');
    }, 3000);
  };

  return (
    <nav className='nav'>
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
    </nav>
  );
};

export default NavBar;
