import { useInView } from 'react-intersection-observer';
import './style.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Contact({language}) {
    const { ref: contactRef, inView: contactIsVisible } = useInView({
        triggerOnce: true,
    });

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus("Sending...");
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;
        console.log(name, email, message);
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:3001/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (
        <div className="contact" id="contact">
            {language === 'en' ? 
            <div className="contact--container">
                <h1 ref={contactRef} className={`${'contact--title'} ${contactIsVisible ? 'animateSlideRight' : ''}`}>Contact</h1>
                <p ref={contactRef} className={`${'contact--description'} ${contactIsVisible ? 'animateSlideRightDelay' : ''}`}>
                    Whether you have a question or just want to say hi, don't hesitate to contact me !
                </p>
                <div ref={contactRef} className={`${'contact--form-container'} ${contactIsVisible ? 'animateSlideLeft' : ''}`}>
                    <form className="contact--form" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="contact--form-label">Name</label>
                        <input type="text" className="contact--form-input" id="name" />
                        <label htmlFor="email" className="contact--form-label">E-mail</label>
                        <input className="contact--form-input" id="email" />
                        <label htmlFor="message"className="contact--form-label">Message</label>
                        <textarea className="contact--form-textarea" rows="5" id="message"></textarea>
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