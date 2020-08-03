import {takeLatest, call, put} from 'redux-saga/effects';
import {getPlanets, setPlanets} from '../redux/actions';

function getPlanetsFromApi() {
  return fetch('https://swapi.dev/api/planets/')
    .then((response) => response.json())
    .then((planets) => ({planets}))
    .catch((error) => ({error}));
}

export function* fetchPlanets() {
  // todo fetch `planets/` from swapi
  const {planets, error} = yield call(getPlanetsFromApi);
  console.log(`fetching planets {success:${planets !== undefined}}`);
  yield put(setPlanets(planets, error));
}

export default function* watcher() {
  yield takeLatest(getPlanets, fetchPlanets);
}
