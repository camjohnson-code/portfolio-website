import React, { useState } from 'react';
import './NavBar.css';
import { LuDownload } from 'react-icons/lu';

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
        <li className='nav-link'>Work</li>
        <li className='nav-link'>Skills</li>
        <li className='nav-link'>Contact</li>
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
