import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';

// everything in rtk is a "slice" of the global state object
const peopleSlice = createSlice({

  name: 'people',

  initialState: [],

  reducers: {
    add: (state, action) => {
      state.push( {name: action.payload} )
    },
    loadData: (state, action) => {
      action.payload.forEach( creature => state.push(creature) );
    }
  }

});

export const {add, loadData} = peopleSlice.actions

export const load = () => async (dispatch) => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
  const results = response.data.results;
  dispatch(loadData(results));
}

export default peopleSlice.reducer;
