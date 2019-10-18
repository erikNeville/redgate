import styled from 'styled-components';

/*
*
*
BASE NAVBAR - Navbar.js
*
*
*/
export const MyNavbar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  overflow: hidden;
`;


/* 
*
*
DESKTOP NAVIGATION DesktopNav.js
*
*
*/
export const MyDesktopNav = styled.nav`
  align-items: center;
  background: ${props => props.theme.primary};
  color: black;
  display: flex;
  flex-flow: row nowrap;
  height: 13vh;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
  }

  .logo {
    font-size: 5vh;
    font-weight: bold;
  }

  .nav-links {
    align-items: center;
    animation: fadeIn ease 1s;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    list-style: none;
    width: 50vw;
    -webkit-animation: fadeIn ease 1s;
    -moz-animation: fadeIn ease 1s;
    -o-animation: fadeIn ease 1s;
    -ms-animation: fadeIn ease 1s;
    @keyframes fadeIn{
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    }
    @-moz-keyframes fadeIn {
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    }
    @-webkit-keyframes fadeIn {
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    }
    @-o-keyframes fadeIn {
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    }
    @-ms-keyframes fadeIn {
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .link {
    align-items: center;
    border-radius: 8px;
    color: black;
    display: flex;
    flex-flow: column nowrap;
    font-size: 2.5vh;
    justify-content: center;
    padding: 0 1rem;
    text-decoration: none;

    &:focus {
      background: rgba(0, 0, 0, 0.1);
      outline: none;
    }

    &::after {
      content: '';
      background: #940001;
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }

    &:hover::after {
      transform: width;
      width: 125%;
    }
  }
`;

/*
LOGO IMAGE AND COMPANY NAME - Logo.js
*/
export const RedgateLogo = styled.nav`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  font-size: 4.6vh;
  font-weight: bold;

  .logo-image {
    align-self: center;
    margin-right: 40px;
    width: 55px;;
  }

  .logo-link {
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
      width: 100%;
    }
  }
`;

/*
MOBILE NAVIGATION BUTTON - DesktopNav.js
*/
export const MyMobileNavButton = styled.button`
  background: transparent;
  height: 6vh;
  width: 6vh;
  border: none;
  display: none;
  /* transition: transform 0.75s; */
  /* transform: rotate(${props => props.displayMobile ? ('180deg') : ('0deg')}); */

  .menu {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    &:focus {
      outline: none;
    }

    &:hover {
      letter-spacing: .5rem;
    }

    &::after {
      content: '';
      background: #940001;
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }

    &:hover::after {
      transform: width;
      width: 150%;
    }
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    animation: fadeIn ease 1s;
    display: block;
    -webkit-animation: fadeIn ease 1s;
    -moz-animation: fadeIn ease 1s;
    -o-animation: fadeIn ease 1s;
    -ms-animation: fadeIn ease 1s;
    @keyframes fadeIn{
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    }
    @-moz-keyframes fadeIn {
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    }
    @-webkit-keyframes fadeIn {
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    }
    @-o-keyframes fadeIn {
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    }

    @-ms-keyframes fadeIn {
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    }
  }
`;

/*
*
*
MOBILE NAVIGATION - MobileNav.js
*
*
*/
export const MyMobileNav = styled.nav`  
  align-self: center;
  background: ${props => props.theme.primary};
  display: block;
  flex-flow: column nowrap;
  justify-content: center;
  max-height: 20vh;
  width: 100%;
  
  .nav-links {
    /* display: flex; */
    /* flex-flow: column nowrap; */
    /* justify-content: space-around; */
    list-style: none;
    max-height: ${props => props.displayMobile ? ('20vh') : ('0')};
    overflow: hidden;
    text-align: center;
    transition: ${props => props.displayMobile ? ('max-height 0.4s ease-in') : ('max-height 0.4s ease-out')};
  }
  
  .link {
    color: black;
    display: flex;
    flex-flow: column nowrap;
    font-size: 2.5vh;
    text-align: center;
    text-decoration: none;

    /* &:hover {
      letter-spacing: 10px;
    } */

    &:focus {
      background: rgba(0, 0, 0, 0.1);
      outline: none;
    }

    &::after {
      content: '';
      background: #940001;
      display: block;
      align-self: center;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }

    &:hover::after {
      transform: width;
      width: 25%;
    }
  } 
`;
