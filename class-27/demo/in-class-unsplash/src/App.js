import React from 'react';
import UnsplashSearcher from './components/UnsplashSearcher';
import PokemonSearcher from './components/PokemonSearcher';
import './styles/styles.scss';

function App() {
    return (
        <div className='App'>
            <PokemonSearcher />
            <UnsplashSearcher />
        </div>
    );
}

export default App;
