import { Link } from 'react-scroll';
import './style.scss';
import PropTypes from 'prop-types';

function Home({language}) {
    return (
        <div className="home" id="home">
            {language === 'en' ? 
                <div className="home--container">
                    <h1 className='home--title'>
                        <span className="home--title-hi">Hi! I'm <span className="home--title-name">Mizuki</span> | </span>
                        <span className="home--title-dev">Web developer</span>
                    </h1>
                    <p className='home--paragraph'>I'm a fullstack developer specialized in React.<br></br>I love building neat interfaces, web apps and everything in between !</p>
                    <div className="home--links" >
                        <Link activeClass="active" duration={400} smooth={true} spy={true} to="contact">
                            <span className="home--discover">Contact me</span>
                        </Link>
                        <Link activeClass="active" duration={400} smooth={true} spy={true} to="contact">
                            <span className="home--cv">Resume</span>
                        </Link>
                    </div>
                    <Link activeClass="active" duration={400} smooth={true} spy={true} to="about">
                        <img className="home--downarrow" src="/images/down_arrow_3.png" alt="down_arrow" />
                    </Link>
                </div> :
                <div className="home--container">
                    <h1 className='home--title'>
                        <span className="home--title-hi">Hello! Je suis <span className="home--title-name">Mizuki</span> | </span>
                        <span className="home--title-dev">Développeur Web</span>
                    </h1>
                    <p className='home--paragraph'>Je suis développeur fullstack spécialisé en React.<br></br>J'aime créer de belles interfaces, des applis web et tout ce qui s'y attache !</p>
                    <div className="home--links" >
                        <Link activeClass="active" duration={400} smooth={true} spy={true} to="contact">
                            <span className="home--discover">Contactez moi</span>
                        </Link>
                        <Link activeClass="active" duration={400} smooth={true} spy={true} to="contact">
                            <span className="home--cv">CV</span>
                        </Link>
                    </div>
                    <Link activeClass="active" duration={400} smooth={true} spy={true} to="about">
                        <img className="home--downarrow" src="/images/down_arrow_3.png" alt="down_arrow" />
                    </Link>
               </div> 
            }
        </div>
    )
}

Home.propTypes = {
    language: PropTypes.string.isRequired,
};

export default Home;