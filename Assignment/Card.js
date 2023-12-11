import React from 'react';

function Card(props) {
    return (
        <div className='Container'>
        <div className='Card'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.location}</p>
        </div>
        </div>
    );
}

export default Card;