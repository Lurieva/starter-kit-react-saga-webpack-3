import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import countriesReducer from '../modules/Example/reducer';

export default combineReducers({
  countries: countriesReducer,
  form: formReducer,
});
