import {DISH_LIST} from './types';
import POSSystem from '../../config/Rivake';

export const dishListAct = (id, token) => async dispatch => {
  try {
    const response = await POSSystem.post('/api/ODPOSAPI/dishList', {
        PlaceId: id,
        Token: token,
      });
      // console.log(response.data, "response.data")
      if (response.data?.Status) {
        dispatch({
          type: DISH_LIST,
          payload: response.data,
        });
      }
    return response.data;
  } catch (error) {
    console.log(error, '========================');
  }
};

