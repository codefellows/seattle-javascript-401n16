const initState = {
    allCategories: [
        { name: 'electronics', displayName: 'Electronics' },
        { name: 'food', displayName: '' },
    ],
    currentCategory: 'food',
};

const reducer = (state = initState, action) => {
    console.log('categories reducer called');
    let newState = { ...state };

    switch (action.type) {
        case 'CONSOLE_LOG':
            console.log('categories');
            break;
        case 'CHANGE_CATEGORY':
            newState.currentCategory = action.payload;
            break;
        case 'ADD_CATEGORY':
            newState.allCategories.push(action.payload);
            break;
        default:
            break;
    }

    return newState;
};

export default reducer;
