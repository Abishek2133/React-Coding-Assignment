import React, { useState } from 'react';

function Form() {
    const[random,setRandom] = useState(3)
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[data,setData] = useState([
        {
            id: 1,
            name: 'sri'

        },
        {
            id:2, 
            name:'Abishek'
        }
    ])

    const handleInputCchange=(e)=>{
        setRandom(random+1)
        e.preventDefault()
        setName(e.target.value)

    }

    const handleInputCchange1=(e)=>{
        setRandom(random+1)
        e.preventDefault()
        setEmail(e.target.value)

    }

    const handleInputCchange2=(e)=>{
        setRandom(random+1)
        e.preventDefault()
        setPassword(e.target.value)

    }

    const handleSubmit=(e)=>{
 {/*}       e.preventDefault()
        setData([...data,{
            id:random,
            name:name,
            email:email,
            password:password
        }])*/}
        setName('')

    }

    return (
        <div>
            <h1>Sign Up</h1>
{/*            <ul>
                {data.map((ele)=>(
                    <li key={ele.id}>{ele.name}</li>
                ))}
                </ul>*/}
            <form onSubmit={handleSubmit}>
                <label> Username :
                <input type='text'
                placeholder='type here'
                value={name}
                onChange={handleInputCchange}/>
                </label><br></br>
                <label> Email :
                <input type='text'
                placeholder='type here'
                value={email}
                onChange={handleInputCchange1}/>
                </label><br></br>
                <label> Password :
                <input type='text'
                placeholder='type here'
                value={password}
                onChange={handleInputCchange2}/>
                </label><br></br>
                <button type='Submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form

