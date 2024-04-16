import React from 'react';
import './Project.css';
import GithubLogo from '../../Images/github-mark-white.png';
import { FaLink } from 'react-icons/fa6';

const Project = ({ projectLink, deployLink, description, title, image }) => {
  return (
    <div className='project'>
      <div className='project-image-container'>
        <img className='project-image' src={image} alt='project-image' />
      </div>
      <h2 className='project-title'>{title}</h2>
      <p className='project-description'>{description}</p>
      <div className='project-links'>
        <a className='project-link' href={projectLink}>
          <img className='link-img' src={GithubLogo}></img>
        </a>
        {deployLink ? (
          <a className='project-link' href={deployLink}>
            <FaLink className='link-img ' />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
