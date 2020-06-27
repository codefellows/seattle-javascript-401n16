import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ToDoForm(props) {
    const [description, setDescription] = useState(props.description || '');
    const [assignee, setAssignee] = useState(props.assignee || '');
    const [status, setStatus] = useState(props.status || 'incomplete');
    const [difficulty, setDifficulty] = useState(props.difficulty || 0);

    function formSubmit() {
        props.addTask({
            description,
            assignee,
            status,
            difficulty,
        });
    }

    return (
        <Form>
            <Form.Group controlId='todo-description'>
                <Form.Label>Task Description</Form.Label>
                <Form.Control
                    as='textarea'
                    rows='3'
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
            </Form.Group>
            <Form.Group controlId='todo-assignee'>
                <Form.Label>Assigned To:</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter name'
                    value={assignee}
                    onChange={(e) => {
                        setAssignee(e.target.value);
                    }}
                />
            </Form.Group>
            <Form.Group controlId='todo-status'>
                <Form.Label>Status</Form.Label>
                <Form.Check
                    value={status === 'complete'}
                    onChange={() => {
                        setStatus(
                            status === 'complete' ? 'incomplete' : 'complete',
                        );
                    }}
                    type='switch'
                    id='status-switch'
                    label={status}
                />
            </Form.Group>
            <Form.Group controlId='todo-difficulty'>
                <Form.Label>Difficulty</Form.Label>
                <Form.Control
                    type='range'
                    min={0}
                    max={5}
                    step={1}
                    value={difficulty}
                    onChange={(e) => {
                        setDifficulty(e.target.value);
                    }}
                />
            </Form.Group>

            <Button variant='primary' type='button' onClick={formSubmit}>
                Add Task
            </Button>
        </Form>
    );
}

export default ToDoForm;
