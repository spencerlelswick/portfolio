import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    borderBottom: '.2rem solid black',
    padding: '.5rem',
    width: '90%',
    margin: 'auto',
  };

  return (
    <header>
      <h1>My Portfolio Page</h1>
      <nav style={navStyle}>
        <Link to='/'>
          <div>HOME</div>
        </Link>
        <Link to='/about'>
          <div>ABOUT</div>
        </Link>
        <Link to='/projects'>
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
