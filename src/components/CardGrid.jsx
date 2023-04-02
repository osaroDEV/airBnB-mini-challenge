import React from 'react';
import Card from './Card';

import data from '../assets/data';

const CardGrid = () => {
  return (
    <div className='flex'>
      {data.map((info) => {
        return (
          <div key={info.id}>
            <Card
              coverImg={info.coverImg}
              title={info.title}
              price={info.price}
              rating={info.stats.rating}
              reviewCount={info.stats.reviewCount}
              location={info.location}
              openSpots={info.openSpots}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardGrid;
