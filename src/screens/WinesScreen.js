import React from 'react';
import {BodyContainer} from '../components/BodyContainer';
import {connect} from 'react-redux';
import styled from 'styled-components';

const WinesScreenWrapper = styled.div`
  background: ${props => props.theme.primary};
  padding-top: 1rem;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
`;

const WineType = styled.h1`
  font-family: 'Tangerine';
  font-weight: bold;
`;

const WineDiv = styled.div`
  display: flex;
  flex-flow: row;
  padding-left: 20px;
`;

const WinesScreen = ({wines}) => {
  const {whites, reds} = wines;
  return (
    <BodyContainer>
      <WinesScreenWrapper>
        <WineType>Redgate Whites</WineType>
        {whites && whites.map((whiteWine) => (
          <WineDiv key={whiteWine.id}>
            <p>
              <strong>
                {whiteWine.year} {whiteWine.type}
              </strong> 
              {whiteWine.price ? ' ($'+whiteWine.price+')' : null}
              &nbsp;&mdash;&nbsp;
              {whiteWine.desc ? whiteWine.desc : null}
            </p>
          </WineDiv>
        ))}
        <WineType>Redgate Reds</WineType>
        {reds && reds.map((redWine) => (
          <WineDiv key={redWine.id}>
            <p>
              <strong>
                {redWine.year} {redWine.type}
              </strong> 
              {redWine.price ? ' ($'+redWine.price+')' : null}
              &nbsp;&mdash;&nbsp;
              {redWine.desc ? redWine.desc : null}
            </p>
          </WineDiv>
        ))}
      </WinesScreenWrapper>
    </BodyContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    wines: state.wines.wines,
  };
};

export default connect(mapStateToProps)(WinesScreen);