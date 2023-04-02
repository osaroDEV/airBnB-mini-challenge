import React from 'react';
import photoGrid from '/images/image-grid.png';

const Hero = () => {
  return (
    <div className='h-[400px] m-[36px]'>
      <div>
        <img src={photoGrid} className='w-[396px] h-[232px] m-[26px_auto]' />
        <div>
          <h1 className='text-[36px] font-semibold'>Online Experiences</h1>
          <p className='w-[320px]'>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
