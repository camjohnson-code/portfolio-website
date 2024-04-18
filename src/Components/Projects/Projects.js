import React from 'react';
import './Projects.css';
import Project from '../Project/Project';
import WorkoutMetricsImage from '../../Images/WorkoutMetrics.fit.png';
import QuintessentialCocktailsImage from '../../Images/Quintessential Cocktails.png';
import RancidTomatillosImage from '../../Images/Rancid Tomatillos.png';
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
      delay: index * 0.25,
      duration: 0.75,
      ease: [0.12, 0.25, 0.51, 0.99],
    },
  }),
};

const Projects = ({ prefersReducedMotion }) => {
  const projectsInfo = {
    project1: {
      title: 'WorkoutMetrics.fit',
      description:
        'WorkoutMetrics.fit is an app that allows users to get a deeper look into their Strava data without needing to be a Strava Premium user. It gives users the ability to see their personal heatmaps, save and favorite workouts to their hall of fame, and upload activities to their Strava account.',
      image: WorkoutMetricsImage,
      projectLink: 'https://github.com/camjohnson-code/workout-metrics',
      deployLink: 'https://workout-metrics.vercel.app/',
    },
    project2: {
      title: 'Quintessential Cocktails',
      description:
        'Quintessential Cocktails is a web application designed to help users discover and learn about various cocktails. It leverages React and React Router to provide a seamless browsing experience. Users can view detailed cocktail information, and save their favorite cocktails for easy access.',
      image: QuintessentialCocktailsImage,
      projectLink: 'https://github.com/camjohnson-code/cocktail-finder',
      deployLink: 'https://camjohnson-code.github.io/cocktail-finder/',
    },
    project3: {
      title: 'Rancid Tomatillos',
      description:
        'Rancid Tomatillos is a project aimed at building a web application that provides information about movies, including ratings, reviews, and other related data. This project utilizes React and React Router to create a user-friendly interface for browsing movies and accessing relevant information.',
      image: RancidTomatillosImage,
      projectLink: 'https://github.com/camjohnson-code/rancid-tomatillos',
      deployLink: null,
    },
  };

  const projects = Object.keys(projectsInfo).map((project, index) => {
    const initial = prefersReducedMotion ? {} : 'initial';
    const animate = prefersReducedMotion ? {} : 'animate';

    return (
      <motion.div
        key={project}
        variants={fadeInAnimationVariants}
        initial={initial}
        whileInView={animate}
        viewport={{ once: true }}
        custom={index}
      >
        <Project
          key={project}
          title={projectsInfo[project].title}
          description={projectsInfo[project].description}
          image={projectsInfo[project].image}
          projectLink={projectsInfo[project].projectLink}
          deployLink={projectsInfo[project].deployLink}
        />
      </motion.div>
    );
  });

  return (
    <div className='projects'>
      <h1 className='projects-title'>Portfolio</h1>
      <div className='projects-container'>{projects}</div>
    </div>
  );
};

export default Projects;
