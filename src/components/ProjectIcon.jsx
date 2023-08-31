import React from 'react';
import { motion } from 'framer-motion';

const ProjectIcon = ({ svgVariants, pathVariants, svgPath }) => {
  return (
    <motion.svg
      className='project-svg'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      variants={svgVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.path variants={pathVariants} fill='none' d={svgPath} />
    </motion.svg>
  );
};

export default ProjectIcon;
