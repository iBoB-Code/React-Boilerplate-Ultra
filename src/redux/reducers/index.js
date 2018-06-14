import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import asyncReducer from './asyncReducer';
import homeReducer from './homeReducer';
import playgroundReducer from './playgroundReducer';
import dashboardReducer from './dashboardReducer';
import roadtripReducer from './roadtripReducer';

const rootReducer = combineReducers({
  form: formReducer,
  asyn: asyncReducer,
  home: homeReducer,
  playground: playgroundReducer,
  dashboard: dashboardReducer,
  roadtrip: roadtripReducer
});

export default rootReducer;
