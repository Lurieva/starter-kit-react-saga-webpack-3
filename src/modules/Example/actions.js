import {
  FETCH_COUNTRIES_INIT,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAIL,
} from './types';

export const fetchCountries = () => ({
  type: FETCH_COUNTRIES_INIT,
});

export const fetchCountriesSuccess = (countriesArr) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countriesArr,
});

export const fetchCountriesFail = (errorMessage) => ({
  type: FETCH_COUNTRIES_FAIL,
  payload: errorMessage,
});
