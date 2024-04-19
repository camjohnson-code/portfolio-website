import React from 'react';
import './HeroSection.css';
import Headshot from '../../Images/headshot-no-background.png';
import LinkedInLogo from '../../Images/In-White-96@2x.png';
import GithubLogo from '../../Images/github-mark-white.png';
import { motion } from 'framer-motion';

const HeroSection = ({ prefersReducedMotion }) => {
  return (
    <div id='home' className='hero-container'>
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={prefersReducedMotion ? {} : { opacity: 0.3 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className='social-logos'
      >
        <a target='_blank' href='https://github.com/camjohnson-code'>
          <img src={GithubLogo} alt='github-logo' className='github-logo' />
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/camjohnson-code/'>
          <img
            src={LinkedInLogo}
            alt='linkedin-logo'
            className='linkedin-logo'
          />
        </a>
      </motion.div>
      <div className='hero-section'>
        <motion.img
          initial={prefersReducedMotion ? {} : { x: '-25%', opacity: 0 }}
          animate={prefersReducedMotion ? {} : { x: 0, opacity: 1 }}
          transition={{
            delay: 0.25,
            duration: 1,
            ease: [0.15, 0.39, 0.28, 0.99],
          }}
          src={Headshot}
          alt='headshot'
          className='headshot'
        />
        <motion.h1
          initial={prefersReducedMotion ? {} : { y: '100%', opacity: 0 }}
          animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
          transition={{
            delay: 0.55,
            duration: 0.75,
            ease: 'easeOut',
          }}
          className='hero-title'
        >
          Cameron Johnson
        </motion.h1>
        <motion.p
          initial={prefersReducedMotion ? {} : { y: '100%', opacity: 0 }}
          animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
          transition={{
            delay: 1.05,
            duration: 0.45,
            ease: 'easeOut',
          }}
          className='hero-subtitle'
        >
          Software Engineer
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
