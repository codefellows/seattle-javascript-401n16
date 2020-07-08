import React from 'react';
import { connect } from 'react-redux';

function CurrentCategory(props) {
    return (
        <div>
            <h3>Current Category:</h3>
            <p>{props.currentCategory}</p>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentCategory: state.currentCategory,
});

export default connect(mapStateToProps)(CurrentCategory);
