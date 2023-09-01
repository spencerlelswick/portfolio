import React from 'react';
import { motion } from 'framer-motion';

const ProjectIcon = ({ svgVariants, pathVariants, svgPath }) => {
  return (
    <motion.svg
      className='project-svg'
      xmlns='http://www.w3.org/2000/svg'
      variants={svgVariants}
      initial='hidden'
      animate='visible'
      width='330px'
      height='330px'
      viewbox='0 0 10 10'
    >
      <motion.path
        transform='translate(1400,1280)'
        id='scale'
        variants={pathVariants}
        fill='none'
        d={svgPath}
      />
    </motion.svg>
  );
};

export default ProjectIcon;
