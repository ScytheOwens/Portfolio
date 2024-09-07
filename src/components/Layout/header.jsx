import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/images/maeva_profil.webp';

function Header() {
    const current = useLocation().pathname;

    return (
        <header>
            <Link to="/" className={current == "/" ? "current" : ""}><img src={logo} alt="Avatar Maëva" className="header-media"/></Link>
            <nav className="header-nav">
                <Link to="/projets" className={current == "/projets" ? "current" : ""}>Projets</Link>
                <Link to="/cv" className={current == "/cv" ? "current" : ""}>CV</Link>
                <Link to="/contact" className={current == "/contact" ? "current" : ""}>Contact</Link>
            </nav>
        </header>
    )
}

export default Header;
