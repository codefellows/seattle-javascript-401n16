import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

// Old Way
// import * as actions from './redux-store/actions.js';

// RTK Way
import {add,load} from './rtk-store/people-slice.js';

function People( {people, add, load} ) {

  const [name, setName] = useState('');

    const handleChange = (e) => {
      setName(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      e.target.reset();
      add(name);
    }

    useEffect( () => {
      load();
    }, [load])

    return (
      <>
        <h2>List of People</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" onChange={handleChange} />
        </form>
        <ul>
          {
            people.map( person => <li key={person.name}>{person.name}</li> )
          }
        </ul>
      </>
    )
}

const mapStateToProps = (state) => ({
  people: state.people
});

// Old Way
// const mapDispatchToProps = ( dispatch, getState ) => ({
//   add: (name) => dispatch( actions.add(name) ),
//   load: () => dispatch( actions.load() )
// });

// RTK Way
const mapDispatchToProps = {add,load};

export default connect(mapStateToProps, mapDispatchToProps)(People);
