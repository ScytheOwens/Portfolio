import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <p className="footer-text">©2024 Tous droits réservés</p>
            <p className="footer-text"><Link to="/mentions-legales" className="footer-text-link">Mentions légales</Link></p>
        </footer>
    )
}

export default Footer;
