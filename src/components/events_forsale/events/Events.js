import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import EventList from './EventList';

const EventsWrapper = styled.div`
  /* background: purple; */
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 20px;
  padding: 0 55px;
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
  .events-nav {
    color: black;
    display: flex;
    font-family: 'Tangerine';
    text-shadow: 1.5px 2px rgba(148, 0, 1, 0.17);
    flex-flow: column nowrap;
    font-size: 50px;
    font-weight: 600;
    align-items: center;
    text-decoration: none;
    @media screen and (max-width: 580px) {
      font-size: 50px;
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
      width: 96%;
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
  box-shadow: 0 2px 9px gray;
`;

const Events = ({events}) => {
  const {november, december, january} = events.month;
  
  return (
    <EventsWrapper>
      <Link to='/events' className='events-nav'>Events</Link>
      <div className="event-info">
        <Month>
          <h3>November</h3>
        </Month>
        <EventList event={november} />
        <Month>
          <h3>December</h3>
        </Month>
        <EventList event={december} />
        <Month>
          <h3>January</h3>
        </Month>
        <EventList event={january} />
      </div>
    </EventsWrapper>
  );
};

export default Events;
