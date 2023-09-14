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
      <section className='min-h-screen flex justify-center items-center gap-5'>
        {projects.map((project, idx) => (
          <ProjectItem project={project} idx={idx} />
        ))}
      </section>
    );
  };
  return projects ? loaded() : <h1>Loading...</h1>;
};

export default Projects;
