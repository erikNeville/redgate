import React, {useEffect, useState} from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import {MyNavbar} from './CustomStyle';

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

  return (
    <MyNavbar>
      <DesktopNav
        displayMobile={displayMobile}
        toggleMobileNav={toggleMobileNav} />
      <MobileNav displayMobile={displayMobile} />
    </MyNavbar>
  );
};

export default Navbar;
