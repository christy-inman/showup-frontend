import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

export default function NavMenu() {
    return(
            <nav>
                <Link className='link' to='/new/' >Host a Protest</Link>
                <Link className='link' to='/protests/'>Upcoming Protests</Link>
                <Link className='link' to='/about/'>Our Mission</Link>
                <Link className='link' to='/contact/'>Contact Us</Link>
                <Link className='link' to='/'>Home</Link>
            </nav>
    )
}