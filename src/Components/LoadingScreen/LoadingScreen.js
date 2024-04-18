import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ loading }) => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setShowWelcome(true);
      }, 500);
    } else setShowWelcome(false);
  }, [loading]);

  return (
    <div className='loading-screen'>
      <AnimatePresence>
        {loading && (
          <motion.h1
            key='loading'
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='loading-text'
          >
            Loading...
          </motion.h1>
        )}
        {showWelcome && (
          <motion.h1
            key='welcome'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='loading-text'
          >
            Welcome!
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingScreen;
