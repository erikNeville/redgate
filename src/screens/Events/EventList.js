import React from 'react';
import styled from 'styled-components';

const Month = styled.h1`
  position: -webkit-sticky;
  position: sticky;
  font-family: 'Tangerine';
  font-weight: bold;
  background: white;
  display: right;
  top: 0;
`;

const EventDiv = styled.div`
  display: flex;
  flex-flow: column;
  padding-left: 15px;
  padding-bottom: 15px;
  
  .event-title {
    padding-left: 10px;
  }

  .event-time {
    padding-left: 18px;
  }
`;

const EventList = ({event}) => {
  return (
    <div>
      <Month>{event[0].month && event[0].month}</Month>
      {event && event.map((event) => (
        <EventDiv key={event.id}>
          <h4>{event.day}, {event.month} {event.date}</h4>
          <h5 className='event-title'>{event.title}</h5>
          <h5 className='event-time'>{event.start} &mdash; {event.end}</h5>
        </EventDiv>
      ))}
    </div>
  );
};

export default EventList;
