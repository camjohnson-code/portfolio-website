import React, { useState } from 'react';
import './Contact.css';
import LinkedInLogo from '../../Images/In-White-96@2x.png';
import GithubLogo from '../../Images/github-mark-white.png';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className='contact'>
      <p className='contact-title'>Contact</p>
      <div className='contact-container'>
        <div className='contact-info'>
          <div className='contact-info-main'>
            <p className='contact-subtitle'>Let's Connect</p>
            <p className='contact-availability'>
              I am currently open to new opportunities and would love to hear
              from you. Whether you have an interesting project in mind, need
              help with something, or just want to say hello, feel free to
              connect with me through the social links below or by filling out
              the form. I look forward to hearing from you!
            </p>
          </div>
          <div className='contact-links'>
            <a href='https://www.linkedin.com/in/camjohnson-code'>
              <img
                className='contact-link-icon'
                src={LinkedInLogo}
                alt='LinkedIn logo'
              />
            </a>
            <a href='https://www.github.com/camjohnson-code'>
              <img
                className='contact-link-icon'
                src={GithubLogo}
                alt='Github logo'
              />
            </a>
          </div>
        </div>
        <div className='contact-form'>
          <p className='contact-subtitle'>Send a Message</p>
          <form>
            <input type='text' placeholder='Name' required />
            <input type='email' placeholder='Email' required />
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Message'
              required
            ></textarea>
            <button
              className='form-submit-button'
              onClick={(e) => handleSubmit(e)}
              type='submit'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
