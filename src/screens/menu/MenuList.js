import React from 'react';
import styled from 'styled-components';

const Food = styled.h1`
  position: -webkit-sticky;
  position: sticky;
  font-family: 'Tangerine';
  font-weight: bold;
  background: white;
  display: right;
  top: 0;
  text-shadow: 1.5px 2px rgba(148, 0, 1, 0.17);
  font-size: 70px;
`;

const MenuDiv = styled.div`
  display: flex;
  flex-flow: row;
  padding-left: 15px;
  padding-bottom: 8px;

  .food-type {
    font-weight: 600;
  }

  .style {
    font-weight: 600;
    font-size: 22px;
  }
`;

const DescriptionDiv = styled.div`
  display: flex;
  flex-flow: column;
  padding-left: 15px;
  padding-bottom: 15px;
`;

const DescriptionText = styled.h4`
  margin-bottom: 8px;
`;

const MenuList = ({ menuItem }) => {
  return (
    <div>
      <Food>Pizza</Food>
      <DescriptionDiv>
        <DescriptionText>
          Now serving gourmet pizza during events!
        </DescriptionText>
        <DescriptionText>Chose between the options below (pizzas typically serve four):</DescriptionText>
      </DescriptionDiv>
      {menuItem &&
        menuItem.map((item) => (
          <MenuDiv>
            {item.type && (
              <p>
                <strong className='style'>{item.type}</strong>
                &nbsp;&mdash;&nbsp;
                {item.price}
              </p>
            )}
          </MenuDiv>
        ))}
      <DescriptionDiv>
        <DescriptionText>
          Add $5 if you'd like a custom half & half pie
        </DescriptionText>
      </DescriptionDiv>
    </div>
  );
};

export default MenuList;
