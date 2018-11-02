import ActionTypes from '../constants/action-type';

export const simpleAction = () => dispatch => {
  debugger
  dispatch({
   type: ActionTypes.SIMPLE_ACTION,
   payload: 'result_of_simple_action'
  })
 }