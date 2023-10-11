import React from 'react';

const Footer = () => {
  return (
    <footer className='footer p-5 flex flex-row justify-center items-center bg-neutral text-neutral-content'>
      <ul className='flex flex-row justify-center items-center gap-4'>
        <li>About</li>
        <li className='hover:text-secondary'>
          <a href='/resources/resume.pdf' target='_blank'>
            Resume
          </a>
        </li>
        <li className='hover:text-secondary'>
          <a href='mailto:spencerlelswick@gmail.com'>Email</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
