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
      width: 104%;
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
  const {independence, monmouth, salem, dallas, albany, mcminnville, other} = forsale.location;
  return (
    <ForsaleWrapper>
      <Link to='/retailers' className='title'>Retailers</Link>
      <div className='location-info'>

        <Location>
          <h3>Independence</h3>
        </Location>
        {independence && independence.map((location) => (
          <div className='location-text' key={location.id}>
            <h5>{location.place}</h5>
          </div>
        ))}
        
        <Location>
          <h3>Monmouth</h3>
        </Location>
        {monmouth && monmouth.map((location) => (
          <div className='location-text' key={location.id}>
            <h5>{location.place}</h5>
          </div>
        ))}

        <Location>
          <h3>Salem</h3>
        </Location>
        {salem && salem.map((location) => (
          <div className='location-text' key={location.id}>
            <h5>{location.place}</h5>
          </div>
        ))}

        <Location>
          <h3>Dallas</h3>
        </Location>
        {dallas && dallas.map((location) => (
          <div className='location-text' key={location.id}>
            <h5>{location.place}</h5>
          </div>
        ))}
        
        <Location>
          <h3>Albany</h3>
        </Location>
        {albany && albany.map((location) => (
          <div className='location-text' key={location.id}>
            <h5>{location.place}</h5>
          </div>
        ))}
        
        <Location>
          <h3>McMinnville</h3>
        </Location>
        {mcminnville && mcminnville.map((location) => (
          <div className='location-text' key={location.id}>
            <h5>{location.place}</h5>
          </div>
        ))}
        
        <Location>
          <h3>Other</h3>
        </Location>
        {other && other.map((location) => (
          <div className='location-text' key={location.id}>
            <h5>{location.place}</h5>
            <p>{location.desc}</p>
          </div>
        ))}
          <br/>
          <br/>
      </div>
    </ForsaleWrapper>
  );
};

export default Forsale;


