import React from 'react';
import { BodyContainer } from '../../components/containers/BodyContainer';
import { ScreenContainer } from '../../components/containers/ScreenContainer';
import { connect } from 'react-redux';
import MenuList from './MenuList';

const MenuScreen = ({ menuItems }) => {
  const { pizza } = menuItems;
  console.log(pizza);
  return (
    <BodyContainer>
      <ScreenContainer>
        <MenuList menuItem={pizza} />
      </ScreenContainer>
    </BodyContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    menuItems: state.menuItems.menuItems,
  };
};

export default connect(mapStateToProps)(MenuScreen);
