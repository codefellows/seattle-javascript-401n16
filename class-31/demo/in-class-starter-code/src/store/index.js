import { createStore, combineReducers } from 'redux';

import cartReducer from './cartReducer';
import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';

let reducers = combineReducers({
    cart: cartReducer,
    categories: categoriesReducer,
    products: productsReducer,
});

export default createStore(reducers);
