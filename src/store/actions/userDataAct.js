import {USER_DATA_TYPE} from './types';
import POSSystem from '../../config/Rivake';

export const userDataAct = (id, token) => async dispatch => {
  try {
    // console.log(code.toString(), token)
    const response = await POSSystem.post('/api/ODPOSAPI/UserList', {
      PlaceId: id,
      Token: token,
    });

    if (response.data?.Status) {
      dispatch({
        type: USER_DATA_TYPE,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error, '===========userDataAct============');
  }
};
