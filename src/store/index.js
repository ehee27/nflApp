import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import teams from './team';
import divisions from './division';
import user from './user';
import auth from './auth';

const reducer = combineReducers({
  teams,
  divisions,
  user,
  auth,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './team';
export * from './division';
export * from './user';
export * from './auth';
