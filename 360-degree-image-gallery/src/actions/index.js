import { GET_IMAGES , IMAGES_RETRIEVED_SUCCESS, UPDATE_SKY } from '../constants';


export function getImages() {
  return { type: GET_IMAGES }
}

export function successResponse(images) {
  return {payload: images, type: IMAGES_RETRIEVED_SUCCESS }
}

export function updateSky(image) {
  return { payload: image, type: UPDATE_SKY }
}
