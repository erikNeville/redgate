import {combineReducers} from 'redux';
import eventReducer from './eventReducer';
import imageReducer from './imageReducer';
import forsaleReducer from './forsaleReducer';

const rootReducer = combineReducers({
  events: eventReducer,
  images: imageReducer,
  forsale: forsaleReducer,
});

export default rootReducer;
