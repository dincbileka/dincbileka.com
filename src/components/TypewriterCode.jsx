import { useState, useEffect } from 'react';

const TypewriterCode = () => {
    const codeLines = [
        { text: 'const ', type: 'keyword' },
        { text: 'alican', type: 'variable' },
        { text: ' = {', type: 'plain' },
        { text: '\n  role: ', type: 'plain' },
        { text: '"Infrastructure & Automation Engineer"', type: 'string' },
        { text: ',\n  interests: [', type: 'plain' },
        { text: '"DevOps"', type: 'string' },
        { text: ', ', type: 'plain' },
        { text: '"Networking"', type: 'string' },
        { text: ', ', type: 'plain' },
        { text: '"Automation"', type: 'string' },
        { text: '],\n  stack: [', type: 'plain' },
        { text: '"Linux"', type: 'string' },
        { text: ', ', type: 'plain' },
        { text: '"Docker"', type: 'string' },
        { text: ', ', type: 'plain' },
        { text: '"Node.js"', type: 'string' },
        { text: ', ', type: 'plain' },
        { text: '"Python"', type: 'string' },
        { text: '],\n  status: ', type: 'plain' },
        { text: '"building things on the internet"', type: 'string' },
        { text: ',\n};', type: 'plain' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentChar, setCurrentChar] = useState(0);

    useEffect(() => {
        if (currentIndex < codeLines.length) {
            const line = codeLines[currentIndex];
            if (currentChar < line.text.length) {
                const timeout = setTimeout(() => {
                    setCurrentChar(prev => prev + 1);
                }, 35); // Adjust typing speed here
                return () => clearTimeout(timeout);
            } else {
                setCurrentIndex(prev => prev + 1);
                setCurrentChar(0);
            }
        }
    }, [currentIndex, currentChar]);

    return (
        <pre className="code-body">
            <code>
                {codeLines.slice(0, currentIndex + 1).map((line, idx) => {
                    const isCurrent = idx === currentIndex;
                    const content = isCurrent ? line.text.slice(0, currentChar) : line.text;

                    return (
                        <span key={idx} className={line.type !== 'plain' ? line.type : ''}>
                            {content}
                        </span>
                    );
                })}
                <span className="typing-cursor">|</span>
            </code>
        </pre>
    );
};

export default TypewriterCode;
