import React from 'react';
import logo from '/images/airbnb-logo.png';

const NavBar = () => {
  return (
    <nav className='h-[70px] bg-white flex items-center shadow-[0_2.98px_7.46px_rgba(0,0,0,0.1)]'>
      <img src={logo} alt='logo' className='ml-[30px]' />
    </nav>
  );
};

export default NavBar;
