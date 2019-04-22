import { zipObject } from 'lodash';

const ACTION_TYPES = [
  'SIMPLE_ACTION',
  'RECEIVE_IMAGE_LIST_RESPONSE'
];

export default zipObject(ACTION_TYPES, ACTION_TYPES);