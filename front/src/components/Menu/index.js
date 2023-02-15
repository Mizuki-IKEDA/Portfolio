import './style.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

function Menu({language}) {
    console.log(language);
    return (
        <nav className="menu">
            <div className="menu-home">
                <Link className="menu-square" activeClass="active" duration={400} smooth={true} spy={true} to="home">M</Link>
            </div>
            <ul className='menu-links'>
                <li>
                    <Link className="menu-link" activeClass="active" duration={400} smooth={true} spy={true} to="home">
                        {language === 'en' ? 'Home' : 'Accueil'}
                    </Link>
                </li>
                <li>
                    <Link className="menu-link" activeClass="active" duration={400} smooth={true} spy={true} to="about">
                        {language === 'en' ? 'About' : 'A propos'}
                    </Link>
                </li>
                <li>
                    <Link className="menu-link" activeClass="active" duration={400} smooth={true} spy={true} to="projects">
                        {language === 'en' ? 'Projects' : 'Projets'}
                    </Link>
                </li>
                <li >
                    <Link className="menu-link" activeClass="active" duration={400} smooth={true} spy={true} to="contact">
                        Contact
                    </Link>
                </li>
            </ul>
            <div className='menu-languages'>
                <Link className={language==='en' ? 'menu-language menu-language--chosen' : 'menu-language'}>
                    EN
                </Link>
                <Link className={language==='fr' ? 'menu-language menu-language--chosen' : 'menu-language'}>
                    FR
                </Link>
            </div>
        </nav>
    )
}

Menu.propTypes = {
    language: PropTypes.string.isRequired,
};


export default Menu;