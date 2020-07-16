import React, { useState } from 'react';
import NameForm from './components/NameForm';
import PrettyPrintName from './components/PrettyPrintName';

function App() {
    const [name, setName] = useState('Sarah Smalls');
    const [color, setColor] = useState('orange');

    function updateState(key, val) {
        if (key === 'name') setName(val);
        else if (key === 'color') setColor(val);
    }

    return (
        <div className='App'>
            <NameForm name={name} color={color} update={updateState} />
            <PrettyPrintName name={name} color={color} />
        </div>
    );
}

export default App;
