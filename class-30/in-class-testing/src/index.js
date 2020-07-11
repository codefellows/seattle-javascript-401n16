import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

function Main() {
    // Wrap our entire application in a provider,
    // which exposes the store to any descendant

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
