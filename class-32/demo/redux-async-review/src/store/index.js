import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

// import thunk from 'redux-thunk';
import thunk from './middleware/thunk.js';

import notesReducer from './notes-reducer.js';

let reducers = {
  notes: notesReducer,
};

const store = () => createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));

export default store();
