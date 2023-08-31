import React from 'react';
import Bishop from '../assets/white-bishop.svg';
import { motion } from 'framer-motion';
import ProjectIcon from './ProjectIcon';

const ProjectItem = ({ project, idx }) => {
  const svgPath = project.svg;
  const cardVariants = {
    offscreen: {
      scale: 0,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: 'spring',
        damping: 30,
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };

  const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 1,
        duration: 5,
      },
    },
  };

  return (
    <div
      key={idx}
      className='card'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 1 }}
    >
      <motion.div className='text-white m-10' variants={cardVariants} key={idx}>
        <div>
          <ProjectIcon
            pathVariants={pathVariants}
            svgVariants={svgVariants}
            svgPath={svgPath}
          />
        </div>

        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </motion.div>
    </div>
  );
};

export default ProjectItem;
