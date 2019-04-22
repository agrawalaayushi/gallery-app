import ActionTypes from '../constants/action-type';
import {
  getImageList
} from '../utils/app-api-utils';

export const simpleAction = () => dispatch => {
  dispatch({
   type: 'SIMPLE_ACTION',
   payload: 'result_of_simple_action'
  })
 }

// GET IMAGE LIST
export function requestImageList(params) {
  return(dispatch)=>{
    getImageList(dispatch, params);
  }
};

export function receiveImageListResponse(response) {
  response.imageListResponse = response;
  return{
    type: ActionTypes.RECEIVE_IMAGE_LIST_RESPONSE,
    response
  }
};
