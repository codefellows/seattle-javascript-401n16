import React from 'react';
import { AppBar, Toolbar, Typography, Badge } from '@material-ui/core';
import { Mail } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    myBadge: {
        backgroundColor: 'red',
    },
});

function Header(props) {
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6'>Code Fellows 2020</Typography>
                </Toolbar>
            </AppBar>

            <div>
                <Badge
                    badgeContent={4}
                    color='primary'
                    className={props.classes.myBadge}
                >
                    <Mail />
                </Badge>
            </div>
        </>
    );
}

// let foo = withStyles(styles)
// foo(Component)

export default withStyles(styles)(Header);
