import React from 'react';

export default function NewProtest(props) {
    const handleSubmitNewProtest = (event) => {
        event.preventDefault()
        const form = event.target
        let locationArray = [form[4].value, form[5].value, form[6].value, form[7].value]
        const parsedLocation = locationArray.join(', ')
        const newProtest = {
            title: form[0].value,
            image: form[1].value,
            date: form[2].value,
            time: form[3].value,
            location: parsedLocation,
            description: form[8].value,
            donate: form[9].value
        }
        props.addNewProtest(newProtest)
        form.reset()
    }

    return(
        <main className='main-content'>
            <h2>New Protest</h2>
            <form 
                id='new-protest-form' 
                className='form' 
                onSubmit={handleSubmitNewProtest}
            >
                <label className='label'>Name of Protest</label>
                <input required 
                    type='text' 
                    placeholder='' 
                    className='text-input'
                />
                <label className='label'>Image for Protest</label>
                <input required 
                    type='text' 
                    placeholder='Must be a URL to image'
                    className='text-input'
                />
                <label className='label'>Date</label>
                <input required type='date' className='text-input' />
                <label className='label'>Time of Protest</label>
                <input required 
                    type='text' 
                    placeholder=''
                    className='text-input'
                />
                <label className='label'>Street Address</label>
                <input 
                    type='text' 
                    placeholder=''
                    className='text-input'
                />
                <label className='label'>City</label>
                <input required 
                    type='text' 
                    placeholder=''
                    className='text-input'
                />
                <label className='label'>State</label>
                <input required 
                    type='text' 
                    placeholder=''
                    className='text-input'
                />
                <label className='label'>Zip Code</label>
                <input required 
                    type='text' 
                    placeholder=''
                    className='text-input'
                />
                <label className='label'>Description of Protest</label>
                <textarea required 
                    type='text' 
                    placeholder=''
                    rows='12'
                    className='text-input'
                />
                <label className='label'>Donation Link</label>
                <input required 
                    type='text' 
                    placeholder='URL to donate to cause'
                    className='text-input'
                />
                <input 
                    type='submit' 
                    value='Create Protest' 
                    className='text-input' 
                    id='button' 
                />
            </form>
        </main>
    )
}