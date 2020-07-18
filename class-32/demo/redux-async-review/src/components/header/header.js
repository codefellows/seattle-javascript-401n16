import React from 'react';

import {connect} from 'react-redux';

function Header(props) {

    const {title} = props;

    return (
      <header>
        <h1>{title} ({props.notes.length})</h1>
      </header>
    )

}

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps)(Header);
