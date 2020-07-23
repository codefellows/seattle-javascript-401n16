import {createStore, combineReducers, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import people from './reducer.js';

let reducers = combineReducers( {people} );

const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
}

// exports a reference to a function that can make a store
// export default store;

// exports an actual store (hydrated)
// Singleton Pattern
export default store();
