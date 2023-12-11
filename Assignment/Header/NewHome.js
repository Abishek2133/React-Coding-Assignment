import React, { useState } from "react";
import Cards from "./Cards";
function NewHome() {

    const[newTask,setNewTask] = useState("");
    const[tasks,setTasks] = useState([]);
  
        
    const task = {
      id: Math.floor(Math.random()*1000),
      value: newTask
    }
  
    function addTask(){
  
      if (!newTask) {
        alert("No search found")
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
        
        <h1>Movies</h1>
        <section>
        <Cards imgSrc = 'Indiana.jpg' imgAlt = 'Card Image' title = 'Indiana Jones (1981)' 
        description = 'Upon his arrival in India, Indiana Jones, an American adventurer, is asked by the villagers of a remote hamlet to retrieve a mystical stone and rescue young boys kidnapped from the village.' 
        rating = '⭐⭐⭐⭐⭐'/>
        <Cards imgSrc = 'Rocky.jpg' imgAlt = 'Card Image' title = 'Rocky (1972)' 
        description = 'Rocky Balboa, a small-time boxer, gets a chance to fight heavyweight champion Apollo Creed. In a bid to earn respect and glory, Rocky jumps into the ring, unaware of the tough task ahead of him.' 
        rating = '⭐⭐⭐⭐'/>
        <Cards imgSrc = 'Godfather.jpg' imgAlt = 'Card Image' title = 'Godfather (1976)' 
        description = 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son, Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.' 
        rating = '⭐⭐⭐⭐⭐'/>
        <Cards imgSrc = 'Exorcist.jpg' imgAlt = 'Card Image' title = 'The Exorcist (1973)' 
        description = 'An actress notices dangerous changes in the behavior and physical make-up of her 12-year-old daughter. Meanwhile, a young priest begins to doubt his faith while dealing with his mothers sickness.' 
        rating = '⭐⭐⭐⭐⭐'/>
        </section>


{/*        <h1>Search Engine</h1>
  
        <input
        type = 'text'
        placeholder='Search or type URL...'
        value={newTask}
        onChange={handleInputChange}
        />
        <button onClick={handleClick}>Search</button>
  
        <ul>
        {tasks.map(task=>{
          return(
                  <li key={task.id}> {task.value} <button className = 'delete-button' onClick={()=>deleteTask(task.id)}>❌</button></li>
                )
            })}
          </ul>*/}
      </div>
    );

}

export default NewHome;