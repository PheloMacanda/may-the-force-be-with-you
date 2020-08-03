import {combineReducers} from 'redux';
import splash from '../containers/splash/redux';
import home from '../containers/home/redux';

const reducersCombined = combineReducers({
  splash,
  home,
});

const rootReducer = (state, action) => reducersCombined(state, action);

export default rootReducer;
