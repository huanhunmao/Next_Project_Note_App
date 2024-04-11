import { useState } from 'react'
import classes from './contact-form.module.css'

function ContactForm(){
    const [enterEmail, setEnteredEmail] = useState('')
    const [enterName, setEnteredName] = useState('')
    const [enterMessage, setEnteredMessage] = useState('')

    function handleSubmit(e){
        // 阻止默认提交后刷新页面 行为
        e.preventDefault()

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email: enterEmail,
                name: enterName,
                message: enterMessage
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" required value={enterEmail} onChange={e => setEnteredEmail(e.target.value)}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" required  value={enterName} onChange={e => setEnteredName(e.target.value)}/>
                    </div>
            </div>
                    <div className={classes.control}>
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" rows={5}  required  value={enterMessage} onChange={e => setEnteredMessage(e.target.value)}/>
                    </div>
                <div className={classes.actions}>
                        <button>Send Message</button>
                    </div>
            </form>
        </section>
    )
}

export default ContactForm