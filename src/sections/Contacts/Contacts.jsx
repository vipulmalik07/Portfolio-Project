import './Contact.css'



const Contacts = () => {
    return (
        <section className='Contact-Container' id='contact'>
            <h1 className='sectionTitle'>Contact</h1>
            <form action="">
                <div className='formGroup'>
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input type="text" name='name' id='name' placeholder='name' required />
                </div>
                <div className='formGroup'>
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input type="text" name='email' id='email' placeholder='Email' required />
                </div>
                <div className='formGroup'>
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea type="text" name='message' id='message' placeholder='Message' required></textarea>
                </div>
                <input type="submit" className='hover btn' value='Submit'/>
            </form>
        </section>
    )
}

export default Contacts
