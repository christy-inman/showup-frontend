import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'

export default function Home() {

    return(
        <main className='main-content'>
            <h2>Home</h2>
            <form className='form'>
                <label className='label'>Where do you want to get involved?</label>
                <input type='text' placeholder='Search by City, State, or Zip Code' className='text-input' />
                <button className='text-input' id='button'><Link className='button-link' to='/protests/'>Search for Protests</Link></button>
            </form>
        </main>
    )
}