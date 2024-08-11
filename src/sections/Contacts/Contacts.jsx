import { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';



const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_ioj4kxl';
        const templateId = 'template_h2x7eqj';
        const publicKey = 'c93ao_6SlUvp99ojY';

        // Create a new object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Vipul Malik',
            message: message,
        }

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }
    return (
        <section className='Contact-Container' id='contact'>
            <h1 className='sectionTitle'>Contact</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className='formGroup'>
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input onChange={(e)=> setName(e.target.value)} type="text" name='name' id='name' placeholder='name' value={name} required />
                </div>
                <div className='formGroup'>
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input onChange={(e)=> setEmail(e.target.value)} type="text" name='email' id='email' placeholder='Email' value={email} required />
                </div>
                <div className='formGroup'>
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea onChange={(e)=> setMessage(e.target.value)} type="text" name='message' id='message' placeholder='Message' value={message} required></textarea>
                </div>
                <input type="submit" className='hover btn' value='Submit' />
            </form>
        </section>
    )
}

export default Contacts
