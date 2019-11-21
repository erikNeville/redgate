import React from 'react';
import {BodyContainer} from '../components/BodyContainer';
import {connect} from 'react-redux';
import styled from 'styled-components';

const EventsScreenWrapper = styled.div`
  background: ${props => props.theme.primary};
  padding-top: 1rem;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
`;


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


const EventsScreen = ({events}) => {
  const {november, december} = events.month;
  return (
    <BodyContainer>
      <EventsScreenWrapper>
        <Month>November</Month>
        {november && november.map((event) => (
          <EventDiv key={event.id}>
            <h4>{event.date}</h4>
            <h5 className='event-title'>{event.title}</h5>
            <h5 className='event-time'>{event.start} &mdash; {event.end}</h5>
          </EventDiv>
        ))}
        <Month>December</Month>
        {december && december.map((event) => (
          <EventDiv key={event.id}>
            <h4>{event.date}</h4>
            <h5 className='event-title'>{event.title}</h5>
            <h5 className='event-time'>{event.start} &mdash; {event.end}</h5>
          </EventDiv>
        ))}
      </EventsScreenWrapper>
    </BodyContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
  };
};

export default connect(mapStateToProps)(EventsScreen);
