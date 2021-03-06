/*
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
*/

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeEnhancers(applyMiddleware(thunk))
  );
}
