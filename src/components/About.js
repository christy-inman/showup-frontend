import React from 'react';

export default function About() {
    return(
        <main className='main-content'>
            <h2>About Our Mission</h2>
            <div className='form'>
                <p className='p'>
                    This site exists to create a platform for anyone to create a protest event
                    in order to share the event, and to spread word about the cause. We believe
                    in promoting resectful debate about topics as a means to encourage personal
                    growth, and societal change. This site does not exist to support any political
                    party or societal agenda, we only serve as a free platform to create and 
                    encourage peaceful assembly.<br/><br/> Share your beliefs, love your fellows.
                </p>
                <p className='p'>
                    What is allowed:<br/><br/>
                    - Respectfully representing your views.<br/>
                    - Informative and inclusive event posts.<br/>
                    - Informed and open-minded debate.<br/>
                </p>
                <p className='p'>
                    What is NOT allowed:<br/><br/>
                    - Hate speech and descriminatory rhetoric.<br/> 
                        <p className='indent'>Any posted event found to promote such things will be immediately 
                        deleted, and the host will be issued a conduct warning.</p>
                    - Users who recieve more than 3 conduct warnings will be removed from the site.
                </p>
            </div>
        </main>
    )
}