import React from 'react';
import { useState, useEffect } from 'react';

const About = () => {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch('./about.json');
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <section className='flex justify-center'>
      <div className='card w-1/2 flex flex-col items-center bg-base-100 shadow-xl'>
        <div className='flex flex-col items-center my-10 justify-between'>
          <h2>Hi, I'm Spencer.</h2>
          <p>I'm a full-stack developer from Louisville, Kentucky.</p>
          <p>
            For more information, check out my{' '}
            <a
              href='https://github.com/spencerlelswick'
              className='underline text-secondary'
            >
              GitHub
            </a>
            , or{' '}
            <a
              href='http://localhost:3000/resources/resume.pdf'
              className='underline text-secondary'
            >
              resume
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );

  return about ? loaded() : <h1>Loading...</h1>;
};

export default About;
