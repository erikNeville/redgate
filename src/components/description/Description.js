import React from 'react';
import { DescriptionDiv } from './CustomStyle';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const FoodLink = styled.p`
//   align-items: center;
//   align-content: center;
//   border-radius: 8px;
//   color: black;
//   display: flex;
//   flex-flow: row;
//   font-size: 2.2vh;
//   justify-content: center;
//   padding: 0 1rem;
//   text-decoration: none;

//   /* probably not needed */
//   &:focus {
//     background: rgba(0, 0, 0, 0.1);
//     outline: none;
//   }

//   /* line which grows on hover */
//   &::after {
//     content: '';
//     background: ${(props) => props.theme.hover};
//     display: block;
//     height: 2px;
//     transition: width 0.4s;
//     width: 0;
//   }
//   &:hover::after {
//     transform: width;
//     width: 125%;
//   }
// `;

const Description = (props) => {
  return (
    <DescriptionDiv>
      <hr />
      <p className='content'>
        Redgate Vineyard is a small, family owned winery crafting small lot,
        artisan wines reflecting the terroir of Redgate Estate and located just
        1 mile from the Willamette River and 12 miles SW of the State Capitol,
        Salem, Oregon.
      </p>
      <p className='content'>
        We are now serving gourmet pizzas during our events!{' '}
        <Link to='/menu' className='link'>
          Check our menu to learn more!
        </Link>
      </p>
    </DescriptionDiv>
  );
};

export default Description;
