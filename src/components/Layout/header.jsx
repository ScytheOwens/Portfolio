import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/images/maeva_profil.webp';

function Header() {
    const current = useLocation().pathname;

    return (
        <header>
            <nav className="header-nav">
                <Link to="/" className={"header-nav-link" + (current == "/" ? " current" : "")}><img src={logo} alt="Avatar Maëva" className="header-nav-link-media"/></Link>
                <Link to="/projets" className={"header-nav-link" + (current == "/projets" ? " current" : "")}>Projets</Link>
                <Link to="/cv" className={"header-nav-link" + (current == "/cv" ? " current" : "")}>CV</Link>
                <Link to="/contact" className={"header-nav-link" + (current == "/contact" ? " current" : "")}>Contact</Link>
            </nav>
        </header>
    )
}

export default Header;
