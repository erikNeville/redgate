import styled from 'styled-components';

/*
*
*
BASE NAVBAR - Navbar.js
*
*
Need to push content down when navbar reexpands
Set top margin to next section which will check for props.show in Navbar.js
*/
export const NavbarBase = styled.nav`
  background: ${props => props.theme.primary};
  color: black;
  position: fixed;
  display: flex;
  flex-wrap: nowrap;
  flex-flow: column nowrap;
  width: 100%;
  z-index: 1030;
  box-shadow: 0 2px 5px #C0C0C0;
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
  height: 80px;
  justify-content: space-around;

  /* centering the brand and logo */
  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    height: 98px;
  }

  .nav-links {
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
    @keyframes fadeIn {
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

  /* style for each individual link - NavLinks.js */
  .link {
    align-items: center;
    align-content: center;
    border-radius: 8px;
    color: black;
    display: flex;
    flex-flow: column nowrap;
    font-size: 2.2vh;
    justify-content: center;
    padding: 0 1rem;
    text-decoration: none;

    /* probably not needed */
    &:focus {
      background: rgba(0, 0, 0, 0.1);
      outline: none;
    }

    /* line which grows on hover */
    &::after {
      content: '';
      background: ${props => props.theme.hover};
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
  /* container and font of logo text */
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  font-family: 'Tangerine', cursive;
  font-size: 4.5vh;
  font-weight: bold;
  justify-content: space-around;

  /* adjusts the circular logo */
  /*
  need to adjust size of logo-image,
  vw might not be best choice. Probably
  better to use breakpoints.
  */
  .logo-image {
    margin-right: 20px;
    max-width: 50px;
    padding-bottom: 4px;
    @media screen and (max-width: 768px) {
      margin-right: 15px;
    }
  }

  /* the text for logo (Redgate Winery) */
  .logo-link {
    color: black;
    display: flex;
    flex-flow: column nowrap;
    text-decoration: none;

    &:focus {
      outline: none;
    }

    /* line underneath logo text */
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
      width: 100%;
    }
  }
`;

/*
MOBILE NAVIGATION BUTTON - DesktopNav.js
  -- Button which says 'MENU'
*/
export const MyMobileNavButton = styled.button`
  background: transparent;
  height: 6vh;
  width: 6vh;
  border: none;
  display: none;

  /* display when MENU is opened */
  .menu {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    /* insuring that TAB does not outline element */
    /* &:focus {
      outline: none;
    } */

    &::after {
      content: '';
      background: ${props => props.theme.hover};
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }

    /* underline for MENU button */
    &:hover::after {
      transform: width;
      width: 90%;
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
/* 
Style for when 'MENU' button is pressed.
Need "click-away-listener" function so that the menu closes.
*/
  align-self: center;
  background: ${props => props.theme.primary};
  display: block;
  flex-flow: column nowrap;
  justify-content: center;
  max-height: 30vh;
  width: 100%;
  
  /* The links that appear when "MENU" is pressed */
  .nav-links {
    max-height: ${props => props.displayMobile ? ('20vh') : ('0')};
    overflow: hidden;
    text-align: center;
    transition: ${props => props.displayMobile ? ('max-height 0.4s ease-in') : ('max-height 0.4s ease-out')};
  }
  
  /* Individual links within the list */
  .link {
    color: black;
    display: flex;
    flex-flow: column nowrap;
    font-size: 2.5vh;
    text-align: center;
    text-decoration: none;

    &:focus {
      outline: none;
    }

    /* line under links when MENU is open */
    &::after {
      content: '';
      background: ${props => props.theme.hover};
      display: block;
      align-self: center;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 10%;
    }
  } 
`;
