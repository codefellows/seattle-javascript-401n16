import React from 'react';
import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core';

function Header(props) {
    return (
        <AppBar position='relative'>
            <Toolbar>
                <Grid container>
                    <Grid item xs>
                        <Typography variant='h4'>Our Store</Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
