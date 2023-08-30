import React from 'react';
import { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const response = await fetch('./projects.json');
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  const loaded = () => {
    return (
      <section className='bg-stone-700 min-h-screen flex flex-col items-center justify-center'>
        {projects.map((project, idx) => (
          <div className='text-white' key={idx}>
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>live site</button>
            </a>
          </div>
        ))}
      </section>
    );
  };
  return projects ? loaded() : <h1>Loading...</h1>;
};

export default Projects;
