import React, { useContext } from 'react';
import { ListContext } from './Contexts';

function SettingsForm(props) {
    let listData = useContext(ListContext);

    return (
        <>
            <label>Display Count</label>
            <input
                type='number'
                value={listData.displayCount}
                onChange={(e) => {
                    listData.setDisplayCount(parseInt(e.target.value));
                }}
            />
        </>
    );
}

export default SettingsForm;
