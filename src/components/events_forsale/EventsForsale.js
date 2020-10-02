import React from 'react';
import { connect } from 'react-redux';
import Events from './events/Events';
import styled from 'styled-components';

const EventsForsaleWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 15vw;
  @media screen and (max-width: 580px) {
    flex-flow: column nowrap;
    height: 220px;
  }
`;

const Section = styled.div`
  align-self: center;
  background: ${(props) => props.theme.primary};
  padding-top: 11px;
  text-align: center;
  width: 50vw;
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 400px;
  }
`;

const EventsForsale = ({ events }) => {
  return (
    <EventsForsaleWrapper>
      <Section info={true}>
        <Events events={events} />
      </Section>
    </EventsForsaleWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    forsale: state.forsale.forsale,
  };
};

export default connect(mapStateToProps)(EventsForsale);
