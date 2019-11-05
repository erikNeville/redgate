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
  .h5 {
    font-size: 3vw;
  }
  .p {
    font-size:2.6vw;
  }
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
      font-size: 6vw;
    }
    &::after {
      content: '';
      background: ${props => props.theme.hover};
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
      <h5>{events[0].title}</h5>
      <p>{events[0].date} || {events[0].start} - {events[0].end}</p>
      <h5>{events[1].title}</h5>      
      <p>{events[1].date}</p>
      <h5>{events[2].title}</h5>
      <p>{events[2].date}</p>
    </EventsWrapper>
  );
};

export default Events;
