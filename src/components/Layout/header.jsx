import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from 'assets/images/maeva_profil.webp';

function Header() {
    const current = useLocation().pathname;

    return (
        <header>
            <nav className="header-nav">
                <Link to="/Portfolio" className={"header-nav-link" + (current === "/Portfolio" ? " current" : "")}><img src={logo} alt="Avatar Maëva" className="header-nav-link-media"/></Link>
                <Link to="/Portfolio/projets" className={"header-nav-link" + (current === "/Portfolio/projets" ? " current" : "")}>Projets</Link>
                <Link to="/Portfolio/cv" className={"header-nav-link" + (current === "/Portfolio/cv" ? " current" : "")}>CV</Link>
                <Link to="/Portfolio/contact" className={"header-nav-link" + (current === "/Portfolio/contact" ? " current" : "")}>Contact</Link>
            </nav>
        </header>
    )
}

export default Header;
