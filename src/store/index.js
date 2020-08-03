import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const opt = {
  reducer: rootReducer,
  devTools: true,
  preloadedState: {},
  middleware: [sagaMiddleware],
};
const store = configureStore(opt);

sagaMiddleware.run(rootSaga);

export default store;
