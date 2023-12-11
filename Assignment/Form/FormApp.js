import React from 'react';
import ContextProvider from '../../Context/ContextProvider';
import Login from './Login';
import FormProfile from './FormProfile';

function FormApp(){
        return(
            <div className='App'>
            <ContextProvider>
            <h1>React</h1>
            <Login/>
            <FormProfile/>
            </ContextProvider>
            </div>
        )
}


export default FormApp