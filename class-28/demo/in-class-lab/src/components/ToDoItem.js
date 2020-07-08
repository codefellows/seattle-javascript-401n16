import React from 'react';

import Form from 'react-bootstrap/Form';

function ToDoItem(props) {
    return (
        <div
            style={{
                margin: '10px',
                padding: '10px',
                minWidth: '150px',
                backgroundColor: 'aqua',
                display: 'inline-block',
            }}
        >
            <p>{props.data.text}</p>

            <p>{props.data.assignee}</p>

            <p>{props.data.difficulty}</p>

            <button
                onClick={() => {
                    props.deleteTask(props.indx);
                }}
            >
                Delete
            </button>

            <Form.Group controlId={'todo-status-' + props.indx}>
                <Form.Label>Status</Form.Label>
                <Form.Check
                    checked={props.data.complete}
                    type='switch'
                    onChange={() => {
                        let newTask = { ...props.data };
                        newTask.complete = !newTask.complete;
                        props.modifyTask(props.indx, newTask);
                    }}
                    id={'status-switch-' + props.indx}
                    label={props.data.complete ? 'complete' : 'incomplete'}
                />
            </Form.Group>
        </div>
    );
}

export default ToDoItem;
