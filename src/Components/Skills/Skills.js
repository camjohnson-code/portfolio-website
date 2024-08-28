import React from 'react';
import './Skills.css';
import SkillButton from '../SkillButton/SkillButton';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.10,
      duration: 0.15,
      ease: [0.12, 0.25, 0.51, 0.99],
    },
  }),
};

const Skills = ({ prefersReducedMotion }) => {
  const skills = [
    'JavaScript',
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    'Express',
    'MongoDB',
    'React Native',
    'Cypress',
    'Mocha',
    'Chai',
    'Git',
    'GitHub',
    'Postman',
    'Figma',
    'HTML',
    'CSS',
    'Framer Motion',
    'Google Firebase',
    'After Effects',
    'Photoshop',
    'Premiere Pro',
    'Illustrator',
  ];

  const skillButtons = skills.map((skill, index) => {
    const initial = prefersReducedMotion ? {} : 'initial';
    const animate = prefersReducedMotion ? {} : 'animate';

    return (
      <motion.div
        key={index}
        variants={fadeInAnimationVariants}
        initial={initial}
        whileInView={animate}
        viewport={{ once: true }}
        custom={index}
      >
        <SkillButton skill={skill} key={index} />
      </motion.div>
    );
  });

  return (
    <div className='skills'>
      <p className='skills-title'>Skills</p>
      <div className='skills-container'>{skillButtons}</div>
    </div>
  );
};

export default Skills;
