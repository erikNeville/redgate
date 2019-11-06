import React, {useEffect, useState} from 'react';
import {useScrollPosition} from '../../useScrollPosition';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import {NavbarBase} from './CustomStyle';

const Navbar = () => {
  const [displayMobile, setDisplayMobile] = useState(false);
  const toggleMobileNav = () => {
    setDisplayMobile(!displayMobile);
  };

  const autoHideMobileNav = () => {
    const screenWidth = window.innerWidth;
    if (displayMobile && screenWidth > 768) {
      setDisplayMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', autoHideMobileNav);
  });

  return  (
    <NavbarBase>
      <DesktopNav
        displayMobile={displayMobile}
        toggleMobileNav={toggleMobileNav} />
      <MobileNav displayMobile={displayMobile} />
    </NavbarBase>
  );
};

export default Navbar;
