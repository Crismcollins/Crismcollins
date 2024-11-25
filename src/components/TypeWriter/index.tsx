import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, className,  speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex += 1;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <p className={className}>
      {displayedText}
    </p>
  );
};

export default Typewriter;
