import { useEffect, useState } from 'react'
import classes from './contact-form.module.css'
import Notification from '../../ui/notification'

function ContactForm(){
    const [enterEmail, setEnteredEmail] = useState('')
    const [enterName, setEnteredName] = useState('')
    const [enterMessage, setEnteredMessage] = useState('')
    const [requestStatus, setRequestStatus] = useState()
    const [requestError, setRequestError] = useState()

    useEffect(() => {
        if(requestStatus === 'success' || requestStatus === 'error'){
            const timer = setTimeout(() => {
                setRequestStatus(null)
                setRequestError(null)
            }, 3000)

            return () => clearTimeout(timer)
        }
    },[requestStatus])

   async function sendRequest(sendMessages){
       const res =  await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(sendMessages),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const data = await res.json()
        if(!res.ok){
            throw new Error(data.message || 'Something went wrong')
        }
    }
  async  function handleSubmit(e){
        // 阻止默认提交后刷新页面 行为
        e.preventDefault()

        setRequestStatus('pending')

        try{
            await sendRequest({
                email:enterEmail,
                name:enterName,
                message:enterMessage
            })
    
            setRequestStatus('success')
        }catch(e){
            setRequestStatus('error')
            setRequestError(e.message || 'Something went wrong')
        }
    }

    let notification

    if(requestStatus === 'pending'){
        notification = {
            status: 'pending',
            title: 'Sending messaging ...',
            message: 'Your message is on the way'
        }
    }

    if(requestStatus === 'success'){
        notification = {
            status: 'success',
            title: 'Sending messaging successfully...',
            message: 'Your message is sending successfully...'
        }
    }

    if(requestStatus === 'error'){
        notification = {
            status: 'error',
            title: 'Sending messaging failed...',
            message: requestError
        }
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

            {
                notification && <Notification 
                title={notification.title}
                status={notification.status}
                message={notification.message}
                />
            }
        </section>
    )
}

export default ContactForm