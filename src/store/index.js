import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducers';

const opt = {
  reducer: rootReducer,
  devTools: true,
  preloadedState: {},
};
const store = configureStore(opt);

export default store;
