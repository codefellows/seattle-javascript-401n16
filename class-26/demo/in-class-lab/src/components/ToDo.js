import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import Container from 'react-bootstrap/Container';

function ToDo(props) {
    let [tasks, setTasks] = useState([]);

    function addTask(taskDetails) {
        setTasks([...tasks, taskDetails]);
    }

    function modifyTask(indx, updatedTask) {
        let currentTasks = [...tasks];
        currentTasks[indx] = updatedTask;
        setTasks(currentTasks);
    }

    useEffect(() => {
        let incomplete = 0;

        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].status === 'incomplete') incomplete++;
        }

        if (incomplete === 1) document.title = '1 incomplete task';
        else if (incomplete) document.title = incomplete + ' incomplete tasks';
        else document.title = 'All tasks complete';
    }, [tasks]);

    return (
        <Container>
            <ToDoForm addTask={addTask} />
            <ToDoList tasks={tasks} modifyTask={modifyTask} />
        </Container>
    );
}

export default ToDo;
