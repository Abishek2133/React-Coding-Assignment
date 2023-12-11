import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../Context/UserContext";

function TaskForm() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [dueDate,setDueDate] = useState('');

    const {addTask} = useContext(UserContext)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        addTask({title, description, dueDate})

    }

    return (
        <div className="App">
            <h1>Tasks</h1>
            <input type='text'
            placeholder='Title'
            value={title}
            onChange={(e)=> setTitle(e.target.value)}/>
            <br></br>
            <input type='text'
            placeholder='Description'
            value={description}
            onChange={(e)=> setDescription(e.target.value)}/>
            <br></br>
            <input type='dd/mm/yyyy'
            placeholder='Due Date'
            value={dueDate}
            onChange={(e)=> setDueDate(e.target.value)}/>
            <br></br>
            <button onClick = {handleSubmit}>Add</button> 
   
        </div>
    );

}

export default TaskForm;