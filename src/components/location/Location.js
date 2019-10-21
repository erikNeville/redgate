import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const LocationDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 12vh;
  padding-top: 11px;
`;

const LocationHeader = styled.h1`
  font-size: 3.8vw;
`;

const Location = () => {
  return (
      <LocationDiv>
        <LocationHeader>Location & Hours</LocationHeader>
      </LocationDiv>
  );
};

export default Location;
