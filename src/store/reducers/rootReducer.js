import {combineReducers} from 'redux';
import eventReducer from './eventReducer';
import imageReducer from './imageReducer';
import forsaleReducer from './forsaleReducer';
import wineReducer from './wineReducer';

const rootReducer = combineReducers({
  events: eventReducer,
  images: imageReducer,
  forsale: forsaleReducer,
  wines: wineReducer,
});

export default rootReducer;
