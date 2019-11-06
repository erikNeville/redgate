import React from 'react';
import {BodyContainer} from '../components/BodyContainer';
import styled from 'styled-components';

const EventsScreenWrapper = styled.div`
  /* style here */
  font-size: 20px;
`;

const EventsScreen = () => {
  return (
    <BodyContainer>
      <EventsScreenWrapper>
        <h1>Events</h1>
      </EventsScreenWrapper>
    </BodyContainer>
  );
};

export default EventsScreen;