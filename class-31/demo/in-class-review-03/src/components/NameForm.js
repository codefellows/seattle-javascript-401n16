import React, { useContext } from 'react';
import AppContext from '../AppContext';

function NameForm(props) {
    const data = useContext(AppContext);

    return (
        <>
            <h2>Enter Your Information</h2>
            <div>
                <label>Your Name:</label>
                <input
                    value={data.name}
                    type='text'
                    onChange={(e) => {
                        props.update('name', e.target.value);
                    }}
                />
            </div>

            <div>
                <label>Your Favorite Color:</label>
                <input
                    value={data.color}
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
