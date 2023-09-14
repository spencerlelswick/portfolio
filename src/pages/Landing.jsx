import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';

const Landing = () => {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-primary text-6xl'>spencer elswick</h1>
      <div className='mt-10'>
        <ul className='flex flex-row gap-4 text-4xl'>
          <li>
            <a href='https://github.com/spencerlelswick'>
              <FaGithubSquare className='hover:text-secondary' />
            </a>
          </li>
          <li>
            <a href='mailto:spencerelswick@proton.me'>
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
