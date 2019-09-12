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
        <>
        <h2>Login</h2>
        <form onSubmit={handleSubmitLoginForm}>
            <label>Email</label>
            <input required type='email' />
            <label>Password</label>
            <input required type='password' />
            <input type='submit' value='Log In' />
        </form>
        <button onClick={handleLogoutClick}>Log Out</button>
        <Link to='/signup/'>Sign Up for an Account</Link>
        </>
    )
}