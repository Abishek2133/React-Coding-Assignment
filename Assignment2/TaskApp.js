import React from 'react';
import './TaskApp.css';
import TaskList from './TaskList';
import ContextProvider, { UserContext } from '../Context/UserContext';

function TaskApp() {
    return (
        <ContextProvider>
        <div className='TaskApp'>
            <TaskList/>
        </div>
        </ContextProvider>
    );
}

export default TaskApp;