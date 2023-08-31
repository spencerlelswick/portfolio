import React from 'react';

import { motion } from 'framer-motion';

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

function Card({ project, idx }) {
  return (
    <motion.div
      key={idx}
      className='card'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 1 }}
    >
      <motion.div className='text-white m-10' variants={cardVariants} key={idx}>
        <img src={project.image} alt={project.name} />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </motion.div>
    </motion.div>
  );
}

const ProjectItem = ({ project, idx }) => {
  return <Card project={project} idx={idx} />;
};

export default ProjectItem;
