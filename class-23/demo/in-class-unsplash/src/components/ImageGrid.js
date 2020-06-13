import React from 'react';
import ImageDisplay from './ImageDisplay';

function ImageGrid(props) {
    // list of images (src + description)

    let imagesToRender = [];

    for (let i = 0; i < props.images.length; i++) {
        imagesToRender.push(
            <ImageDisplay
                style={{ flexBasis: '' + Math.floor(100 / props.col) + '%' }}
                key={i}
                className='unsplash-img'
                src={props.images[i].src}
                description={props.images[i].desc}
                alt={props.images[i].desc}
            />,
        );
    }

    console.log(props);

    return <div className='img-grid'>{imagesToRender}</div>;
}

export default ImageGrid;
