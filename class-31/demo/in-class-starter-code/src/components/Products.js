import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { consoleLog, add } from '../store/cartReducer';

function Products(props) {
    // list all the products that belong to the
    // current selected category

    // only show the products that belong to the current category

    let productsHTML = [];

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].category === props.currentCategory)
            productsHTML.push(<h3 key={i}>{props.products[i].name}</h3>);
    }

    return (
        <>
            <h2>Products</h2>
            {productsHTML}
            <Button
                onClick={(e) => {
                    consoleLog(props.dispatch);
                }}
            >
                Run CONSOLE_LOG action
            </Button>
        </>
    );
}

// connect() --> returns a function (assume it's called foo)
// let foo = connect(mapStateToProps);
// let connectedComponent = foo(Products)
// export default connectedComponent

const mapStateToProps = (state) => {
    return {
        products: state.products.allProducts,
        currentCategory: state.categories.currentCategory,
    };
};

export default connect(mapStateToProps)(Products);
