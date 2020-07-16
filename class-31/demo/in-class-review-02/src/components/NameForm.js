import React from 'react';

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
                        props.update('name', e.target.value);
                    }}
                />
            </div>

            <div>
                <label>Your Favorite Color:</label>
                <input
                    value={props.color}
                    type='text'
                    onChange={(e) => {
                        props.update('color', e.target.value);
                    }}
                />
            </div>
        </>
    );
}

export default NameForm;
