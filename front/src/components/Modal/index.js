import PropTypes from 'prop-types';
import './style.scss';

function Modal({
    onClose,
    show,
    title,
    subtitle,
    description,
    link,
    thumbnail,
    done
}) {
    if (!show) {
        return null
    }
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal--container" onClick={event => event.stopPropagation()}>
                <img src={thumbnail} className="modal--image" alt={title}/>
                <div className="modal--text">
                    <h3 className="modal--title">{title}</h3>
                    <h4 className="modal--subtitle">{subtitle}</h4>
                    <p className="modal--description">{description}</p>
                </div>
                <div className="modal--footer">
                    {done && 
                        <a className="modal--link-container" href={link}  target="_blank">
                            <div className="modal--link">Go to Website</div>
                        </a>
                    }
                    {!done && <div className="modal--nolink">Link Coming Soon !</div>}
                    <span onClick={onClose} className="modal--close">&times;</span>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
};

export default Modal;