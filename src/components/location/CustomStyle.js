import styled from 'styled-components';

/*
*
Main wrapper
*
*/
export const ContactInfoDiv = styled.div`
  background: orange;
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
  /* background: green; */
  justify-content: center;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  width: 60vw;

  .address-link {
    /* background: lightpink; */
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
        width: 75%;
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
  font-size: 30px;
  @media screen and (max-width: 580px) {
    font-size: 19px;
  }
`;

export const LocationSubheader = styled.h3`
  font-size: 24px;
  @media screen and (max-width: 580px) {
    font-size: 16px;
  }
`;

