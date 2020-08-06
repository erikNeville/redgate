import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = (props) => {
  const closeNav = () => {
    if (props.displayMobile) {
      props.toggleMobileNav();
    }
  };
  let tempTabIndex;
  if (props.isMobileLink) {
    tempTabIndex = '-1';
  }

  return (
    <ul className='nav-links'>
      <li>
        <Link
          to='/events'
          className='link'
          onClick={closeNav}
          tabIndex={tempTabIndex}>
          Events
        </Link>
      </li>
      <li>
        <Link
          to='/wines'
          className='link'
          onClick={closeNav}
          tabIndex={tempTabIndex}>
          Wines
        </Link>
      </li>
      <li>
        <Link
          to='/menu'
          className='link'
          onClick={closeNav}
          tabIndex={tempTabIndex}>
          Food
        </Link>
      </li>
      <li>
        <Link
          to='/retailers'
          className='link'
          onClick={closeNav}
          tabIndex={tempTabIndex}>
          Retailers
        </Link>
      </li>
      <li>
        <Link
          to='/contact'
          className='link'
          onClick={closeNav}
          tabIndex={tempTabIndex}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
