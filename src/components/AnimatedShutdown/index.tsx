import React, { useEffect, useState } from 'react';

interface AnimatedShutdownProps {
  isVisible: boolean;
  onAnimationEnd: () => void;
  children: React.ReactNode;
}

const DURATION_ANIMATION = 500;

const AnimatedShutdown: React.FC<AnimatedShutdownProps> = ({
  isVisible,
  onAnimationEnd,
  children,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        onAnimationEnd();
      }, DURATION_ANIMATION);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onAnimationEnd]);

  return (
    <div className={`${!isVisible && isAnimating ? 'animate-shutdown' : ''}`}>
      {isVisible && children}
    </div>
  );
};

export default AnimatedShutdown;
