import React from 'react';
import { BodyContainer } from '../../components/containers/BodyContainer';
import EventList from './EventList';
import { ScreenContainer } from '../../components/containers/ScreenContainer';
import { connect } from 'react-redux';

const EventsScreen = ({ events }) => {
  const { september, october, november } = events.month;
  return (
    <BodyContainer>
      <ScreenContainer>
        <EventList event={september} />
        <EventList event={october} />
        <EventList event={november} />
      </ScreenContainer>
    </BodyContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
  };
};

export default connect(mapStateToProps)(EventsScreen);
