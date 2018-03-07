import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dummy from './dummyReducer';

const rootReducer = combineReducers(
  {
    routerReducer,
    dummy,
  },
);

export default rootReducer;
