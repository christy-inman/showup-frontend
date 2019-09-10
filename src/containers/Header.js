import React from 'react';
import NavMenu from '../components/NavMenu'
import '../App.css'

export default function Header() {
    return(
        <header id='header'>
            <NavMenu />
            <h1>Header</h1>
        </header>
    )
}