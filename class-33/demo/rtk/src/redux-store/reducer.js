let initialState = []

const people = ( state=initialState, action ) => {

  let {type, payload} = action;

  switch( type ) {
    case 'LOAD':
      return payload;
    case 'ADD':
      return [...state, {name:payload}];
    case 'REMOVE':
      return state;
    default:
      return state;
  }

}

export default people;
