import React, { useContext } from 'react';
import { NameContext } from './Contexts';
import ListDisplay from './ListDisplay';

function D(props) {
    const data = useContext(NameContext);

    return (
        <div style={{ backgroundColor: 'red', padding: '20px' }}>
            <h4>This is the D component</h4>
            <p>Welcome {data.name}</p>
            <ListDisplay
                list={[
                    <p>One</p>,
                    <p>Two</p>,
                    <p>Three</p>,
                    <p>Four</p>,
                    <p>Five</p>,
                    <p>Six</p>,
                    <p>Seven</p>,
                    <p>Eight</p>,
                    <p>Nine</p>,
                    <p>Ten</p>,
                    <p>Eleven</p>,
                    <p>Twelve</p>,
                ]}
            />
        </div>
    );
}

export default D;
