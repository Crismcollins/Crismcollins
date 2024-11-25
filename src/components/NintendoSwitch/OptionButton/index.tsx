import React, { useEffect, useState } from 'react'
import { ProfileButtonProps } from './types';
import EaseOutButton from '@/components/EaseOutButton';
import useAudioStore from '@/app/stores/audio-store';

const OptionButton = ({
  children,
  text,
  className,
  onPress
}: ProfileButtonProps) => {

  const [isHover, setIsHover] = useState<boolean>(false);

  const { playAudio } = useAudioStore();

  const onHover = () => setIsHover(true);

  const handleClick = () => {
    playAudio('this_one')
    setTimeout(() => onPress(), 100);
  }

  useEffect(() => {
    if (isHover)
      playAudio('klick')
  }, [isHover])

  return (
    <div className={`flex flex-col items-center max-w-[3.75rem] ${className}`}>
      <EaseOutButton
        onClick={handleClick}
        onMouseEnter={onHover}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={`bg-backgroundsecondary inline-block p-4 rounded-full border-2 border-separator2 transition duration-200 ${isHover ? 'brilliance' : ''}`}
        >
          {children}
        </div>
        {text && <span className={`hidden sm:block text-highlighted transition-opacity duration-200 opacity-0 text-center truncate ${isHover ? 'opacity-100' : 'opacity-0'}`}>{text}</span>}
      </EaseOutButton>
    </div>
  )
}

export default OptionButton;
