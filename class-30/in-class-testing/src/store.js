import { createStore } from 'redux';

const initState = {
    categories: [
        { name: 'electronics', displayName: 'Electronics' },
        { name: 'food', displayName: 'Food' },
        { name: 'clothing' },
    ],
    products: [
        { name: 'TV', category: 'electronics', price: 699.0, inStock: 5 },
        { name: 'Radio', category: 'electronics', price: 99.0, inStock: 15 },
        { name: 'Shirt', category: 'clothing', price: 9.0, inStock: 25 },
        { name: 'Socks', category: 'clothing', price: 12.0, inStock: 10 },
        { name: 'Apples', category: 'food', price: 0.99, inStock: 500 },
        { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
        { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
    ],
    currentCategory: '',
    cart: [],
};

const reducer = (state = initState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case 'SET_CURRENT_CATEGORY':
            newState.currentCategory = action.payload;
            break;
        case 'ADD_TO_CART':
            newState.cart.push(action.payload);
            break;
        case 'RESET_STORE':
            newState = { ...initState };
            break;
        default:
            break;
    }

    return newState;
};

export default createStore(reducer);
export { reducer };
