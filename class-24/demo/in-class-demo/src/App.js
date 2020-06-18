import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './components/Nav';
import HomePage from './pages/HomePage';

function App() {
    let links = [
        { displayName: 'Home', url: '/' },
        { displayName: 'About', url: '/about' },
        { displayName: 'Contact', url: '/contact' },
    ];
    return (
        <div className='App'>
            <h1>My app</h1>
            <BrowserRouter>
                <Nav links={links} />

                <Route path='/' exact>
                    <HomePage>
                        <p>Hello this is my content</p>
                        <p>Hello this is my content</p>
                        <p>This is my other paragraph</p>
                    </HomePage>
                </Route>

                <Route path='/about'>
                    <h1>About</h1>
                </Route>

                <Route path='/contact' exact>
                    <h1>Contact</h1>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
