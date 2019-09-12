import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'

export default function Home() {

    return(
        <>
            <h2>Home</h2>
            <form>
                <label>Where do you want to get involved?</label>
                <input type='text' placeholder='Search by City, State, or Zip Code' />
                <button><Link to='/protests/'>Search</Link></button>
            </form>
        </>
    )
}