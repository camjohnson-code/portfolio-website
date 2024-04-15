import './App.css';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import HeroSection from '../HeroSection/HeroSection';

function App() {
  return (
    <div className='App'>
      <NavBar className='nav'/>
      <HeroSection className='hero'/>
    </div>
  );
}

export default App;
