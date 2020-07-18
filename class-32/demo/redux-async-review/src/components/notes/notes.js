import React, {useEffect, useState, useContext} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import * as actions from '../../store/notes-actions.js';

import {ThemeContext} from '../../context/theme.js';

function Notes(props) {

  const {notesList, add, get, remove} = props;

  const [note, setNote] = useState({});

  const theme = useContext(ThemeContext);

  let styles = {
    dark: {
      backgroundColor: "#ccc"
    },
    light: {
      backgroundColor: "#f5f5f5",
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    add(note);
  }

  const handleChange = (e) => {
    setNote({text: e.target.value});
  }

  // Runs every time the component renders
  useEffect( () => {
      get(); // from props, which is from the actions....
  }, [get]);
  // [] = run only once
  // [var] = run when that var changes
  // nothing = run every single time

  return (
    <section style={styles[theme.mode]}>
      <h2>List of Notes</h2>
      <ul>
        {notesList.map( (note,idx) =>
          <li
            key={note._id}
            onClick={() => remove(note._id)}
          >{note.text}</li>
        )}
      </ul>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" onChange={handleChange} />
      </form>

      <hr />

      <button onClick={theme.toggleMode}>{theme.mode}</button>
    </section>
  )

}

const mapStateToProps = state => ({
  notesList: state.notes
});

const mapDispatchToProps = (dispatch, getState) => ({
  get: (data) => dispatch( actions.get(data) ),
  add: (data) => dispatch( actions.add(data) ),
  remove: (id) => dispatch( actions.remove(id) )
})


export default connect(mapStateToProps, mapDispatchToProps)(Notes);
