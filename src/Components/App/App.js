import './App.css';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import HeroSection from '../HeroSection/HeroSection';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar className='nav' />
      <div className='purple-blur'></div>
      <div className='teal-blur'></div>
      <div className='background-circle'></div>
      <div className='background-square'></div>
      <HeroSection className='hero' />
      <Projects className='projects' />
      <Skills className='skills' />
      <Contact className='contact' />
      <Footer className='footer' />
    </div>
  );
}

export default App;
