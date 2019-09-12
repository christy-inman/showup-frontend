import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import '../App.css'

export default function Footer() {
    return (
            <footer id='footer' className='footer'>
                <h1>Footer</h1>
                <Link className='link' to='/contact/'>Contact Us</Link>
                <Link className='link' to='/about/'>Our Mission</Link>
            </footer>
    )
}