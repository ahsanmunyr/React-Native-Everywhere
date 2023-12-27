import {USER_DATA_TYPE} from '../actions/types';
const initialState = {};

export default function userDataRed(state = initialState, action) {
  switch (action.type) {
    case USER_DATA_TYPE:
      return action.payload;
    default:
      return state;
  }
}
