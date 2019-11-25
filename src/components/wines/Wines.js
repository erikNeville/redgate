import React from 'react';
import {Link} from 'react-router-dom';
import wines from '../../images/wines/allwines.jpg';
import styled from 'styled-components';

const WineWrapper = styled.div`
  /* background-image: url(${wines}); */
  /* background-repeat: no-repeat; */
  /* background-position: center; */
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: auto;
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
  .wines-nav {
    color: white;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-decoration: none;
    &::after {
      content: '';
      background: ${props => props.theme.hover};
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &hover::after {
      transform: width;
      width: 100%;
    }
  }
`;

const Wines = () => {
  return (
    <WineWrapper>
      <h1>
      </h1>
      <br/>
      <br/>
      <br/>
    </WineWrapper>
  );
};

export default Wines;
