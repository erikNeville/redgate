import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DescriptionDiv = styled.div`
  background: ${(props) => props.theme.primary};
  display: flex;
  flex-flow: column;
  padding-top: 1rem;
  max-width: 1120px;
  margin: auto;
  padding-right: 20px;
  padding-left: 20px;
  min-height: 30vh;
  .content {
    font-size: 18px;
    padding: 0.5rem 2rem;
  }

  .notice {
    font-size: 24px;
  }

  .notice-info {
    font-size: 18px;
  }
`;

const MenuLink = styled.p`
  width: 220px;
  line-height: 22px;

  .link {
    color: black;
    display: flex;
    flex-flow: column nowrap;
    text-shadow: 1.5px 2px rgba(148, 0, 1, 0.1);
    align-items: center;
    text-decoration: none;
    font-weight: 450;

    &::after {
      content: '';
      background: ${(props) => props.theme.hover};
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 99%;
    }
  }
`;

const Description = () => {
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
        <MenuLink>
          <Link to='/menu' className='link'>
            Check our menu to learn more!
          </Link>
        </MenuLink>
      </p>
    </DescriptionDiv>
  );
};

export default Description;
