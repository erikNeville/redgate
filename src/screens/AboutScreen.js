import React from 'react';
import {BodyContainer} from '../components/BodyContainer';
import styled from 'styled-components';

const AboutScreenWrapper = styled.div`
  /* style here */
  font-size: 20px;
`;

const AboutScreen = () => {
  return (
    <BodyContainer>
      <AboutScreenWrapper>
        <h1>About</h1>
      </AboutScreenWrapper>
    </BodyContainer>
  );
};

export default AboutScreen;