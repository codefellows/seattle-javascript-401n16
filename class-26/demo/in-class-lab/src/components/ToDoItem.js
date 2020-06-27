import React from 'react';

import Form from 'react-bootstrap/Form';

function ToDoItem(props) {
    return (
        <div>
            <p>{props.data.description}</p>

            <p>{props.data.assignee}</p>

            <p>{props.data.difficulty}</p>

            <Form.Group controlId={'todo-status-' + props.indx}>
                <Form.Label>Status</Form.Label>
                <Form.Check
                    value={props.data.status === 'complete'}
                    type='switch'
                    onChange={() => {
                        let newTask = { ...props.data };
                        newTask.status =
                            newTask.status === 'complete'
                                ? 'incomplete'
                                : 'complete';
                        props.modifyTask(props.indx, newTask);
                    }}
                    id={'status-switch-' + props.indx}
                    label={props.data.status}
                />
            </Form.Group>
        </div>
    );
}

export default ToDoItem;
