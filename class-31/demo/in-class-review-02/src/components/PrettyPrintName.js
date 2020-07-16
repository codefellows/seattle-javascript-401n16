import React from 'react';

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

export default PrettyPrintName;
