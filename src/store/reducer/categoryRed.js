import {CATEGORY_DATA_TYPE} from '../actions/types';
const initialState = {};

export default function categoryRed(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_DATA_TYPE:
      return action.payload;
    default:
      return state;
  }
}
