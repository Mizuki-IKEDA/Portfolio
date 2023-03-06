import { useInView } from 'react-intersection-observer';
import Project from './project';
import './style.scss';
import PropTypes from 'prop-types';

function Projects({ projects, language }) {
    const { ref: projectsRef, inView: projectsIsVisible } = useInView({
        triggerOnce: true,
    });
    return (
        <div className="projects" id="projects">
            <div className="projects--container">
                <h1 ref={projectsRef} className={`${'projects--title'} ${projectsIsVisible ? 'animateFadein' : ''}`}>Projects</h1>
                {projects && (
                    <section ref={projectsRef} className={`${'projects--projects'} ${projectsIsVisible ? 'animateFadeinDelay' : ''}`}>
                        {projects.map((project) => (
                            <Project
                                key={project.id}
                                {...project}
                                language={language}
                            />
                        ))}
                    </section>
                )}
            </div>
            {/* <img className="projects--motif" src="/images/gggyrate.svg" alt="motif" /> */}
        </div>
    )
}

Projects.propTypes = {
    projects: PropTypes.array,
    language: PropTypes.string.isRequired,
};


export default Projects;