import { GET_IMAGES, IMAGES_RETRIEVED_SUCCESS } from '../constants';

import ReadApiCall from '../utils/get-request';

export default function(state = [], action) {
  var newState = {...state}
  switch (action.type) {
    case GET_IMAGES:
      ReadApiCall.getImages();
      return state
    case IMAGES_RETRIEVED_SUCCESS:
    newState = action.payload;
    return newState;
    default:
      return state;
  }
}
