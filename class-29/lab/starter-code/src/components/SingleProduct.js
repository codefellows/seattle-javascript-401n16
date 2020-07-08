import React from 'react';

function SingleProduct(props) {
    return (
        <div>
            <img src={props.img} alt={props.alt} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button onClick={props.add}>Add To Cart</button>
            <button onClick={props.view}>View Details</button>
        </div>
    );
}

export default SingleProduct;
