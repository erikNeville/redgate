import React from 'react';
import {connect} from 'react-redux';
import Events from './events/Events';
import Forsale from './forsale/Forsale';
import styled from 'styled-components';

const EventsForsaleWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  min-height: 15vw;
  padding-bottom: 2rem;
  @media screen and (max-width: 580px) {
    flex-flow: column nowrap;
    height: 600px;
  }
`;

const Section = styled.div`
  background: ${props => props.theme.primary};
  padding-top: 11px;
  text-align: center;
  width: 50vw;
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 400px;
  }
`;

const EventsForsale = ({events, forsale}) => {
  return (
    <EventsForsaleWrapper>
      <Section info={true}>
        <Events events={events}/>
      </Section>
      <Section info={false}>
        <Forsale forsale={forsale}/>
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
