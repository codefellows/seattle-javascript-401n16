import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './styles.scss';

import Products from './components/Products';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';

import { Container, CssBaseline } from '@material-ui/core';

// Connecting our app to our global state redux store
// xx Wrap the whole app in a "store provider"
// -- Pick individual components to "connect" and become "consumers"

function App() {
    return (
        <Provider store={store}>
            <CssBaseline />
            <div className='App'>
                <Header />
                <Container maxWidth='sm'>
                    <Categories />
                    <Products />
                </Container>
                <Footer />
            </div>
        </Provider>
    );
}

export default App;
