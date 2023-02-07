import { useInView } from 'react-intersection-observer';
import './style.scss';

function Contact() {
    const { ref: contactRef, inView: contactIsVisible } = useInView({
        triggerOnce: true,
    });
    return (
        <div className="contact" id="contact">
            <div className="contact--container">
                <h1 ref={contactRef} className={`${'contact--title'} ${contactIsVisible ? 'animateSlideRight' : ''}`}>Contact</h1>
                <p ref={contactRef} className={`${'contact--description'} ${contactIsVisible ? 'animateSlideRightDelay' : ''}`}>
                    Whether you have a question or just want to say hi, don't hesitate to contact me !
                </p>
                <div ref={contactRef} className={`${'contact--form-container'} ${contactIsVisible ? 'animateSlideLeft' : ''}`}>
                    <form className="contact--form">
                        <label className="contact--form-label">Name</label>
                        <input className="contact--form-input" />
                        <label className="contact--form-label">E-mail</label>
                        <input className="contact--form-input" />
                        <label className="contact--form-label">Message</label>
                        <textarea className="contact--form-textarea" rows="5"></textarea>
                        <div>
                            <button className="contact--form-submit" type="submit">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;