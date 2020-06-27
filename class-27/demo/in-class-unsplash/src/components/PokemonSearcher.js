import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';
import useFetch from '../hooks/useFetch';

function PokemonSearcher(props) {
    const [query, setQuery] = useState('dogs');
    const { setUrl, isLoading, error, response } = useFetch();

    useEffect(() => {
        setUrl('https://pokeapi.co/api/v2/pokemon/' + query);
    }, [query, setUrl]);

    return (
        <>
            <h1>Unsplash Searcher</h1>
            <FormInput
                label='Pokemon Name'
                value={query}
                type='text'
                stateKey='query'
                onChange={(val) => {
                    setQuery(val);
                }}
            />
            {isLoading && <h1>LOADING!</h1>}
            {error && <h1>ERROR!</h1>}
            {response && <div>{JSON.stringify(response)}</div>}
        </>
    );
}

export default PokemonSearcher;
