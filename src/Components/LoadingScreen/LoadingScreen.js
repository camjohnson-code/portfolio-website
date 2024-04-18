import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({loadingScreenMessage, loading}) => {
  return (
    <div className='loading-screen'>
      <h1 className='loading-text'>{loadingScreenMessage}</h1>
    </div>
  );
};

export default LoadingScreen;
