import React from 'react';

const Footer = () => {
  return (
    <footer className=''>
      <ul className='flex flex-row justify-center gap-4'>
        <li>About</li>
        <li>
          <a href='/resources/resume.pdf' target='_blank'>
            Resume
          </a>
        </li>
        <li>Email</li>
      </ul>
    </footer>
  );
};

export default Footer;
