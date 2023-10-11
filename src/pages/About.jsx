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
    <section id='about' className='flex justify-center'>
      <div className='card bg-base-200  w-3/5 flex flex-col items-center shadow-xl'>
        <div className='flex flex-col items-center m-10 justify-between'>
          <h2>Hi, I'm Spencer.</h2>
          <p>I'm a full stack developer from Louisville, Kentucky.</p>
          <p>
            For more information, check out my{' '}
            <a
              href='/resources/resume.pdf'
              className='underline text-secondary'
            >
              resume
            </a>
            , or{' '}
            <a
              href='https://github.com/spencerlelswick'
              className='underline text-secondary'
            >
              GitHub
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
