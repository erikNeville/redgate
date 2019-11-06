import React from 'react';
import Logo from './Logo';
import {MyDesktopNav, MyMobileNavButton} from './CustomStyle';
import NavLinks from './NavLinks';

const DesktopNav = (props) => {

  return (
    <MyDesktopNav>
      <Logo
        displayMobile={props.displayMobile}
        toggleMobileNav={props.toggleMobileNav} />
      <div className="fade-in">
        <NavLinks />
      </div>
      <MyMobileNavButton
        displayMobile={props.displayMobile}
        onClick={props.toggleMobileNav}>
        {/* <img src={mobileNavButton} alt='navigation-icon' /> */}
        <p className='menu'>MENU</p>
      </MyMobileNavButton>
    </MyDesktopNav>
  );
};

export default DesktopNav;
