import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';

const WineWrapper = styled.div`
  background: #940001;
  text-align: center;
  color: white;

  .h1 {
    font-size: 3.5vw;
  }

  .p {
    font-size: 2vw;
  }
`;

const Wines = () => {
  return (
    <div>
      <Jumbotron fluid as={WineWrapper}>
        <h1>Wines</h1>
        <p>This will be the wines section.</p>
        <p>The background will be white,</p>
        <p>unless something else is desired</p>
      </Jumbotron>
    </div>
  );
};

export default Wines;
