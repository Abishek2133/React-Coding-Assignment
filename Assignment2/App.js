import React , { useState } from 'react';
import './App.css';

function App() {

  const[newTask,setNewTask] = useState("");
  const[tasks,setTasks] = useState([]);

      
  const task = {
    id: Math.floor(Math.random()*1000),
    value: newTask
  }

  function addTask(){

    if (!newTask) {
      alert("enter New Task")
      return;
    }

    setTasks(oldList => [...oldList,task]);
    setNewTask("");

    console.log(tasks);

  }
  
  const handleClick=()=>{
    addTask()
  }

  const handleInputChange=(e)=>{
    setNewTask(e.target.value)
  }

  function deleteTask(id) {
    const newArray = tasks.filter(task => task.id !== id);
    setTasks(newArray);

  }

{/*  const handleDelete=()=>{
    deleteTask()
  }*/}

  return (
    <div className="App">
      <h1>My Todo List</h1>

      <input
      type = 'text'
      placeholder='Add a new task...'
      value={newTask}
      onChange={handleInputChange}
      />
      <button onClick={handleClick}>add</button>

      <ul>
      {tasks.map(task=>{
        return(
                <li key={task.id}> {task.value} <button className = 'delete-button' onClick={()=>deleteTask(task.id)}>❌</button></li>
              )
          })}
      </ul>
    </div>
  );
}

export default App;
