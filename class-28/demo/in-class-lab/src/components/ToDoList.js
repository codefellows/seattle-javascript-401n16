import React, { useContext } from 'react';
import SettingsContext from '../SettingsContext';
import ToDoItem from './ToDoItem';

function ToDoList(props) {
    let items = [];
    const data = useContext(SettingsContext);

    if (props.tasks)
        for (let i = 0; i < props.tasks.length; i++) {
            if (!data.showCompleted && props.tasks[i].complete) continue;
            items.push(
                <ToDoItem
                    key={i}
                    indx={i}
                    data={props.tasks[i]}
                    deleteTask={props.deleteTask}
                    modifyTask={props.modifyTask}
                />,
            );
        }

    return (
        <div>
            <h1>Tasks</h1>
            {items}
        </div>
    );
}

export default ToDoList;
