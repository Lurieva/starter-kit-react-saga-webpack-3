import {
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAIL,
} from './types';

const initialState = {
  data: [],
  error: '',
};

const countriesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: '',
      };

    case FETCH_COUNTRIES_FAIL:
      return {
        ...state,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default countriesReducer;
