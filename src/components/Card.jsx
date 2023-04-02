import React from 'react';

const Card = ({
  title,
  price,
  coverImg,
  rating,
  reviewCount,
  location,
  openSpots,
}) => {
  
  let batchText;
  if (openSpots === 0) {
    batchText = 'SOLD OUT';
  } else if (location === 'Online') {
    batchText = 'ONLINE';
  }

  return (
    <section className='m-[36px]'>
      <div className='w-[176px] h-[235px]'>
        <img
          src={coverImg}
          alt='photo'
          className='w-[176px] h-[235px] absolute z-0 rounded-lg'
        />
        {batchText ? (
          <div className='absolute mt-2 ml-2 z-10 bg-white w-[61px] h-[20px] text-[12px] flex item-center justify-center'>
            {batchText}
          </div>
        ) : null}
      </div>
      <div className='flex items-center mt-2 text-[12px]'>
        <img src='/images/star.png' alt='star' className='h-[14px] mr-2' />
        <span>{rating}</span>&nbsp;
        <span className='text-[#918E9B]'>({reviewCount})</span>&nbsp;
        <span className='text-[#918E9B]'>{location}</span>
      </div>
      <p className='mt-2 text-[12px] font-thin'>{title}</p>
      <p className='mt-1 text-[12px]'>
        <span className='font-bold'>From ${price}</span> / person
      </p>
    </section>
  );
};

export default Card;
