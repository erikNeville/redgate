import React from 'react';
import CarouselPage from '../components/carousel/CarouselPage';
import Description from '../components/description/Description';
import EventsForsale from '../components/events_forsale/EventsForsale';
import Location from '../components/location/Location';
import Wines from '../components/wines/Wines';

const HomeScreen = () => {
  return (
    <div>
      <CarouselPage />
      <Description />
      <Location />
      <EventsForsale />
      <Wines />
    </div>
  );
};

export default HomeScreen;
