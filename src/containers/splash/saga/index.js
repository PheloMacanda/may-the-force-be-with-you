import {takeLatest} from 'redux-saga/effects';
import {enterClicked} from '../redux/actions';

export function* enterWorker() {
  yield console.log('Hello');
}

export function* enterWatcher() {
  yield takeLatest(enterClicked, enterWorker);
}
