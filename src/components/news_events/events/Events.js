import React from 'react';
import styled from 'styled-components';

const EventsWrapper = styled.div`
  background: lightgreen;
  width: 50vw;
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 300px;
  }
`;

const Events = ({events}) => {
  return (
    <div>
      Events
    </div>
  );
};

export default Events;
