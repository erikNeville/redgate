import {combineReducers} from 'redux';
import eventReducer from './eventReducer';
import imageReducer from './imageReducer';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
  events: eventReducer,
  images: imageReducer,
  news: newsReducer,
});

export default rootReducer;
