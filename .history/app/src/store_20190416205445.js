import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  rootReducer,
  applyMiddleware()
);