import React from 'react';
import {RedgateLogo} from './CustomStyle';
import redgateLogo from '../../images/redgate-logo.png';
import {Link} from 'react-router-dom';

const Logo = () => {
  return (
    <RedgateLogo>
      <Link to='/'>
        <img className='logo-image' src={redgateLogo} alt='Redgate Winery Logo' />
      </Link>
      <Link to='/' className='logo-link'>Redgate Vinyard & Winery</Link>
    </RedgateLogo>
  );
};

export default Logo;
