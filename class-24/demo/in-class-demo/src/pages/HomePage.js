import React from 'react';

// props.links = an array of objects with keys { displayName, url}
// props.className
// props.style
function HomePage(props) {
    // empty = props.children is undefined
    // single = props.children is object
    // multiple = props.children is array

    return (
        <>
            <header>
                <h1>Home</h1>
            </header>
            {props.children ? (
                props.children.length ? (
                    props.children
                ) : (
                    <div style={{ color: 'red' }}>{props.children}</div>
                )
            ) : (
                <p>No content added</p>
            )}
        </>
    );
}

export default HomePage;
