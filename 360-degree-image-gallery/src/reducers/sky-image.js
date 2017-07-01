import { UPDATE_SKY, IMAGES_RETRIEVED_SUCCESS } from '../constants';

export default function(state = {}, action) {
  var newState = {...state}
  switch (action.type) {
    case UPDATE_SKY:
      console.log(action.payload)
      newState = action.payload;
      return newState;
    case IMAGES_RETRIEVED_SUCCESS:
      newState = action.payload[0];
      return newState;
    default:
      return state;
  }
}
