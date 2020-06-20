import React from 'react';
import { BodyContainer } from '../../components/containers/BodyContainer';
import EventList from './EventList';
import { ScreenContainer } from '../../components/containers/ScreenContainer';
import { connect } from 'react-redux';

const EventsScreen = ({ events }) => {
  const { june, july, august, september } = events.month;
  return (
    <BodyContainer>
      <ScreenContainer>
        <br />
        <h4>
          Redgate has suspended its evening concerts until the weather improves
          enough to open up the Fieldhouse garage doors, therefore providing
          more space for social distancing. We will however, reinstate our "Solo
          Sundays" concerts.
        </h4>
        <h4>
          We will also start <strong>Solo Saturdays!</strong> Our intention is
          twofold:
        </h4>
        <h4>
          First, we want to get some bread to our family of Redgate
          entertainers.
        </h4>
        <h4>
          Second, we want to get the public comfortable coming out to our venue
          in a low key atmosphere with limited seating, social distancing, bring
          your own picnic, daylight operations, and the knowledge that that
          their exposure is managed with the best known methods. Outdoor seating
          available depending on the weather.
        </h4>
        <br />
        <EventList event={june} />
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
