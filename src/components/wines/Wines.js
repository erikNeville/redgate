import React from 'react';
import wines from '../../images/wines/wines1000.jpg';
import styled from 'styled-components';

const WineWrapper = styled.div`
  background-image: url(${wines});
  background-repeat: no-repeat;
  background-size: center;
  background-position: center;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  padding-top: 180px;
  @media screen and (max-width: 580px) {
    padding-top: 250px;
    width: 100%;
  }

  .h1 {
    font-size: 3.5vw;
  }

  .p {
    font-size: 2vw;
  }
`;

const Wines = () => {
  return (
    <WineWrapper>
      <h1>Wines</h1>
      <p>This will be the wines section.</p>
      <p>The background will be white,</p>
      <p>unless something else is desired</p>
    </WineWrapper>
  );
};

export default Wines;
