import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  height: 25px;
  justify-content: space-between;
  margin-top: 25px;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 321px) {
    flex-flow: column nowrap;
    line-height: 25px;
    margin-top: 0;
  }

  .social-wrapper {
    align-content: space-between;
    display: flex;
    justify-content: space-around;
    width: 23.333vw;
  }
  .social {
    color: black;
    text-decoration: none;
    align-self: center;
    font-size: 12px;
  }
  .social:hover {
    color: ${props => props.theme.hover};
  }
  .copyright {
    align-self: center;
    width: 53.33vw;
    font-size: 11px;
  }
  .web-design-wrapper {
    width: 23.33vw;
    font-size: 11px;
  }
  .web {
    align-items: center;
    align-content: center;
    justify-content: center;
    color: black;
    display: flex;
    flex-flow: column nowrap;
    text-decoration: none;
    &:focus {
      outline: none;
    }
    &::after {
      content: '';
      align-self: center;
      background: ${props => props.theme.hover};
      display: block;
      height: 1px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 80%;
      @media screen and (max-width: 400px) {
        width: 105%;
      }
    }
  }
`;


function Footer() {
  return (
    <FooterWrapper>
      <div className='social-wrapper'>
        <a
          className='social'
          href='https://www.instagram.com/redgatewinery/'
          rel='noopener noreferrer'
          target='_blank' >
          <FontAwesomeIcon icon={faInstagram} size='2x' />
        </a>
        <a
          className='social'
          href='https://twitter.com/RedgateWinery'
          rel='noopener noreferrer'
          target='_blank' >
          <FontAwesomeIcon icon={faTwitter} size='2x' />
        </a>
        <a
          className='social'
          href='https://www.youtube.com/channel/UCa2Q1DD55tUXoe1dB9KOZ9g'
          rel='noopener noreferrer'
          target='_blank' >
          <FontAwesomeIcon icon={faYoutube} size='2x' />
        </a>
      </div>
      <div className='copyright'>
        Copyright&copy; 2020 Redgate Vineyard
      </div>
      <div className='web-design-wrapper'>
        <a
          className='web'
          href='mailto:erikeneville@gmail.com'>
          Web Design by Erik Neville
        </a>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
