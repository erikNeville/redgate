import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const EventsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 0.25rem 3.5rem;
  text-align: start;
  width: 50vw;
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 300px;
  }
  .events-nav {
    color: black;
    display: flex;
    flex-flow: column nowrap;
    font-size: 4vw;
    align-items: center;
    text-decoration: none;
    @media screen and (max-width: 580px) {
      font-size: 5.4vw;
    }
    &::after {
      content: '';
      background: #940001;
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 125%;
    }
  }
`;

const Events = ({events}) => {
  console.log(events);
  return (
    <EventsWrapper>
      <Link to='/events' className='events-nav'>Events</Link>
      <p>Events will be inserted here from database</p>
      <p>There will be a border around events and news sections</p>
      <h4>Event 1 Name</h4>
      <p>Event 1 description</p>
      <h4>Event 2 Name</h4>
      <p>Event 2 description</p>
      <h4>Event 3 Name</h4>
      <p>Event 3 description</p>
    </EventsWrapper>
  );
};

export default Events;
