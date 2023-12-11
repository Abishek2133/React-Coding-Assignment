import React from 'react';

function Cards(props) {
    const booking=()=>{
        alert("ticket booked")
        return;
      }

    return (
        <div className='Container'>
        <div className='Card'>
            <img src = {props.imgSrc} alt = {props.imgAlt} className='Pic'/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.rating}</p>
            <button className = 'Book' onClick={()=>booking()}>Book Tickets</button>
        </div>
        </div>
    );
}

export default Cards;