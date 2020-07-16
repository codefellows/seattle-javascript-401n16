import React, { useContext } from 'react';
import AppContext from '../AppContext';

function PrettyPrintName(props) {
    const data = useContext(AppContext);

    return (
        <>
            <h2>Your Pretty Printed Name:</h2>
            <div style={{ backgroundColor: data.color, padding: '20px' }}>
                {data.name}
            </div>
        </>
    );
}

export default PrettyPrintName;
