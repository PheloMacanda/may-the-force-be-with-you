import {createReducer} from '@reduxjs/toolkit';
import {setAppVersion} from './actions';
import {updateAppVersion} from './transformer';

export const initialState = {
  appVersion: 'fixme',
};

const reducers = createReducer(initialState, {
  [setAppVersion]: updateAppVersion,
});

export default reducers;
