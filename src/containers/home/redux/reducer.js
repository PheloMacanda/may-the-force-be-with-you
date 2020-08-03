import {createReducer} from '@reduxjs/toolkit';
import {setPlanets} from './actions';
import {setPlanets as updatePlanets} from './transformers';

export const initialState = {
  planets: [],
  errors: [],
};

const reducers = createReducer(initialState, {
  [setPlanets]: updatePlanets,
});

export default reducers;
