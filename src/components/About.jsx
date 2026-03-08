import { useLang } from '../context/LanguageContext';
import './About.css';

const About = () => {
    const { t } = useLang();
    const a = t.about;

    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>{a.title}</h2>
                    <div className="section-line"></div>
                </div>

                <div className="about-content">
                    <div className="about-text glass-panel">
                        <p>{a.p1}</p>
                        <p>{a.p2}</p>
                        <p>{a.p3}</p>
                    </div>

                    <div className="about-skills">
                        <h3>{a.arsenal}</h3>
                        <div className="skills-grid">
                            {['Linux', 'Docker', 'DevOps', 'Networking', 'Automation', 'Python', 'Node.js', 'Git'].map(skill => (
                                <div key={skill} className="skill-item">
                                    <span className="skill-dot"></span>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
