import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NewsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 0.25rem 3.5rem;
  text-align: start;
  width: 50vw;
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 300px;
  }
  .news-nav {
    color: black;
    display: flex;
    flex-flow: column nowrap;
    font-size: 4vw;
    align-items: center;
    text-decoration: none;
    @media screen and (max-width: 580px) {
      font-size: 5.4vw;
    }
    &::after {
      content: '';
      background: #940001;
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 125%;
    }
  }
`;

const News = ({news}) => {
  return (
    <NewsWrapper>
      <Link to='/news' className='news-nav'>News</Link>
      <p>News will be inserted here from database</p>
      <p>You will be able to scroll through this list</p>
      <h5>News 1 Name</h5>
      <p>News 1 description</p>  
      <h5>News 2 Name</h5>
      <p>News 2 description</p>  
      <h5>News 3 Name</h5>
      <p>News 3 description</p>  
    </NewsWrapper>
  );
};

export default News;
