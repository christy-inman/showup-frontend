import React from 'react'

export default function Signup(props) {


    const handleSubmitSignupForm = (event) => {
        event.preventDefault()
        console.log('HIT')
        const form = event.target
        const newUser = {
            name: form[0].value,
            email: form[1].value,
            password: form[2].value,
            token: ''
        }
        props.signup(newUser)
        form.reset()
    }

    return(
        <>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmitSignupForm}>
                <label>Name</label>
                <input required type='text' />
                <label>Email</label>
                <input required type='email' />
                <label>Password</label>
                <input required type='password' />
                <input type='submit' value='Create Account' />
            </form>
        </>
    )
}