import { Link } from 'react-scroll';
import './style.scss';

function ProLinks() {
  return (
    <div className="prolinks">
        <div className="prolinks--container">
            <a className="prolinks--link" href="https://www.linkedin.com/in/mizukiikeda/" target="_blank">
                <img className="prolinks--logo" src="/images/logo_linkedin.png" alt="logo_linkedin" />
            </a>
            <a className="prolinks--link" href="https://github.com/Mizuki-IKEDA" target="_blank">
                <img className="prolinks--logo" src="/images/logo_github.png" alt="logo_github" />
            </a>  
            <Link className="prolinks--link" activeClass="active" duration={400} smooth={true} spy={true} to="contact" >
                <img className="prolinks--logo" src="/images/logo_mail.png" alt="logo_mail" />
            </Link>  
        </div>
    </div>
  )
}

export default ProLinks