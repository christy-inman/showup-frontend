import React from 'react'

export default function Contact() {
    const handleSubmitContactForm = (event) => {
        event.preventDefault()
        const form = event.target
        const message = {
            name: form[0].value,
            email: form[1].value,
            message: form[2].value
        }
        console.log(message)
        fetch('http://localhost:3000/send/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(message)
        })
            .then(response => response.json())
            .then(alert('Message Sent!'))
            .catch(error => console.log(error))
        form.reset()
    }
    return(
        <main className='main-content'>
            <h2>Contact Us</h2>
            <form id='contact-form' className='form' onSubmit={handleSubmitContactForm}>
                <label className='label'>Name</label>
                <input type='text' className='text-input' />
                <label className='label'>Email address</label>
                <input type='email' className='text-input' />
                <label className='label'>Message</label>
                <textarea rows='12' className='text-input' />
                <input 
                    type='submit' 
                    value='Send Message' 
                    className='text-input' 
                    id='button' 
                />
            </form>
        </main>
    )
}