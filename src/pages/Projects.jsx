import React from 'react';
import { useState, useEffect } from 'react';
import ProjectItem from '../components/ProjectItem';

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
      <section className='min-h-[50vh]'>
        <div className='flex flex-row gap-5 flex-wrap justify-center items-center'>
          {projects.map((project, idx) => (
            <ProjectItem project={project} idx={idx} />
          ))}
        </div>
      </section>
    );
  };
  return projects ? loaded() : <h1>Loading...</h1>;
};

export default Projects;
