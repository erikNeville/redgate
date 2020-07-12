import React from 'react';
import { BodyContainer } from '../../components/containers/BodyContainer';
import EventList from './EventList';
import { ScreenContainer } from '../../components/containers/ScreenContainer';
import { connect } from 'react-redux';

const EventsScreen = ({ events }) => {
  const { july, august, september } = events.month;
  return (
    <BodyContainer>
      <ScreenContainer>
        <EventList event={july} />
        <EventList event={august} />
        <EventList event={september} />
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
