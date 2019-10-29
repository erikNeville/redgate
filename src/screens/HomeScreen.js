import React from 'react';
import CarouselPage from '../components/carousel/CarouselPage';
import Description from '../components/description/Description';
import NewsEvents from '../components/news_events/NewsEvents';
import Location from '../components/location/Location';

const HomeScreen = () => {
  return (
    <div>
      <CarouselPage />
      <Description />
      <Location />
      <NewsEvents />
    </div>
  );
};

export default HomeScreen;
