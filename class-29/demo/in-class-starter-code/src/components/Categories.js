import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

function Categories(props) {
    let categoriesHTML = [];

    for (let i = 0; i < props.categories.length; i++)
        categoriesHTML.push(
            <Button
                variant='contained'
                color='secondary'
                key={i}
                onClick={(e) => {
                    // change the current category
                    props.dispatch({
                        type: 'CHANGE_CATEGORY',
                        payload: props.categories[i].name,
                    });
                }}
            >
                {props.categories[i].displayName || props.categories[i].name}
            </Button>,
        );

    return <>{categoriesHTML}</>;
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    };
};

export default connect(mapStateToProps)(Categories);
