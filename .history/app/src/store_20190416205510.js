import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk1'

const store = createStore(
  rootReducer,
  applyMiddleware()
);