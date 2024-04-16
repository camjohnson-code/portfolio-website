import React from 'react';
import './SkillButton.css';

const SkillButton = ({ skill }) => {
  return (
    <div className='skill-button'>
      {skill}
    </div>
  );
};

export default SkillButton;
