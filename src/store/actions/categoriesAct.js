// konnect.defaults.headers.common['Authorization'] =
//       'Bearer ' + res.data.data.token;
import {CATEGORY_DATA_TYPE} from './types';
import POSSystem from '../../config/Rivake';

export const categoryAct = (id, token) => async dispatch => {
  try {
    // console.log(id, token, "id, token")
    const response = await POSSystem.post('/api/ODPOSAPI/foodCategoriesList', {
        PlaceId: id,
        Token: token,
    });
    if (response.data?.Status) {
      dispatch({
        type: CATEGORY_DATA_TYPE,
        payload: response.data,
      });
    }
    return response.data;
  } catch (error) {
    console.log(error, '========================');
  }
};
