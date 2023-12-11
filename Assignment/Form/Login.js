import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../../Context/UserContext";

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})

    }

    return (
        <div className="App">
            <h1>Login</h1>
            <input type='text'
            placeholder='type here'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}/>
            <br></br>
            <input type='password'
            placeholder='password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}/>
            <br></br>
            <button onClick = {handleSubmit}>Submit</button>            
        </div>
    );

}

export default Login;