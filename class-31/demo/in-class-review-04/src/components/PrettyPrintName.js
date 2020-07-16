import React from 'react';
import { connect } from 'react-redux';

function PrettyPrintName(props) {
    return (
        <>
            <h2>Your Pretty Printed Name:</h2>
            <div style={{ backgroundColor: props.color, padding: '20px' }}>
                {props.name}
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        color: state.color,
    };
};

export default connect(mapStateToProps)(PrettyPrintName);
