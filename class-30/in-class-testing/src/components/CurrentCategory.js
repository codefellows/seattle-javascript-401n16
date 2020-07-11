import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

function CurrentCategory(props) {
    return (
        <div id='current-category'>
            <Typography
                style={{ textAlign: 'left' }}
                component='h3'
                align='center'
                color='textPrimary'
                gutterBottom
            >
                Current Category: {props.currentCategory}
            </Typography>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentCategory: state.currentCategory,
});

export default connect(mapStateToProps)(CurrentCategory);
