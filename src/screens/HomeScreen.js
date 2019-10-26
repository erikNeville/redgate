import React from 'react';
import CarouselPage from '../components/carousel/CarouselPage';
import Description from '../components/description/Description';
import Events from '../components/events/Events';
import Location from '../components/location/Location';

const HomeScreen = () => {
  return (
    <div>
      <CarouselPage />
      <Description />
      <Location />
      <Events />
    </div>
  );
};

export default HomeScreen;
