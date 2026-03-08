import { ExternalLink } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
    const { t } = useLang();
    const { title, items } = t.projects;

    return (
        <section id="projects" className="projects section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>{title}</h2>
                    <div className="section-line"></div>
                </div>

                <div className="projects-grid">
                    {items.map((project) => (
                        <div key={project.id} className="project-card glass-panel">
                            <div className="project-content">
                                <div className="project-header">
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-title-link">
                                        <h3 className="project-title">{project.title}</h3>
                                    </a>
                                    <div className="project-links">
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="project-tech">
                                    {project.tech.map(tech => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
