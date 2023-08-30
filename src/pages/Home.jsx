import React from 'react';
import { Link } from 'react-router-dom';
import Landing from './Landing';
import Projects from './Projects';
const Home = () => {
  return (
    <>
      <Landing />
      <Projects />
    </>
  );
};

export default Home;
