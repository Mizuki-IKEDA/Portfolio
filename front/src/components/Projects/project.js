import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

function Project({
    thumbnail,
    title,
    subtitle,
    description,
    technology,
    link,
    done,
    language
}) {
    const [show, setShow] = useState(false);
    return (
        <div className="project">
            <img src={thumbnail} className="project--image" alt={title} />
            <div className="project--container">
                <h3 className="project--title">{title}</h3>
                <p className="project--description">
                    {technology}
                </p>
                <span onClick={() => setShow(true)} className="project--link">{language === 'en' ? 'Learn more' : 'Détails'}</span>
            </div>
            <Modal onClose={() => setShow(false)} show={show} title={title} subtitle={subtitle} description={description} link={link} thumbnail={thumbnail} done={done} language={language} />
        </div>
    )
}

Project.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    language: PropTypes.string.isRequired,
};

export default Project;
