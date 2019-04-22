import axios from 'axios';
import {
  receiveImageListResponse
} from '../actions/action';

// const API_KEY = 'd0ee4be53c1f50b44fec5320332436f9';
// const GROUP_ID= 'group_id=2309748%40N20';
// const RESPONSE_FORMAT = 'json';
// const API_URL = 'https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&';
// GET IMAGE LIST
export function getImageList(dispatch, params) {
  const url = 'https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=d0ee4be53c1f50b44fec5320332436f9&group_id=2309748%40N20&format=json&nojsoncallback=1'
  // const url = `api_key=${API_KEY}&${GROUP_ID}&format=${RESPONSE_FORMAT}&nojsoncallback=1`;
  axios.get(url)
  .then(response => {
    const successResponse = response.data;
    dispatch(receiveImageListResponse(successResponse));
  })
  .catch(error => {
    const errorResponse = error;
    dispatch(receiveImageListResponse(errorResponse));
  });
};