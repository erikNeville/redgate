import React from 'react';
import { BodyContainer } from '../../components/containers/BodyContainer';
import EventList from './EventList';
import { ScreenContainer } from '../../components/containers/ScreenContainer';
import { connect } from 'react-redux';

const EventsScreen = ({ events }) => {
  const {
    january,
    february,
    march,
    april,
    may,
    june,
    july,
    august,
  } = events.month;
  return (
    <BodyContainer>
      <ScreenContainer>
        <EventList event={january} />
        <EventList event={february} />
        <EventList event={march} />
        <EventList event={april} />
        <EventList event={may} />
        <EventList event={june} />
        <EventList event={july} />
        <EventList event={august} />
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
