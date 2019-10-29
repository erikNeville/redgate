import React from 'react';
import {BodyContainer} from '../components/BodyContainer';
import styled from 'styled-components';

const ContactScreenWrapper = styled.div`
  /* style here */
  font-size: 20px;
`;

const ContactScreen = () => {
  return (
    <BodyContainer>
      <ContactScreenWrapper>
        <h1>Contact</h1>
      </ContactScreenWrapper>
    </BodyContainer>
  );
};

export default ContactScreen;