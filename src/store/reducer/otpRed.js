import {OTP_TYPE} from '../actions/types';
const initialState = {};

export default function otpRed(state = initialState, action) {
  switch (action.type) {
    case OTP_TYPE:
      return action.payload;
    default:
      return state;
  }
}
