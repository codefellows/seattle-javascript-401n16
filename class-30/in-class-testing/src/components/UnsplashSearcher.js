import React, { useState, useEffect } from 'react';
import {
    GridListTile,
    Typography,
    TextField,
    GridList,
} from '@material-ui/core';

import useFetch from '../hooks/useFetch';

function UnsplashSearcher(props) {
    const [query, setQuery] = useState('dogs');
    const [count, setCount] = useState(10);
    const [columns, setColumns] = useState(4);

    const { setRequest, isLoading, error, response } = useFetch();

    useEffect(() => {
        setRequest({
            url:
                'https://api.unsplash.com/search/photos?query=' +
                query +
                '&per_page=' +
                count +
                '&client_id=b32d6e507d11436cada9517868c9ce4b1207991aa852d0c2b8a0144c80ff5e4f',
        });
    }, [query, count, columns, setRequest]);

    let images = [];

    if (response) {
        for (let i = 0; i < response.results.length; i++) {
            images.push(
                <GridListTile key={i}>
                    <img
                        src={response.results[i].urls.thumb}
                        alt={response.results[i].description}
                    />
                </GridListTile>,
            );
        }
    }

    return (
        <div style={{ marginTop: '50px' }}>
            <Typography component='h1' variant='h4'>
                Unsplash Searcher
            </Typography>
            <TextField
                label='Query'
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
                margin='normal'
            />

            <TextField
                label='Count'
                value={count}
                type='number'
                onChange={(e) => {
                    setCount(parseInt(e.target.value));
                }}
                margin='normal'
            />

            <TextField
                label='Columns'
                value={columns}
                type='number'
                onChange={(e) => {
                    setColumns(parseInt(e.target.value));
                }}
                margin='normal'
            />

            {isLoading && <h1>LOADING!</h1>}
            {error && <h1>ERROR!</h1>}
            {response && (
                <GridList cellHeight={160} cols={columns}>
                    {images}
                </GridList>
            )}
        </div>
    );
}

export default UnsplashSearcher;
