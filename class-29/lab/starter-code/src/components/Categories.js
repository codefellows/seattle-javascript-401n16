import React from 'react';
import { connect } from 'react-redux';

function Categories(props) {
    let categoryHTML = [];

    for (let i = 0; i < props.categories.length; i++) {
        let category = props.categories[i];
        categoryHTML.push(
            <button
                key={i}
                onClick={(e) => {
                    // TODO: What should you dispatch?
                    props.dispatch();
                }}
            >
                {category.displayName || category.name}
            </button>,
        );
    }

    return (
        <div>
            <h5>Browse our Categories</h5>
            {categoryHTML}
        </div>
    );
}

const mapStateToProps = (state) => ({
    categories: state.categories,
});

export default connect(mapStateToProps)(Categories);
