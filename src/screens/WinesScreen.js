import React from 'react';
import {BodyContainer} from '../components/BodyContainer';
import styled from 'styled-components';

const WinesScreenWrapper = styled.div`
  /* style here */
  font-size: 20px;
`;

const WinesScreen = () => {
  return (
    <BodyContainer>
      <WinesScreenWrapper>
        <h1>Wines</h1>
      </WinesScreenWrapper>
    </BodyContainer>
  );
};

export default WinesScreen;