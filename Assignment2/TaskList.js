import React from "react";
import UserContext from "../Context/UserContext";
import { useContext } from "react";


function TaskList() {
    const {user} = useContext(UserContext)
    
    return (
        <div>
            <ul>
                {user.map(task=>{
                    return( 
                    <li key={task.id}> {task.value} </li>
              )
          })}
      </ul>
        </div>
//        <div>
//            <h1>Task Title:{user.title}</h1>
//            <h1>Task Description:{user.description}</h1>
//            <h1>Task Due Date:{user.dueDate}</h1>
//        </div>
    );

}

export default TaskList;