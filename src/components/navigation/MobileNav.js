import React from 'react';
import Collapse from 'react-bootstrap/Collapse';
import {MyMobileNav} from './CustomStyle';
import NavLinks from './NavLinks';

const MobileNav = (props) => {
  return (
    <Collapse in={props.displayMobile}>
      <MyMobileNav displayMobile={props.displayMobile}>
        <NavLinks
          displayMobile={props.displayMobile}
          isMobileLink={true}
          toggleMobileNav={props.toggleMobileNav} />
      </MyMobileNav>
    </Collapse>
  );
};

export default MobileNav;
