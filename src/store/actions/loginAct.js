import {LOGIN_TYPE_VALUE} from './types';
import POSSystem from '../../config/Rivake';

export const login = (email, password) => async dispatch => {
  try {
    const response = await POSSystem.post('/api/ODPOSAPI/login', {
      Email: email,
      Password: password,
    });
    if (response.data?.Status) {
      dispatch({
        type: LOGIN_TYPE_VALUE,
        payload: response.data,
      });
    }
    return response.data;
  } catch (error) {
    console.log(error, '========================');
  }
};

