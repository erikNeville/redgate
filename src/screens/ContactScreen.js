import React from 'react';
import {BodyContainer} from '../components/containers/BodyContainer';
import {ScreenContainer} from '../components/containers/ScreenContainer';
import styled from 'styled-components';

const ContactScreenWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  line-height: 10px;
  text-align: center;
  .head {
    font-family: 'Tangerine', sans-serif;
    font-style: normal;
    font-weight: 600;
    margin: 35px 0 10px 0;
    text-shadow: 1.5px 2px rgba(148, 0, 1, 0.17);
  }
  .address-link {
    background: lightgreen;
    align-self: center;
    color: black;
    display: flex;
    flex-flow: column nowrap;
    line-height: 24px;
    margin: 10px 0;
    text-decoration: none;
    width: 200px;
    &:focus {
      outline: none;
    }
    &::after {
      content: '';
      align-self: center;
      background: ${props => props.theme.hover};
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 93%;
    }
  }
  .email {
    background: lightgreen;
    align-self: center;
    color: black;
    display: flex;
    flex-flow: column nowrap;
    line-height: 24px;
    margin-bottom: 10px;
    padding-top: 20px;
    text-decoration: none;
    width: 160px;
      &:focus {
        outline: none;
      }
      &::after {
      content: '';
      align-self: center;
      background: ${props => props.theme.hover};
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 96.5%;
    }
  }

  .phone {
    background: lightgreen;
    align-self: center;
    color: black;
    display: flex;
    flex-flow: column nowrap;
    line-height: 24px;
    margin-bottom: 40px;
    padding-top: 20px;
    text-decoration: none;
    width: 120px;
      &:focus {
        outline: none;
      }
      &::after {
      content: '';
      align-self: center;
      background: ${props => props.theme.hover};
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 96%;
    }
  }
`;

const ContactScreen = () => {
  return (
    <BodyContainer>
      <ScreenContainer>
        <ContactScreenWrapper>
          <h1 className='head'>Contact Redgate Vineyard & Winery</h1>
          <br/>
          <a
            href='https://www.google.com/maps/place/8175+Buena+Vista+Rd,+Independence,+OR+97351/@44.8153295,-123.1609252,17z/data=!3m1!4b1!4m5!3m4!1s0x54c005226ea41e07:0xd7563d2996ff4eab!8m2!3d44.8153295!4d-123.1587365'
            className='address-link'
            rel='noopener noreferrer'
            target='_blank'>
            8157 Buena Vista Road&nbsp;
            Independence, Oregon 97351
          </a>
          <a className='email' href='mailto:redg8wines@gmail.com'>
            redg8wines@gmail.com
          </a>
          <a className='phone' href='tel:+1-503-428-7115'>
            1 (503) 428-7115
          </a>
        </ContactScreenWrapper>
      </ScreenContainer>
    </BodyContainer>
  );
};

export default ContactScreen;