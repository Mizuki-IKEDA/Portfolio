import { useInView } from 'react-intersection-observer';
import './style.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';

function Contact({language}) {
    const { ref: contactRef, inView: contactIsVisible } = useInView({
        triggerOnce: true,
    });
    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault()
        if (email && name && message) {
            axios
                .post("http://localhost:3001/contact", {
                    name: name,
                    email: email,
                    message: message,
                })
                .then(() => alert('Message Sent Sucessfully'))
                .catch(() => alert("Ooopsy daisssy !"));
            return;
        }
        return alert("Fill in all the fields to continue");
    };

    return (
        <div className="contact" id="contact">
            {language === 'en' ? 
            <div className="contact--container">
                <h1 ref={contactRef} className={`${'contact--title'} ${contactIsVisible ? 'animateFadein' : ''}`}>Contact</h1>
                <p ref={contactRef} className={`${'contact--description'} ${contactIsVisible ? 'animateFadein' : ''}`}>
                    Whether you have a question or just want to say hi, don't hesitate to contact me !
                </p>
                <div ref={contactRef} className={`${'contact--form-container'} ${contactIsVisible ? 'animateFadeinDelay' : ''}`}>
                    <form className="contact--form" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="contact--form-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            onChange={(event) => setName(event.target.value)}
                            className="contact--form-input"
                        />
                        <label htmlFor="email" className="contact--form-label">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            onChange={(event) => setEmail(event.target.value)}
                            className="contact--form-input"
                        />
                        <label htmlFor="message"className="contact--form-label">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            onChange={(event) => setMessage(event.target.value)}
                            className="contact--form-textarea"
                        ></textarea>
                        <div>
                            <button className="contact--form-submit" type="submit">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div> :
            <div className="contact--container">
                <h1 ref={contactRef} className={`${'contact--title'} ${contactIsVisible ? 'animateSlideRight' : ''}`}>Contact</h1>
                <p ref={contactRef} className={`${'contact--description'} ${contactIsVisible ? 'animateSlideRightDelay' : ''}`}>
                    N'hésitez pas à me contacter !
                </p>
                <div ref={contactRef} className={`${'contact--form-container'} ${contactIsVisible ? 'animateSlideLeft' : ''}`}>
                    <form className="contact--form" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="contact--form-label">Nom</label>
                        <input className="contact--form-input" />
                        <label className="contact--form-label">E-mail</label>
                        <input className="contact--form-input" />
                        <label className="contact--form-label">Message</label>
                        <textarea className="contact--form-textarea" rows="5"></textarea>
                        <button className="contact--form-submit" type="submit">ENVOI</button>
                    </form>
                </div>
            </div>
            }
        </div>
    )
}

Contact.propTypes = {
    language: PropTypes.string.isRequired,
};

export default Contact;