import {combineReducers} from 'redux';
import splash from '../containers/splash/redux';

const reducersCombined = combineReducers({
  splash,
});

const rootReducer = (state, action) => reducersCombined(state, action);

export default rootReducer;
