import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ForsaleWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 0.25rem 3.5rem;
  text-align: start;
  width: 50vw;
  height: 500px;
  .h5 {
    font-size: 3vw;
  }
  .p {
    font-size: 2.6vw;
  }
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 400px;
    padding-bottom: 30px;
  }
  
  .title {
    color: black;
    display: flex;
    flex-flow: column nowrap;
    font-size: 4vw;
    align-items: center;
    text-decoration: none;
    @media screen and (max-width: 580px) {
      font-size: 6vw;
    }
    &::after {
      content: '';
      background: ${props => props.theme.hover};
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 110%;
    }
  }
  .location-info {
    overflow-y: scroll;
    width: 100%;
    background: #F8F8F8;
    box-shadow: inset 0 -2px 10px gray;
  }
  .location-info::-webkit-scrollbar {
    width: 0 !important;
  }
  .location-text {
    padding-top: 10px;
    padding-left: 12px;
  }
`;

const Location = styled.div`
  padding: 10px 0;
  background: white;
  display: right;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 9px gray;
`;

const Forsale = ({forsale}) => {
  
  console.log(forsale.location[0]);
  return (
    <ForsaleWrapper>
      <Link to='/forsale' className='title'>Where to Buy</Link>
      <div className='location-info'>
        <Location>
          <h3>Indepencence, OR</h3>
        </Location>
        <div className='location-text'>
          <h5>Independence Wine</h5>
          <p>444 Main Street</p>
          <h5>Independence Wine</h5>
          <p>444 Main Street</p>
          <h5>Independence Wine</h5>
          <p>444 Main Street</p>
          <h5>Independence Wine</h5>
          <p>444 Main Street</p>
          <h5>Independence Wine</h5>
          <p>444 Main Street</p>
        </div>
        <Location>
          <h3>Salem, OR</h3>
        </Location>
        <div className='location-text'>
          <h5>Salem Wine</h5>
          <p>123 Salem Street</p>
          <h5>Salem Wine</h5>
          <p>123 Salem Street</p>
          <h5>Salem Wine</h5>
          <p>123 Salem Street</p>
          <h5>Salem Wine</h5>
          <p>123 Salem Street</p>
          <h5>Salem Wine</h5>
          <p>123 Salem Street</p>
        </div>
        <Location>
          <h3>Portland, OR</h3>
        </Location>
        <div className='location-text'>
          <h5>Portland Wine</h5>
          <p>900 Portland Street</p>
          <h5>Portland Wine</h5>
          <p>900 Portland Street</p>
          <h5>Portland Wine</h5>
          <p>900 Portland Street</p>
          <h5>Portland Wine</h5>
          <p>900 Portland Street</p>
          <h5>Portland Wine</h5>
          <p>900 Portland Street</p>
          <h5>Portland Wine</h5>
          <p>900 Portland Street</p>
          <h5>Portland Wine</h5>
          <p>900 Portland Street</p>
        </div>
      </div>
    </ForsaleWrapper>
  );
};

export default Forsale;


