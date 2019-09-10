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
        <>
            <h2>New Protest</h2>
            <form className='new-protest-form' onSubmit={handleSubmitNewProtest}>
                <label>Name of Protest</label>
                <input required 
                    type='text' 
                    placeholder='' 
                />
                <label>Image for Protest</label>
                <input required 
                    type='text' 
                    placeholder='Must be a URL to image'
                />
                <label>Date</label>
                <input required type='date' />
                <label>Time of Protest</label>
                <input required 
                    type='text' 
                    placeholder=''
                />
                <label>Street Address</label>
                <input 
                    type='text' 
                    placeholder=''
                />
                <label>City</label>
                <input required 
                    type='text' 
                    placeholder=''
                />
                <label>State</label>
                <input required 
                    type='text' 
                    placeholder=''
                />
                <label>Zip Code</label>
                <input required 
                    type='text' 
                    placeholder=''
                />
                <label>Description of Protest</label>
                <textarea required 
                    type='text' 
                    placeholder=''
                />
                <label>Donation Link</label>
                <input required 
                    type='text' 
                    placeholder='URL to donate to cause'
                />
                <input type='submit' value='Create Protest' />
            </form>
        </>
    )
}