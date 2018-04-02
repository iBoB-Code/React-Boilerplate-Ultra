import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import asyncReducer from './asyncReducer';
import homeReducer from './homeReducer';
import dashboardReducer from './dashboardReducer';

const rootReducer = combineReducers({
  form: formReducer,
  asyn: asyncReducer,
  home: homeReducer,
  dashboard: dashboardReducer
});

export default rootReducer;
