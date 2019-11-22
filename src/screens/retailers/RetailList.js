import React from 'react';
import styled from 'styled-components';

const City = styled.h1`
  font-family: 'Tangerine';
  font-weight: bold;
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
