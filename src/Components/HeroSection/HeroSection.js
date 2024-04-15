import React from 'react';
import './HeroSection.css';
import Headshot from '../../Images/headshot-no-background.png';
import LinkedInLogo from '../../Images/In-White-96@2x.png';
import GithubLogo from '../../Images/github-mark-white.png';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className='purple-blur'></div>
      <div className='teal-blur'></div>
      <div className='background-circle'></div>
      <div className='background-square'></div>
      <div className='social-logos'>
        <a target='#' href='https://github.com/camjohnson-code'>
          <img src={GithubLogo} alt='github-logo' className='github-logo' />
        </a>
        <a target='#' href='https://www.linkedin.com/in/camjohnson-code/'>
          <img
            src={LinkedInLogo}
            alt='linkedin-logo'
            className='linkedin-logo'
          />
        </a>
      </div>
      <div className='hero-section'>
        <img src={Headshot} alt='headshot' className='headshot' />
        <h1 className='hero-title'>Cameron Johnson</h1>
        <p className='hero-subtitle'>Software Engineer</p>
      </div>
    </div>
  );
};

export default HeroSection;
