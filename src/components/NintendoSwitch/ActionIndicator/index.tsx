import useAudioStore from '@/app/stores/audio-store';
import React, { useCallback, useEffect } from 'react'

type ActionIndicatorProps = {
  keyLetter: 'X' | 'Y' | 'A' | 'B' | '+' | '-';
  text: string;
  onKeyPress?: () => void;
}

const ActionIndicator = ({
  keyLetter,
  text,
  onKeyPress
}: ActionIndicatorProps) => {

  const { playAudio } = useAudioStore();

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === keyLetter.toLowerCase()) {
        playAudio('this_one');
        onKeyPress?.();
      }
    },
    [keyLetter, playAudio, onKeyPress]
  );

  useEffect(() => {
    window.addEventListener('keyup', handleKeyPress);
    return () => window.removeEventListener('keyup', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className='flex flex-row gap-2 items-center'>
      <div className='bg-text rounded-full'>
        <span className='text-background text-sm m-2'>{ keyLetter }</span>
      </div>
      <p>{ text }</p>
    </div>
  )
}

export default ActionIndicator;
