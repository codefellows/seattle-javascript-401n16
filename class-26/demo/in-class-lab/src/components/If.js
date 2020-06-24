import React from 'react';

function If(props) {
    // if condition is true, render the children
    // else, render nothing

    if (props.condition) return <>{props.children}</>;
    else return null;
}

export default If;
