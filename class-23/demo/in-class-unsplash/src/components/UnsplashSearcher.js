import React from 'react';
import FormInput from './FormInput';
import ImageGrid from './ImageGrid';

class UnsplashSearcher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: 'dogs',
            count: 10,
            columns: 4,
            results: [],
        };
    }

    componentDidMount() {
        this.pictureFetch();
    }

    // whenever query and/or count changes, call the api again

    async updateAPIParams(val, key) {
        await this.setState({ ...this.state, [key]: val });
        await this.pictureFetch();
    }

    async pictureFetch() {
        let baseURL = 'https://api.unsplash.com/search/photos?';

        baseURL += 'query=' + this.state.query;
        baseURL += '&per_page=' + this.state.count;
        baseURL +=
            '&client_id=b32d6e507d11436cada9517868c9ce4b1207991aa852d0c2b8a0144c80ff5e4f';

        let res = await fetch(baseURL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        let data = await res.json();
        data = data.results;

        let images = [];

        for (let i = 0; i < data.length; i++) {
            images.push({ src: data[i].urls.thumb, desc: data[i].description });
        }

        this.setState({ ...this.state, results: images });
    }

    render() {
        return (
            <>
                <h1>Unsplash Searcher</h1>
                <FormInput
                    label='Query'
                    value={this.state.query}
                    type='text'
                    stateKey='query'
                    onChange={this.updateAPIParams.bind(this)}
                />
                <FormInput
                    className='number-input'
                    label='Count'
                    stateKey='count'
                    value={this.state.count}
                    type='number'
                    onChange={this.updateAPIParams.bind(this)}
                />
                <FormInput
                    label='Columns'
                    value={this.state.columns}
                    type='number'
                    stateKey='columns'
                    onChange={this.updateAPIParams.bind(this)}
                />

                <ImageGrid
                    col={this.state.columns}
                    images={this.state.results}
                />
            </>
        );
    }
}

export default UnsplashSearcher;
