import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';

const Landing = () => {
  return (
    <section className='bg-stone-700 min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-2xl text-cyan-300 xsm:text-4xl sm:text-6xl md:text-8xl relative'>
        <span className='absolute bottom-24 left-2'>spencer</span>
        <span className='text-orange-300'>elswick</span>
      </h1>
      <div className='mt-10'>
        <ul className='flex flex-row gap-4 text-white text-4xl'>
          <li>
            <FaGithubSquare className='hover:text-orange-300' />
          </li>
          <li>
            <TfiEmail className='hover:text-orange-300' />
          </li>
          <li>
            <FaLinkedin className='hover:text-orange-300' />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Landing;
