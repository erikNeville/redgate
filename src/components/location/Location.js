import React from 'react';
import {
  ContactInfoDiv,
  Hours,
  LocationDiv,
  LocationHeader,
  LocationSubheader,
  Phone,
} from './CustomStyle';

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
          {/* tasting room hours */}
          <p>Friday 12:00 PM - 5:00 PM</p>
          <p>Saturday 12:00 PM – 5:00 PM</p>
          <p>Sunday 12:00 PM – 5:00 PM</p>
        </Hours>
      </LocationDiv>
    </ContactInfoDiv>
  );
};

export default Location;
