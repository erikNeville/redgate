import React from 'react';
import {BodyContainer} from '../../components/containers/BodyContainer';
import {ScreenContainer} from '../../components/containers/ScreenContainer';
import {connect} from 'react-redux';
import WineList from './WineList';

const WinesScreen = ({wines}) => {
  const {whites, reds} = wines;
  return (
    <BodyContainer>
      <ScreenContainer>
        <WineList wine={whites} />
        <WineList wine={reds} />
      </ScreenContainer>
    </BodyContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    wines: state.wines.wines,
  };
};

export default connect(mapStateToProps)(WinesScreen);
