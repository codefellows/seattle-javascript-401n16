import React from 'react';

// props.className = optional classnames
// props.style = optional in-line style
// props.url = the current url entry
// props.onURLChange = the callback for the text input
// props.onMethodChange = the callback for the select
// props.onSubmit = the callback for when the form is submitted
// props.body = the current filled in body for the user
// props.onBodyChange = when the textarea is edited
// props.headers
// props.onHeadersChange
function Form(props) {
    return (
        <div className={props.className} style={props.style}>
            <div className='url-entry'>
                <label>API URL:</label>
                <input
                    type='text'
                    value={props.url}
                    onChange={props.onURLChange}
                />
            </div>
            <div className='method-select'>
                <select onChange={props.onMethodChange}>
                    <option value='GET'>Get</option>
                    <option value='POST'>Post</option>
                    <option value='PUT'>Put</option>
                    <option value='DELETE'>Delete</option>
                    <option value='PATCH'>Patch</option>
                </select>
            </div>
            <div className='body-entry'>
                <label>BODY:</label>
                <textarea
                    value={props.body}
                    onChange={props.onBodyChange}
                ></textarea>
            </div>
            <div className='header-entry'>
                <label>HEADERS:</label>
                <textarea
                    value={props.headers}
                    onChange={props.onHeadersChange}
                ></textarea>
            </div>
            <button onClick={props.onSubmit}>Submit</button>
        </div>
    );
}

export default Form;
