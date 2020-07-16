import React from 'react';
import NameForm from './components/NameForm';
import PrettyPrintName from './components/PrettyPrintName';

import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <NameForm />
                <PrettyPrintName />
            </div>
        </Provider>
    );
}

export default App;
