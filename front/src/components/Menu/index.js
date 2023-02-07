import './style.scss';
import { Link } from 'react-scroll';

function Menu() {
    return (
        <nav className="menu">
            <div className="menu-home">
                <Link className="menu-square" activeClass="active" duration={400} smooth={true} spy={true} to="home">M</Link>
            </div>
            <ul className='menu-links'>
                <li>
                    <Link className="menu-link" activeClass="active" duration={400} smooth={true} spy={true} to="home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="menu-link" activeClass="active" duration={400} smooth={true} spy={true} to="about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="menu-link" activeClass="active" duration={400} smooth={true} spy={true} to="projects">
                        Projects
                    </Link>
                </li>
                <li >
                    <Link className="menu-link" activeClass="active" duration={400} smooth={true} spy={true} to="contact">
                        Contact
                    </Link>
                </li>
            </ul>
            <div className='menu-languages'>
                <Link className="menu-language">
                    FR
                </Link>
                <Link className="menu-language">
                    EN
                </Link>
            </div>
        </nav>
    )
}

export default Menu;