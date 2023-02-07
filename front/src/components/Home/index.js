import { Link } from 'react-scroll';
import './style.scss';

function Home() {
    return (
        <div className="home" id="home">
            <div className="home--container">
                <h1 className='home--title'>
                    <span className="home--title-hi">Hi, I'm <span className="home--title-name">Mizuki</span> | </span>
                    <span className="home--title-dev">Web developer</span>
                </h1>
                <p className='home--paragraph'>I'm a fullstack developer specialized in React.<br></br>I love building neat interfaces, web apps and everything in between.</p>
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
            </div>
        </div>
    )
}

export default Home;