let initialState = [];

export default (state=initialState, action) => {
  const {type, payload} = action;

  switch(type) {
    case 'GET_NOTES':
      return payload;
    case 'ADD_NOTE':
      return [...state, payload];
    case 'DELETE_NOTE':
      return state.filter( (note) => note._id !== payload )
    default:
      return state;
  }
}
