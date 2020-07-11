import React from 'react';
import { connect } from 'react-redux';
import { Button, Typography, ButtonGroup } from '@material-ui/core';

function Categories(props) {
    let categoryHTML = [];

    for (let i = 0; i < props.categories.length; i++) {
        let category = props.categories[i];
        categoryHTML.push(
            <Button
                key={i}
                id={i + '-button'}
                color='primary'
                onClick={() => {
                    props.dispatch({
                        type: 'SET_CURRENT_CATEGORY',
                        payload: props.categories[i].name,
                    });
                }}
            >
                {category.displayName || category.name}
            </Button>,
        );
    }

    return (
        <div
            id='categories'
            style={{ marginTop: '50px', marginBottom: '20px' }}
        >
            <Typography
                style={{ marginBottom: '20px' }}
                variant='h4'
                component='h1'
            >
                Browse our Categories
            </Typography>
            <ButtonGroup
                variant='text'
                color='primary'
                aria-label='text primary button group'
            >
                {categoryHTML}
            </ButtonGroup>
        </div>
    );
}

const mapStateToProps = (state) => ({
    categories: state.categories,
});

export default connect(mapStateToProps)(Categories);
