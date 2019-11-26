import React from 'react';
import styled from 'styled-components';

const City = styled.h1`
  font-family: 'Tangerine';
  font-weight: bold;
  text-shadow: 1.5px 2px rgba(148, 0, 1, 0.17);
  font-size: 40px;
`;

const RetailDiv = styled.div`
  display: flex;
  flex-flow: row;
  padding-left: 20px;
`;

const RetailList = ({place}) => {
  return (
    <div>
      <City>
        {place[0].city ? place[0].city : null}
      </City>
      {place && place.map((retailer) => (
        <RetailDiv key={retailer.id}>
          {retailer.place}
        </RetailDiv>
      ))}
    </div>
  );
};

export default RetailList;
