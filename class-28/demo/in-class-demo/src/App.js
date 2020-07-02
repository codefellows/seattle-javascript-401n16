import React, { useState } from 'react';
import A from './components/A';
import { ListContext } from './components/Contexts';

function App() {
    const [displayCount, setDisplayCount] = useState(3);

    return (
        <div className='App'>
            <ListContext.Provider value={{ displayCount, setDisplayCount }}>
                <h1>Hello World</h1>
                <A />
            </ListContext.Provider>
        </div>
    );
}

export default App;
