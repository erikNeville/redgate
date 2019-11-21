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
  margin-bottom: 40px;
  @media screen and (max-width: 580px) {
    margin-bottom: 59px;
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
      background: ${props => props.theme.hover};
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 74%;
      @media screen and (max-width: 580px) {
        width: 99%;
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
  font-size: 3.1vw;
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
Hours content
*
*/
export const Hours = styled.h1`
  font-size: 3.1vw;
  line-height: 27px;
  @media screen and (max-width: 580px) {
    font-size: 4.1vw;
    line-height: 5px;
  }
`;

/*
*
Phone content
*
*/
export const Phone = styled.h1`
  font-size: 3.1vw;
  @media screen and (max-width: 580px) {
    font-size: 4.8vw;
    padding-top: 10px;
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
      background: ${props => props.theme.hover};
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
