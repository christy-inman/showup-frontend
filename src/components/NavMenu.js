import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function NavMenu() {
    return(
            <nav className='nav-bar'>
                <Link className='link' to='/new/'>Host a Protest</Link>
                <Link className='link' to='/protests/'>Upcoming Protests</Link>
                <Link className='link' to='/about/'>Our Mission</Link>
                <Link className='link' to='/contact/'>Contact Us</Link>
                <Link className='link' to='/login/'>Log In</Link>
                <Link className='link' to='/'>Home</Link>
            </nav>
    )
}