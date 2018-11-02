import { zipObject } from 'lodash';

const ACTION_TYPES = [
  'SIMPLE_ACTION',
];

export default zipObject(ACTION_TYPES, ACTION_TYPES);