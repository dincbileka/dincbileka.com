import { useLang } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLang();
    const f = t.footer;
    const year = new Date().getFullYear();

    return (
        <footer id="contact" className="footer section-padding">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="text-gradient">Alican Dinçbilek</span>
                        <p>{f.tagline}</p>
                        <a href={`mailto:${f.email}`} className="footer-email">{f.email}</a>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>{f.navigation}</h4>
                            <a href="#home">{f.home}</a>
                            <a href="#about">{f.about}</a>
                            <a href="#projects">{f.projects}</a>
                        </div>

                        <div className="footer-column">
                            <h4>{f.connect}</h4>
                            <a href="https://github.com/dincbileka" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://x.com/dincbileka" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                            <a href="https://linkedin.com/in/dincbileka" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>{f.copyright(year)}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
