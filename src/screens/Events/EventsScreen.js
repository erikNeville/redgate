import React from 'react';
import { BodyContainer } from '../../components/containers/BodyContainer';
import EventList from './EventList';
import { ScreenContainer } from '../../components/containers/ScreenContainer';
import { connect } from 'react-redux';

const EventsScreen = ({ events }) => {
  const { december, january, february, march, april } = events.month;
  return (
    <BodyContainer>
      <ScreenContainer>
        <EventList event={december} />
        <EventList event={january} />
        <EventList event={february} />
        <EventList event={march} />
        <EventList event={april} />
      </ScreenContainer>
    </BodyContainer>
  );
};

const mapStateToProps = state => {
  return {
    events: state.events.events,
  };
};

export default connect(mapStateToProps)(EventsScreen);
