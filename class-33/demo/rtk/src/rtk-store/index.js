import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import people from './people-slice.js';

let allOfOurReducers = combineReducers( {people} );

const store = configureStore({ reducer: allOfOurReducers })

export default store;
