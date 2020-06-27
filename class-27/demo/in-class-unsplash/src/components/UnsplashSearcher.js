import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';
import ImageGrid from './ImageGrid';
import useFetch from '../hooks/useFetch';

function UnsplashSearcher(props) {
    const [query, setQuery] = useState('dogs');
    const [count, setCount] = useState(10);
    const [columns, setColumns] = useState(4);

    const { setUrl, isLoading, error, response } = useFetch();

    useEffect(() => {
        setUrl(
            'https://api.unsplash.com/search/photos?query=' +
                query +
                '&per_page=' +
                count +
                '&client_id=b32d6e507d11436cada9517868c9ce4b1207991aa852d0c2b8a0144c80ff5e4f',
        );
    }, [query, count, columns, setUrl]);

    let images = [];

    if (response) {
        for (let i = 0; i < response.results.length; i++) {
            images.push({
                src: response.results[i].urls.thumb,
                desc: response.results[i].description,
            });
        }
    }

    return (
        <>
            <h1>Unsplash Searcher</h1>
            <FormInput
                label='Query'
                value={query}
                type='text'
                stateKey='query'
                onChange={(val) => {
                    setQuery(val);
                }}
            />
            <FormInput
                className='number-input'
                label='Count'
                stateKey='count'
                value={count}
                type='number'
                onChange={(val) => {
                    setCount(val);
                }}
            />
            <FormInput
                label='Columns'
                value={columns}
                type='number'
                stateKey='columns'
                onChange={(val) => {
                    setColumns(val);
                }}
            />

            {isLoading && <h1>LOADING!</h1>}
            {error && <h1>ERROR!</h1>}
            {response && <ImageGrid col={columns} images={images} />}
        </>
    );
}

export default UnsplashSearcher;
