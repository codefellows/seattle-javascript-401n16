import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

// Connecting our app to our global state redux store
// xx Wrap the whole app in a "store provider"
// -- Pick individual components to "connect" and become "consumers"

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <h1>Hello World</h1>
            </div>
        </Provider>
    );
}

export default App;
