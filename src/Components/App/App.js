import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import HeroSection from '../HeroSection/HeroSection';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import MobileNav from '../MobileNav/MobileNav';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [mainPage, setMainPage] = useState(false);
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setTimeout(() => {
        setMainPage(true);
      }, 3000);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      <LoadingScreen
      key='loading-screen'
        loading={loading}
        className='loading-screen'
      />
      {mainPage && (
        <motion.div
          key='main-page'
          className='App'
          initial={prefersReducedMotion ? {} : { x: '-100vw' }}
          animate={prefersReducedMotion ? {} : { x: 0 }}
          transition={{ duration: 0.75, ease: [0.15, 0.39, 0.28, 0.99] }}
        >
          <MobileNav
            prefersReducedMotion={prefersReducedMotion}
            className='mobile-nav'
          />
          <NavBar prefersReducedMotion={prefersReducedMotion} className='nav' />
          <div className='purple-blur'></div>
          <div className='teal-blur'></div>
          <motion.div
            initial={prefersReducedMotion ? {} : { x: '-100%', opacity: 0 }}
            animate={prefersReducedMotion ? {} : { x: 0, opacity: 0.75 }}
            transition={{
              delay: 0.75,
              duration: 1,
              ease: [0.15, 0.39, 0.28, 0.99],
            }}
            className='background-circle'
          ></motion.div>
          <motion.div
            initial={
              prefersReducedMotion ? {} : { x: '-100%', opacity: 0, rotate: 0 }
            }
            animate={
              prefersReducedMotion ? {} : { x: 0, opacity: 0.75, rotate: 45 }
            }
            transition={{
              delay: 0.35,
              duration: 1,
              ease: [0.15, 0.39, 0.28, 0.99],
            }}
            className='background-square'
          ></motion.div>
          <HeroSection
            prefersReducedMotion={prefersReducedMotion}
            id='home'
            className='hero'
          />
          <Projects
            prefersReducedMotion={prefersReducedMotion}
            id='projects'
            className='projects'
          />
          <Skills
            prefersReducedMotion={prefersReducedMotion}
            id='skills'
            className='skills'
          />
          <Contact
            prefersReducedMotion={prefersReducedMotion}
            id='contact'
            className='contact'
          />
          <Footer className='footer' />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
