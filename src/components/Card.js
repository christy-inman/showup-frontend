import React from 'react';
import '../App.css'

export default function Card(props) {
    const {protest} = props
    return(
        <div className='protest-card'>
            <h2>{protest.title}</h2>
            <img src={protest.image} alt='Protest Photo' />
            <p>{protest.date}</p>
            <p>{protest.time}</p>
            <p>{protest.location}</p>
            <p>{protest.description}</p>
            <p>{protest.donate}</p>
        </div>
    )
} 