import React from 'react';
import {BodyContainer} from '../components/BodyContainer';
import styled from 'styled-components';

const NewsScreenWrapper = styled.div`
  /* style here */
  font-size: 20px;
`;

const NewsScreen = () => {
  return (
    <BodyContainer>
      <NewsScreenWrapper>
        <h1>News</h1>
      </NewsScreenWrapper>
    </BodyContainer>
  );
};

export default NewsScreen;
