import React from 'react';
import styled from 'styled-components';

const WineDiv = styled.div`
  display: flex;
  flex-flow: row;
  padding-left: 20px;
`;

const WineTitle = styled.h1`
  font-family: 'Tangerine';
  font-weight: bold;
  text-shadow: 1.5px 2px rgba(148, 0, 1, 0.17);
  font-size: 50px;
`;

const WineList = ({wine}) => {
  return (
    <div>
      <WineTitle>{wine[0].title ? wine[0].title : null}</WineTitle>
      {wine && wine.map((wine) => (
        <WineDiv>
          <p>
            <strong>
              {wine.year} {wine.type}
            </strong>
            {wine.price ? ' ($'+wine.price+')' : null}
            &nbsp;&mdash;&nbsp;
            {wine.desc ? wine.desc : null}
          </p>
        </WineDiv>
      ))}
    </div>
  );
};

export default WineList;
