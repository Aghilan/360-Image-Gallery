import { GET_IMAGES , IMAGES_RETRIEVED_SUCCESS } from '../constants';


export function getImages() {
  return { type: GET_IMAGES }
}

export function successResponse(images) {
  return {payload: images, type: IMAGES_RETRIEVED_SUCCESS }
}
