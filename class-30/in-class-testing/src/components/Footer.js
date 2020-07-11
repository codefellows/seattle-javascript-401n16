import React from 'react';
import { Typography } from '@material-ui/core';

function Footer(props) {
    return (
        <footer style={{ marginTop: '60px' }}>
            <Typography variant='h6' align='center' gutterBottom>
                &copy; 2020 Javascript 401
            </Typography>
            <Typography
                variant='subtitle1'
                align='center'
                color='textSecondary'
                component='p'
            >
                React + Redux + Material UI
            </Typography>
        </footer>
    );
}

export default Footer;
