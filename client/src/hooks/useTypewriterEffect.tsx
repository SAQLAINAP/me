import { useState, useEffect } from 'react';

const useTypewriterEffect = (text: string, speed: number = 100, startDelay: number = 500) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let index = 0;
    
    // Delay before starting the typing effect
    const initialTimer = setTimeout(() => {
      timer = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(prev => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, speed);
    }, startDelay);
    
    return () => {
      clearTimeout(initialTimer);
      clearInterval(timer);
    };
  }, [text, speed, startDelay]);
  
  return displayedText;
};

export default useTypewriterEffect;
