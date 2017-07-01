import { combineReducers } from 'redux';
import images from './images';
import skyImage from './sky-image';

const allReducer = combineReducers({
  images,
  skyImage
});

export default allReducer;
