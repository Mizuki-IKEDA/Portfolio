import { useInView } from 'react-intersection-observer';
import './style.scss';
import PropTypes from 'prop-types';

function About({language}) {
    const { ref: aboutRef, inView: aboutIsVisible } = useInView({
        triggerOnce: true,
    });
    return (
        <div className="about" id="about">
            {language === 'en' ? 
                <div className="about--container">
                    <h1 ref={aboutRef} className={`${'about--title'} ${aboutIsVisible ? 'animateFadein' : ''}`}>About</h1>
                    <div className="about--container-words">
                        <p ref={aboutRef} className={`${'about--paragraph'} ${aboutIsVisible ? 'animateFadeinDelay' : ''}`}>
                            After 10 years as a project engineer in the building materials industry, I have switched to web development to pursue an my interest in coding. 
                            My previous experience has given me structure and methods to manage a project from conception to realization.
                            Being a child of 2 japanese immigrant parents, and born and raised in France, I also love to be in a diverse environment.
                            I would love to work with you on your next project !
                        </p>
                        <img ref={aboutRef} className={`${'about--profil'} ${aboutIsVisible ? 'animateFadein' : ''}`} src="/images/photo_profil.jpg" alt="profil" />
                    </div>
                </div> :
                <div className="about--container">
                    <h1 ref={aboutRef} className={`${'about--title'} ${aboutIsVisible ? 'animateFadein' : ''}`}>A propos</h1>
                    <div className="about--container-words">
                        <p ref={aboutRef} className={`${'about--paragraph'} ${aboutIsVisible ? 'animateFadeinDelay' : ''}`}>
                            Après 10 ans en tant qu'ingénieur projet dans l'industrie des matériaux, je me suis reconverti dans le développement web pour poursuivre ma passion dans le code.
                            Mes expériences passées ont pu m'apporter une structure et des méthodes pour manager des projets de la conception à la mise en place.
                            Issu de 2 parents immigrés japonais, je m'épanouis dans les environnements multi-culturelles.
                            Je serais ravi de participer à vos prochains projets !
                        </p>
                        <img ref={aboutRef} className={`${'about--profil'} ${aboutIsVisible ? 'animateFadein' : ''}`} src="/images/photo_profil.jpg" alt="profil" />
                    </div>
                </div>
            }
            {/* <img className="about--motif" src="/images/oooscillate2.svg" alt="motif" /> */}
        </div>
    )
}

About.propTypes = {
    language: PropTypes.string.isRequired,
};

export default About;