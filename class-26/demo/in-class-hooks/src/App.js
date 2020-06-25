import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NameSetter from './components/NameSetterHooks';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Link to='/'>Home</Link>
                <Link to='/hideName'>Hide Name</Link>

                <Route path='/' exact>
                    <NameSetter />
                </Route>

                <Route path='/hideName' exact>
                    <h1>NameSetter is gone!</h1>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
