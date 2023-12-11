import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Features/CounterSlice';

function counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

return (
        <>
        <h1>{count}</h1>
        <button onClick = {() => dispatch(increment())}>Increment</button>
        <br></br>
        <button onClick = {() => dispatch(decrement())}>Decrement</button>
        </>
    )
}

export default counter;

