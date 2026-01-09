import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface HackerTextProps {
    text: string;
    className?: string;
}

const HackerText = ({ text, className = "" }: HackerTextProps) => {
    const [displayText, setDisplayText] = useState(text);
    const elementRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(elementRef, { amount: 0.5 }); // Trigger when 50% visible
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]{}|;:,.<>?";

    const animate = () => {
        let iteration = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        if (isInView) {
            animate();
        }
    }, [isInView, text]);

    return (
        <span
            ref={elementRef}
            className={`font-mono cursor-default ${className}`}
        >
            {displayText}
        </span>
    );
};

export default HackerText;
