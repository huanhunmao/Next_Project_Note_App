import Head from 'next/head'
import ContactForm from "../components/contact/contact-form"


function Contact(){
    return <>
     <Head>
        <title>Contact us</title>
        <meta name="description" content='Has any suggestions, send to me !'/>
    </Head>
    <ContactForm/>
    </>
}

export default Contact