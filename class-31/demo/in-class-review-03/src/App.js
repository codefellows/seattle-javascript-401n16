import React, { useState } from 'react';
import NameForm from './components/NameForm';
import PrettyPrintName from './components/PrettyPrintName';
import AppContext from './AppContext';

function App() {
    const [name, setName] = useState('Sarah Smalls');
    const [color, setColor] = useState('orange');

    function updateState(key, val) {
        if (key === 'name') setName(val);
        else if (key === 'color') setColor(val);
    }

    return (
        <AppContext.Provider value={{ name, color }}>
            <div className='App'>
                <NameForm update={updateState} />
                <PrettyPrintName />
            </div>
        </AppContext.Provider>
    );
}

export default App;
