import React from 'react';
import C from './C';
import SettingsForm from './SettingsForm';

function B(props) {
    return (
        <div style={{ backgroundColor: 'blue', padding: '20px' }}>
            <h2>This is the B component</h2>
            <SettingsForm />
            <C />
        </div>
    );
}

export default B;
