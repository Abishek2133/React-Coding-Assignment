import React from 'react';
import './TaskApp.css';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'

function TaskApp() {
    return (
        <div className='TaskApp'>
            <TodoList/>
        </div>
    );
}

export default TaskApp;