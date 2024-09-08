import React from 'react';
import './Project.css';
import GithubLogo from '../../Images/github-mark-white.png';
import { FaLink } from 'react-icons/fa6';

const Project = ({ projectLink, deployLink, description, title, image }) => {
  return (
    <div className='project'>
      <div className='project-image-container'>
        <img
          className='project-image'
          src={image}
          alt={`Screenshot of my ${title} project`}
        />
      </div>
      <h2 className='project-title'>{title}</h2>
      <p className='project-description'>{description}</p>
      <div className='project-links'>
        <a
          target='_blank'
          rel='noreferrer'
          className='project-link'
          href={projectLink}
        >
          <img
            alt='Link to GitHub repo'
            className='link-img'
            src={GithubLogo}
          ></img>
        </a>
        {deployLink ? (
          <a
            target='_blank'
            rel='noreferrer'
            className='project-link'
            href={deployLink}
            aria-label='Link to deployed app'
          >
            <FaLink alt='Link to deployed app' className='link-img' />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
