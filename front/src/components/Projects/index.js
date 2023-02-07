import { useInView } from 'react-intersection-observer';
import Project from './project';
import './style.scss';

function Projects() {
    const { ref: projectsRef, inView: projectsIsVisible } = useInView({
        triggerOnce: true,
    });
    return (
        <div className="projects" id="projects">
            <div className="projects--container">
                <h1 ref={projectsRef} className={`${'projects--title'} ${projectsIsVisible ? 'animateSlideRight' : ''}`}>Projects</h1>
                <section ref={projectsRef} className={`${'projects--projects'} ${projectsIsVisible ? 'animateSlideRightDelay' : ''}`}>
                    <Project
                        thumbnail="/images/photo_keepup.svg"
                        title="Keep'Up"
                        subtitle="A networking app for sports lovers"
                        description="Keep’Up is a mobile-first social networking application allowing sports lovers to connect with each other.
                        The user will be able to create sports events or join available ones created by other users to practice together."
                        technology="ReactJS / Node"
                        link="https://keepup-oclock.netlify.app/"
                    />
                </section>
            </div>
            <img className="projects--motif" src="/images/gggyrate.svg" alt="motif" />
        </div>
    )
}

export default Projects;