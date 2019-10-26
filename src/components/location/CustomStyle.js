import styled from 'styled-components';

/*
*
Main wrapper
*
*/
export const ContactInfoDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 15vw;

  @media screen and (max-width: 580px) {
    flex-flow: column nowrap;
    align-content: center;
    align-items: center;
    height: 33vw;
  }
`;

/*
*
Address wrapper
*
*/
export const LocationDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  padding-top: 11px;
  width: 50vw;

  .address-link {
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
      background: #940001;
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 80%;
      @media screen and (max-width: 580px) {
        width: 105%;
      }
    }
  }
`;

/*
*
Address content
*
*/
export const LocationHeader = styled.h1`
  font-size: 4vw;
  @media screen and (max-width: 580px) {
    font-size: 5.4vw;
  }
`;

export const LocationSubheader = styled.h3`
  font-size: 3.1vw;
  @media screen and (max-width: 580px) {
    font-size: 4.3vw;
  }
`;

/*
*
Phone wrapper
*
*/
export const PhoneDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-top: 11px;
  text-align: center;
  width: 50vw;
`;

/*
*
Phone content
*
*/
export const Phone = styled.h1`
  font-size: 4vw;
  @media screen and (max-width: 580px) {
    font-size: 5.9vw;
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
      background: #940001;
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }

    &:hover::after {
      transform: width;
      width: 60%;
      @media screen and (max-width: 580px) {
        width: 85%;
      }
    }
  }
`;
