import { all } from 'redux-saga/effects';
import fetchCountriesWatcher from '../modules/Example/saga';

export default function* rootSaga() {
  yield all([
    fetchCountriesWatcher(),
  ]);
}
