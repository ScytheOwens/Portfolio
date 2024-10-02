import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("mblrnedj");

    return (
        <React.Fragment>
            <h1>Formulaire de contact</h1>
            <form onSubmit={handleSubmit} action='https://formspree.io/f/mblrnedj' method='POST' className='widget-form'>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email" 
                        name="email"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label htmlFor="message">Votre message</label>
                    <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button type="submit">
                    Envoyer
                </button>
            </form>
        </React.Fragment>
    )
}

export default Contact;
