import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <p className='footer-text'>{`© ${year} Cameron Johnson`}</p>
    </div>
  );
};

export default Footer;
