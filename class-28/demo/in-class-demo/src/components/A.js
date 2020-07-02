import React, { useState } from 'react';
import B from './B';
import { NameContext } from './Contexts';

function A(props) {
    const [name, setName] = useState('');
    return (
        <div style={{ backgroundColor: 'green', padding: '20px' }}>
            <NameContext.Provider value={{ name, setName, potato: 'blah' }}>
                <h1>This is the A component</h1>
                <input
                    type='text'
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <B />
            </NameContext.Provider>
        </div>
    );
}

export default A;
