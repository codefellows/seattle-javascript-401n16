import { reducer } from '../store';

/*

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

*/

describe('reducer correctly changes state', () => {
    it('runs the SET_CURRENT_CATEGORY action', () => {
        let newState = reducer(
            {},
            { type: 'SET_CURRENT_CATEGORY', payload: 'blah' },
        );

        expect(newState.currentCategory).toEqual('blah');
    });

    it('runs the ADD_TO_CART action', () => {
        let newState = reducer(
            { cart: [] },
            { type: 'ADD_TO_CART', payload: 'blah' },
        );

        expect(newState.cart.length).toBe(1);

        newState = reducer(newState, { type: 'ADD_TO_CART', payload: 'blah' });

        expect(newState.cart.length).toBe(2);
    });

    it('runs the RESET_STORE action', () => {
        let newState = reducer({ key: 'notblah' }, { type: 'RESET_STORE' });

        expect(newState.key).toBeUndefined();
        expect(newState.categories.length).toBe(3);
    });
});
