import thunkMiddleware from'redux-thunk';
import { createStore, compose, applyMiddleware } from'redux';
import loggerMiddlewareFactory from 'redux-logger';


const middlewares = [
  thunkMiddleware,
  loggerMiddlewareFactory
];

const enhancer = compose(applyMiddleware(...middlewares));

const create = (initialState, rootReducer) => {
  return createStore(rootReducer, initialState, enhancer);
};

export default {
  create
}