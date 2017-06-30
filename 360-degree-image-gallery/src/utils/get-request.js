import { successResponse } from '../actions';
import responseHandler from './responseHandler'

const ReadApiCall = {
 getImages() {
   makeApiCall('https://demo0813639.mockable.io/getPanos')
 }
};

const makeApiCall = (path) => {
  return fetch(path, {
    method: 'get',
  })
  .then(response => responseHandler(response, successResponse))
  .catch(error => { console.log('request failed', error); });
}

export default ReadApiCall;
