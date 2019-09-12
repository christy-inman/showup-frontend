import React from 'react';
import '../App.css'

export default function Card(props) {
    const {protest} = props
    const parsedDate = () => {
        let date = protest.date
        const d = date.split('T')
        const d2 = d[0].split('-')
        const year = d2.shift()
        d2.push(year)
        date = d2.join('/')
        console.log(d2, year, date)
        return date
    }
    return(
        <div className='protest-card'>
            <div className='protest-info'>
                <h2>{protest.title}</h2>
                <p>{parsedDate()}</p>
                <p>{protest.time}</p>
                <p>{protest.location}</p>
            </div>
            <img src={protest.image} alt='Protest Photo' />
            <p className='protest-description'>{protest.description}</p>
            {/* <p>{protest.donate}</p> */}
        </div>
    )
} 