import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  bottom: 0;
  flex-flow: row nowrap;
  align-items: center;
  text-align: center;
  height: 20px;
  margin-top: 25px;
  padding: 0 0 2rem 2rem;

  .social {
    color: black;
    text-decoration: none;
    align-self: center;
    font-size: 12px;
  }
  .social:hover {
    color: ${props => props.theme.hover};
  }
`;

function Footer() {
  return (
    <FooterWrapper>
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
    </FooterWrapper>
  );
};

export default Footer;
