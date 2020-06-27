import React from 'react';

function FormInput(props) {
    function handleChange(e) {
        props.onChange(e.target.value);
    }

    return (
        <div className={'form-input ' + props.className}>
            <label>{props.label}</label>
            <input
                type={props.type}
                value={props.value}
                onChange={handleChange}
            />
        </div>
    );
}

export default FormInput;
