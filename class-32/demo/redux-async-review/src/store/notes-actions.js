import axios from 'axios';

export const get = () => async dispatch => {
  let results = await axios.get('http://localhost:3000/api/v1/notes')
  dispatch(createInitialList(results.data.results))
}

const createInitialList = payload => {
  return {
    type: 'GET_NOTES',
    payload
  }
}

export const add = payload => {
   return {
     type: 'ADD_NOTE',
     payload
   }
}


export const remove = (id) => async dispatch => {
  await axios.delete(`http://localhost:3000/api/v1/notes/${id}`);
  dispatch(actualRemove(id))
}

const actualRemove = id => {
  return {
    type: 'DELETE_NOTE',
    payload: id
  }
}
