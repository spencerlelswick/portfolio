import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ project }) => {
  return (
    <div className='flex justify-center items-center h-60'>
      <div className='card w-96 shadow-xl h-96'>
        <figure className='max-h-48'>
          <img src={project.image} className='' alt='evently' />
        </figure>
        <div className='card-body h-48'>
          <h2 className='card-title'>
            {project.name}
            {/* <div className='badge badge-secondary'>NEW</div> */}
          </h2>
          <p>{project.desc}</p>
          <div className='card-actions justify-end'>
            <Link to={project.live} className='badge badge-outline'>
              Live
            </Link>
            <Link to={project.git} className='badge badge-outline'>
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
