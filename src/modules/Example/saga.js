import { put, call, takeEvery } from 'redux-saga/effects';

import httpService from '../../shared/services/api';
import {
  FETCH_COUNTRIES_INIT,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAIL,
} from './types';

function* fetchCountriesWorker() {
  try {
    const response = yield call(httpService.get, 'region/europe');
    const data = yield call([response, response.json]);

    yield put({
      type: FETCH_COUNTRIES_SUCCESS,
      payload: data,
    });
  } catch(error) {
    yield put({
      type: FETCH_COUNTRIES_FAIL,
      payload: error.message,
    });
  }
}

export default function* fetchCountriesWatcher() {
  yield takeEvery(FETCH_COUNTRIES_INIT, fetchCountriesWorker);
}
