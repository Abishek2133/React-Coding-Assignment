import React, { useState } from "react";

export const UserContext = React.createContext()

const ContextProvider = ({children}) => {
    const [user,setUser] = useState([
        {title:'HomeWork',decription:'Assignment',dueDate:12/12/2023}
    ])

    const addTask = ({title,description,dueDate}) => {
        setUser([...user,{title,description,dueDate}])
    }

    return (
        <UserContext.Provider value = {{user,addTask}}>
            {children}
        </UserContext.Provider>
    );

}

export default ContextProvider;