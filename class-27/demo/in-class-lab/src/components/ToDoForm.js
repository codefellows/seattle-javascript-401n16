import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import useForm from '../hooks/useForm';

function ToDoForm(props) {
    const [update, submit, data] = useForm(props.addTask);

    return (
        <Form onSubmit={submit}>
            <Form.Group controlId='todo-description'>
                <Form.Label>Task Description</Form.Label>
                <Form.Control
                    as='textarea'
                    rows='3'
                    onChange={(e) => {
                        update('text', e.target.value);
                    }}
                />
            </Form.Group>
            <Form.Group controlId='todo-assignee'>
                <Form.Label>Assigned To:</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter name'
                    onChange={(e) => {
                        update('assignee', e.target.value);
                    }}
                />
            </Form.Group>
            <Form.Group controlId='todo-status'>
                <Form.Label>Status</Form.Label>
                <Form.Check
                    onChange={(e) => {
                        update('status', e.target.checked);
                    }}
                    type='switch'
                    id='status-switch'
                    label={data.status ? 'complete' : 'incomplete'}
                />
            </Form.Group>
            <Form.Group controlId='todo-difficulty'>
                <Form.Label>Difficulty</Form.Label>
                <Form.Control
                    type='range'
                    min={0}
                    max={5}
                    step={1}
                    onChange={(e) => {
                        update('difficulty', e.target.value);
                    }}
                />
            </Form.Group>

            <Button variant='primary' type='submit'>
                Add Task
            </Button>
        </Form>
    );
}

export default ToDoForm;
