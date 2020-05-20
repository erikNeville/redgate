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
  text-shadow: 1.5px 2px rgba(148, 0, 1, 0.17);
  font-size: 70px;
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
  .date {
    font-weight: 600;
  }
`;

const EventList = ({ event }) => {
  return (
    <div>
      <Month>{event[0].month && event[0].month}</Month>
      {event &&
        event.map(event => (
          <EventDiv key={event.id}>
            {event.date ? (
              <h4 className='date'>
                {event.day}, {event.month} {event.date}
              </h4>
            ) : (
              <h4 className='date'>{event.day}</h4>
            )}

            <h5 className='event-title'>{event.title}</h5>
            {event.start && event.end ? (
              <h5 className='event-time'>
                {event.start} &mdash; {event.end}
              </h5>
            ) : null}
            {event.special && <h5 className='event-time'>{event.special}</h5>}
          </EventDiv>
        ))}
    </div>
  );
};

export default EventList;
