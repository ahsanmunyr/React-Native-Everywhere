import {LOGIN_TYPE_VALUE} from '../actions/types';
const initialState = {};

export default function loginRed(state = initialState, action) {
  switch (action.type) {
    case LOGIN_TYPE_VALUE:
      return action.payload;
    default:
      return state;
  }
}
