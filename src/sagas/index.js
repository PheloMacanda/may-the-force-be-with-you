import {all, fork} from 'redux-saga/effects';
import {enterWatcher} from '../containers/splash/saga';
import HomeWatcher from '../containers/home/saga';

function* rootSaga() {
  yield all([
    fork(enterWatcher),
    fork(HomeWatcher),
  ]);
}

export default rootSaga;
