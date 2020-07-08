import React from 'react';
import { connect } from 'react-redux';

import SingleProduct from './SingleProduct';

function Products(props) {
    // TODO: define this function
    function addToCart(indx) {}

    // TODO: define this function
    function viewDetails(indx) {}

    // get only the products that belong to the current
    // category
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
                img={product.img}
                alt={product.name}
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

    return <>{productsHTML}</>;
}

const mapStateToProps = (state) => ({
    products: state.products,
    currentCategory: state.currentCategory,
});

export default connect(mapStateToProps)(Products);
