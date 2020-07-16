import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Drawer } from '@material-ui/core';

function Categories(props) {
    let categoriesHTML = [];
    const [drawerOpen, setDrawerOpen] = useState(false);

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
                    toggleDrawer();
                }}
            >
                {props.categories[i].displayName || props.categories[i].name}
            </Button>,
        );

    function toggleDrawer() {
        setDrawerOpen(!drawerOpen);
    }

    return (
        <>
            <Button onClick={toggleDrawer}>Categories</Button>
            <Drawer anchor='top' open={drawerOpen} onClose={toggleDrawer}>
                {categoriesHTML}
            </Drawer>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories.allCategories,
    };
};

export default connect(mapStateToProps)(Categories);
