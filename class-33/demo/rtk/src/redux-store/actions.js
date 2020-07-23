import axios from 'axios';

export const add = (name) => {
  return {
    type: "ADD",
    payload: name
  }
}

export const remove = (name) => {
  return {
    type: "REMOVE",
    payload: name
  }
}

export const load = () => async (dispatch) => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
  const results = response.data.results;
  dispatch(loadData(results));

  function loadData (payload) {
    return {
      type: "LOAD",
      payload
    }
  }

}
