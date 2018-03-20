import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import asyn from './asyncReducer';
import home from './homeReducer';

const rootReducer = combineReducers({
  routerReducer,
  asyn,
  home,
});

export default rootReducer;
