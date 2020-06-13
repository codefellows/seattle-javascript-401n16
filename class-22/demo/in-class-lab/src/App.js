import React from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Counter from './components/Counter.js';

import './styles/styles.sass';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Counter />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
