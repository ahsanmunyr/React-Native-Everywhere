import {DISH_LIST} from '../actions/types';
const initialState = {};

export default function dishListRed(state = initialState, action) {
  switch (action.type) {
    case DISH_LIST:
      return action.payload;
    default:
      return state;
  }
}
