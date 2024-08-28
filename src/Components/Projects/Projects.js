import React from 'react';
import './Projects.css';
import Project from '../Project/Project';
import WorkoutMetricsImage from '../../Images/WorkoutMetrics.fit.webp';
import CarePulseImage from '../../Images/CarePulse.png';
import ChatWithPDFImage from '../../Images/ChatWithPDF.webp';
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
      title: 'Chat With PDF',
      description:
        'Chat With PDF is an AI-powered web application that allows users to upload PDF documents to their account and interact with an AI chatbot to ask questions about the content of the PDF. Whether you need to extract specific information, summarize sections, or understand complex documents, Chat With PDF makes it easy to get answers quickly.',
      image: ChatWithPDFImage,
      projectLink: 'https://github.com/camjohnson-code/chat-with-pdf',
      deployLink: 'https://www.chatwithpdf.dev/',
    },
    project2: {
      title: 'WorkoutMetrics.fit',
      description:
        'WorkoutMetrics.fit is an app that allows users to get a deeper look into their Strava data without needing to be a Strava Premium user. It gives users the ability to see their personal heatmaps, save and favorite workouts to their hall of fame, and upload activities to their Strava account.',
      image: WorkoutMetricsImage,
      projectLink: 'https://github.com/camjohnson-code/workout-metrics',
      deployLink: 'https://workout-metrics.vercel.app/',
    },
    project3: {
      title: 'CarePulse',
      description:
        'CarePulse is a fictional web application that allows patients to schedule appointments with their healthcare providers. On the admin side, healthcare providers can view and manage their appointments. Upon confirmation or cancellation, patients will receive automated text notifications.',
      image: CarePulseImage,
      projectLink: 'https://github.com/camjohnson-code/CarePulse/',
      deployLink: undefined,
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
