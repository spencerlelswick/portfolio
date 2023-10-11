import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';

const Landing = () => {
  return (
    <section className='h-screen flex flex-col items-center justify-center'>
      <img
        src='https://avatars.githubusercontent.com/u/110030149?v=4'
        alt='avatar'
        className='rounded-3xl w-36 shadow-2xl'
      />
      <h1 className='text-primary text-6xl text-center'>Spencer Elswick</h1>
      <h1 className='text-primary text-3xl text-center'>Software Engineer</h1>
      <div className='mt-10'>
        <ul className='flex flex-row gap-4 text-4xl'>
          <li>
            <a href='https://github.com/spencerlelswick'>
              <FaGithubSquare className='hover:text-secondary' />
            </a>
          </li>
          <li>
            <a href='mailto:spencerlelswick@gmail.com'>
              <TfiEmail className='hover:text-secondary' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/spencerlelswick/'>
              <FaLinkedin className='hover:text-secondary' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Landing;
