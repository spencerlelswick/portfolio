import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ project }) => {
  return (
    <div className='card w-[20rem] shadow-xl'>
      <figure className='max-h-40'>
        <img src={project.image} className='h-100 w-100' alt={project.name} />
      </figure>

      <div className='card-body min-h-[16rem]'>
        <div className='flex justify-between items-center'>
          <h2 className='card-title'>{project.name}</h2>
          <div>
            <Link
              to={project.live}
              target='_blank'
              className='badge badge-primary mx-2'
            >
              Live
            </Link>
            <Link
              to={project.git}
              target='_blank'
              className='badge badge-accent mx-2'
            >
              GitHub
            </Link>
          </div>
        </div>
        <p>{project.desc}</p>
        <div className='card-actions'>
          {project.skills.map((s) => {
            return (
              <div
                key={s.name}
                className={`badge bg-base-200`}
                // style={{ backgroundColor: s.color }}
              >
                {/* <div key={s.name} className={`badge bg-yellow-300`}> */}
                {s.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
