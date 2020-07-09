// xx - define the initial state
// define the reducer
// -- defining the action types
// -- define the behavior for each action type
// redux magic to combine the init state and reducer into a redux store

// useState(initState)
// this.state = initState

import { createStore } from 'redux';

const initState = {
    cart: 0,
    categories: [
        { name: 'electronics', displayName: 'Electronics' },
        { name: 'food', displayName: '' },
    ],
    products: [
        {
            name: 'TV',
            description: 'See all the things',
            stock: 5,
            price: 400,
            category: 'electronics',
        },
        {
            name: 'Macbook',
            description: 'Do all the things',
            stock: 7,
            price: 1200,
            category: 'electronics',
        },
        {
            name: 'Carrot',
            description: 'Crunch all the things',
            stock: 25,
            price: 0.3,
            category: 'food',
        },
        {
            name: 'Cake',
            description: 'Lie all the things',
            stock: 10,
            price: 5,
            category: 'food',
        },
    ],
    currentCategory: 'food',
};

const reducer = (state = initState, action) => {
    // state = the current state (non mutable)
    // action = an object containing type and payload

    let newState = { ...state };

    switch (action.type) {
        // define our application's acceptable actions

        case 'ADD_TO_CART':
            break;
        case 'CHANGE_CATEGORY':
            newState.currentCategory = action.payload;
            break;
        default:
            break;
    }

    return newState;
};

export default createStore(reducer);
