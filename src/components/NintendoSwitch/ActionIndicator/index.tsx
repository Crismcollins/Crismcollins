import useAudioStore from '@/app/stores/audio-store';
import React, { useEffect } from 'react'

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

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === keyLetter.toLowerCase() || e.key === keyLetter.toUpperCase()) {
      playAudio('this_one')
      onKeyPress?.();
    }
  }

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [])

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