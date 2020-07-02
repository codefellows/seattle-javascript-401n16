import React from 'react';
import D from './D';

function C(props) {
    return (
        <div style={{ backgroundColor: 'yellow', padding: '20px' }}>
            <h3>This is the C component</h3>
            <D />
        </div>
    );
}

export default C;
