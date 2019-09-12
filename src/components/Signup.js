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
        <main className='main-content'>
            <h2>Create Account</h2>
            <form className='form' onSubmit={handleSubmitSignupForm}>
                <label className='label'>Name</label>
                <input required type='text' className='text-input' />
                <label className='label'>Email</label>
                <input required type='email' className='text-input' />
                <label className='label'>Password</label>
                <input required type='password' className='text-input' />
                <input type='submit' value='Create Account' className='text-input' id='button' />
            </form>
        </main>
    )
}