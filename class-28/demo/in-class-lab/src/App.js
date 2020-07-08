import React from 'react';
import ToDo from './components/ToDo';

function App() {
    return (
        <div className='App'>
            <ToDo />
        </div>
    );
}

export default App;

/* 

<App>
    <ToDo>
        <ToDoForm />
        <ToDoList>
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            ...
        </ToDoList>
    </ToDo>
</App>

*/
