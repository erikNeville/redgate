import React from 'react';
import {
  ContactInfoDiv,
  LocationDiv,
  LocationHeader,
  LocationSubheader,
  PhoneDiv,
  Phone
} from './CustomStyle';

const Location = () => {
  return (
    <ContactInfoDiv>
      <LocationDiv>
        <a
          href='https://www.google.com'
          className='address-link'
          rel='noopener noreferrer'
          target='_blank'>
          <LocationHeader>8175 Buena Vista Road</LocationHeader>
          <LocationSubheader>Independence, Oregon 97351</LocationSubheader>
        </a>
      </LocationDiv>
      <PhoneDiv>
        <Phone>
          <a href='tel:+1-503-428-7115' className='phone-link'>
            1 (503) 428-7115
          </a>
        </Phone>
      </PhoneDiv>
      
      
    </ContactInfoDiv>
  );
};

export default Location;
