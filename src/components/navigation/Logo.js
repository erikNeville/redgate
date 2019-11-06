import React from 'react';
import {RedgateLogo} from './CustomStyle';
import redgateLogo from '../../images/redgate-logo.png';
import {Link} from 'react-router-dom';

const Logo = (props) => {
  const closeNav = () => {
		if (props.displayMobile) {
			props.toggleMobileNav();
		}
	};
  return (
    <RedgateLogo>
      <Link to='/' onClick={closeNav}>
        <img className='logo-image' src={redgateLogo} alt='Redgate Winery Logo' />
      </Link>
      <Link to='/' className='logo-link' onClick={closeNav}>
        Redgate Vinyard & Winery
      </Link>
    </RedgateLogo>
  );
};

export default Logo;
