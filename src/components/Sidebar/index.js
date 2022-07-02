import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='navbar'>
        <Link className='logo' to='/'>
            
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#F8F7F9" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#F8F7F9" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#F8F7F9" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href="https://github.com/Diyar-Yasin"
                >
                    <FontAwesomeIcon icon={faGithub} color="#F8F7F9"/>
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href="https://www.linkedin.com/in/diyar-yasin-6a7150188/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#F8F7F9"/>
                </a>
            </li>
        </ul>
    </div>    
)

export default Sidebar;