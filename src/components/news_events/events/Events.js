import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const EventsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 0.25rem 3.5rem;
  text-align: start;
  width: 50vw;
  height: 500px;
  .h5 {
    font-size: 3vw;
  }
  .p {
    font-size:2.6vw;
  }
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 400px;
  }
  .event-info {
    overflow-y: scroll;
    background: #F8F8F8;
    box-shadow: inset 0 -2px 10px gray;
  }
  .event-info::-webkit-scrollbar {
    width: 0 !important;
  }
  .event-text {
    padding-left: 12px;
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

const Month = styled.div`
  padding: 10px 0;
  background: white;
  display: right;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 10px gray;
`;

const Events = ({events}) => {
  const {november, december} = events.month;
  
  return (
    <EventsWrapper>
      <Link to='/events' className='events-nav'>Events</Link>
      <div className="event-info">
        <Month>
          <h3>November</h3>
        </Month>
        {november && november.map((event) => (
          <div className='event-text' key={event.id}>
            <h5>{event.title}</h5>
            <p>{event.date} || {event.start}-{event.end}</p>
          </div>
        ))}
        <Month>
          <h3>December</h3>
        </Month>
        {december && december.map((event) => (
          <div className='event-text' key={event.id}>
            <h5>{event.title}</h5>
            <p>{event.date} || {event.start}-{event.end}</p>
          </div>
        ))}
      </div>
    </EventsWrapper>
  );
};

export default Events;
