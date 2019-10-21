import React from 'react';
import CarouselPage from '../components/carousel/CarouselPage';
import Container from 'react-bootstrap/Container';
import Location from '../components/location/Location';

const HomeScreen = () => {
  return (
    <div>
      <CarouselPage />
      <Container>
      <Location />
      </Container>
    </div>
  );
};

export default HomeScreen;
