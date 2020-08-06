import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import imageReducer from './imageReducer';
import menuReducer from './menuReducer';
import forsaleReducer from './forsaleReducer';
import wineReducer from './wineReducer';

const rootReducer = combineReducers({
  events: eventReducer,
  images: imageReducer,
  menuItems: menuReducer,
  forsale: forsaleReducer,
  wines: wineReducer,
});

export default rootReducer;
