import React from 'react';

function ImageDisplay(props) {
    return (
        <div className={props.className} style={props.style}>
            <img src={props.src} alt={props.alt ? props.alt : 'no-alt'} />
            <p>{props.description}</p>
        </div>
    );
}

export default ImageDisplay;
