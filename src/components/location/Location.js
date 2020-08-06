import React from 'react';
import { LocationDiv, LocationHeader, LocationSubheader } from './CustomStyle';
import styled from 'styled-components';

const ContactInfoDiv = styled.div`
  /* background: orange; */
  display: flex;
  flex-flow: row nowrap;
  height: 150px;
  /* margin-bottom: 40px; */
  @media screen and (max-width: 580px) {
    margin-bottom: 59px;
    flex-flow: column nowrap;
    align-content: center;
    align-items: center;
    height: 215px;
  }
`;

const Phone = styled.h1`
  /* background: lightblue; */
  font-size: 30px;
  @media screen and (max-width: 580px) {
    font-size: 25px;
    padding-top: 10px;
    margin-bottom: 10px;
  }

  /* display for phone number */
  .phone-link {
    color: black;
    display: flex;
    flex-flow: column nowrap;
    text-decoration: none;

    &:focus {
      outline: none;
    }

    /* line under phone number link */
    &::after {
      content: '';
      align-self: center;
      background: ${(props) => props.theme.hover};
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }

    &:hover::after {
      transform: width;
      width: 45%;
      @media screen and (max-width: 580px) {
        width: 65%;
      }
    }
  }
`;

const Hours = styled.h1`
  margin-top: 15px;
  padding-top: 5px;
  /* background: lightgreen; */
  font-size: 24px;
  line-height: 14px;
  @media screen and (max-width: 580px) {
    font-size: 15px;
    line-height: 5px;
    padding-top: 10px;
  }
  .tasting-hours {
    font-family: 'Tangerine';
    font-size: 40px;
    font-weight: 600;
    padding-bottom: 15px;
    @media screen and (max-width: 580px) {
      font-size: 29px;
    }
  }
`;

const Location = () => {
  return (
    <ContactInfoDiv>
      <LocationDiv>
        <a
          href='https://www.google.com/maps/place/8175+Buena+Vista+Rd,+Independence,+OR+97351/@44.8153295,-123.1609252,17z/data=!3m1!4b1!4m5!3m4!1s0x54c005226ea41e07:0xd7563d2996ff4eab!8m2!3d44.8153295!4d-123.1587365'
          className='address-link'
          rel='noopener noreferrer'
          target='_blank'>
          <LocationHeader>8175 Buena Vista Road</LocationHeader>
          <LocationSubheader>Independence, Oregon 97351</LocationSubheader>
        </a>
        <Phone>
          <a href='tel:+1-503-428-7115' className='phone-link'>
            1 (503) 428-7115
          </a>
        </Phone>
      </LocationDiv>

      <LocationDiv>
        <Hours>
          <p className='tasting-hours'>Tasting Room Hours</p>
          <p>Friday 12:00 PM - 9:00 PM</p>
          <p>Saturday 12:00 PM – 9:00 PM</p>
          <p>Sunday 12:00 PM – 5:00 PM</p>
        </Hours>
      </LocationDiv>
    </ContactInfoDiv>
  );
};

export default Location;
