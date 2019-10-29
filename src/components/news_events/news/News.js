import React from 'react';
import styled from 'styled-components';

const NewsWrapper = styled.div`
  background: lightblue;
  width: 50vw;
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 300px;
  }
`;

const News = ({news}) => {
  return (
    <div>
      News
    </div>
  );
};

export default News;
