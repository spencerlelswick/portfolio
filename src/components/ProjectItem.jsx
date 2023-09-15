import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ project }) => {
  return (
    <div className='card w-[20rem] shadow-xl'>
      <figure className='max-h-40'>
        <img src={project.image} className='h-100 w-100' alt={project.name} />
      </figure>
      <div className='card-body h-60'>
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
  );
};

export default ProjectItem;
