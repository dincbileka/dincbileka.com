import { motion, useAnimation } from 'framer-motion';
import { useCallback } from 'react';
import './AnimatedText.css';

const AnimatedText = ({ text, className = '', tag: Tag = 'span', stagger = 0.04 }) => {
    const letters = text.split('');
    const controls = useAnimation();

    const handleMouseEnter = useCallback(() => {
        controls.start(i => ({
            y: [0, -12, 4, -6, 0],
            rotate: [0, -8, 4, -2, 0],
            transition: {
                delay: i * stagger,
                duration: 0.6,
                ease: 'easeInOut',
            }
        }));
    }, [controls, stagger]);

    const handleMouseLeave = useCallback(() => {
        controls.start({ y: 0, rotate: 0, transition: { duration: 0.3 } });
    }, [controls]);

    return (
        <Tag
            className={`animated-text ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {letters.map((letter, i) => (
                <motion.span
                    key={i}
                    custom={i}
                    animate={controls}
                    className={`animated-letter ${letter === ' ' ? 'animated-letter--space' : ''}`}
                    style={{ display: 'inline-block' }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </Tag>
    );
};

export default AnimatedText;
