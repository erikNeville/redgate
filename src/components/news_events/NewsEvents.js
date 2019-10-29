import React from 'react';
import {connect} from 'react-redux';
import Events from './events/Events';
import News from './news/News';
import styled from 'styled-components';

const NewsEventsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 15vw;
  @media screen and (max-width: 580px) {
    flex-flow: column nowrap;
    height: 600px;
  }
`;

const Section = styled.div`
  background: ${props => props.type ? ('lightblue') : ('lightgreen')};
  border: black;
  width: 50vw;
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 300px;
  }
`;

const NewsEvents = ({events, news}) => {
  return (
    <NewsEventsWrapper>
      <Section type={true}>
        <Events events={events}/>
      </Section>
      <Section type={false}>
        <News news={news}/>
      </Section>
    </NewsEventsWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    news: state.news.news,
  };
};

export default connect(mapStateToProps)(NewsEvents);
