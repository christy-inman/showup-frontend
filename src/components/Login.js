import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

export default function Login(props) {
    const handleSubmitLoginForm = (event) => {
        event.preventDefault()
        const form = event.target
        const user = {
            email: form[0].value,
            password: form[1].value
        }
        props.login(user)
        form.reset()
    }
    const handleLogoutClick = (event) => {
        props.logout({email: 'sample@email.com'})
    }

    return(
        <main className='main-content'>
        <h2>Log In</h2>
        <form className='form' onSubmit={handleSubmitLoginForm}>
            <label className='label'>Email</label>
            <input required type='email' className='text-input' />
            <label className='label'>Password</label>
            <input required type='password' className='text-input' />
            <input type='submit' value='Log In' className='text-input' id='button' />
        </form>
        <button className='text-input' id='button' onClick={handleLogoutClick}>Log Out</button>
        <Link className='text-input' id='button' to='/signup/'>Sign Up for an Account</Link>
        </main>
    )
}