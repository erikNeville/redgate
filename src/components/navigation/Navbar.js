import React, {useEffect, useState} from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import {NavbarBase} from './CustomStyle';

const Navbar = () => {
  const [displayMobile, setDisplayMobile] = useState(false);
  const toggleMobileNav = () => {
    setDisplayMobile(!displayMobile);
  };
  const handleScroll = () => {
    if (displayMobile) {
      toggleMobileNav();
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
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
      <MobileNav
        displayMobile={displayMobile}
        toggleMobileNav={toggleMobileNav} />
    </NavbarBase>
  );
};

export default Navbar;
