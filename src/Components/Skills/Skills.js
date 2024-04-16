import React from 'react';
import './Skills.css';
import SkillButton from '../SkillButton/SkillButton';

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'React Native',
    'Node.js',
    'Express',
    'MongoDB',
    'Typescript',
    'Git',
    'GitHub',
    'Cypress',
    'Mocha',
    'Chai',
    'Postman',
    'Figma',
    'HTML',
    'CSS',
    'Framer Motion',
    'After Effects',
    'Photoshop',
    'Premiere Pro',
    'Illustrator',
  ];

  const skillButtons = skills.map((skill, index) => {
    return <SkillButton skill={skill} key={index} />;
  });

  return (
    <div className='skills'>
      <div className='skills-title'>Skills</div>
      <div className='skills-container'>{skillButtons}</div>
    </div>
  );
};

export default Skills;
