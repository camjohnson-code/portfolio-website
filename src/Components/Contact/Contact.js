import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';
import LinkedInLogo from '../../Images/In-White-96@2x.png';
import GithubLogo from '../../Images/github-mark-white.png';
import emailjs from 'emailjs-com';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = ({ prefersReducedMotion }) => {
  const formRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formEmpty, setFormEmpty] = useState(false);
  const { ref: inViewRef1, inView: inView1 } = useInView({
    triggerOnce: true,
  });
  const { ref: inViewRef2, inView: inView2 } = useInView({
    triggerOnce: true,
  });
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView1 && !prefersReducedMotion) {
      animation1.start({
        opacity: 1,
        transition: { duration: 0.75, delay: 0.25 },
      });
    }
  }, [inView1, animation1, prefersReducedMotion]);

  useEffect(() => {
    if (inView2 && !prefersReducedMotion) {
      animation2.start({
        opacity: 1,
        transition: { delay: 0.5, duration: 0.75 },
      });
    }
  }, [inView2, animation2, prefersReducedMotion]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setFormEmpty(true);
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setFormSubmitted(true);
        },
        (error) => {
          setFormEmpty(false);
          setFormError(true);
        }
      );
  };

  return (
    <div className='contact'>
      <p className='contact-title'>Contact</p>
      <div className='contact-container'>
        <motion.div
          ref={inViewRef1}
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={animation1}
          className='contact-info'
        >
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
        </motion.div>
        <motion.div
          ref={inViewRef2}
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={animation2}
          className='contact-form'
        >
          <p className='contact-subtitle'>Send a Message</p>
          {formSubmitted ? (
            <p className='error-message'>Sent! We'll get back to you soon!</p>
          ) : (
            <form ref={formRef}>
              <input
                name='name'
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                name='email'
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                name='message'
                id='message'
                cols='30'
                rows='10'
                placeholder='Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              {formError ? (
                <p className='error-message'>
                  Something went wrong. Please try again.
                </p>
              ) : null}
              {formEmpty ? (
                <p className='error-message'>
                  Please fill out all sections before submitting.
                </p>
              ) : null}
              <button
                className='form-submit-button'
                onClick={(e) => handleSubmit(e)}
                type='submit'
              >
                Send
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
