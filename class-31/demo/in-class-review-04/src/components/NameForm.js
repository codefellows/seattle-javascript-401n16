import React from 'react';
import { connect } from 'react-redux';

function NameForm(props) {
    return (
        <>
            <h2>Enter Your Information</h2>
            <div>
                <label>Your Name:</label>
                <input
                    value={props.name}
                    type='text'
                    onChange={(e) => {
                        props.dispatch({
                            type: 'CHANGE_NAME',
                            payload: e.target.value,
                        });
                    }}
                />
            </div>

            <div>
                <label>Your Favorite Color:</label>
                <input
                    defaultValue={props.color}
                    type='text'
                    onChange={(e) => {
                        props.dispatch({
                            type: 'CHANGE_COLOR',
                            payload: e.target.value,
                        });
                    }}
                />
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

export default connect(mapStateToProps)(NameForm);
