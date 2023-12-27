import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

import loginRed from './reducer/loginRed';
import otpRed from './reducer/otpRed';
import userDataRed from './reducer/userDataRed';
import categoryRed from './reducer/categoryRed';
import dishListRed from './reducer/dishlistRed';

const reducers = combineReducers({
  loginRed,
  otpRed,
  userDataRed,
  categoryRed,
  dishListRed
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      // serializableCheck: {
     
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }),
});

export const persistor = persistStore(store);
export default store;