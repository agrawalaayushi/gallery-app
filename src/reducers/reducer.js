import ActionTypes from '../constants/action-type';
import { Map as makeMap } from 'immutable';

export const initialState =  makeMap({

});

const reducer = (state = initialState, action) => {

  if (!action.type) {
    console.log('Payload missing a type!', action);
  }

  switch (action.type) {

    case ActionTypes.RECEIVE_IMAGE_LIST_RESPONSE: {
      state = state.set('imageListResponse', action.response.imageListResponse);
      return state;
    }

    default:
      return state
  }
 }

 export default reducer;