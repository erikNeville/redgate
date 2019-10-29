import React from 'react';
import {connect} from 'react-redux';
import Events from './events/Events';
import News from './news/News';
import styled from 'styled-components';

const NewsEventsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  min-height: 15vw;
  @media screen and (max-width: 580px) {
    flex-flow: column nowrap;
    height: 600px;
  }
`;

const Section = styled.div`
  background: white;
  padding-top: 11px;
  text-align: center;
  width: 50vw;
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 300px;
  }
`;

const NewsEvents = ({events, news}) => {
  return (
    <NewsEventsWrapper>
      <Section info={true}>
        <Events events={events}/>
      </Section>
      <Section info={false}>
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
