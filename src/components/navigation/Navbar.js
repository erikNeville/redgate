import React, {useEffect, useMemo, useState} from 'react';
import {useScrollPosition} from '../../useScrollPosition';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import {MyNavbar} from './CustomStyle';

const Navbar = () => {
  const [displayMobile, setDisplayMobile] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(({prevPos, currPos}) => {
    const isShow = currPos.y > prevPos.y;
    if (isShow !== hideOnScroll) {
      setHideOnScroll(isShow);
      setDisplayMobile(false);
    }
  }, [hideOnScroll], false, false, 350);

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
    <MyNavbar show={hideOnScroll}>
      <DesktopNav
        displayMobile={displayMobile}
        toggleMobileNav={toggleMobileNav}
        show={hideOnScroll} />
      <MobileNav displayMobile={displayMobile} show={hideOnScroll} />
    </MyNavbar>
  );
};

export default Navbar;
