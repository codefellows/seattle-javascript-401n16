import { createStore } from 'redux';

const initState = {
    name: 'Sarah Smalls',
    color: 'orange',
};

const colors = ['orange', 'aqua', 'pink'];

const reducer = (state = initState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case 'CHANGE_NAME':
            newState.name = action.payload;
            break;
        case 'CHANGE_COLOR':
            if (colors.includes(action.payload))
                newState.color = action.payload;
            else newState.color = 'red';
            break;
        default:
            break;
    }

    return newState;
};

export default createStore(reducer);
