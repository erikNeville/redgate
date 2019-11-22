import React from 'react';
import {BodyContainer} from '../../components/containers/BodyContainer';
import RetailList from './RetailList';
import {ScreenContainer} from '../../components/containers/ScreenContainer';
import {connect} from 'react-redux';

const ForSaleScreen = ({forsale}) => {
  const {
    independence,
    monmouth,
    salem,
    dallas,
    albany,
    mcminnville,
    other,
  } = forsale;

  // console.log(albany);
  return (
    <BodyContainer>
      <ScreenContainer>
        <RetailList place={independence} />
        <RetailList place={monmouth} />
        <RetailList place={salem} />
        <RetailList place={dallas} />
        <RetailList place={albany} />
        <RetailList place={mcminnville} />
        <RetailList place={other} />
      </ScreenContainer>
    </BodyContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    forsale: state.forsale.forsale.location,
  };
};

export default connect(mapStateToProps)(ForSaleScreen);
