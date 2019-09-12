import React from 'react';
import Card from './Card'

export default function AllProtests(props) {
    const protests = props.protests.map(protest => {
        return <Card 
                    key={protest.id}
                    protest={protest}
                />
    })
    return(
        <main className='main-content'>
            <h2>Upcoming Protests</h2>
            <div className='protests-container'>
                {protests}
            </div>
            <div className='push'></div>
        </main>
    )
}