import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';
import TypewriterCode from './TypewriterCode';
import { useLang } from '../context/LanguageContext';
import './Hero.css';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const Hero = () => {
    const { t } = useLang();

    return (
        <section id="home" className="hero">
            <div className="hero-bg-lines" aria-hidden="true">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="hero-bg-line" />
                ))}
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants} className="hero-title">
                        <AnimatedText text="Alican" className="hero-title-line" />
                        <br />
                        <AnimatedText text="Dinçbilek" className="hero-title-line hero-title-italic" tag="span" />
                    </motion.h1>

                    <motion.div variants={itemVariants} className="hero-role-strip">
                        <AnimatedText
                            text={t.hero.role}
                            className="hero-role-text"
                            tag="span"
                            stagger={0.03}
                        />
                    </motion.div>

                    <motion.p variants={itemVariants} className="hero-description">
                        {t.hero.description}
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            {t.hero.viewWork} <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            {t.hero.contact}
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div className="hero-card">
                        <div className="hero-card-label">// system.profile</div>
                        <div className="hero-card-content">
                            <TypewriterCode />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scrolling Marquee Strip — pinned to bottom of hero */}
            <div className="marquee-strip" aria-hidden="true">
                <div className="marquee-track">
                    {[...Array(6)].map((_, i) => (
                        <span key={i}>React &nbsp;·&nbsp; Next.js &nbsp;·&nbsp; TypeScript &nbsp;·&nbsp; Node.js &nbsp;·&nbsp; Python &nbsp;·&nbsp; Linux &nbsp;·&nbsp; Docker &nbsp;·&nbsp; Networking &nbsp;·&nbsp; Automation &nbsp;·&nbsp; Git &nbsp;·&nbsp; Cloud &nbsp;·&nbsp; Supabase &nbsp;·&nbsp; Tailwind CSS &nbsp;·&nbsp; UI/UX Design &nbsp;·&nbsp; Framer Motion</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
