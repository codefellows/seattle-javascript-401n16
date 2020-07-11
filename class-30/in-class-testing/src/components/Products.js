import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import SingleProduct from './SingleProduct';

function Products(props) {
    function addToCart(indx) {
        props.dispatch({ type: 'ADD_TO_CART', payload: props.products[indx] });
    }

    function viewDetails(indx) {}

    const filteredProducts = props.products.filter(
        (product) => product.category === props.currentCategory,
    );

    // create the HTML for all filtered products
    let productsHTML = [];

    for (let i = 0; i < filteredProducts.length; i++) {
        let product = filteredProducts[i];

        productsHTML.push(
            <SingleProduct
                key={i}
                name={product.name}
                description={product.description}
                add={(e) => {
                    addToCart(i);
                }}
                view={(e) => {
                    viewDetails(i);
                }}
            />,
        );
    }

    return (
        <Grid id='products' container spacing={4}>
            {productsHTML}
        </Grid>
    );
}

const mapStateToProps = (state) => ({
    products: state.products,
    currentCategory: state.currentCategory,
});

export default connect(mapStateToProps)(Products);
