import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';

const WineWrapper = styled.div`
  background: #940001;
`;

const Wines = () => {
  return (
    <div>
      <Jumbotron fluid as={WineWrapper}>
        Wines
      </Jumbotron>
    </div>
  );
};

export default Wines;
